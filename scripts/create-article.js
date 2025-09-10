#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function createArticle() {
  console.log('📝 创建新博客文章\n');
  
  try {
    // 获取文章信息
    const title = await question('文章标题: ');
    const excerpt = await question('文章摘要: ');
    const tags = await question('标签 (用逗号分隔): ');
    const featured = await question('是否推荐? (y/n): ');
    
    // 生成文章ID和文件名
    const id = Date.now();
    const fileName = title
      .toLowerCase()
      .replace(/[^a-z0-9\u4e00-\u9fa5]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    
    const markdownContent = `---
id: ${id}
title: "${title}"
excerpt: "${excerpt}"
author: "fishycx"
publishDate: "${new Date().toISOString().split('T')[0]}"
readTime: "5分钟"
tags: [${tags.split(',').map(tag => `"${tag.trim()}"`).join(', ')}]
featured: ${featured.toLowerCase() === 'y'}
---

# ${title}

${excerpt}

## 开始写作

在这里开始你的文章内容...

## 总结

文章总结...

---

*本文由 fishycx 创作，转载请注明出处。*
`;

    // 创建markdown文件
    const articlesDir = path.join(__dirname, '..', 'content', 'articles');
    if (!fs.existsSync(articlesDir)) {
      fs.mkdirSync(articlesDir, { recursive: true });
    }
    
    const filePath = path.join(articlesDir, `${fileName}.md`);
    fs.writeFileSync(filePath, markdownContent, 'utf8');
    
    console.log(`\n✅ 文章创建成功！`);
    console.log(`📁 文件路径: ${filePath}`);
    console.log(`🔗 文章ID: ${id}`);
    console.log(`\n📝 现在你可以编辑 ${fileName}.md 文件来编写文章内容`);
    console.log(`🚀 编辑完成后运行: npm run publish`);
    
  } catch (error) {
    console.error('❌ 创建文章失败:', error.message);
  } finally {
    rl.close();
  }
}

createArticle();
