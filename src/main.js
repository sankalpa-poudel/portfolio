import "./style.css";
import personalImg from "./assets/personal image.png";
import cvImg from "./assets/CV.png";
import introAudio from "./assets/self intoduction.mp3";
import { About } from "./components/About.js";
import { Blogs } from "./components/Blogs.js";
import { Works } from "./components/work.js";
import { Contact } from "./contact.js";
document.querySelector("#app").innerHTML = `
  <div class="stars-container">
    <span class="shooting-star" style="left: 10%; animation-delay: 0s; animation-duration: 3s;"></span>
    <span class="shooting-star" style="left: 40%; animation-delay: 1.2s; animation-duration: 2.5s;"></span>
    <span class="shooting-star" style="left: 70%; animation-delay: 2.5s; animation-duration: 4s;"></span>
    <span class="shooting-star" style="left: 90%; animation-delay: 0.5s; animation-duration: 3.2s;"></span>
    <span class="shooting-star" style="left: 20%; animation-delay: 1.8s; animation-duration: 2.9s;"></span>
    <span class="shooting-star" style="left: 60%; animation-delay: 3.1s; animation-duration: 3.7s;"></span>
    <span class="shooting-star" style="left: 85%; animation-delay: 4s; animation-duration: 2.2s;"></span>
  </div>
  <div class="container">
    <header class="navbar">
      <div class="logo">
        <span class="logo-icon">S</span>
        <span class="logo-text">Sankalpa <span class="highlight-Blue">Poudel</span></span>
      </div>
      <nav class="nav-links">
        <a href="#about">About</a>
        <a href="#blogs">Blogs</a>
        <a href="#service">Service</a>
        <a href="#works">Works</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </nav>
      <a href="#contact" class="btn-primary" style="text-decoration: none;">Contact Me</a>
    </header>

    <main class="hero">
      <div class="hero-left">
        <p class="tagline">Sankalpa Poudel <i class="fa-solid fa-chevron-right"></i></p>
        <h1 class="hero-title">
          Product Designer <span class="highlight-purple">&</span><br>
          <span class="highlight-purple">visual Developer.</span>
        </h1>
        <p class="hero-desc">
          I specialize in UI/UX Design, Responsive Web Design,<br>
          and visual Development.
        </p>
        
        <div class="hero-buttons">
          <a href="${cvImg}" download="Sankalpa_Poudel_CV.png" class="btn-text highlight-purple-text">
            <i class="fa-solid fa-cloud-arrow-down"></i> Download CV
          </a>
          <a href="${cvImg}" target="_blank" class="btn-text highlight-purple-text">
            <i class="fa-solid fa-eye"></i> View CV
          </a>
          <button id="play-intro-btn" class="btn-text" style="background: none; border: none; cursor: pointer; padding: 0; outline: none;">
            <span class="play-icon"><i class="fa-solid fa-play"></i></span> Self Introduction
          </button>
          <audio id="intro-audio" src="${introAudio}"></audio>
        </div>

        <div class="stats">
          <div class="stat-box">
            <h2>1+</h2>
            <p>YEARS<br>EXPERIENCE</p>
          </div>
          <div class="stat-box">
            <h2>10+</h2>
            <p>PROJECTS<br>COMPLETED</p>
          </div>
        </div>
      </div>

      <div class="hero-right">
        <div class="image-wrapper">
          <div class="img-circle">
            <img src="${personalImg}" alt="Sankalpa Poudel" class="hero-img">
          </div>
          
          <div class="icon-orbit">
            <!-- Social Icons Group -->
            <div class="orbit-group social-group">
              <div class="float-icon pos-1 bg-yt"><i class="fa-brands fa-youtube"></i></div>
              <div class="float-icon pos-2 bg-fb"><i class="fa-brands fa-facebook-f"></i></div>
              <div class="float-icon pos-3 bg-messenger"><i class="fa-brands fa-facebook-messenger"></i></div>
              <div class="float-icon pos-4 bg-wa"><i class="fa-brands fa-whatsapp"></i></div>
              <div class="float-icon pos-5 bg-gg"><i class="fa-brands fa-google"></i></div>
              <div class="float-icon pos-6 bg-gh"><i class="fa-brands fa-github"></i></div>
            </div>
            <!-- Development Icons Group -->
            <div class="orbit-group dev-group">
              <div class="float-icon pos-1 bg-html"><i class="fa-brands fa-html5"></i></div>
              <div class="float-icon pos-2 bg-css"><i class="fa-brands fa-css3-alt"></i></div>
              <div class="float-icon pos-3 bg-js"><i class="fa-brands fa-js"></i></div>
              <div class="float-icon pos-4 bg-node"><i class="fa-brands fa-node-js"></i></div>
              <div class="float-icon pos-5 bg-react"><i class="fa-brands fa-react"></i></div>
              <div class="float-icon pos-6 bg-git"><i class="fa-brands fa-git-alt"></i></div>
            </div>
            <!-- Tools Icons Group -->
            <div class="orbit-group tool-group">
              <div class="float-icon pos-1 bg-vscode"><i class="fa-solid fa-code"></i></div>
              <div class="float-icon pos-2 bg-android"><i class="fa-brands fa-android"></i></div>
              <div class="float-icon pos-3 bg-intellij"><i class="fa-brands fa-java"></i></div>
              <div class="float-icon pos-4 bg-figma"><i class="fa-brands fa-figma"></i></div>
              <div class="float-icon pos-5 bg-docker"><i class="fa-brands fa-docker"></i></div>
              <div class="float-icon pos-6 bg-npm"><i class="fa-brands fa-npm"></i></div>
            </div>
          </div>
        </div>
      </div>
    </main>

    ${Works()}
    ${About()}
    ${Blogs()}
    ${Contact()}

    <footer class="brands">
      <div class="brand">fiverr</div>
      <div class="brand">freelancer</div>
      <div class="brand highlight-green">upwork</div>
      <div class="brand">peopleperhour</div>
      <div class="brand">99designs</div>
    </footer>
  </div>
`;

