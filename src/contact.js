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
            <select name="countryCode" id="countryCode" required style="padding: 10px; border: 1px solid #666; border-radius: 8px; background-color: #1a1a1a; color: #fff; font-family: inherit; min-width: 100px;">
              <option value="">Select</option>
              <option value="+977">🇳🇵 +977</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+91">🇮🇳 +91</option>
              <option value="+92">🇵🇰 +92</option>
              <option value="+880">🇧🇩 +880</option>
              <option value="+886">🇹🇼 +886</option>
              <option value="+60">🇲🇾 +60</option>
              <option value="+62">🇮🇩 +62</option>
              <option value="+81">🇯🇵 +81</option>
              <option value="+86">🇨🇳 +86</option>
              <option value="+33">🇫🇷 +33</option>
              <option value="+49">🇩🇪 +49</option>
              <option value="+61">🇦🇺 +61</option>
            </select>
            <input type="tel" name="phone" placeholder="10-digit number" required pattern="[0-9]{10}" title="Phone number must be exactly 10 digits">
          </div>
          <div class="input-group">
            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          </div>
          <div class="verification-group">
            <div class="captcha-box">
              <span id="captchaQuestion">5 + 3 = ?</span>
              <input type="number" id="captchaAnswer" placeholder="Answer" required>
            </div>
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
      
      <!-- Bot Detection Modal -->
      <div id="botDetectionModal" class="bot-modal" style="display: none;">
        <div class="bot-modal-content">
          <h3>Human Verification Required</h3>
          <p>Click the emoji that matches the instruction:</p>
          <p id="emojiInstruction" style="font-weight: 600; color: var(--purple); margin: 15px 0;">Find the smiley face 😊</p>
          <div class="emoji-grid" id="emojiGrid">
            <!-- Emojis will be generated here -->
          </div>
          <p style="margin-top: 15px; font-size: 0.9rem; color: var(--text-secondary);">This helps us verify you're human</p>
        </div>
      </div>
    </section>
  `;
}