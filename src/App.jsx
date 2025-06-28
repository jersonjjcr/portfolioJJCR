import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import perfil from './assets/perfil.jpg';
import darkico from './assets/darkico.ico';
import lengico from './assets/leng.ico';
import './App.css'
import './i18n';
import cafeladoImg from './assets/cafelado.png';
import hmiImg from './assets/hmi.png';
import smahsImg from './assets/smahs.png';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  // Cierra el menú al cambiar de tamaño si es grande
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-mobile">
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <ul className={`navbar-links ${menuOpen ? 'show' : ''}`}>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>{t('about')}</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)}>{t('skills')}</a></li>
          <li><a href="#softskills" onClick={() => setMenuOpen(false)}>{t('softskills')}</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>{t('projects')}</a></li>
        </ul>
        <div className="navbar-actions">
          <img
            src={darkico}
            alt="Toggle dark mode"
            onClick={() => setDarkMode((v) => !v)}
            className="darkmode-toggle"
            title={darkMode ? 'Modo Claro' : 'Modo Oscuro'}
          />
          <img
            src={lengico}
            alt="Cambiar idioma"
            onClick={toggleLang}
            className="darkmode-toggle"
            title={i18n.language === 'es' ? 'Change to English' : 'Cambiar a Español'}
          />
        </div>
      </nav>
      <div className="app-container">
        <h1>{t('hello')}</h1>
        <h2>{t('dev')}</h2>
        <a
          href="mailto:jersoncontrerasroman@gmail.com"
          className="available-btn"
          style={{ marginBottom: '18px', display: 'inline-block', marginTop: '10px' }}
        >
          {t('available')}
        </a>
        <div className="avatar-container">
          <img src={perfil} alt="Avatar" className="avatar" />
        </div>
        <div className="avatar-about-container" id="about">
          <div className='about1'>
            <section>
              <h2>{t('about')}</h2>
              <p>
                {t('aboutText')}
              </p>
            </section>
            <div className="about-buttons">
              <a
                href="https://drive.google.com/file/d/1s5ZaMHyunTwXUgGf4HBbcnLV8qO0brUs/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="about-btn"
              >
                {t('cv') || 'Ver CV'}
              </a>
              <a
                href="https://www.linkedin.com/in/jerson-contreras-95878b346/"
                target="_blank"
                rel="noopener noreferrer"
                className="about-btn"
              >
                {t('contact') || 'Contacto'}
              </a>
            </div>
          </div>
        </div>
        <section className='skills' id="skills">
          <h2>{t('skills')}</h2>
          <div className="skills-row">
            <div className="skill-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="skill-logo" />
              <span>HTML</span>
            </div>
            <div className="skill-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="skill-logo" />
              <span>CSS</span>
            </div>
            <div className="skill-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="skill-logo" />
              <span>JavaScript</span>
            </div>
            <div className="skill-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="skill-logo" />
              <span>React</span>
            </div>
            <div className="skill-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" alt="Vite" className="skill-logo" />
              <span>Vite</span>
            </div>
            <div className="skill-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="skill-logo" />
              <span>Node.js</span>
            </div>
            <div className="skill-card">
              <span style={{ fontSize: "2rem" }}>⚡</span>
              <span>Express</span>
            </div>
            <div className="skill-card">
              <span style={{ fontSize: "2rem" }}>🛢️</span>
              <span>PostgreSQL</span>
            </div>
          
            <div className="skill-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="skill-logo" />
              <span>Git</span>
            </div>
            <div className="skill-card">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="skill-logo" />
              <span>GitHub</span>
            </div>
          </div>

        </section>
        <section className="softskill" id="softskills"> 
          <h2>{t('softskills')}</h2>
          <div className="skills-row">
            <div className="skill-card">
              <span>{t('communication')}</span>
            </div>
            <div className="skill-card">
              <span>{t('teamwork')}</span>
            </div>
            <div className="skill-card">
              <span>{t('problem')}</span>
            </div>
            <div className="skill-card">
              <span>{t('creativity')}</span>
            </div>
            <div className="skill-card">
              <span>{t('learning')}</span>
            </div>
            <div className="skill-card">
              <span>{t('empathy')}</span>
            </div>
            <div className="skill-card">
              <span>{t('adaptability')}</span>
            </div>
            <div className="skill-card">
              <span>{t('time')}</span>
            </div>
            <div className="skill-card">
              <span>{t('detail')}</span>
            </div>
          </div>
        </section>    
        
        <section id="projects">
          <h2>{t('projects')}</h2>
          <ul className="project-list">
            <li className="project-item">
              <a
                href="https://cafelado.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '28px', textDecoration: 'none', color: 'inherit', width: '100%' }}
              >
                <img
                  src={cafeladoImg}
                  alt="Cafélado"
                  className="project-img"
                />
                <div>
                  <span className="project-title">{t('project1')}</span>
                  <p style={{ margin: '10px 0 0 0', fontSize: '1em', color: 'var(--text-color)' }}>
                    {t('project1Desc')}
                  </p>
                </div>
              </a>
            </li>
            <li className="project-item">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '28px', textDecoration: 'none', color: 'inherit', width: '100%' }}
              >
                <img
                  src={hmiImg}
                  alt="HMI Turbina de Arquímedes"
                  className="project-img"
                />
                <div>
                  <span className="project-title">{t('project2')}</span>
                  <p style={{ margin: '10px 0 0 0', fontSize: '1em', color: 'var(--text-color)' }}>
                    {t('project2Desc')}
                  </p>
                </div>
              </a>
            </li>
            <li className="project-item">
              <a
                href="https://thesmahsroom2.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '28px', textDecoration: 'none', color: 'inherit', width: '100%' }}
              >
                <img
                  src={smahsImg}
                  alt="The Smash Room"
                  className="project-img"
                />
                <div>
                  <span className="project-title">{t('project3')}</span>
                  <p style={{ margin: '10px 0 0 0', fontSize: '1em', color: 'var(--text-color)' }}>
                    {t('project3Desc')}
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </section>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <span>&copy; {new Date().getFullYear()} Jerson Contreras</span>
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/jerson-contreras-95878b346/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="footer-icon" />
            </a>
            <a href="https://github.com/jersonjjcr" target="_blank" rel="noopener noreferrer" title="GitHub">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="footer-icon" />
            </a>
            <a href="mailto:jersoncontrerasroman@gmail.com" title="Email">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Email" className="footer-icon" />
            </a>
            <a href="https://www.instagram.com/jersonj_contreras/?hl=es-la" target="_blank" rel="noopener noreferrer" title="Instagram">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                className="footer-icon"
                style={{ background: "#fff", borderRadius: "8px" }}
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
