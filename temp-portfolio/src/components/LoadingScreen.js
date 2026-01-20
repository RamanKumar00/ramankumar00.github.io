import React, { useState, useEffect, useMemo } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING SYSTEM...');
  const [isComplete, setIsComplete] = useState(false);

  const statusMessages = useMemo(() => [
    'INITIALIZING SYSTEM...',
    'LOADING CORE MODULES...',
    'ESTABLISHING NEURAL LINK...',
    'CALIBRATING INTERFACE...',
    'SYNCHRONIZING DATA...',
    'ACTIVATING PROTOCOLS...',
    'SYSTEM READY'
  ], []);

  useEffect(() => {
    const duration = 2500; // Total loading time in ms
    const interval = 30;
    const steps = duration / interval;
    const increment = 100 / steps;

    let currentProgress = 0;
    
    const timer = setInterval(() => {
      currentProgress += increment;
      
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(timer);
        setProgress(100);
        setStatusText('SYSTEM READY');
        setIsComplete(true);
        
        // Delay before hiding
        setTimeout(() => {
          onLoadingComplete();
        }, 500);
      } else {
        setProgress(Math.min(currentProgress, 100));
        
        // Update status text based on progress
        const messageIndex = Math.min(
          Math.floor((currentProgress / 100) * statusMessages.length),
          statusMessages.length - 1
        );
        setStatusText(statusMessages[messageIndex]);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete, statusMessages]);

  return (
    <div className={`loading-screen ${isComplete ? 'fade-out' : ''}`}>
      {/* Background Grid */}
      <div className="loading-grid"></div>
      
      {/* Glow Orbs */}
      <div className="loading-orb loading-orb-1"></div>
      <div className="loading-orb loading-orb-2"></div>

      {/* Main Content */}
      <div className="loading-content">
        {/* Logo */}
        <div className="loading-logo">
          <div className="loading-reactor">
            <div className="reactor-ring reactor-ring-1"></div>
            <div className="reactor-ring reactor-ring-2"></div>
            <div className="reactor-ring reactor-ring-3"></div>
            <div className="reactor-center">
              <span className="material-symbols-outlined">token</span>
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="loading-title">RAMO.DEV</h1>
        
        {/* Status Text */}
        <p className="loading-status">{statusText}</p>

        {/* Progress Bar */}
        <div className="loading-progress-container">
          <div className="loading-progress-bar">
            <div 
              className="loading-progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="loading-progress-text">{Math.round(progress)}%</span>
        </div>

        {/* Boot Sequence Text */}
        <div className="loading-boot-text">
          <span className="boot-line">&gt; Booting JARVIS Interface...</span>
          <span className="boot-line">&gt; Loading portfolio modules...</span>
          <span className="boot-line blink">&gt; _</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
