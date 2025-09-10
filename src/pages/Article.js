import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArticleById, getAllArticles } from '../data/articles';
import './Article.css';

const Article = () => {
  const { id } = useParams();
  const article = getArticleById(id);
  const allArticles = getAllArticles();

  if (!article) {
    return (
      <div className="article-not-found">
        <div className="container">
          <h1>文章未找到</h1>
          <p>抱歉，您要查找的文章不存在。</p>
          <Link to="/" className="btn btn-primary">返回首页</Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // 获取相关文章（排除当前文章）
  const relatedArticles = allArticles
    .filter(a => a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="article-page">
      <article className="article-content">
        {/* 文章头部 */}
        <header className="article-header">
          <div className="article-meta">
            <time className="article-date">{formatDate(article.publishDate)}</time>
            <span className="article-read-time">{article.readTime}</span>
            <span className="article-author">by {article.author}</span>
          </div>
          
          <h1 className="article-title">{article.title}</h1>
          
          <div className="article-tags">
            {article.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </header>

        {/* 文章内容 */}
        <div 
          className="article-body"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* 文章底部 */}
        <footer className="article-footer">
          <div className="article-actions">
            <button 
              className="btn btn-secondary"
              onClick={() => window.history.back()}
            >
              ← 返回
            </button>
            <button 
              className="btn btn-primary"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              回到顶部 ↑
            </button>
          </div>
          
          <div className="article-share">
            <span>分享这篇文章：</span>
            <div className="share-buttons">
              <a 
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-btn twitter"
              >
                Twitter
              </a>
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-btn facebook"
              >
                Facebook
              </a>
              <a 
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-btn linkedin"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </article>

      {/* 相关文章 */}
      {relatedArticles.length > 0 && (
        <section className="related-articles">
          <div className="container">
            <h2>相关文章</h2>
            <div className="related-grid">
              {relatedArticles.map(relatedArticle => (
                <div key={relatedArticle.id} className="related-card">
                  <h3>
                    <Link to={`/article/${relatedArticle.id}`}>
                      {relatedArticle.title}
                    </Link>
                  </h3>
                  <p>{relatedArticle.excerpt}</p>
                  <div className="related-meta">
                    <time>{formatDate(relatedArticle.publishDate)}</time>
                    <span>{relatedArticle.readTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Article;
