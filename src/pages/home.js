import "../style.css";
import personalImg from "../assets/personal image.png";
import backgroundVideo from "../assets/background-hd.mp4";
import { createNavbar, initNavbar } from "./navbar.js";
import { About } from "../components/About.js";
import { Blogs } from "../components/Blogs.js";
import { Contact } from "../contact.js";
import { initIconRotation } from "../components/work.js";
import { Works } from "../components/work.js";

const appContainer = document.querySelector("#app");

const sections = {
  home: `
    <section id="home" class="hero-section">
    <video class="hero-video" autoplay muted loop playsinline preload="auto">
      <source src="${backgroundVideo}" type="video/mp4">
      Your browser does not support HTML5 video.
    </video>
    
    <div class="hero-overlay"></div>
    
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
  `,
  about: About(),
  works: Works(),
  blogs: Blogs(),
  contact: Contact(),
};

appContainer.innerHTML = `
  ${createNavbar()}
  <main id="page-content"></main>
`;

window.currentPortfolioSection = 'home';
window.renderPortfolioSection = (sectionName) => {
  const pageContent = document.querySelector('#page-content');
  if (!pageContent) {
    return;
  }

  const normalizedSection = sections[sectionName] ? sectionName : 'home';
  pageContent.innerHTML = sections[normalizedSection];
  window.currentPortfolioSection = normalizedSection;

  if (normalizedSection === 'works') {
    initIconRotation();
  }
};

setTimeout(() => {
  initNavbar();
  initIconRotation();
  window.renderPortfolioSection('home');
}, 100);
