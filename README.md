# FishyCX Blog

一个现代化的React博客系统，部署在GitHub Pages上。

## 功能特性

- 🎨 现代化的响应式设计
- 📱 移动端友好
- 🚀 基于React 18构建
- 📝 Markdown风格的文章内容
- 🏷️ 文章标签系统
- 🔍 文章搜索功能
- 📊 文章统计信息
- 🌙 支持暗色主题（计划中）
- 💬 评论系统（计划中）

## 技术栈

- **前端框架**: React 18
- **路由**: React Router v6
- **样式**: CSS3 + 响应式设计
- **部署**: GitHub Pages
- **构建工具**: Create React App

## 本地开发

### 环境要求

- Node.js >= 16.0.0
- npm >= 8.0.0

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm start
```

应用将在 [http://localhost:3000](http://localhost:3000) 启动。

### 构建生产版本

```bash
npm run build
```

构建文件将生成在 `build` 目录中。

## 部署到GitHub Pages

### 1. 创建GitHub仓库

1. 在GitHub上创建一个新的仓库
2. 将代码推送到仓库

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main
```

### 2. 配置GitHub Pages

1. 进入仓库的 Settings 页面
2. 滚动到 "Pages" 部分
3. 在 "Source" 下选择 "GitHub Actions"
4. 创建一个新的 workflow 文件

### 3. 创建GitHub Actions工作流

在 `.github/workflows/deploy.yml` 文件中添加以下内容：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./build
```

### 4. 部署

```bash
npm run deploy
```

## 自定义域名配置

### 1. 修改CNAME文件

编辑 `public/CNAME` 文件，将 `your-domain.com` 替换为你的实际域名：

```
your-domain.com
```

### 2. 配置DNS

在你的域名提供商处配置DNS记录：

- **类型**: CNAME
- **名称**: www (或 @)
- **值**: your-username.github.io

### 3. 启用HTTPS

在GitHub Pages设置中启用"Enforce HTTPS"选项。

## 项目结构

```
src/
├── components/          # 可复用组件
│   ├── Header.js       # 头部导航
│   ├── Footer.js       # 页脚
│   └── ArticleCard.js  # 文章卡片
├── pages/              # 页面组件
│   ├── Home.js         # 首页
│   ├── Article.js      # 文章详情页
│   └── About.js        # 关于我页面
├── data/               # 数据文件
│   └── articles.js     # 文章数据
├── App.js              # 主应用组件
├── App.css             # 应用样式
├── index.js            # 入口文件
└── index.css           # 全局样式
```

## 添加新文章

1. 编辑 `src/data/articles.js` 文件
2. 在 `articles` 数组中添加新的文章对象
3. 文章对象应包含以下字段：
   - `id`: 唯一标识符
   - `title`: 文章标题
   - `excerpt`: 文章摘要
   - `content`: 文章内容（HTML格式）
   - `author`: 作者
   - `publishDate`: 发布日期
   - `readTime`: 阅读时间
   - `tags`: 标签数组
   - `featured`: 是否为推荐文章

## 自定义样式

项目使用CSS模块化设计，主要样式文件：

- `src/index.css`: 全局样式
- `src/App.css`: 应用级样式
- `src/components/*.css`: 组件样式
- `src/pages/*.css`: 页面样式

## 浏览器支持

- Chrome >= 60
- Firefox >= 60
- Safari >= 12
- Edge >= 79

## 贡献

欢迎提交Issue和Pull Request！

## 许可证

MIT License

## 联系方式

- GitHub: [@fishycx](https://github.com/fishycx)
- Email: your-email@example.com

---

⭐ 如果这个项目对你有帮助，请给它一个星标！
