import videoSrc from '../assets/background-about.mp4';

export function About() {
  return `
    <section id="about" class="about-section-with-video">
      <video autoplay muted loop class="about-video">
        <source src="${videoSrc}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div class="about-video-overlay"></div>
      <div class="about-content-wrapper container">
        <div class="about-content">
          <h2 class="section-title">About <span class="highlight-purple">Me</span></h2>
          <p class="about-text">
            Hi,! I am Sankalpa poudel . I am currently learning by Bachelor,s degree in Bachelor Of Science (HONOROURS) IN INFORMATION TECHNOLOGY 
            At techspire college and Affliated to Aisa pasafic University of Technology (APU) . I am passionate about cyber security and web development.
          </p>
          <div class="skills">
            <span class="skill-tag">Cyber Security</span>
            <span class="skill-tag">Web Development</span>
            <span class="skill-tag">HTML/CSS/JS</span>
            <span class="skill-tag">Penetration Testing</span>
            <span class="skill-tag">Ethical Hacking</span>
          </div>
        </div>
      </div>
    </section>
  `;
}
