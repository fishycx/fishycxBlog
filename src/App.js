import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Article from './pages/Article';
import About from './pages/About';
import Admin from './pages/Admin';
import './App.css';
import './components/admin/AdminStyles.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        {/* 管理后台路由 */}
        <Route path="/admin/*" element={<Admin />} />
        
        {/* 博客前台路由 */}
        <Route path="/*" element={
          <div className="App">
            <Header />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/article/:id" element={<Article />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </main>
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
