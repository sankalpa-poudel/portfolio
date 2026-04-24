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
    <div class="nav-content">
      <h1 class="logo">Sankalpa</h1>
      <ul class="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#works">Works</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
  
  <section id="hero" class="hero-section">
    <div class="hero-content">
      <img src="${personalImg}" alt="Personal" class="hero-image">
      <h1>Hi, I'm <span class="highlight-purple">Sankalpa</span></h1>
      <p>Full Stack Developer & Designer</p>
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
}, 100);
