import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>fishycx Blog</h3>
            <p>分享技术、生活和思考的个人博客</p>
          </div>
          
          <div className="footer-section">
            <h4>链接</h4>
            <ul>
              <li><a href="https://github.com/fishycx" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="mailto:your-email@example.com">联系我</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>技术栈</h4>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>CSS3</li>
              <li>GitHub Pages</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} FishyCX Blog. 保留所有权利。</p>
          <p>由 React 和 GitHub Pages 驱动</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
