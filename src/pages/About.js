import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="about-hero">
          <div className="about-avatar">
            <div className="avatar-placeholder">
              <span>👨‍💻</span>
            </div>
          </div>
          <div className="about-intro">
            <h1>你好，我是 fishycx</h1>
            <p className="about-subtitle">
              一个热爱技术的开发者，专注于前端开发，喜欢探索新技术，分享编程经验和生活感悟。
            </p>
          </div>
        </div>

        <div className="about-content">
          <section className="about-section">
            <h2>关于我</h2>
            <p>
              我是一名前端开发者，对Web技术充满热情。我喜欢学习新技术，解决复杂问题，
              并将这些经验分享给更多的人。我相信技术可以改变世界，而分享可以让技术更有价值。
            </p>
            <p>
              除了编程，我还喜欢阅读、写作和思考。我认为一个好的开发者不仅要有扎实的技术功底，
              更要有良好的思维能力和沟通能力。
            </p>
          </section>

          <section className="about-section">
            <h2>技术栈</h2>
            <div className="tech-stack">
              <div className="tech-category">
                <h3>前端技术</h3>
                <div className="tech-tags">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Vue.js</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">TypeScript</span>
                  <span className="tech-tag">HTML5</span>
                  <span className="tech-tag">CSS3</span>
                  <span className="tech-tag">Sass</span>
                  <span className="tech-tag">Tailwind CSS</span>
                </div>
              </div>
              
              <div className="tech-category">
                <h3>工具和框架</h3>
                <div className="tech-tags">
                  <span className="tech-tag">Webpack</span>
                  <span className="tech-tag">Vite</span>
                  <span className="tech-tag">Git</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">Express</span>
                  <span className="tech-tag">MongoDB</span>
                </div>
              </div>
              
              <div className="tech-category">
                <h3>其他技能</h3>
                <div className="tech-tags">
                  <span className="tech-tag">UI/UX设计</span>
                  <span className="tech-tag">响应式设计</span>
                  <span className="tech-tag">性能优化</span>
                  <span className="tech-tag">SEO</span>
                  <span className="tech-tag">Linux</span>
                </div>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>兴趣爱好</h2>
            <div className="interests">
              <div className="interest-item">
                <div className="interest-icon">📚</div>
                <h3>阅读</h3>
                <p>喜欢阅读技术书籍、科幻小说和哲学类书籍</p>
              </div>
              <div className="interest-item">
                <div className="interest-icon">✍️</div>
                <h3>写作</h3>
                <p>通过写作分享技术经验和生活感悟</p>
              </div>
              <div className="interest-item">
                <div className="interest-icon">🎵</div>
                <h3>音乐</h3>
                <p>喜欢听各种类型的音乐，特别是电子音乐</p>
              </div>
              <div className="interest-item">
                <div className="interest-icon">🏃‍♂️</div>
                <h3>运动</h3>
                <p>坚持跑步和健身，保持身体健康</p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>联系我</h2>
            <p>如果你有任何问题或想要交流，欢迎通过以下方式联系我：</p>
            <div className="contact-methods">
              <a 
                href="https://github.com/fishycx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-item"
              >
                <span className="contact-icon">🐙</span>
                <span>GitHub</span>
              </a>
              <a 
                href="mailto:your-email@example.com"
                className="contact-item"
              >
                <span className="contact-icon">📧</span>
                <span>Email</span>
              </a>
              <a 
                href="https://twitter.com/fishycx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-item"
              >
                <span className="contact-icon">🐦</span>
                <span>Twitter</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
