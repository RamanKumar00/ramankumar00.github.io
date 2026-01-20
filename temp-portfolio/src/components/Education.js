import React, { useEffect, useRef } from 'react';
import { EDUCATION_DATA } from '../const/data';

const Education = () => {
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
    <section id="education" className="education-section" ref={sectionRef}>
      {/* Background Tech Grid */}
      <div className="edu-bg-grid"></div>
      
      {/* Ambient Glow */}
      <div className="edu-glow-1"></div>
      <div className="edu-glow-2"></div>

      <div className="edu-container">
        {/* Section Header */}
        <div className="edu-header animate-on-scroll">
          <div className="edu-header-accent"></div>
          <div className="edu-header-badge">
            <span>System Log 042</span>
            <div className="badge-line"></div>
          </div>
          <h1 className="edu-title">
            Academic <span className="gradient-text">Journey</span>
          </h1>
          <p className="edu-subtitle">
            A chronological record of educational milestones, certifications, and technical achievements.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container">
          {/* Vertical Line Spine */}
          <div className="timeline-spine animate-on-scroll"></div>

          {/* Timeline Items */}
          <div className="timeline-items">
            {EDUCATION_DATA.map((edu, index) => (
              <div 
                key={index} 
                className={`timeline-item animate-on-scroll ${index % 2 === 1 ? 'reverse' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Date Column */}
                <div className="date-column">
                  <h3 className="date-year">{edu.year}</h3>
                  <p className="date-status">{edu.status}</p>
                </div>

                {/* Center Marker */}
                <div className="timeline-marker">
                  <div className="marker-circle">
                    <span className="material-symbols-outlined">{edu.icon}</span>
                    <div className="marker-ring"></div>
                    <div className="marker-pulse"></div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="timeline-card">
                  {/* Mobile Date */}
                  <span className="mobile-date">{edu.year}</span>
                  
                  {/* Background Icon */}
                  <div className="card-bg-icon">
                    <span className="material-symbols-outlined">{edu.bgIcon}</span>
                  </div>

                  <h3 className="card-title">{edu.degree}</h3>
                  <p className="card-institution">{edu.institution}</p>

                  {edu.highlights && (
                    <ul className="card-highlights">
                      {edu.highlights.map((highlight, hIndex) => (
                        <li key={hIndex}>
                          <span className="material-symbols-outlined">check_circle</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {edu.description && (
                    <p className="card-description">{edu.description}</p>
                  )}

                  <div className="card-skills">
                    {edu.skills.map((skill, sIndex) => (
                      <span 
                        key={sIndex} 
                        className={`skill-tag ${typeof skill === 'object' ? skill.color : 'primary'}`}
                      >
                        {typeof skill === 'object' ? skill.name : skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        {/* Certifications Section */}

      </div>
    </section>
  );
};

export default Education;
