import cyberImg from "../assets/cybersecurity.jpg";
import webdevImg from "../assets/webiste developer.jpg";
import attackerImg from "../assets/attacker and diffender.jpg";

export function Blogs() {
  return `
    <section id="blogs" class="blogs-section">
      <h2 class="section-title">My <span class="highlight-purple">Blogs</span></h2>
      <div class="blogs-grid">
        <!-- Blog Card 1 -->
        <article class="blog-card">
          <div class="blog-image"><img src="${cyberImg}" alt="Cyber Security" style="width: 100%; height: 100%; object-fit: cover;"></div>
          <div class="blog-content">
            <span class="blog-date">March 10, 2025</span>
            <h3 class="blog-title">Cyber Security Beginner</h3>
            <p class="blog-summary">I just started my cyber security journey on 2025/03/10, discovering how to understand and protect systems.</p>
            <a href="#" class="read-more">Read More <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </article>

        <!-- Blog Card 2 -->
        <article class="blog-card">
          <div class="blog-image"><img src="${webdevImg}" alt="Website Developer" style="width: 100%; height: 100%; object-fit: cover;"></div>
          <div class="blog-content">
            <span class="blog-date">March 10, 2025</span>
            <h3 class="blog-title">Website Developer</h3>
            <p class="blog-summary">I just started my journey as a website developer on 2025/03/10, learning to build cool things for the web.</p>
            <a href="#" class="read-more">Read More <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </article>

        <!-- Blog Card 3 -->
        <article class="blog-card">
          <div class="blog-image"><img src="${attackerImg}" alt="Attacker and Defender" style="width: 100%; height: 100%; object-fit: cover;"></div>
          <div class="blog-content">
            <span class="blog-date">March 10, 2025</span>
            <h3 class="blog-title">Attacker and Defender</h3>
            <p class="blog-summary">Exploring the roles of attackers and defenders in cybersecurity. I just started learning this on 2025/03/10!</p>
            <a href="#" class="read-more">Read More <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </article>
      </div>
    </section>
  `;
}
