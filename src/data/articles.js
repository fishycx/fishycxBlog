// 博客文章数据 - 自动生成，请勿手动编辑
export const articles = [
  {
    "id": 1001,
    "title": "如何编写一篇优秀的博客文章",
    "excerpt": "分享一些编写博客文章的技巧和最佳实践，帮助你创作出更有价值的内容。",
    "author": "fishycx",
    "publishDate": "2024-01-20",
    "readTime": "8分钟",
    "tags": [
      "写作",
      "博客",
      "技巧"
    ],
    "featured": true,
    "content": "<h1>如何编写一篇优秀的博客文章</h1><p>写作是一门艺术，也是一门技术。在这篇文章中，我将分享一些编写博客文章的技巧和最佳实践。</p><h2>1. 确定文章主题</h2><p>在开始写作之前，你需要：</p><ul><li><strong>明确目标读者</strong>：你的文章是为谁写的？</li><li><strong>确定核心价值</strong>：读者能从这篇文章中获得什么？</li><li><strong>选择合适的话题</strong>：确保话题既有价值又有趣</li></ul><h2>2. 构建文章结构</h2><p>一个好的文章结构应该包括：</p><h3>开头（Hook）</h3><ul><li>吸引读者的注意力</li><li>明确文章要解决的问题</li><li>预告文章的价值</li></ul><h3>主体内容</h3><ul><li>逻辑清晰，层次分明</li><li>使用小标题分段</li><li>提供具体的例子和案例</li></ul><h3>结尾</h3><ul><li>总结要点</li><li>提供行动建议</li><li>鼓励读者互动</li></ul><h2>3. 写作技巧</h2><h3>使用简洁的语言</h3><ul><li>避免冗长的句子</li><li>使用主动语态</li><li>删除不必要的词汇</li></ul><h3>增加可读性</h3><ul><li>使用列表和要点</li><li>添加代码示例（如果是技术文章）</li><li>使用图片和图表</li></ul><h3>保持一致性</h3><ul><li>统一的写作风格</li><li>一致的格式规范</li><li>定期发布内容</li></ul><h2>4. 技术文章的特别注意事项</h2><p>如果你写的是技术文章，还需要注意：</p><pre><code>// 提供可运行的代码示例\nfunction greetUser(name) {\n  return `Hello, ${name}! Welcome to my blog.`;\n}\n\nconsole.log(greetUser('fishycx'));</code></pre><ul><li><strong>代码注释</strong>：解释复杂的逻辑</li><li><strong>版本信息</strong>：标明使用的技术版本</li><li><strong>错误处理</strong>：展示常见问题和解决方案</li></ul><h2>5. 发布前的检查清单</h2><p>在发布文章之前，请检查：</p><ul><li>标题是否吸引人</li><li>摘要是否准确概括内容</li><li>文章结构是否清晰</li><li>语法和拼写是否正确</li><li>链接是否有效</li><li>图片是否正常显示</li></ul><h2>总结</h2><p>写作是一个持续改进的过程。通过不断练习和反思，你的写作技巧会逐渐提升。记住，好的文章不仅要传递信息，更要为读者创造价值。</p><h2>下一步行动</h2><ol><li>选择一个你熟悉的话题</li><li>按照本文的结构开始写作</li><li>完成后请朋友或同事审阅</li><li>根据反馈进行修改</li><li>发布并分享给更多人</li></ol><p><em>本文由 fishycx 创作，转载请注明出处。如果你觉得这篇文章对你有帮助，欢迎分享给更多人！</em></p>"
  }
];

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
