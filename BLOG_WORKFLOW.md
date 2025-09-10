# 📝 博客编写和发布工作流

这个文档将指导你如何使用便捷的博客编写、编辑和发布系统。

## 🚀 快速开始

### 1. 创建新文章

```bash
npm run new
```

这个命令会：
- 引导你输入文章信息（标题、摘要、标签等）
- 自动生成文章ID和文件名
- 创建Markdown模板文件
- 将文件保存到 `content/articles/` 目录

### 2. 编写文章内容

编辑生成的Markdown文件，例如：
```bash
# 编辑文章文件
code content/articles/your-article-name.md
```

### 3. 发布文章

```bash
npm run publish
```

这个命令会：
- 解析所有Markdown文件
- 转换为HTML格式
- 更新 `src/data/articles.js` 文件
- 自动排序（最新文章在前）

### 4. 一键部署

```bash
npm run deploy-blog
```

这个命令会：
- 发布文章到数据文件
- 提交所有更改到Git
- 推送到GitHub
- 触发自动部署

## 📁 文件结构

```
fishycxBlog/
├── content/
│   └── articles/          # Markdown文章目录
│       ├── example-article.md
│       └── your-article.md
├── scripts/
│   ├── create-article.js  # 创建文章脚本
│   └── publish-articles.js # 发布文章脚本
└── src/
    └── data/
        └── articles.js    # 自动生成的文章数据
```

## 📝 Markdown文章格式

每篇文章都应该包含以下前置元数据（Front Matter）：

```markdown
---
id: 1001                    # 文章唯一ID
title: "文章标题"           # 文章标题
excerpt: "文章摘要"         # 文章摘要
author: "fishycx"          # 作者名称
publishDate: "2024-01-20"  # 发布日期
readTime: "5分钟"          # 预计阅读时间
tags: ["标签1", "标签2"]    # 文章标签
featured: true             # 是否推荐
---

# 文章标题

文章内容...

## 二级标题

更多内容...

### 三级标题

详细内容...

## 总结

文章总结...
```

## 🎨 支持的Markdown语法

- **标题**：`# ## ###`
- **粗体**：`**粗体文字**`
- **斜体**：`*斜体文字*`
- **代码块**：` ```代码``` `
- **行内代码**：`` `代码` ``
- **链接**：`[链接文字](URL)`
- **列表**：`* 列表项`
- **段落**：空行分隔

## 🔧 高级用法

### 批量处理文章

```bash
# 只发布文章，不部署
npm run publish

# 手动提交和部署
git add .
git commit -m "发布新文章：文章标题"
git push origin main
```

### 编辑现有文章

1. 直接编辑 `content/articles/` 目录下的Markdown文件
2. 运行 `npm run publish` 更新数据
3. 运行 `npm run deploy-blog` 部署

### 删除文章

1. 删除 `content/articles/` 目录下的Markdown文件
2. 运行 `npm run publish` 更新数据
3. 运行 `npm run deploy-blog` 部署

## 💡 最佳实践

### 1. 文章命名
- 使用有意义的文件名
- 避免特殊字符
- 使用连字符分隔单词

### 2. 内容组织
- 保持文章结构清晰
- 使用适当的标题层级
- 添加代码示例和图片

### 3. 元数据管理
- 使用描述性的摘要
- 添加相关的标签
- 设置合适的阅读时间

### 4. 版本控制
- 每次发布前检查文章内容
- 使用有意义的提交信息
- 定期备份重要文章

## 🚨 注意事项

1. **不要直接编辑** `src/data/articles.js` 文件，它会被自动生成覆盖
2. **文章ID必须唯一**，建议使用时间戳或递增数字
3. **Markdown文件编码**必须是UTF-8
4. **图片资源**需要放在 `public/` 目录下

## 🆘 故障排除

### 文章没有显示
- 检查Markdown文件格式是否正确
- 确认运行了 `npm run publish`
- 检查浏览器控制台是否有错误

### 发布失败
- 检查Git状态：`git status`
- 确认所有文件都已添加：`git add .`
- 检查网络连接和GitHub权限

### 本地预览
```bash
npm start
```
访问 http://localhost:3000/fishycxBlog 查看效果

## 📞 获取帮助

如果遇到问题，可以：
1. 检查本文档的故障排除部分
2. 查看GitHub Issues
3. 联系维护者

---

*Happy Writing! 🎉*
