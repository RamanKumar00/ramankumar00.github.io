import React, { useEffect } from 'react';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="modal-content">
          <div className="modal-header">
            <span className="modal-badge">{project.badge}</span>
            <h2 className="modal-title">{project.title}</h2>
            <div className={`status-badge ${project.statusType}`}>
              <span className="status-dot"></span>
              {project.status}
            </div>
          </div>

          <div className="modal-grid">
            <div className="modal-left">
              <div className="modal-image-wrapper">
                <img src={project.image} alt={project.title} className="modal-image" />
                <div className="modal-actions">
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="modal-btn primary">
                    <span className="material-symbols-outlined">{project.actionIcon}</span>
                    {project.actionText}
                  </a>
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="modal-btn secondary">
                    <span className="material-symbols-outlined">code</span>
                    Source Code
                  </a>
                </div>
              </div>
            </div>

            <div className="modal-right">
              <div className="modal-section">
                <h3><span className="material-symbols-outlined">menu_book</span>Overview</h3>
                <p>{project.description}</p>
                {project.details?.problem && (
                  <p className="modal-problem">
                    <strong>Challenge:</strong> {project.details.problem}
                  </p>
                )}
                {project.details?.solution && (
                  <p className="modal-solution">
                    <strong>Solution:</strong> {project.details.solution}
                  </p>
                )}
              </div>

              <div className="modal-section">
                <h3><span className="material-symbols-outlined">construction</span>Tech Stack</h3>
                <div className="modal-tags">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>

              {project.details?.challenges && (
                <div className="modal-section">
                  <h3><span className="material-symbols-outlined">psychology</span>Key Learnings</h3>
                  <ul className="modal-list">
                    {project.details.learnings?.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
