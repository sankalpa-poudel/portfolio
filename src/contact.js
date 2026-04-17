export function Contact() {
  return `
    <section id="contact" class="contact-section">
      <h2 class="section-title">Let's <span class="highlight-purple">Connect</span></h2>
      <p class="works-subtitle">Feel free to reach out for collaborations or just a friendly hello.</p>
      
      <div class="contact-container">
        <form id="contactForm" class="contact-form">
          <div class="input-group">
            <input type="text" name="name" placeholder="Your Name" required>
          </div>
          <div class="input-group">
            <input type="email" name="email" placeholder="Your Email" required>
          </div>
          <div class="input-group">
            <input type="tel" name="phone" placeholder="Your Phone Number" required>
          </div>
          <div class="input-group">
            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" class="btn-primary" style="width: 100%;">Send Message</button>
        </form>
        
        <div class="contact-info">
          <div class="info-box">
            <i class="fa-solid fa-envelope highlight-purple-text"></i>
            <p>sankalpaeditz@gmail.com</p>
          </div>
          <div class="info-box">
            <i class="fa-solid fa-location-dot highlight-purple-text"></i>
            <p>Kathmandu, Nepal</p>
          </div>
          <div class="info-box">
            <i class="fa-solid fa-phone highlight-purple-text"></i>
            <p>+977 9767888231</p>
          </div>
        </div>
      </div>
    </section>
  `;
}