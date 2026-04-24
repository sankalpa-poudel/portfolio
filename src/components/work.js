import nftImg from "../assets/NFT.png";
import honeyCarImg from "../assets/honey car.png";
import dashboardImg from "../assets/dashboard ui.png";

const iconList = [
  "fa-solid fa-arrow-up-right-from-square",
  "fa-solid fa-arrow-right",
  "fa-solid fa-circle-arrow-right",
  "fa-solid fa-link"
];

let iconIndex = 0;

export function initIconRotation() {
  const workLinks = document.querySelectorAll(".work-link i");
  
  setInterval(() => {
    workLinks.forEach(icon => {
      icon.className = iconList[iconIndex];
    });
    iconIndex = (iconIndex + 1) % iconList.length;
  }, 1000);
}

export function Works() {
  return `
    <section id="works" class="works-section">
      <h2 class="section-title">My Recent <span class="highlight-purple">Works</span></h2>
      <p class="works-subtitle">Here are some of my recent design and development projects.</p>
      
      <div class="works-grid">
        <!-- Work Card 1 -->
        <div class="work-card">
          <div class="work-image"><img src="${dashboardImg}" alt="Fintech Dashboard" style="width: 100%; height: 100%; object-fit: cover;"></div>
          <div class="work-info">
            <h3 class="work-title">Fintech Dashboard</h3>
            <p class="work-desc">A dark-themed financial dashboard with real-time analytics and data visualization.</p>
            <div class="work-tags">
              <span class="work-tag">UI/UX</span>
              <span class="work-tag">React</span>
            </div>
            <a href="#" class="work-link" title="View Project"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
        </div>

        <!-- Work Card 2 -->
        <div class="work-card">
          <div class="work-image"><img src="${nftImg}" alt="NFT Marketplace" style="width: 100%; height: 100%; object-fit: cover;"></div>
          <div class="work-info">
            <h3 class="work-title">NFT Marketplace</h3>
            <p class="work-desc">A modern decentralized marketplace platform for minting and trading digital assets.</p>
            <div class="work-tags">
              <span class="work-tag">Web3</span>
              <span class="work-tag">Figma</span>
            </div>
            <a href="#" class="work-link" title="View Project"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
        </div>

        <!-- Work Card 3 -->
        <div class="work-card">
          <div class="work-image"><img src="${honeyCarImg}" alt="Honey Car" style="width: 100%; height: 100%; object-fit: cover;"></div>
          <div class="work-info">
            <h3 class="work-title">Honey Car</h3>
            <p class="work-desc">An innovative digital extension designed to provide seamless automotive tracking and an enhanced driving experience.</p>
            <div class="work-tags">
              <span class="work-tag">App Design</span>
              <span class="work-tag">Prototyping</span>
            </div>
            <a href="#" class="work-link" title="View Project"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
        </div>
      </div>
    </section>
  `;
}
