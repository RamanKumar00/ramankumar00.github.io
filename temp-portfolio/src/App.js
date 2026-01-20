import React, { useEffect, useState } from 'react'; // Rebuild trigger
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');


  // Use refs for mutable state that shouldn't trigger re-renders/re-effects
  const isScrollingRef = React.useRef(false);

  // Wrapper to set active section and handle scroll lock
  const handleSetActiveSection = (sectionId) => {
    setActiveSection(sectionId);
    isScrollingRef.current = true;
    // Allow scroll-spy to resume after scroll animation completes
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000);
  };

  useEffect(() => {
    if (isLoading) return;

    // Smooth scroll behavior (unchanged)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
      observer.observe(el);
    });

    // Scroll Spy for active nav link
    const sections = document.querySelectorAll('section[id]');
    const scrollSpyObserver = new IntersectionObserver((entries) => {
      // Check ref instead of state
      if (isScrollingRef.current) return;
      
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: [0.1, 0.2, 0.3], rootMargin: '-100px 0px -30% 0px' });

    sections.forEach(section => {
      scrollSpyObserver.observe(section);
    });

    // Parallax effect on scroll
    const parallaxElements = document.querySelectorAll('.parallax-slow, .parallax-medium, .parallax-fast');
    const bgElements = document.querySelector('.bg-elements');
    let ticking = false;

    const handleParallax = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          
          parallaxElements.forEach(el => {
            let speed = 0.1;
            if (el.classList.contains('parallax-medium')) speed = 0.2;
            if (el.classList.contains('parallax-fast')) speed = 0.3;
            
            el.style.transform = `translateY(${scrollY * speed}px)`;
          });

          // Update background grid position
          if (bgElements) {
            bgElements.style.transform = `translateY(${scrollY * 0.05}px)`;
          }
          
          ticking = false;
        });
        
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleParallax, { passive: true });

    return () => {
      observer.disconnect();
      scrollSpyObserver.disconnect();
      window.removeEventListener('scroll', handleParallax);
    };
  }, [isLoading]); // Removed isScrolling dependency

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="App">
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <CustomCursor />
      <Navbar activeSection={activeSection} setActiveSection={handleSetActiveSection} />
      <Home />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
