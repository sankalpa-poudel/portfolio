import "../style.css";
import { createNavbar, initNavbar } from "./navbar.js";
import { Contact } from "../contact.js";

const appContainer = document.querySelector("#app");

appContainer.innerHTML = `
  ${createNavbar()}
  ${Contact()}
`;

setTimeout(() => {
  initNavbar();
}, 100);
