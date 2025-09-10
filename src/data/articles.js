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
    "content": "<h1>如何编写一篇优秀的博客文章</h1></p><p>写作是一门艺术，也是一门技术。在这篇文章中，我将分享一些编写博客文章的技巧和最佳实践。</p><h2>1. 确定文章主题</h2></p><p>在开始写作之前，你需要：</p><p>- <strong>明确目标读者</strong>：你的文章是为谁写的？</p>\n<p>- <strong>确定核心价值</strong>：读者能从这篇文章中获得什么？</p>\n<p>- <strong>选择合适的话题</strong>：确保话题既有价值又有趣</p><h2>2. 构建文章结构</h2></p><p>一个好的文章结构应该包括：</p><h3>开头（Hook）</h3>\n<p>- 吸引读者的注意力</p>\n<p>- 明确文章要解决的问题</p>\n<p>- 预告文章的价值</p><h3>主体内容</h3>\n<p>- 逻辑清晰，层次分明</p>\n<p>- 使用小标题分段</p>\n<p>- 提供具体的例子和案例</p><h3>结尾</h3>\n<p>- 总结要点</p>\n<p>- 提供行动建议</p>\n<p>- 鼓励读者互动</p><h2>3. 写作技巧</h2></p><h3>使用简洁的语言</h3>\n<p>- 避免冗长的句子</p>\n<p>- 使用主动语态</p>\n<p>- 删除不必要的词汇</p><h3>增加可读性</h3>\n<p>- 使用列表和要点</p>\n<p>- 添加代码示例（如果是技术文章）</p>\n<p>- 使用图片和图表</p><h3>保持一致性</h3>\n<p>- 统一的写作风格</p>\n<p>- 一致的格式规范</p>\n<p>- 定期发布内容</p><h2>4. 技术文章的特别注意事项</h2></p><p>如果你写的是技术文章，还需要注意：</p><p><pre><code>javascript</p>\n<p>// 提供可运行的代码示例</p>\n<p>function greetUser(name) {</p>\n<p>  return <code>Hello, ${name}! Welcome to my blog.</code>;</p>\n<p>}</p><p>console.log(greetUser('fishycx'));</p>\n<p></code></pre></p><p>- <strong>代码注释</strong>：解释复杂的逻辑</p>\n<p>- <strong>版本信息</strong>：标明使用的技术版本</p>\n<p>- <strong>错误处理</strong>：展示常见问题和解决方案</p><h2>5. 发布前的检查清单</h2></p><p>在发布文章之前，请检查：</p><p>- [ ] 标题是否吸引人</p>\n<p>- [ ] 摘要是否准确概括内容</p>\n<p>- [ ] 文章结构是否清晰</p>\n<p>- [ ] 语法和拼写是否正确</p>\n<p>- [ ] 链接是否有效</p>\n<p>- [ ] 图片是否正常显示</p><h2>总结</h2></p><p>写作是一个持续改进的过程。通过不断练习和反思，你的写作技巧会逐渐提升。记住，好的文章不仅要传递信息，更要为读者创造价值。</p><h2>下一步行动</h2></p><p>1. 选择一个你熟悉的话题</p>\n<p>2. 按照本文的结构开始写作</p>\n<p>3. 完成后请朋友或同事审阅</p>\n<p>4. 根据反馈进行修改</p>\n<p>5. 发布并分享给更多人</p><p>\n<p><em>本文由 fishycx 创作，转载请注明出处。如果你觉得这篇文章对你有帮助，欢迎分享给更多人！</em>"
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
