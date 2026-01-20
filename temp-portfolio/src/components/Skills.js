import React, { useState, useEffect, useRef } from 'react';
import { SKILLS_DATA, SKILL_CATEGORIES, CERTIFICATIONS } from '../const/data';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedCert, setSelectedCert] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const animatedElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    animatedElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const filteredSkills = activeCategory === 'all' 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      {/* Background Grid Effect */}
      <div className="skills-bg-grid">
        <div className="grid-pattern"></div>
        <div className="grid-gradient"></div>
      </div>

      {/* Scan Line Effect */}
      <div className="scan-line-container">
        <div className="scan-line"></div>
      </div>

      <div className="skills-container">
        {/* Page Title Section */}
        <div className="skills-header animate-on-scroll">
          <div className="skills-header-left">
            <div className="skills-badge">
              <span className="material-symbols-outlined">bolt</span>
              <span>Classified Developer Dossier</span>
            </div>
            <h2 className="skills-title">
              Powers & <span className="gradient-text">Abilities</span>
            </h2>
            <p className="skills-subtitle">
              Authorized personnel only. Accessing neural network for technical proficiency analysis. Level 7 clearance confirmed.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="skills-quick-stats">
            <div className="quick-stat">
              <span className="stat-label">Sys. Load</span>
              <span className="stat-value success">98%</span>
            </div>
            <div className="quick-stat">
              <span className="stat-label">Uptime</span>
              <span className="stat-value">99.9%</span>
            </div>
            <div className="quick-stat">
              <span className="stat-label">Core Temp</span>
              <span className="stat-value cyan">34°C</span>
            </div>
          </div>

          {/* Corner decorations */}
          <div className="header-line left"></div>
          <div className="header-line right"></div>
        </div>

        {/* Dashboard Controls */}
        <div className="skills-controls animate-on-scroll">
          {/* Segmented Control */}
          <div className="category-tabs">
            {SKILL_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span className="material-symbols-outlined">{cat.icon}</span>
                {cat.label}
                <div className="tab-indicator"></div>
              </button>
            ))}
          </div>

          {/* Search (Visual Only) */}
          <div className="skills-search">
            <span className="material-symbols-outlined">search</span>
            <input type="text" placeholder="SEARCH DATABASE..." readOnly />
          </div>
        </div>

        {/* Stats Overview Cards */}
        <div className="stats-overview animate-on-scroll">
          <div className="stat-card">
            <div className="stat-card-icon">
              <span className="material-symbols-outlined">data_usage</span>
            </div>
            <p className="stat-card-label">Primary Skillset</p>
            <div className="stat-card-value">
              <h3>Full Stack</h3>
              <span className="status-badge success">OPERATIONAL</span>
            </div>
            <div className="stat-card-bar">
              <div className="bar-fill" style={{ width: '85%' }}></div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-card-icon">
              <span className="material-symbols-outlined">memory</span>
            </div>
            <p className="stat-card-label">Total Technologies</p>
            <div className="stat-card-value">
              <h3>24<span className="muted">_MODS</span></h3>
              <span className="status-badge cyan">INDEXED</span>
            </div>
            <div className="stat-card-blocks">
              <div className="block"></div>
              <div className="block"></div>
              <div className="block pulse"></div>
              <div className="block-bar"></div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-card-icon">
              <span className="material-symbols-outlined">bolt</span>
            </div>
            <p className="stat-card-label">System Efficiency</p>
            <div className="stat-card-value">
              <h3>MAX</h3>
              <span className="status-badge primary">OPTIMIZED</span>
            </div>
            <div className="stat-card-metrics">
              <span>CPU: 12%</span>
              <span>RAM: 4.2GB</span>
              <span>NET: 1Gbps</span>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid animate-on-scroll">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-card-glow"></div>
              <div className="skill-card-content">
                <div className="skill-card-header">
                  <div className="skill-icon-wrapper">
                    {typeof skill.icon === 'string' ? (
                      <span className="material-symbols-outlined">{skill.icon}</span>
                    ) : (
                      <span className="react-icon">{skill.icon}</span>
                    )}
                  </div>
                  <span className="skill-version">{skill.version}</span>
                </div>
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-description">{skill.description}</p>
                <div className="skill-proficiency">
                  <div className="proficiency-header">
                    <span className="proficiency-label">PROFICIENCY</span>
                    <span className="proficiency-value">{skill.proficiency}%</span>
                  </div>
                  <div className="proficiency-bar">
                    <div 
                      className="proficiency-fill" 
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              {/* HUD Corners */}
              <div className="hud-corner top-left"></div>
              <div className="hud-corner bottom-right"></div>
            </div>
          ))}
        </div>
        
        {/* Certifications Section */}
        <div className="certifications-container animate-on-scroll" style={{ marginTop: '4rem' }}>
          <div className="cert-section-header">
            <div className="cert-section-line"></div>
            <h2 className="cert-section-title">
              <span className="material-symbols-outlined">workspace_premium</span>
              Certifications
            </h2>
            <div className="cert-section-line"></div>
          </div>

          <div className="cert-marquee-container">
            <div className="cert-marquee-content">
              {/* First Set */}
              {CERTIFICATIONS.map((cert, index) => (
                <div key={`cert-1-${index}`} className="cert-card horizontal">
                  <div className="cert-icon-box">
                    {cert.logo ? (
                      <img 
                        src={cert.logo} 
                        alt={cert.issuer} 
                        className="cert-logo-img"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <span 
                      className="material-symbols-outlined cert-fallback-icon" 
                      style={{ display: cert.logo ? 'none' : 'flex' }}
                    >
                      {cert.certIcon || 'verified'}
                    </span>
                  </div>
                  
                  <div className="cert-content">
                    <h3 className="cert-title">{cert.title}</h3>
                    <div className="cert-issuer-row">
                      <span className="cert-issuer">{cert.issuer}</span>
                      <span className="cert-dot">•</span>
                      <span className="cert-date">{cert.date}</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => setSelectedCert(cert)}
                    className="view-cert-btn"
                  >
                    <span>View Certificate</span>
                    <span className="material-symbols-outlined">visibility</span>
                  </button>

                  <div className="cert-glow"></div>
                </div>
              ))}

              {/* Second Set for Smooth Loop */}
              {CERTIFICATIONS.map((cert, index) => (
                <div key={`cert-2-${index}`} className="cert-card horizontal">
                  <div className="cert-icon-box">
                    {cert.logo ? (
                      <img 
                        src={cert.logo} 
                        alt={cert.issuer} 
                        className="cert-logo-img"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <span 
                      className="material-symbols-outlined cert-fallback-icon" 
                      style={{ display: cert.logo ? 'none' : 'flex' }}
                    >
                      {cert.certIcon || 'verified'}
                    </span>
                  </div>
                  
                  <div className="cert-content">
                    <h3 className="cert-title">{cert.title}</h3>
                    <div className="cert-issuer-row">
                      <span className="cert-issuer">{cert.issuer}</span>
                      <span className="cert-dot">•</span>
                      <span className="cert-date">{cert.date}</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => setSelectedCert(cert)}
                    className="view-cert-btn"
                  >
                    <span>View Certificate</span>
                    <span className="material-symbols-outlined">visibility</span>
                  </button>

                  <div className="cert-glow"></div>
                </div>
              ))}
            </div>
            
            {/* Gradient Masks for Marquee fade effect */}
            <div className="marquee-mask left"></div>
            <div className="marquee-mask right"></div>
          </div>
        </div>

        {/* Footer Status Bar */}
        <div className="skills-footer animate-on-scroll">
          <div className="footer-left">
            <span>Server: US-EAST-1</span>
            <span>Latency: 12ms</span>
          </div>
          <div className="footer-center">
            <span className="status-dot"></span>
            <span>System Nominal</span>
          </div>
          <div className="footer-right">
            © {new Date().getFullYear()} Ramo.Dev | Raman Kumar
          </div>
  
      </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="cert-modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={() => setSelectedCert(null)}>
              <span className="material-symbols-outlined">close</span>
            </button>
            
            <div className="cert-modal-header">
              <h3>{selectedCert.title}</h3>
              <span className="cert-modal-issuer">{selectedCert.issuer}</span>
            </div>

            <div className="cert-modal-body">
              {selectedCert.link.toLowerCase().endsWith('.pdf') ? (
                <iframe 
                  src={selectedCert.link} 
                  title={selectedCert.title}
                  className="cert-viewer-frame"
                ></iframe>
              ) : (
                 <img 
                    src={selectedCert.link} 
                    alt={selectedCert.title} 
                    className="cert-viewer-img"
                  />
              )}
            </div>
            
            <div className="cert-modal-footer">
               <a href={selectedCert.link} download className="cert-download-btn">
                 <span className="material-symbols-outlined">download</span>
                 Download
               </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
