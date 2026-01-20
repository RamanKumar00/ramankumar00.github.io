import React, { useEffect, useState } from 'react';
import { ABOUT_DATA, SOCIAL_LINKS, STATS } from '../const/data';

const About = () => {
  const [counters, setCounters] = useState({ code: 0, missions: 0, bugs: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const targets = { code: STATS.linesOfCode, missions: STATS.missions, bugs: STATS.bugsFix };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        code: (targets.code * progress).toFixed(1),
        missions: Math.floor(targets.missions * progress),
        bugs: (targets.bugs * progress).toFixed(1)
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounters(targets);
      }
    }, stepTime);
  };

  return (
    <section id="about" className="about-new">
      {/* Animated Background */}
      <div className="about-bg">
        <div className="bg-gradient-orb orb-1"></div>
        <div className="bg-gradient-orb orb-2"></div>
        <div className="bg-mesh"></div>
      </div>

      <div className="about-wrapper">
        {/* Section Title */}
        <div className="section-intro">
          <span className="intro-badge">
            <span className="badge-dot"></span>
            About Me
          </span>
          <h2 className="section-title-new">
            Crafting Digital<br/>
            <span className="title-highlight">Experiences</span>
          </h2>
          <p className="section-subtitle">
            Passionate developer turning complex problems into elegant solutions
          </p>
        </div>

        {/* Main Content */}
        <div className="about-content-grid">
          {/* Profile Card - Left */}
          <div className="profile-card-new">
            <div className="profile-image-wrap">
              <img 
                src={ABOUT_DATA.avatar} 
                alt="Developer Profile" 
                className="profile-img"
              />
              <div className="profile-overlay"></div>
              <div className="profile-status">
                <span className="status-indicator"></span>
                Available for Work
              </div>
            </div>
            
            <div className="profile-info">
              <h3 className="profile-name">{ABOUT_DATA.name}</h3>
              <p className="profile-role">Full Stack Developer</p>
              
              <div className="profile-details">
                <div className="detail-item">
                  <span className="material-symbols-outlined">location_on</span>
                  <span>{ABOUT_DATA.location}</span>
                </div>
                <div className="detail-item">
                  <span className="material-symbols-outlined">verified</span>
                  <span>{ABOUT_DATA.clearance}</span>
                </div>
              </div>

              <div className="social-links-new">
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="social-link-btn">
                  <span className="material-symbols-outlined">code</span>
                  GitHub
                </a>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="social-link-btn">
                  <span className="material-symbols-outlined">work</span>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Bio & Stats - Right */}
          <div className="bio-stats-column">
            {/* Bio Section */}
            <div className="bio-card-new">
              <div className="bio-header">
                <span className="material-symbols-outlined">person</span>
                <h4>My Story</h4>
              </div>
              <div className="bio-content-new">
                {ABOUT_DATA.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph.text}</p>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="stats-grid-new">
              <div className="stat-box">
                <div className="stat-icon-wrap primary">
                  <span className="material-symbols-outlined">code</span>
                </div>
                <div className="stat-info">
                  <span className="stat-num">{counters.code}M+</span>
                  <span className="stat-label-new">Lines of Code</span>
                </div>
              </div>
              <div className="stat-box">
                <div className="stat-icon-wrap purple">
                  <span className="material-symbols-outlined">rocket_launch</span>
                </div>
                <div className="stat-info">
                  <span className="stat-num">{counters.missions}+</span>
                  <span className="stat-label-new">Projects Delivered</span>
                </div>
              </div>
              <div className="stat-box">
                <div className="stat-icon-wrap cyan">
                  <span className="material-symbols-outlined">bug_report</span>
                </div>
                <div className="stat-info">
                  <span className="stat-num">{counters.bugs}%</span>
                  <span className="stat-label-new">Bug Fix Rate</span>
                </div>
              </div>
              <div className="stat-box">
                <div className="stat-icon-wrap orange">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <div className="stat-info">
                  <span className="stat-num">24/7</span>
                  <span className="stat-label-new">Dedication</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills-section-new">
          <div className="skills-header-new">
            <h3>
              <span className="material-symbols-outlined">auto_awesome</span>
              Technical Skills
            </h3>
          </div>
          <div className="skills-container-new">
            {ABOUT_DATA.skills.map((skill, index) => (
              <div key={index} className={`skill-card-new skill-${skill.color}`}>
                <div className="skill-top">
                  <span className="skill-name-new">{skill.name}</span>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-bar-new">
                  <div 
                    className="skill-fill"
                    style={{ width: hasAnimated ? `${skill.level}%` : '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
