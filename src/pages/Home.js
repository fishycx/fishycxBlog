import React from 'react';
import { Link } from 'react-router-dom';
import { getAllArticles, getFeaturedArticles } from '../utils/articleStorage';
import ArticleCard from '../components/ArticleCard';
import './Home.css';

const Home = () => {
  const allArticles = getAllArticles();
  const featuredArticles = getFeaturedArticles();

  return (
    <div className="home">
      {/* 英雄区域 */}
      <section className="hero">
        <div className="hero-content">
          <h1>欢迎来到 fishycx Blog</h1>
          <p>分享技术、生活和思考的个人博客</p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">{allArticles.length}</span>
              <span className="stat-label">篇文章</span>
            </div>
            <div className="stat">
              <span className="stat-number">4</span>
              <span className="stat-label">个分类</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">原创内容</span>
            </div>
          </div>
        </div>
      </section>

      {/* 推荐文章 */}
      {featuredArticles.length > 0 && (
        <section className="featured-section">
          <div className="container">
            <h2 className="section-title">推荐文章</h2>
            <div className="featured-grid">
              {featuredArticles.map(article => (
                <ArticleCard 
                  key={article.id} 
                  article={article} 
                  featured={true}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 最新文章 */}
      <section className="latest-section">
        <div className="container">
          <h2 className="section-title">最新文章</h2>
          <div className="articles-grid">
            {allArticles.map(article => (
              <ArticleCard 
                key={article.id} 
                article={article}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 关于我预览 */}
      <section className="about-preview">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>关于我</h2>
              <p>
                我是FishyCX，一个热爱技术的开发者。专注于前端开发，喜欢探索新技术，
                分享编程经验和生活感悟。希望通过这个博客与大家交流学习。
              </p>
              <Link to="/about" className="btn btn-primary">
                了解更多
              </Link>
            </div>
            <div className="about-image">
              <div className="avatar-placeholder">
                <span>👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
