import React from 'react';
import { Link } from 'react-router-dom';
import './ArticleCard.css';

const ArticleCard = ({ article, featured = false }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className={`article-card ${featured ? 'featured' : ''}`}>
      <div className="article-meta">
        <time className="article-date">{formatDate(article.publishDate)}</time>
        <span className="article-read-time">{article.readTime}</span>
        {featured && <span className="featured-badge">推荐</span>}
      </div>
      
      <h2 className="article-title">
        <Link to={`/article/${article.id}`}>{article.title}</Link>
      </h2>
      
      <p className="article-excerpt">{article.excerpt}</p>
      
      <div className="article-tags">
        {article.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      
      <div className="article-footer">
        <span className="article-author">by {article.author}</span>
        <Link to={`/article/${article.id}`} className="read-more">
          阅读更多 →
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;
