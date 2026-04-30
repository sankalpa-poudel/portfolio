import "./style.css";
import personalImg from "./assets/personal image.png";
import cvImg from "./assets/CV.png";
import introAudio from "./assets/self intoduction.mp3";
import { About } from "./components/About.js";
import { Blogs } from "./components/Blogs.js";
import { Works, initIconRotation } from "./components/work.js";
import { Contact } from "./contact.js";

const appContainer = document.querySelector("#app");

// Show Portfolio
appContainer.innerHTML = `
  <nav class="navbar">
    <div class="container">
      <div class="nav-content">
        <div class="logo">
          <span class="logo-icon">S</span>
          <span>Sankalpa</span>
        </div>
        <ul class="nav-links">
          <li><a href="#hero" class="nav-link">Home</a></li>
          <li><a href="#about" class="nav-link">About</a></li>
          <li><a href="#works" class="nav-link">Works</a></li>
          <li><a href="#blogs" class="nav-link">Blogs</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
        <div class="nav-actions">
          <button class="btn-cv" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
            <i class="fas fa-download"></i> CV
          </button>
        </div>
        <button class="hamburger" id="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </nav>
  
  <section id="hero" class="hero-section">
    <div class="hero-content">
      <div class="hero-copy">
        <h1>Hi, I'm <span class="highlight-purple">Sankalpa</span></h1>
        <p>Full Stack Developer & Designer</p>
      </div>
      <div class="hero-avatar-wrap">
        <img src="${personalImg}" alt="Personal profile photo" class="hero-image">
      </div>
    </div>
  </section>
  
  ${About()}
  ${Works()}
  ${Blogs()}
  ${Contact()}
`;

// Initialize features
setTimeout(() => {
  initIconRotation();
  
  // Smooth scrolling and active link highlighting
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const hamburger = document.getElementById('hamburger');
  const navLinksContainer = document.querySelector('.nav-links');
  
  // Hamburger menu toggle
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinksContainer.classList.toggle('active');
    });
    
    // Close menu when link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinksContainer.classList.remove('active');
      });
    });
  }
  
  // Smooth scroll to sections
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      if (targetId === '#hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
  
  // Active link highlighting on scroll
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });
  });
}, 100);
