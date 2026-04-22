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
          <div class="phone-input-group">
            <select name="countryCode" id="countryCode" required style="padding: 10px; border: 1px solid #666; border-radius: 8px; background-color: #1a1a1a; color: #fff; font-family: inherit; min-width: 120px;">
              <option value="">Select Country</option>
              <option value="+977">🇳🇵 Nepal (+977)</option>
              <option value="+1">🇺🇸 USA/Canada (+1)</option>
              <option value="+44">🇬🇧 UK (+44)</option>
              <option value="+91">🇮🇳 India (+91)</option>
              <option value="+92">🇵🇰 Pakistan (+92)</option>
              <option value="+880">🇧🇩 Bangladesh (+880)</option>
              <option value="+886">🇹🇼 Taiwan (+886)</option>
              <option value="+60">🇲🇾 Malaysia (+60)</option>
              <option value="+62">🇮🇩 Indonesia (+62)</option>
              <option value="+81">🇯🇵 Japan (+81)</option>
              <option value="+86">🇨🇳 China (+86)</option>
              <option value="+33">🇫🇷 France (+33)</option>
              <option value="+49">🇩🇪 Germany (+49)</option>
              <option value="+61">🇦🇺 Australia (+61)</option>
            </select>
            <input type="tel" name="phone" placeholder="Phone number (digits only)" required pattern="[0-9]+" title="Please enter only digits for the phone number">
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