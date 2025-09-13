import React, { useEffect, useState } from 'react';
import { Mail } from 'lucide-react';

const SkauerLanding = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showTagline, setShowTagline] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    // Trigger initial load animation
    setTimeout(() => setIsLoaded(true), 300);
    
    // Stagger the appearance of elements
    setTimeout(() => setShowTagline(true), 1200);
    setTimeout(() => setShowFooter(true), 1800);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const rate = scrolled * -0.5;
      
      // Parallax effect for background elements
      const eagle = document.querySelector('.eagle-bg');
      const ornaments = document.querySelector('.ornate-bg');
      
      if (eagle) {
        eagle.style.transform = `translateY(${rate}px) scale(1.1)`;
      }
      if (ornaments) {
        ornaments.style.transform = `translateY(${rate * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="skauter-landing">
      {/* Hero Section */}
      <section className="hero-section">
        {/* Background Elements */}
        <div className="background-container">
          <div className="eagle-bg"></div>
          <div className="ornate-bg"></div>
          <div className="texture-overlay"></div>
        </div>
        
        {/* Main Content */}
        <div className="hero-content">
          <h1 className={`brand-name ${isLoaded ? 'fade-in' : ''}`}>
            Skauter
          </h1>
          
          <div className={`tagline-container ${showTagline ? 'fade-in' : ''}`}>
            <p className="main-tagline">Albania's Gateway for Film Production</p>
            <p className="sub-tagline">Locations • Services • Logistics</p>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Statement Section */}
      <section className="statement-section">
        <div className="statement-container">
          <h2 className="statement-text">
            Introducing Albania's film tax incentive. 
            <span className="statement-highlight"> Skauter is your partner</span> for bringing 
            global stories to Balkan landscapes.
          </h2>
        </div>
      </section>

      {/* Footer Section */}
      <footer className={`footer-section ${showFooter ? 'fade-in' : ''}`}>
        <div className="footer-content">
          <div className="contact-info">
            <Mail className="mail-icon" size={20} />
            <a href="mailto:hello@skauter.al" className="email-link">
              hello@skauter.al
            </a>
          </div>
          <p className="coming-soon">Catalogue Coming Soon</p>
        </div>
      </footer>
    </div>
  );
};

export default SkauerLanding;