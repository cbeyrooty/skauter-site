import React, { useEffect, useState } from 'react';
import { Mail } from 'lucide-react';

const SkauerLanding = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showElements, setShowElements] = useState(false);

  useEffect(() => {
    // Trigger initial load animation
    setTimeout(() => setIsLoaded(true), 500);
    setTimeout(() => setShowElements(true), 1200);
  }, []);

  return (
    <div className="skauter-landing">
      {/* Ornate Background Elements */}
      <div className="background-container">
        {/* Multiple layered Albanian motifs */}
        <div className="eagle-ornament eagle-primary"></div>
        <div className="eagle-ornament eagle-secondary"></div>
        <div className="geometric-pattern pattern-left"></div>
        <div className="geometric-pattern pattern-right"></div>
        <div className="decorative-border border-top"></div>
        <div className="decorative-border border-bottom"></div>
        <div className="ornate-corners">
          <div className="corner corner-tl"></div>
          <div className="corner corner-tr"></div>
          <div className="corner corner-bl"></div>
          <div className="corner corner-br"></div>
        </div>
        <div className="texture-overlay"></div>
      </div>
      
      {/* Main Content */}
      <div className="main-content">
        {/* Central Brand Section */}
        <div className="brand-section">
          <h1 className={`brand-name ${isLoaded ? 'fade-in' : ''}`}>
            <span className="brand-letter">S</span>
            <span className="brand-letter">k</span>
            <span className="brand-letter">a</span>
            <span className="brand-letter">u</span>
            <span className="brand-letter">t</span>
            <span className="brand-letter">e</span>
            <span className="brand-letter">r</span>
          </h1>
          
          <div className={`tagline-container ${showElements ? 'fade-in' : ''}`}>
            <p className="main-tagline">Albania's Gateway for Film Production</p>
            <div className="ornate-divider">
              <div className="divider-line"></div>
              <div className="divider-ornament"></div>
              <div className="divider-line"></div>
            </div>
            <p className="sub-tagline">Locations • Services • Logistics</p>
          </div>
        </div>

        {/* Contact Information - Elegantly Positioned */}
        <div className={`contact-section ${showElements ? 'fade-in' : ''}`}>
          <div className="contact-ornament"></div>
          <div className="contact-info">
            <Mail className="mail-icon" size={18} />
            <a href="mailto:hello@skauter.al" className="email-link">
              hello@skauter.al
            </a>
          </div>
        </div>
      </div>

      {/* Floating Ornamental Elements */}
      <div className="floating-ornaments">
        <div className="float-element float-1"></div>
        <div className="float-element float-2"></div>
        <div className="float-element float-3"></div>
        <div className="float-element float-4"></div>
      </div>
    </div>
  );
};

export default SkauerLanding;