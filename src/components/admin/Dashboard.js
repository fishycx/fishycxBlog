import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ articles }) => {
  const totalArticles = articles.length;
  const featuredArticles = articles.filter(article => article.featured).length;
  const recentArticles = articles.slice(0, 5);
  
  // 统计标签
  const allTags = articles.flatMap(article => article.tags || []);
  const tagCounts = allTags.reduce((acc, tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {});
  const topTags = Object.entries(tagCounts)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 5);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>仪表盘</h1>
        <p>欢迎回来！这里是你的博客概览。</p>
      </div>

      {/* 统计卡片 */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">📝</div>
          <div className="stat-content">
            <h3>{totalArticles}</h3>
            <p>总文章数</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">⭐</div>
          <div className="stat-content">
            <h3>{featuredArticles}</h3>
            <p>推荐文章</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">🏷️</div>
          <div className="stat-content">
            <h3>{Object.keys(tagCounts).length}</h3>
            <p>标签数量</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">👀</div>
          <div className="stat-content">
            <h3>1.2K</h3>
            <p>总阅读量</p>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        {/* 最近文章 */}
        <div className="dashboard-section">
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">最近文章</h2>
              <Link to="/admin/articles" className="btn btn-secondary">
                查看全部
              </Link>
            </div>
            <div className="card-body">
              {recentArticles.length > 0 ? (
                <div className="article-list">
                  {recentArticles.map(article => (
                    <div key={article.id} className="article-item">
                      <div className="article-info">
                        <h4>
                          <Link to={`/admin/articles/edit/${article.id}`}>
                            {article.title}
                          </Link>
                        </h4>
                        <p className="article-excerpt">{article.excerpt}</p>
                        <div className="article-meta">
                          <span className="publish-date">{article.publishDate}</span>
                          <span className="read-time">{article.readTime}</span>
                          {article.featured && <span className="featured-badge">⭐ 推荐</span>}
                        </div>
                      </div>
                      <div className="article-actions">
                        <Link 
                          to={`/admin/articles/edit/${article.id}`}
                          className="btn btn-secondary"
                        >
                          编辑
                        </Link>
                        <Link 
                          to={`/article/${article.id}`}
                          className="btn btn-primary"
                          target="_blank"
                        >
                          预览
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="empty-state">
                  <p>还没有文章，开始写你的第一篇博客吧！</p>
                  <Link to="/admin/articles/new" className="btn btn-primary">
                    ✍️ 写文章
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 热门标签 */}
        <div className="dashboard-section">
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">热门标签</h2>
            </div>
            <div className="card-body">
              {topTags.length > 0 ? (
                <div className="tags-cloud">
                  {topTags.map(([tag, count]) => (
                    <span key={tag} className="tag-item">
                      {tag} <span className="tag-count">({count})</span>
                    </span>
                  ))}
                </div>
              ) : (
                <p className="empty-state">还没有标签</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 快速操作 */}
      <div className="quick-actions">
        <h2>快速操作</h2>
        <div className="actions-grid">
          <Link to="/admin/articles/new" className="action-card">
            <div className="action-icon">✍️</div>
            <h3>写新文章</h3>
            <p>开始创作你的下一篇博客</p>
          </Link>
          
          <Link to="/admin/articles" className="action-card">
            <div className="action-icon">📝</div>
            <h3>管理文章</h3>
            <p>编辑、删除或重新发布文章</p>
          </Link>
          
          <div className="action-card" onClick={() => window.open('/', '_blank')}>
            <div className="action-icon">👀</div>
            <h3>预览博客</h3>
            <p>查看博客的最终效果</p>
          </div>
          
          <div className="action-card" onClick={() => {
            // 这里可以添加发布到GitHub的功能
            alert('发布功能开发中...');
          }}>
            <div className="action-icon">🚀</div>
            <h3>发布更新</h3>
            <p>将更改推送到GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