// Audio play logic
const playBtn = document.getElementById("play-intro-btn");
const introAudioEl = document.getElementById("intro-audio");

if (playBtn && introAudioEl) {
  playBtn.addEventListener("click", () => {
    if (introAudioEl.paused) {
      introAudioEl.play();
      playBtn.querySelector("i").classList.remove("fa-play");
      playBtn.querySelector("i").classList.add("fa-pause");
    } else {
      introAudioEl.pause();
      playBtn.querySelector("i").classList.remove("fa-pause");
      playBtn.querySelector("i").classList.add("fa-play");
    }
  });

  introAudioEl.addEventListener("ended", () => {
    playBtn.querySelector("i").classList.remove("fa-pause");
    playBtn.querySelector("i").classList.add("fa-play");
  });
}

// Contact form submission logic
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());
    
    // Validate country code is selected
    if (!data.countryCode) {
      alert("Please select a country code.");
      return;
    }
    
    // Validate phone number is not empty
    if (!data.phone || data.phone.trim() === "") {
      alert("Please enter a phone number.");
      return;
    }
    
    // Validate phone number has only digits
    if (!/^\d+$/.test(data.phone)) {
      alert("Phone number must contain only digits.");
      return;
    }
    
    // Validate phone number is exactly 10 digits
    if (data.phone.length !== 10) {
      alert("Phone number must be exactly 10 digits.");
      return;
    }
    
    // Combine country code with phone number
    const fullPhone = data.countryCode + data.phone;
    data.phone = fullPhone;
    
    // Remove the separate countryCode field as it's now combined
    delete data.countryCode;
    
    try {
      const BASE_URL = "https://sankalpa-backend-1d5u.onrender.com";
      const response = await fetch(`${BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        alert(result.message); // Successful submission
        contactForm.reset();   // Clear all inputs
      } else {
        alert(result.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("Failed to connect to the backend server. Make sure it is running.");
    }
  });
}
