import "../style.css";
import { createNavbar, initNavbar } from "./navbar.js";
import { Works, initIconRotation } from "../components/work.js";

const appContainer = document.querySelector("#app");

appContainer.innerHTML = `
  ${createNavbar()}
  ${Works()}
`;

setTimeout(() => {
  initNavbar();
  initIconRotation();
}, 100);
