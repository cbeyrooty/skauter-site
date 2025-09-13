import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div dangerouslySetInnerHTML={{
        __html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Skauter - Albania's Gateway for Film Production</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,700;0,900;1,400&family=Playfair+Display:wght@400;500;600;700;900&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        :root {
            --albanian-red: #E41E20;
            --deep-black: #0A0A0A;
            --rich-black: #1A1A1A;
            --gold: #D4AF37;
            --bright-gold: #FFD700;
            --pale-gold: #F4E4C1;
            --silver: #E8E8E8;
            --cream: #FAF7F0;
        }
        
        html, body {
            height: 100%;
            width: 100%;
            overflow: hidden;
            background: var(--deep-black);
            font-family: 'Playfair Display', serif;
        }
        
        /* Main container - always full viewport */
        .container {
            height: 100vh;
            width: 100vw;
            min-height: 100vh;
            min-width: 100vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: fixed;
            top: 0;
            left: 0;
            background: 
                radial-gradient(ellipse at center, rgba(26, 26, 26, 1) 0%, var(--deep-black) 70%),
                var(--deep-black);
        }
        
        /* Responsive ornate border frame */
        .ornate-frame {
            position: absolute;
            top: min(40px, 3vh);
            left: min(40px, 3vw);
            right: min(40px, 3vw);
            bottom: min(40px, 3vh);
            border: 1px solid rgba(212, 175, 55, 0.3);
            pointer-events: none;
        }
        
        .ornate-frame::before {
            content: '';
            position: absolute;
            top: -5px;
            left: -5px;
            right: -5px;
            bottom: -5px;
            border: 2px solid rgba(212, 175, 55, 0.1);
        }
        
        /* Responsive heraldic corner flourishes */
        .flourish {
            position: absolute;
            width: min(150px, 12vw);
            height: min(150px, 12vw);
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 150'%3E%3Cg fill='none' stroke='%23D4AF37' stroke-width='1' opacity='0.5'%3E%3Cpath d='M10 10 Q30 10 30 30 Q10 30 10 50 Q30 50 30 70'/%3E%3Cpath d='M10 10 Q10 30 30 30 Q30 10 50 10 Q50 30 70 30'/%3E%3Ccircle cx='40' cy='40' r='3' fill='%23D4AF37'/%3E%3Cpath d='M5 5 L5 25 M5 5 L25 5'/%3E%3C/g%3E%3C/svg%3E");
            opacity: 0.6;
            background-size: contain;
        }
        
        .flourish-tl {
            top: min(30px, 2.5vh);
            left: min(30px, 2.5vw);
        }
        
        .flourish-tr {
            top: min(30px, 2.5vh);
            right: min(30px, 2.5vw);
            transform: rotate(90deg);
        }
        
        .flourish-bl {
            bottom: min(30px, 2.5vh);
            left: min(30px, 2.5vw);
            transform: rotate(-90deg);
        }
        
        .flourish-br {
            bottom: min(30px, 2.5vh);
            right: min(30px, 2.5vw);
            transform: rotate(180deg);
        }
        
        /* Central heraldic shield area */
        .heraldic-center {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            z-index: 10;
            width: 100%;
            max-width: 90vw;
        }
        
        /* Hidden eagle that appears on hover */
        .eagle-crest {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: min(450px, 40vw);
            height: min(350px, 30vw);
            opacity: 0;
            pointer-events: none;
            transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 1;
            background-image: url('https://customer-assets.emergentagent.com/job_regal-cinema/artifacts/qlkwn46v_11be3fccf281946e79f783aa66b566a3.png');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            filter: sepia(0.3) saturate(1.2) brightness(0.8) contrast(1.1);
        }
        
        .brand-container:hover .eagle-crest {
            opacity: 0.6;
        }
        
        /* Brand title container */
        .brand-container {
            position: relative;
            cursor: default;
            padding: min(2rem, 3vw) min(4rem, 6vw);
            width: 100%;
            display: flex;
            justify-content: center;
        }
        
        .brand-title {
            font-family: 'Bodoni Moda', serif;
            font-size: clamp(3rem, 12vw, 11rem);
            font-weight: 400;
            letter-spacing: clamp(0.04em, 0.08em, 0.12em);
            color: var(--silver);
            text-transform: uppercase;
            position: relative;
            z-index: 5;
            opacity: 0;
            animation: titleReveal 2s ease-out 0.5s forwards;
            transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            text-shadow: 0 2px 4px rgba(0,0,0,0.5);
            text-align: center;
            white-space: nowrap;
        }
        
        @keyframes titleReveal {
            0% {
                opacity: 0;
                letter-spacing: clamp(0.2em, 0.3em, 0.4em);
                transform: translateY(20px);
            }
            100% {
                opacity: 1;
                letter-spacing: clamp(0.04em, 0.08em, 0.12em);
                transform: translateY(0);
            }
        }
        
        /* Refined hover effect - sophisticated gold glow */
        .brand-container:hover .brand-title {
            color: var(--bright-gold);
            text-shadow: 
                0 0 10px rgba(255, 215, 0, 0.4),
                0 0 20px rgba(255, 215, 0, 0.3),
                0 0 30px rgba(255, 215, 0, 0.2),
                0 0 40px rgba(255, 215, 0, 0.1),
                0 4px 8px rgba(0,0,0,0.6),
                0 1px 0 rgba(255, 255, 255, 0.1);
            letter-spacing: clamp(0.08em, 0.12em, 0.16em);
        }
        
        /* Natural neon red glow background on hover */
        .brand-container::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 0;
            height: 0;
            background: 
                radial-gradient(
                    circle, 
                    rgba(255, 30, 30, 0.8) 0%, 
                    rgba(255, 50, 50, 0.6) 10%, 
                    rgba(228, 30, 32, 0.4) 20%, 
                    rgba(228, 30, 32, 0.2) 35%, 
                    rgba(200, 30, 32, 0.1) 50%, 
                    rgba(150, 20, 25, 0.05) 70%, 
                    transparent 100%
                );
            transition: all 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            z-index: 0;
            border-radius: 50%;
            filter: blur(3px);
        }
        
        .brand-container:hover::before {
            width: min(800px, 80vw);
            height: min(600px, 60vh);
            filter: blur(8px);
        }
        
        /* Responsive ornate decorative lines */
        .ornate-line {
            position: absolute;
            top: 50%;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.6) 20%, rgba(212, 175, 55, 0.8) 50%, rgba(212, 175, 55, 0.6) 80%, transparent);
            opacity: 0;
            transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .ornate-line-left {
            right: 100%;
            width: min(140px, 12vw);
            transform: translateY(-50%);
        }
        
        .ornate-line-right {
            left: 100%;
            width: min(140px, 12vw);
            transform: translateY(-50%);
        }
        
        .brand-container:hover .ornate-line {
            opacity: 0.9;
            box-shadow: 0 0 8px rgba(212, 175, 55, 0.3);
        }
        
        .brand-container:hover .ornate-line-left {
            transform: translateY(-50%) translateX(min(-25px, -2vw));
        }
        
        .brand-container:hover .ornate-line-right {
            transform: translateY(-50%) translateX(min(25px, 2vw));
        }
        
        /* Crown ornament above title - REMOVED FROM HOVER */
        .crown-ornament {
            position: absolute;
            top: -50px;
            left: 50%;
            transform: translateX(-50%);
            width: 90px;
            height: 45px;
            opacity: 0;
            transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s;
            filter: drop-shadow(0 0 4px rgba(212, 175, 55, 0.4));
            pointer-events: none;
        }
        
        /* Crown will NOT appear on hover */
        
        /* Responsive tagline */
        .tagline {
            margin-top: clamp(0.2rem, 1vw, 0.5rem);
            font-size: clamp(1rem, 2.5vw, 1.9rem);
            font-weight: 400;
            letter-spacing: clamp(0.08em, 0.15em, 0.2em);
            color: rgba(244, 228, 193, 0.9);
            opacity: 0;
            animation: fadeIn 1.5s ease-out 1.2s forwards;
            text-align: center;
            max-width: 90vw;
            line-height: 1.3;
        }
        
        /* Responsive services */
        .services {
            margin-top: clamp(0.1rem, 0.5vw, 0.3rem);
            font-size: clamp(0.7rem, 1.8vw, 1.3rem);
            letter-spacing: clamp(0.2em, 0.4em, 0.6em);
            text-transform: uppercase;
            color: var(--gold);
            opacity: 0;
            animation: fadeIn 1.5s ease-out 1.5s forwards;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            max-width: 90vw;
        }
        
        .service-divider {
            margin: 0 clamp(0.5rem, 1.5vw, 1.5rem);
            color: rgba(212, 175, 55, 0.6);
            font-size: 0.8em;
        }
        
        /* Responsive footer */
        .footer {
            position: absolute;
            bottom: min(60px, 8vh);
            text-align: center;
            z-index: 10;
            opacity: 0;
            animation: fadeIn 1.5s ease-out 2s forwards;
            width: 100%;
        }
        
        .contact-email {
            font-size: clamp(0.9rem, 2vw, 1.5rem);
            color: rgba(244, 228, 193, 0.8);
            text-decoration: none;
            letter-spacing: clamp(0.04em, 0.08em, 0.12em);
            transition: all 0.4s ease;
            display: inline-block;
            position: relative;
        }
        
        .contact-email::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0;
            height: 1px;
            background: var(--gold);
            transition: width 0.4s ease;
        }
        
        .contact-email:hover {
            color: var(--gold);
            transform: translateY(-2px);
        }
        
        .contact-email:hover::after {
            width: 100%;
        }
        
        /* Decorative pattern overlay */
        .pattern-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.03;
            pointer-events: none;
            background-image: 
                repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(212, 175, 55, 0.5) 35px, rgba(212, 175, 55, 0.5) 70px),
                repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(212, 175, 55, 0.5) 35px, rgba(212, 175, 55, 0.5) 70px);
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        /* Mobile-first responsive breakpoints */
        @media (max-width: 480px) {
            .brand-title {
                font-size: clamp(2.5rem, 15vw, 4rem);
                letter-spacing: clamp(0.02em, 0.06em, 0.08em);
            }
            
            .brand-container:hover .brand-title {
                letter-spacing: clamp(0.04em, 0.08em, 0.1em);
            }
            
            .tagline {
                font-size: clamp(0.9rem, 4vw, 1.2rem);
                margin-top: clamp(0.3rem, 2vw, 0.5rem);
                line-height: 1.4;
            }
            
            .services {
                font-size: clamp(0.6rem, 3vw, 0.9rem);
                letter-spacing: clamp(0.15em, 0.3em, 0.4em);
                margin-top: clamp(0.2rem, 1vw, 0.3rem);
            }
            
            .service-divider {
                margin: 0 clamp(0.3rem, 2vw, 0.8rem);
            }
            
            .contact-email {
                font-size: clamp(0.8rem, 3.5vw, 1.1rem);
            }
            
            .eagle-crest {
                width: min(280px, 70vw);
                height: min(220px, 55vw);
            }
            
            .brand-container::before {
                filter: blur(2px);
            }
            
            .brand-container:hover::before {
                width: min(600px, 90vw);
                height: min(400px, 70vh);
                filter: blur(6px);
            }
        }
        
        @media (min-width: 481px) and (max-width: 768px) {
            .brand-title {
                font-size: clamp(3.5rem, 12vw, 6rem);
            }
            
            .tagline {
                font-size: clamp(1.1rem, 3vw, 1.5rem);
            }
            
            .services {
                font-size: clamp(0.8rem, 2.5vw, 1.1rem);
            }
            
            .eagle-crest {
                width: min(350px, 50vw);
                height: min(270px, 40vw);
            }
        }
        
        @media (min-width: 769px) and (max-width: 1024px) {
            .brand-title {
                font-size: clamp(4rem, 10vw, 8rem);
            }
        }
        
        @media (min-width: 1025px) {
            .brand-title {
                font-size: clamp(6rem, 8vw, 11rem);
            }
        }
        
        /* Landscape mobile orientation */
        @media (orientation: landscape) and (max-height: 500px) {
            .brand-title {
                font-size: clamp(2rem, 8vh, 4rem);
            }
            
            .tagline {
                font-size: clamp(0.8rem, 3vh, 1.2rem);
                margin-top: clamp(0.2rem, 1vh, 0.3rem);
            }
            
            .services {
                font-size: clamp(0.6rem, 2.5vh, 1rem);
                margin-top: clamp(0.1rem, 0.5vh, 0.2rem);
            }
            
            .footer {
                bottom: min(30px, 4vh);
            }
        }
        
        /* Ultra-wide screens */
        @media (min-width: 1920px) {
            .brand-title {
                font-size: clamp(8rem, 6vw, 12rem);
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Pattern overlay -->
        <div class="pattern-overlay"></div>
        
        <!-- Ornate frame -->
        <div class="ornate-frame"></div>
        
        <!-- Corner flourishes -->
        <div class="flourish flourish-tl"></div>
        <div class="flourish flourish-tr"></div>
        <div class="flourish flourish-bl"></div>
        <div class="flourish flourish-br"></div>
        
        <!-- Central heraldic content -->
        <div class="heraldic-center">
            <div class="brand-container">
                <!-- Custom eagle image that appears on hover -->
                <div class="eagle-crest"></div>
                
                <!-- Crown ornament - HIDDEN, no longer appears on hover -->
                <div class="crown-ornament">
                    <svg viewBox="0 0 90 45" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" stroke="#D4AF37" stroke-width="1">
                            <path d="M10 35 L20 12 L30 28 L45 8 L60 28 L70 12 L80 35 Z"/>
                            <circle cx="20" cy="12" r="3" fill="#D4AF37"/>
                            <circle cx="45" cy="8" r="4" fill="#D4AF37"/>
                            <circle cx="70" cy="12" r="3" fill="#D4AF37"/>
                        </g>
                    </svg>
                </div>
                
                <!-- Decorative lines -->
                <div class="ornate-line ornate-line-left"></div>
                <div class="ornate-line ornate-line-right"></div>
                
                <!-- Main title -->
                <h1 class="brand-title">Skauter</h1>
            </div>
            
            <p class="tagline">Albania's Gateway for Film Production</p>
            
            <div class="services">
                <span>LOCATIONS</span>
                <span class="service-divider">•</span>
                <span>SERVICES</span>
                <span class="service-divider">•</span>
                <span>LOGISTICS</span>
            </div>
        </div>
        
        <!-- Footer -->
        <footer class="footer">
            <a href="mailto:hello@skauter.al" class="contact-email">hello@skauter.al</a>
        </footer>
    </div>
    
    <script>
        // Enhanced responsive parallax on mouse move
        document.addEventListener('DOMContentLoaded', function() {
            const container = document.querySelector('.container');
            const eagle = document.querySelector('.eagle-crest');
            
            container.addEventListener('mousemove', (e) => {
                // Reduced parallax movement for mobile
                const isMobile = window.innerWidth <= 768;
                const multiplier = isMobile ? 4 : 8;
                
                const x = (e.clientX / window.innerWidth - 0.5) * multiplier;
                const y = (e.clientY / window.innerHeight - 0.5) * multiplier;
                
                if (eagle) {
                    eagle.style.transform = \`translate(calc(-50% + \${x}px), calc(-50% + \${y}px))\`;
                }
            });
            
            // Handle window resize to maintain proper layout
            window.addEventListener('resize', function() {
                // Force recalculation of viewport units
                document.documentElement.style.setProperty('--vh', \`\${window.innerHeight * 0.01}px\`);
            });
        });
    </script>
</body>
</html>
        `
      }} />
    </div>
  );
}

export default App;