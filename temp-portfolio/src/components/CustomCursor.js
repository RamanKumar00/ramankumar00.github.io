import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  
  const dotRef = React.useRef(null);
  const ringRef = React.useRef(null);
  const requestRef = React.useRef(null);
  const cursorRef = React.useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
      
      if (!requestRef.current) {
        requestRef.current = requestAnimationFrame(() => {
          if (dotRef.current && ringRef.current) {
            dotRef.current.style.transform = `translate3d(${cursorRef.current.x}px, ${cursorRef.current.y}px, 0) translate(-50%, -50%)`;
            ringRef.current.style.transform = `translate3d(${cursorRef.current.x}px, ${cursorRef.current.y}px, 0) translate(-50%, -50%)`;
          }
          requestRef.current = null;
        });
      }
    };

    const updateCursor = (e) => {
      const target = e.target;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('clickable') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsPointer(isClickable);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', updateCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', updateCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // Don't show on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <>
      <div 
        ref={dotRef}
        className={`custom-cursor-dot ${isPointer ? 'pointer' : ''} ${isHidden ? 'hidden' : ''} ${isClicking ? 'clicking' : ''}`}
        style={{ left: 0, top: 0, transform: 'translate(-50%, -50%)' }} // Initial position
      />
      
      <div 
        ref={ringRef}
        className={`custom-cursor-ring ${isPointer ? 'pointer' : ''} ${isHidden ? 'hidden' : ''} ${isClicking ? 'clicking' : ''}`}
        style={{ left: 0, top: 0, transform: 'translate(-50%, -50%)' }} // Initial position
      />
    </>
  );
};

export default CustomCursor;
