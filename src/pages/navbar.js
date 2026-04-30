export function createNavbar() {
  return `
    <nav class="navbar">
      <div class="container">
        <div class="nav-content">
          <div class="logo" onclick="window.location.href='index.html'">
            <span class="logo-icon">S</span>
            <span>Sankalpa</span>
          </div>
          <ul class="nav-links">
            <li><a href="#home" class="nav-link" data-section="home">Home</a></li>
            <li><a href="#about" class="nav-link" data-section="about">About</a></li>
            <li><a href="#works" class="nav-link" data-section="works">Works</a></li>
            <li><a href="#blogs" class="nav-link" data-section="blogs">Blogs</a></li>
            <li><a href="#contact" class="nav-link" data-section="contact">Contact</a></li>
          </ul>
          <div class="nav-actions">
            <button class="btn-cv" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
              <i class="fas fa-download"></i> CV
            </button>
          </div>
          <button class="hamburger" id="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  `;
}

export function initNavbar() {
  const hamburger = document.getElementById('hamburger');
  const navLinksContainer = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-link');
  const setActiveLink = (sectionName) => {
    navLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.section === sectionName);
    });
  };
  
  // Hamburger menu toggle
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinksContainer.classList.toggle('active');
    });
    
    // Close menu when link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinksContainer.classList.remove('active');
      });
    });
  }
  
  const initialSection = window.currentPortfolioSection || 'home';
  setActiveLink(initialSection);

  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const sectionName = link.dataset.section || 'home';

      if (typeof window.renderPortfolioSection === 'function') {
        window.renderPortfolioSection(sectionName);
        setActiveLink(sectionName);
        window.currentPortfolioSection = sectionName;
      }
    });
  });
}
