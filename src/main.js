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
