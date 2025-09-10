import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ArticleList = ({ articles, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTag, setFilterTag] = useState('');
  const [sortBy, setSortBy] = useState('date');

  // 获取所有标签
  const allTags = [...new Set(articles.flatMap(article => article.tags || []))];

  // 过滤和排序文章
  const filteredArticles = articles
    .filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTag = !filterTag || (article.tags && article.tags.includes(filterTag));
      return matchesSearch && matchesTag;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'date':
          return new Date(b.publishDate) - new Date(a.publishDate);
        case 'featured':
          return b.featured - a.featured;
        default:
          return 0;
      }
    });

  const handleDelete = (articleId, articleTitle) => {
    if (window.confirm(`确定要删除文章"${articleTitle}"吗？此操作不可撤销。`)) {
      onDelete(articleId);
    }
  };

  return (
    <div className="article-list-page">
      <div className="page-header">
        <h1>文章管理</h1>
        <Link to="/admin/articles/new" className="btn btn-primary">
          ✍️ 写新文章
        </Link>
      </div>

      {/* 搜索和筛选 */}
      <div className="filters-section">
        <div className="filters-row">
          <div className="search-box">
            <input
              type="text"
              placeholder="搜索文章标题或内容..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>
          
          <select
            value={filterTag}
            onChange={(e) => setFilterTag(e.target.value)}
            className="filter-select"
          >
            <option value="">所有标签</option>
            {allTags.map(tag => (
              <option key={tag} value={tag}>{tag}</option>
            ))}
          </select>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="filter-select"
          >
            <option value="date">按日期排序</option>
            <option value="title">按标题排序</option>
            <option value="featured">按推荐排序</option>
          </select>
        </div>
      </div>

      {/* 文章列表 */}
      <div className="articles-container">
        {filteredArticles.length > 0 ? (
          <div className="articles-grid">
            {filteredArticles.map(article => (
              <div key={article.id} className="article-card">
                <div className="article-header">
                  <h3 className="article-title">
                    <Link to={`/admin/articles/edit/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <div className="article-badges">
                    {article.featured && <span className="badge featured">⭐ 推荐</span>}
                    <span className="badge date">{article.publishDate}</span>
                  </div>
                </div>
                
                <p className="article-excerpt">{article.excerpt}</p>
                
                <div className="article-meta">
                  <div className="article-tags">
                    {article.tags && article.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <div className="article-stats">
                    <span className="read-time">⏱️ {article.readTime}</span>
                    <span className="author">👤 {article.author}</span>
                  </div>
                </div>
                
                <div className="article-actions">
                  <Link 
                    to={`/admin/articles/edit/${article.id}`}
                    className="btn btn-secondary"
                  >
                    ✏️ 编辑
                  </Link>
                  <Link 
                    to={`/article/${article.id}`}
                    className="btn btn-primary"
                    target="_blank"
                  >
                    👀 预览
                  </Link>
                  <button
                    onClick={() => handleDelete(article.id, article.title)}
                    className="btn btn-danger"
                  >
                    🗑️ 删除
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">📝</div>
            <h3>没有找到文章</h3>
            <p>
              {searchTerm || filterTag 
                ? '没有符合搜索条件的文章，尝试调整搜索条件。'
                : '还没有任何文章，开始写你的第一篇博客吧！'
              }
            </p>
            <Link to="/admin/articles/new" className="btn btn-primary">
              ✍️ 写文章
            </Link>
          </div>
        )}
      </div>

      {/* 统计信息 */}
      <div className="list-stats">
        <p>
          显示 {filteredArticles.length} 篇文章，共 {articles.length} 篇
          {searchTerm && ` (搜索: "${searchTerm}")`}
          {filterTag && ` (标签: "${filterTag}")`}
        </p>
      </div>
    </div>
  );
};

export default ArticleList;
