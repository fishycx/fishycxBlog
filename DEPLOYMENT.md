# 部署指南

本指南将帮助你将FishyCX Blog部署到GitHub Pages并绑定自定义域名。

## 步骤1: 创建GitHub仓库

1. 登录GitHub，点击右上角的"+"号，选择"New repository"
2. 仓库名称建议使用 `your-username.github.io` 格式（例如：`fishycx.github.io`）
3. 设置为公开仓库
4. 不要初始化README、.gitignore或license（我们已经创建了）

## 步骤2: 推送代码到GitHub

```bash
# 初始化Git仓库
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit: FishyCX Blog"

# 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/your-username/your-repo-name.git

# 推送到GitHub
git push -u origin main
```

## 步骤3: 配置GitHub Pages

### 方法1: 使用GitHub Actions（推荐）

1. 进入你的GitHub仓库
2. 点击"Settings"标签
3. 在左侧菜单中找到"Pages"
4. 在"Source"下选择"GitHub Actions"
5. 系统会自动使用我们创建的`.github/workflows/deploy.yml`文件

### 方法2: 使用gh-pages分支

如果你更喜欢使用gh-pages分支：

1. 在"Settings" > "Pages"中选择"Deploy from a branch"
2. 选择"gh-pages"分支和"/ (root)"文件夹
3. 运行部署命令：

```bash
npm run deploy
```

## 步骤4: 等待部署完成

- 部署通常需要几分钟时间
- 你可以在"Actions"标签页查看部署进度
- 部署完成后，你的博客将在 `https://your-username.github.io/your-repo-name` 访问

## 步骤5: 绑定自定义域名

### 5.1 修改CNAME文件

编辑 `public/CNAME` 文件，将 `your-domain.com` 替换为你的实际域名：

```
your-domain.com
```

### 5.2 配置DNS记录

在你的域名提供商（如阿里云、腾讯云、GoDaddy等）处配置DNS记录：

#### 选项1: 使用CNAME记录（推荐）
- **记录类型**: CNAME
- **主机记录**: www
- **记录值**: your-username.github.io
- **TTL**: 600（或默认值）

#### 选项2: 使用A记录
- **记录类型**: A
- **主机记录**: @
- **记录值**: 以下IP地址之一：
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153

### 5.3 提交更改

```bash
git add public/CNAME
git commit -m "Add custom domain"
git push origin main
```

### 5.4 启用HTTPS

1. 等待DNS记录生效（通常需要几分钟到几小时）
2. 在GitHub仓库的"Settings" > "Pages"中
3. 勾选"Enforce HTTPS"选项

## 步骤6: 验证部署

1. 访问你的自定义域名
2. 检查所有页面是否正常加载
3. 测试响应式设计（在不同设备上查看）
4. 验证所有链接和功能

## 常见问题

### Q: 部署后页面显示404
A: 检查以下几点：
- 确保使用了正确的仓库名称
- 检查GitHub Pages设置中的源分支
- 等待几分钟让部署完成

### Q: 自定义域名无法访问
A: 检查以下几点：
- DNS记录是否正确配置
- 是否等待了足够的时间让DNS生效
- CNAME文件是否包含正确的域名

### Q: HTTPS证书问题
A: 确保：
- 在GitHub Pages设置中启用了"Enforce HTTPS"
- DNS记录已正确配置
- 等待证书自动生成（可能需要几分钟）

### Q: 如何更新博客内容
A: 更新内容后：
```bash
git add .
git commit -m "Update blog content"
git push origin main
```

## 性能优化建议

1. **图片优化**: 使用WebP格式，压缩图片大小
2. **代码分割**: 考虑使用React.lazy()进行代码分割
3. **缓存策略**: 利用GitHub Pages的CDN缓存
4. **SEO优化**: 添加meta标签和结构化数据

## 监控和维护

1. **定期备份**: 定期备份你的代码和内容
2. **监控访问**: 使用Google Analytics等工具监控访问情况
3. **更新依赖**: 定期更新npm依赖包
4. **安全检查**: 定期检查安全漏洞

## 支持

如果遇到问题，可以：
1. 查看GitHub Pages文档
2. 检查GitHub Actions日志
3. 在项目Issues中提问
4. 联系技术支持

---

🎉 恭喜！你的博客现在已经成功部署并可以使用自定义域名访问了！
