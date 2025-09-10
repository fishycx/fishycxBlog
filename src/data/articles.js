// 博客文章数据
export const articles = [
  {
    id: 1,
    title: "欢迎来到我的博客",
    excerpt: "这是我的第一篇博客文章，欢迎来到fishycx的个人博客！在这里我会分享技术、生活和思考。",
    content: `
      <h2>欢迎来到我的博客</h2>
      <p>你好！欢迎来到我的个人博客。我是fishycx，一个热爱技术的开发者。</p>
      
      <h3>关于这个博客</h3>
      <p>这个博客是我使用React开发的，部署在GitHub Pages上。我会在这里分享：</p>
      <ul>
        <li>技术文章和教程</li>
        <li>编程经验和心得</li>
        <li>生活感悟和思考</li>
        <li>项目展示和开源贡献</li>
      </ul>
      
      <h3>技术栈</h3>
      <p>这个博客使用了以下技术：</p>
      <ul>
        <li><strong>React 18</strong> - 现代化的前端框架</li>
        <li><strong>React Router</strong> - 单页应用路由</li>
        <li><strong>CSS3</strong> - 响应式设计和动画</li>
        <li><strong>GitHub Pages</strong> - 静态网站托管</li>
      </ul>
      
      <h3>未来计划</h3>
      <p>我计划在博客中添加更多功能：</p>
      <ul>
        <li>文章分类和标签系统</li>
        <li>搜索功能</li>
        <li>评论系统</li>
        <li>RSS订阅</li>
        <li>暗色主题</li>
      </ul>
      
      <p>感谢你的访问，希望你能在这里找到有价值的内容！</p>
    `,
    author: "FishyCX",
    publishDate: "2024-01-15",
    readTime: "3分钟",
    tags: ["欢迎", "介绍", "技术"],
    featured: true
  },
  {
    id: 2,
    title: "React Hooks 最佳实践",
    excerpt: "深入探讨React Hooks的使用技巧和最佳实践，帮助你写出更优雅的React代码。",
    content: `
      <h2>React Hooks 最佳实践</h2>
      <p>React Hooks是React 16.8引入的新特性，它让我们可以在函数组件中使用状态和其他React特性。</p>
      
      <h3>useState Hook</h3>
      <p>useState是最常用的Hook，用于在函数组件中添加状态：</p>
      <pre><code>const [count, setCount] = useState(0);</code></pre>
      
      <h3>useEffect Hook</h3>
      <p>useEffect用于处理副作用，相当于类组件中的componentDidMount、componentDidUpdate和componentWillUnmount：</p>
      <pre><code>useEffect(() => {
  // 副作用逻辑
  return () => {
    // 清理逻辑
  };
}, [dependencies]);</code></pre>
      
      <h3>自定义Hooks</h3>
      <p>自定义Hooks让我们可以复用状态逻辑：</p>
      <pre><code>function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  
  return { count, increment, decrement };
}</code></pre>
      
      <h3>最佳实践</h3>
      <ul>
        <li>只在React函数的顶层调用Hooks</li>
        <li>不要在循环、条件或嵌套函数中调用Hooks</li>
        <li>使用useCallback和useMemo优化性能</li>
        <li>合理使用依赖数组</li>
      </ul>
    `,
    author: "FishyCX",
    publishDate: "2024-01-10",
    readTime: "8分钟",
    tags: ["React", "Hooks", "JavaScript", "前端"],
    featured: true
  },
  {
    id: 3,
    title: "CSS Grid 布局完全指南",
    excerpt: "掌握CSS Grid布局，创建复杂的响应式网页布局。从基础概念到高级技巧，一篇文章搞定。",
    content: `
      <h2>CSS Grid 布局完全指南</h2>
      <p>CSS Grid是一个二维布局系统，可以同时处理行和列，非常适合创建复杂的网页布局。</p>
      
      <h3>基础概念</h3>
      <p>Grid布局由以下核心概念组成：</p>
      <ul>
        <li><strong>Grid Container</strong> - 网格容器</li>
        <li><strong>Grid Item</strong> - 网格项目</li>
        <li><strong>Grid Line</strong> - 网格线</li>
        <li><strong>Grid Track</strong> - 网格轨道</li>
        <li><strong>Grid Cell</strong> - 网格单元格</li>
      </ul>
      
      <h3>创建Grid容器</h3>
      <pre><code>.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 20px;
}</code></pre>
      
      <h3>Grid项目定位</h3>
      <pre><code>.item {
  grid-column: 1 / 3;
  grid-row: 2 / 4;
}</code></pre>
      
      <h3>响应式Grid</h3>
      <pre><code>.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}</code></pre>
      
      <h3>实际应用</h3>
      <p>Grid布局特别适合：</p>
      <ul>
        <li>复杂的页面布局</li>
        <li>卡片网格</li>
        <li>仪表板布局</li>
        <li>图片画廊</li>
      </ul>
    `,
    author: "FishyCX",
    publishDate: "2024-01-05",
    readTime: "12分钟",
    tags: ["CSS", "Grid", "布局", "响应式"],
    featured: false
  },
  {
    id: 4,
    title: "JavaScript 异步编程详解",
    excerpt: "深入理解JavaScript异步编程，从回调函数到async/await，掌握现代异步编程模式。",
    content: `
      <h2>JavaScript 异步编程详解</h2>
      <p>JavaScript是单线程语言，但通过异步编程可以实现非阻塞操作，提高应用性能。</p>
      
      <h3>回调函数</h3>
      <p>最早的异步编程方式：</p>
      <pre><code>setTimeout(() => {
  console.log('1秒后执行');
}, 1000);</code></pre>
      
      <h3>Promise</h3>
      <p>Promise解决了回调地狱问题：</p>
      <pre><code>fetch('/api/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));</code></pre>
      
      <h3>async/await</h3>
      <p>async/await让异步代码看起来像同步代码：</p>
      <pre><code>async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}</code></pre>
      
      <h3>并发控制</h3>
      <p>使用Promise.all处理多个异步操作：</p>
      <pre><code>const [user, posts, comments] = await Promise.all([
  fetchUser(userId),
  fetchPosts(userId),
  fetchComments(userId)
]);</code></pre>
      
      <h3>最佳实践</h3>
      <ul>
        <li>优先使用async/await</li>
        <li>合理使用Promise.all和Promise.allSettled</li>
        <li>避免回调地狱</li>
        <li>正确处理错误</li>
      </ul>
    `,
    author: "FishyCX",
    publishDate: "2024-01-01",
    readTime: "10分钟",
    tags: ["JavaScript", "异步", "Promise", "async/await"],
    featured: false
  }
];

// 获取所有文章
export const getAllArticles = () => {
  return articles.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
};

// 根据ID获取文章
export const getArticleById = (id) => {
  return articles.find(article => article.id === parseInt(id));
};

// 获取推荐文章
export const getFeaturedArticles = () => {
  return articles.filter(article => article.featured);
};

// 根据标签获取文章
export const getArticlesByTag = (tag) => {
  return articles.filter(article => article.tags.includes(tag));
};
