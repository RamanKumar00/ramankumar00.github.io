import React, { useEffect, useRef } from 'react';
import { EXPERIENCES } from '../const/data';

const Experience = () => {
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

  return (
    <section id="experience" className="experience-section" ref={sectionRef}>
      {/* Background Tech Grid */}
      <div className="exp-bg-grid"></div>
      
      {/* Ambient Glow */}
      <div className="exp-glow-1"></div>
      <div className="exp-glow-2"></div>

      <div className="exp-container">
        {/* Section Header */}
        <div className="exp-header animate-on-scroll">
          <div className="exp-header-accent"></div>
          <div className="exp-header-badge">
            <span>System Log 041</span>
            <div className="badge-line"></div>
          </div>
          <h1 className="exp-title">
            Work <span className="gradient-text">Experience</span>
          </h1>
          <p className="exp-subtitle">
            A chronological record of professional milestones and industry contributions.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container">
          {/* Vertical Line Spine */}
          <div className="timeline-spine animate-on-scroll"></div>

          {/* Timeline Items */}
          <div className="timeline-items">
            {EXPERIENCES.map((exp, index) => (
              <div 
                key={index} 
                className={`timeline-item animate-on-scroll ${index % 2 === 1 ? 'reverse' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Date Column */}
                <div className="date-column">
                  <h3 className="date-year">{exp.period}</h3>
                  <p className="date-status">{exp.status}</p>
                </div>

                {/* Center Marker */}
                <div className="timeline-marker">
                  <div className={`marker-circle ${exp.isActive ? 'active' : ''}`}>
                    <span className="material-symbols-outlined">{exp.icon}</span>
                    <div className="marker-ring"></div>
                    <div className="marker-pulse"></div>
                  </div>
                </div>

                {/* Card Content */}
                <div className={`timeline-card ${exp.isActive ? 'active-card' : ''}`}>
                  {/* Mobile Date */}
                  <span className="mobile-date">{exp.period}</span>
                  
                  {/* Background Icon */}
                  <div className="card-bg-icon">
                    <span className="material-symbols-outlined">{exp.bgIcon}</span>
                  </div>

                  {/* Active Badge */}
                  {exp.isActive && (
                    <div className="active-badge">
                      <span className="pulse-dot"></span>
                      CURRENT
                    </div>
                  )}

                  <h3 className="card-title">{exp.title}</h3>
                  <p className="card-company">
                    <span className="material-symbols-outlined">business</span>
                    {exp.company}
                  </p>
                  <p className="card-location">
                    <span className="material-symbols-outlined">location_on</span>
                    {exp.location}
                  </p>

                  <ul className="card-highlights">
                    {exp.description.map((desc, dIndex) => (
                      <li key={dIndex}>
                        <span className="material-symbols-outlined">chevron_right</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="card-skills">
                    {exp.skills.map((skill, sIndex) => (
                      <span key={sIndex} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
