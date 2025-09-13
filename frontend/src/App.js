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
            overflow: hidden;
            background: var(--deep-black);
            font-family: 'Playfair Display', serif;
        }
        
        /* Main container */
        .container {
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
            background: 
                radial-gradient(ellipse at center, rgba(26, 26, 26, 1) 0%, var(--deep-black) 70%),
                var(--deep-black);
        }
        
        /* Ornate border frame */
        .ornate-frame {
            position: absolute;
            top: 40px;
            left: 40px;
            right: 40px;
            bottom: 40px;
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
        
        /* Heraldic corner flourishes */
        .flourish {
            position: absolute;
            width: 150px;
            height: 150px;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 150'%3E%3Cg fill='none' stroke='%23D4AF37' stroke-width='1' opacity='0.5'%3E%3Cpath d='M10 10 Q30 10 30 30 Q10 30 10 50 Q30 50 30 70'/%3E%3Cpath d='M10 10 Q10 30 30 30 Q30 10 50 10 Q50 30 70 30'/%3E%3Ccircle cx='40' cy='40' r='3' fill='%23D4AF37'/%3E%3Cpath d='M5 5 L5 25 M5 5 L25 5'/%3E%3C/g%3E%3C/svg%3E");
            opacity: 0.6;
        }
        
        .flourish-tl {
            top: 30px;
            left: 30px;
        }
        
        .flourish-tr {
            top: 30px;
            right: 30px;
            transform: rotate(90deg);
        }
        
        .flourish-bl {
            bottom: 30px;
            left: 30px;
            transform: rotate(-90deg);
        }
        
        .flourish-br {
            bottom: 30px;
            right: 30px;
            transform: rotate(180deg);
        }
        
        /* Central heraldic shield area */
        .heraldic-center {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            z-index: 10;
        }
        
        /* Hidden eagle that appears on hover */
        .eagle-crest {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 400px;
            height: 300px;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.8s ease;
            z-index: 1;
            background-image: url('https://images.unsplash.com/photo-1635871663512-0ec97088cadb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxkb3VibGUlMjBoZWFkZWQlMjBlYWdsZXxlbnwwfHx8fDE3NTc3MzEwNDl8MA&ixlib=rb-4.1.0&q=85');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            filter: sepia(1) hue-rotate(30deg) saturate(0.8) brightness(0.7);
        }
        
        .brand-container:hover .eagle-crest {
            opacity: 0.4;
        }
        
        /* Brand title container */
        .brand-container {
            position: relative;
            cursor: default;
            padding: 2rem 4rem;
        }
        
        .brand-title {
            font-family: 'Bodoni Moda', serif;
            font-size: clamp(5rem, 14vw, 11rem);
            font-weight: 400;
            letter-spacing: 0.25em;
            color: var(--silver);
            text-transform: uppercase;
            position: relative;
            z-index: 5;
            opacity: 0;
            animation: titleReveal 2s ease-out 0.5s forwards;
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
            text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }
        
        @keyframes titleReveal {
            0% {
                opacity: 0;
                letter-spacing: 0.5em;
                transform: translateY(20px);
            }
            100% {
                opacity: 1;
                letter-spacing: 0.25em;
                transform: translateY(0);
            }
        }
        
        /* Hover effect - gold glow on letters */
        .brand-container:hover .brand-title {
            color: var(--bright-gold);
            text-shadow: 
                0 0 20px rgba(255, 215, 0, 0.8),
                0 0 40px rgba(255, 215, 0, 0.6),
                0 0 60px rgba(255, 215, 0, 0.4),
                0 2px 4px rgba(0,0,0,0.5);
        }
        
        /* Red glow background on hover */
        .brand-container::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 0;
            height: 0;
            background: radial-gradient(ellipse, rgba(228, 30, 32, 0.6), transparent 70%);
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 0;
            border-radius: 50%;
        }
        
        .brand-container:hover::before {
            width: 600px;
            height: 400px;
        }
        
        /* Ornate decorative lines */
        .ornate-line {
            position: absolute;
            top: 50%;
            height: 1px;
            background: linear-gradient(90deg, transparent, var(--gold) 20%, var(--gold) 80%, transparent);
            opacity: 0;
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .ornate-line-left {
            right: 100%;
            width: 120px;
            transform: translateY(-50%);
        }
        
        .ornate-line-right {
            left: 100%;
            width: 120px;
            transform: translateY(-50%);
        }
        
        .brand-container:hover .ornate-line {
            opacity: 0.8;
        }
        
        .brand-container:hover .ornate-line-left {
            transform: translateY(-50%) translateX(-20px);
        }
        
        .brand-container:hover .ornate-line-right {
            transform: translateY(-50%) translateX(20px);
        }
        
        /* Crown ornament above title */
        .crown-ornament {
            position: absolute;
            top: -40px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 40px;
            opacity: 0;
            transition: opacity 0.8s ease 0.3s;
        }
        
        .brand-container:hover .crown-ornament {
            opacity: 0.6;
        }
        
        /* Tagline */
        .tagline {
            margin-top: 2.5rem;
            font-size: clamp(1.3rem, 2.5vw, 1.9rem);
            font-weight: 400;
            letter-spacing: 0.15em;
            color: rgba(244, 228, 193, 0.9);
            opacity: 0;
            animation: fadeIn 1.5s ease-out 1.2s forwards;
            text-align: center;
        }
        
        /* Services - single line */
        .services {
            margin-top: 1.5rem;
            font-size: clamp(0.9rem, 1.8vw, 1.3rem);
            letter-spacing: 0.4em;
            text-transform: uppercase;
            color: var(--gold);
            opacity: 0;
            animation: fadeIn 1.5s ease-out 1.5s forwards;
            display: flex;
            align-items: center;
            white-space: nowrap;
        }
        
        .service-divider {
            margin: 0 1.5rem;
            color: rgba(212, 175, 55, 0.6);
            font-size: 0.8em;
        }
        
        /* Footer */
        .footer {
            position: absolute;
            bottom: 60px;
            text-align: center;
            z-index: 10;
            opacity: 0;
            animation: fadeIn 1.5s ease-out 2s forwards;
        }
        
        .contact-email {
            font-size: clamp(1.1rem, 2vw, 1.5rem);
            color: rgba(244, 228, 193, 0.8);
            text-decoration: none;
            letter-spacing: 0.08em;
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
        
        /* Responsive */
        @media (max-width: 768px) {
            .ornate-frame {
                top: 20px;
                left: 20px;
                right: 20px;
                bottom: 20px;
            }
            
            .flourish {
                width: 80px;
                height: 80px;
            }
            
            .flourish-tl { top: 10px; left: 10px; }
            .flourish-tr { top: 10px; right: 10px; }
            .flourish-bl { bottom: 10px; left: 10px; }
            .flourish-br { bottom: 10px; right: 10px; }
            
            .services {
                font-size: clamp(0.7rem, 2vw, 1rem);
            }
            
            .service-divider {
                margin: 0 0.8rem;
            }
            
            .brand-container {
                padding: 2rem;
            }
            
            .eagle-crest {
                width: 300px;
                height: 200px;
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
                <!-- Luxury eagle image that appears on hover -->
                <div class="eagle-crest"></div>
                
                <!-- Crown ornament -->
                <div class="crown-ornament">
                    <svg viewBox="0 0 80 40" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" stroke="#D4AF37" stroke-width="1">
                            <path d="M10 30 L20 10 L30 25 L40 5 L50 25 L60 10 L70 30 Z"/>
                            <circle cx="20" cy="10" r="3" fill="#D4AF37"/>
                            <circle cx="40" cy="5" r="4" fill="#D4AF37"/>
                            <circle cx="60" cy="10" r="3" fill="#D4AF37"/>
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
        // Subtle parallax on mouse move
        document.addEventListener('DOMContentLoaded', function() {
            const container = document.querySelector('.container');
            const eagle = document.querySelector('.eagle-crest');
            
            container.addEventListener('mousemove', (e) => {
                const x = (e.clientX / window.innerWidth - 0.5) * 10;
                const y = (e.clientY / window.innerHeight - 0.5) * 10;
                
                if (eagle) {
                    eagle.style.transform = \`translate(calc(-50% + \${x}px), calc(-50% + \${y}px))\`;
                }
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