import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import ArticleList from '../components/admin/ArticleList';
import ArticleEditor from '../components/admin/ArticleEditor';
import Dashboard from '../components/admin/Dashboard';
import './Admin.css';

const Admin = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = async () => {
    try {
      // 使用本地存储系统
      const { getAllArticles } = await import('../utils/articleStorage');
      setArticles(getAllArticles());
    } catch (error) {
      console.error('加载文章失败:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleArticleSave = async (articleData) => {
    try {
      // 使用本地存储系统保存文章
      const { saveArticle } = await import('../utils/articleStorage');
      await saveArticle(articleData);
      console.log('文章保存成功:', articleData);
      // 重新加载文章列表
      loadArticles();
    } catch (error) {
      console.error('保存文章失败:', error);
      throw error;
    }
  };

  const handleArticleDelete = async (articleId) => {
    try {
      // 使用本地存储系统删除文章
      const { deleteArticle } = await import('../utils/articleStorage');
      await deleteArticle(articleId);
      console.log('文章删除成功:', articleId);
      // 重新加载文章列表
      loadArticles();
    } catch (error) {
      console.error('删除文章失败:', error);
      throw error;
    }
  };

  if (loading) {
    return (
      <div className="admin-loading">
        <div className="loading-spinner"></div>
        <p>加载中...</p>
      </div>
    );
  }

  return (
    <div className="admin">
      <AdminSidebar />
      <div className="admin-main">
        <AdminHeader />
        <div className="admin-content">
          <Routes>
            <Route path="/" element={<Dashboard articles={articles} />} />
            <Route path="/articles" element={<ArticleList articles={articles} onDelete={handleArticleDelete} />} />
            <Route path="/articles/new" element={<ArticleEditor onSave={handleArticleSave} />} />
            <Route path="/articles/edit/:id" element={<ArticleEditor articles={articles} onSave={handleArticleSave} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

const AdminSidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/admin', label: '仪表盘', icon: '📊' },
    { path: '/admin/articles', label: '文章管理', icon: '📝' },
    { path: '/admin/articles/new', label: '写文章', icon: '✍️' },
  ];

  return (
    <aside className="admin-sidebar">
      <div className="sidebar-header">
        <h2>fishycx Blog</h2>
        <p>管理后台</p>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className="sidebar-footer">
        <Link to="/" className="back-to-blog">
          ← 返回博客
        </Link>
      </div>
    </aside>
  );
};

const AdminHeader = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="admin-header">
      <div className="header-left">
        <h1>博客管理</h1>
        <span className="current-time">
          {currentTime.toLocaleString('zh-CN')}
        </span>
      </div>
      <div className="header-right">
        <button className="btn btn-primary" onClick={() => window.location.href = '/admin/articles/new'}>
          ✍️ 写新文章
        </button>
      </div>
    </header>
  );
};

export default Admin;
