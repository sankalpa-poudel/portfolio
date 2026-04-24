import "./style.css";
import personalImg from "./assets/personal image.png";
import cvImg from "./assets/CV.png";
import introAudio from "./assets/self intoduction.mp3";
import { About } from "./components/About.js";
import { Blogs } from "./components/Blogs.js";
import { Works, initIconRotation } from "./components/work.js";
import { Contact } from "./contact.js";
import { Login, initLoginHandlers } from "./components/Login.js";
import { BusinessDashboard, initDashboardHandlers } from "./components/Dashboard.js";
import { isAuthenticated } from "./auth.js";

const appContainer = document.querySelector("#app");

// Check if user is authenticated
const authenticated = isAuthenticated();

if (authenticated) {
  // Show Dashboard
  appContainer.innerHTML = BusinessDashboard();
  
  // Initialize dashboard handlers
  setTimeout(() => {
    initDashboardHandlers();
  }, 100);
} else {
  // Show Login Page
  appContainer.innerHTML = Login();
  
  // Initialize login handlers
  setTimeout(() => {
    initLoginHandlers();
  }, 100);
}
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

// Initialize icon rotation in works section
initIconRotation();

// Contact form submission logic
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());
    
    // Validate human checkbox
    if (!data.humanVerify) {
      alert("Please check the 'I'm not a robot' box.");
      return;
    }
    
    // Remove humanVerify from data before sending
    delete data.humanVerify;
    
    // Validate name is not empty
    if (!data.name || data.name.trim() === "") {
      alert("Please enter your name.");
      return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    
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
