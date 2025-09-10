#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 简单的Markdown解析器
function parseMarkdown(markdown) {
  const lines = markdown.split('\n');
  const frontmatter = {};
  let content = '';
  let inFrontmatter = false;
  let frontmatterEnded = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line === '---' && !inFrontmatter) {
      inFrontmatter = true;
      continue;
    }
    
    if (line === '---' && inFrontmatter) {
      frontmatterEnded = true;
      continue;
    }
    
    if (inFrontmatter && !frontmatterEnded) {
      const [key, ...valueParts] = line.split(':');
      if (key && valueParts.length > 0) {
        let value = valueParts.join(':').trim();
        
        // 处理数组
        if (value.startsWith('[') && value.endsWith(']')) {
          value = value.slice(1, -1).split(',').map(v => v.trim().replace(/"/g, ''));
        }
        // 处理布尔值
        else if (value === 'true') {
          value = true;
        } else if (value === 'false') {
          value = false;
        }
        // 处理数字
        else if (!isNaN(value) && !isNaN(parseFloat(value))) {
          value = parseFloat(value);
        }
        // 处理字符串（移除引号）
        else if (value.startsWith('"') && value.endsWith('"')) {
          value = value.slice(1, -1);
        }
        
        frontmatter[key.trim()] = value;
      }
      continue;
    }
    
    if (frontmatterEnded) {
      content += line + '\n';
    }
  }
  
  return { frontmatter, content: content.trim() };
}

// 将Markdown转换为HTML（简单版本）
function markdownToHtml(markdown) {
  return markdown
    // 标题
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    // 粗体
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // 斜体
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // 代码块
    .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
    // 行内代码
    .replace(/`(.*?)`/g, '<code>$1</code>')
    // 链接
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    // 列表
    .replace(/^\* (.*$)/gim, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
    // 段落
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[h|u|l|p])/gm, '<p>')
    .replace(/(?<!>)$/gm, '</p>')
    // 清理多余的标签
    .replace(/<p><\/p>/g, '')
    .replace(/<p>(<[h|u|l])/g, '$1')
    .replace(/(<\/[h|u|l]>)<\/p>/g, '$1');
}

function publishArticles() {
  console.log('🚀 发布博客文章...\n');
  
  try {
    const articlesDir = path.join(__dirname, '..', 'content', 'articles');
    const outputFile = path.join(__dirname, '..', 'src', 'data', 'articles.js');
    
    if (!fs.existsSync(articlesDir)) {
      console.log('📁 创建文章目录...');
      fs.mkdirSync(articlesDir, { recursive: true });
    }
    
    const markdownFiles = fs.readdirSync(articlesDir)
      .filter(file => file.endsWith('.md'))
      .sort((a, b) => {
        const statA = fs.statSync(path.join(articlesDir, a));
        const statB = fs.statSync(path.join(articlesDir, b));
        return statB.mtime - statA.mtime; // 按修改时间倒序
      });
    
    if (markdownFiles.length === 0) {
      console.log('📝 没有找到Markdown文章文件');
      return;
    }
    
    const articles = [];
    
    for (const file of markdownFiles) {
      const filePath = path.join(articlesDir, file);
      const markdown = fs.readFileSync(filePath, 'utf8');
      const { frontmatter, content } = parseMarkdown(markdown);
      const htmlContent = markdownToHtml(content);
      
      articles.push({
        ...frontmatter,
        content: htmlContent
      });
      
      console.log(`✅ 处理文章: ${frontmatter.title}`);
    }
    
    // 生成articles.js文件
    const articlesJs = `// 博客文章数据 - 自动生成，请勿手动编辑
export const articles = ${JSON.stringify(articles, null, 2)};

// 获取所有文章
export const getAllArticles = () => {
  return articles.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
};

// 获取推荐文章
export const getFeaturedArticles = () => {
  return articles.filter(article => article.featured);
};

// 根据ID获取文章
export const getArticleById = (id) => {
  return articles.find(article => article.id === parseInt(id));
};

// 根据标签获取文章
export const getArticlesByTag = (tag) => {
  return articles.filter(article => 
    article.tags && article.tags.includes(tag)
  );
};
`;

    fs.writeFileSync(outputFile, articlesJs, 'utf8');
    
    console.log(`\n🎉 发布完成！`);
    console.log(`📊 共处理 ${articles.length} 篇文章`);
    console.log(`📁 输出文件: ${outputFile}`);
    console.log(`\n💡 现在你可以运行以下命令来部署:`);
    console.log(`   git add .`);
    console.log(`   git commit -m "发布新文章"`);
    console.log(`   git push origin main`);
    
  } catch (error) {
    console.error('❌ 发布失败:', error.message);
  }
}

publishArticles();
