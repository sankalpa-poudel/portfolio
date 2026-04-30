import "../style.css";
import backgroundVideo from "../assets/background 2.0.mp4";
import { createNavbar, initNavbar } from "./navbar.js";
import { About } from "../components/About.js";

const appContainer = document.querySelector("#app");

appContainer.innerHTML = `
  ${createNavbar()}
  
  <section id="about" class="about-section-with-video">
    <video class="about-video" autoplay muted loop playsinline preload="auto">
      <source src="${backgroundVideo}" type="video/mp4">
      Your browser does not support HTML5 video.
    </video>
    
    <div class="about-video-overlay"></div>
    
    <div class="about-content-wrapper">
      ${About()}
    </div>
  </section>
`;

setTimeout(() => {
  initNavbar();
}, 100);
