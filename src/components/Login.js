export function Login() {
  return `
    <div id="login-container" class="login-page">
      <div class="login-wrapper">
        <div class="login-box">
          <h1 class="login-title">Business Dashboard</h1>
          <p class="login-subtitle">Sign in to manage your business</p>

          <div class="auth-container">
            <!-- Email Login Form -->
            <div class="login-form">
              <h2>Sign In</h2>
              <form id="email-login-form">
                <div class="form-group">
                  <input type="email" id="login-email" placeholder="Email Address" required>
                </div>
                <div class="form-group">
                  <input type="password" id="login-password" placeholder="Password" required>
                </div>
                <button type="submit" class="btn-primary login-btn">Sign In</button>
              </form>

              <div class="divider">
                <span>OR</span>
              </div>

              <!-- OAuth Buttons -->
              <div class="oauth-buttons">
                <button type="button" class="oauth-btn github-btn" id="github-login-btn">
                  <i class="fa-brands fa-github"></i> Sign in with GitHub
                </button>
                <button type="button" class="oauth-btn google-btn" id="google-login-btn">
                  <i class="fa-brands fa-google"></i> Sign in with Google
                </button>
              </div>

              <p class="toggle-form">
                Don't have an account? <a href="#" class="toggle-link" data-form="signup">Sign Up</a>
              </p>
            </div>

            <!-- Sign Up Form -->
            <div class="signup-form" style="display: none;">
              <h2>Create Account</h2>
              <form id="email-signup-form">
                <div class="form-group">
                  <input type="text" id="signup-name" placeholder="Full Name" required>
                </div>
                <div class="form-group">
                  <input type="email" id="signup-email" placeholder="Email Address" required>
                </div>
                <div class="form-group">
                  <input type="password" id="signup-password" placeholder="Password" required>
                </div>
                <div class="form-group">
                  <input type="password" id="signup-confirm-password" placeholder="Confirm Password" required>
                </div>
                <button type="submit" class="btn-primary login-btn">Create Account</button>
              </form>

              <div class="divider">
                <span>OR</span>
              </div>

              <!-- OAuth Buttons for Signup -->
              <div class="oauth-buttons">
                <button type="button" class="oauth-btn github-btn" id="github-signup-btn">
                  <i class="fa-brands fa-github"></i> Sign up with GitHub
                </button>
                <button type="button" class="oauth-btn google-btn" id="google-signup-btn">
                  <i class="fa-brands fa-google"></i> Sign up with Google
                </button>
              </div>

              <p class="toggle-form">
                Already have an account? <a href="#" class="toggle-link" data-form="login">Sign In</a>
              </p>
            </div>
          </div>
        </div>

        <!-- Background Decoration -->
        <div class="login-bg">
          <div class="shape shape1"></div>
          <div class="shape shape2"></div>
          <div class="shape shape3"></div>
        </div>
      </div>
    </div>
  `;
}

export function initLoginHandlers() {
  // Toggle between login and signup forms
  const toggleLinks = document.querySelectorAll(".toggle-link");
  const loginForm = document.querySelector(".login-form");
  const signupForm = document.querySelector(".signup-form");

  toggleLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const form = e.target.dataset.form;
      
      if (form === "signup") {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
      } else {
        signupForm.style.display = "none";
        loginForm.style.display = "block";
      }
    });
  });

  // Email Login Handler
  const emailLoginForm = document.getElementById("email-login-form");
  if (emailLoginForm) {
    emailLoginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("login-email").value;
      const password = document.getElementById("login-password").value;

      try {
        const response = await fetch("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password })
        });

        if (response.ok) {
          const data = await response.json();
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          window.location.href = "#dashboard";
          location.reload();
        } else {
          alert("Invalid credentials");
        }
      } catch (error) {
        console.error("Login error:", error);
        alert("Login failed");
      }
    });
  }

  // Email Signup Handler
  const emailSignupForm = document.getElementById("email-signup-form");
  if (emailSignupForm) {
    emailSignupForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = document.getElementById("signup-name").value;
      const email = document.getElementById("signup-email").value;
      const password = document.getElementById("signup-password").value;
      const confirmPassword = document.getElementById("signup-confirm-password").value;

      if (password !== confirmPassword) {
        alert("Passwords don't match");
        return;
      }

      try {
        const response = await fetch("/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password })
        });

        if (response.ok) {
          const data = await response.json();
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          window.location.href = "#dashboard";
          location.reload();
        } else {
          alert("Signup failed");
        }
      } catch (error) {
        console.error("Signup error:", error);
        alert("Signup failed");
      }
    });
  }

  // GitHub OAuth Handler
  const githubLoginBtn = document.getElementById("github-login-btn");
  const githubSignupBtn = document.getElementById("github-signup-btn");
  if (githubLoginBtn) {
    githubLoginBtn.addEventListener("click", () => {
      const clientId = "your_github_client_id";
      const redirectUri = encodeURIComponent(window.location.origin + "/auth/github/callback");
      window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}`;
    });
  }
  if (githubSignupBtn) {
    githubSignupBtn.addEventListener("click", () => {
      const clientId = "your_github_client_id";
      const redirectUri = encodeURIComponent(window.location.origin + "/auth/github/callback");
      window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}`;
    });
  }

  // Google OAuth Handler
  const googleLoginBtn = document.getElementById("google-login-btn");
  const googleSignupBtn = document.getElementById("google-signup-btn");
  if (googleLoginBtn) {
    googleLoginBtn.addEventListener("click", () => {
      const clientId = "your_google_client_id";
      const redirectUri = encodeURIComponent(window.location.origin + "/auth/google/callback");
      window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=openid%20email%20profile`;
    });
  }
  if (googleSignupBtn) {
    googleSignupBtn.addEventListener("click", () => {
      const clientId = "your_google_client_id";
      const redirectUri = encodeURIComponent(window.location.origin + "/auth/google/callback");
      window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=openid%20email%20profile`;
    });
  }
}
