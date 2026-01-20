import React, { useEffect, useState } from 'react';
import { HOME_DATA, PERSONAL_INFO } from '../const/data';

const Home = () => {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    // Trigger online animation on mount
    const timer = setTimeout(() => setIsOnline(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="home-section">
      {/* Background Elements */}
      <div className="bg-elements">
        <div className="bg-grid-hud"></div>
        <div className="bg-grid-sub"></div>
        <div className="vignette-overlay"></div>
        <div className="vignette-left"></div>
        <div className="vignette-right"></div>
        
        {/* Floating Particles */}
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        
        {/* Large Blur Orbs */}
        <div className="orb orb-primary"></div>
        <div className="orb orb-purple"></div>
      </div>

      {/* Main Content */}
      <div className="home-content">
        {/* Left Section - Text Content */}
        <div className="text-content">
          {/* System Online Badge */}
          <div className={`system-badge ${isOnline ? 'active' : ''}`}>
            <span className="pulse-container">
              <span className="pulse-ring"></span>
              <span className="pulse-dot"></span>
            </span>
            {HOME_DATA.systemBadge}
          </div>

          {/* Main Heading */}
          <h1 className="main-heading">
            {HOME_DATA.greeting} <br/>
            <span className="gradient-text">{PERSONAL_INFO.name}</span>
          </h1>

          {/* Divider */}
          <div className="heading-divider"></div>

          {/* Subheading */}
          <h2 className="subheading">
            {HOME_DATA.tagline}
          </h2>

          {/* Description */}
          <p className="description">
            {HOME_DATA.description}
          </p>

          {/* Action Buttons */}
          <div className="action-buttons">
            <a href={HOME_DATA.cta.primary.href} className="btn btn-primary">
              <span className="material-symbols-outlined">{HOME_DATA.cta.primary.icon}</span>
              {HOME_DATA.cta.primary.text}
            </a>
            <a href={HOME_DATA.cta.secondary.href} className="btn btn-secondary">
              <span className="material-symbols-outlined">{HOME_DATA.cta.secondary.icon}</span>
              CONTACT_ME
            </a>
          </div>
        </div>

        {/* Right Section - Arc Reactor Graphic */}
        <div className="reactor-container">
          {/* Outer Spinning Rings */}
          <div className="orbit-ring ring-outer"></div>
          <div className="orbit-ring ring-middle"></div>
          <div className="orbit-ring ring-inner"></div>

          {/* Main Reactor Circle */}
          <div className="reactor-main">
            <div className="reactor-inset-glow"></div>

            {/* Decorative Ticks */}
            <div className="tick tick-top"></div>
            <div className="tick tick-bottom"></div>
            <div className="tick tick-left"></div>
            <div className="tick tick-right"></div>

            {/* Inner Core */}
            <div className="reactor-core">
              <div className="core-glow"></div>
              <div className="core-icon">
                <span className="material-symbols-outlined">token</span>
              </div>
              <div className="core-scanline"></div>
            </div>
          </div>

          {/* HUD Labels */}
          <div className="hud-label hud-top-right">
            CORE_STABILITY: 100%
          </div>
          <div className="hud-label hud-bottom-left">
            OUTPUT_LOAD: 2.1GW
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="stats-bar">
        <div className="stat-item primary-border">
          <p className="stat-label">Deployment_Sector</p>
          <p className="stat-value">SECTOR_07</p>
        </div>
        <div className="stat-item">
          <p className="stat-label">Tech_Stack</p>
          <p className="stat-value">FULL_STACK</p>
        </div>
        <div className="stat-item">
          <p className="stat-label">Availability</p>
          <p className="stat-value available">LOCKED_IN</p>
        </div>
        <div className="stat-item">
          <p className="stat-label">Security_Protocol</p>
          <p className="stat-value">ENCRYPTED</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
