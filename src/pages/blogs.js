import "../style.css";
import { createNavbar, initNavbar } from "./navbar.js";
import { Blogs } from "../components/Blogs.js";

const appContainer = document.querySelector("#app");

appContainer.innerHTML = `
  ${createNavbar()}
  ${Blogs()}
`;

setTimeout(() => {
  initNavbar();
}, 100);
