export function BusinessDashboard() {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  
  return `
    <div id="dashboard-container" class="dashboard-page">
      <div class="dashboard-sidebar">
        <div class="sidebar-header">
          <h2 class="sidebar-title">Business Dashboard</h2>
          <button class="sidebar-toggle" id="sidebar-toggle">
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>

        <nav class="sidebar-menu">
          <a href="#" class="menu-item active" data-section="overview">
            <i class="fa-solid fa-chart-line"></i> Overview
          </a>
          <a href="#" class="menu-item" data-section="analytics">
            <i class="fa-solid fa-chart-pie"></i> Analytics
          </a>
          <a href="#" class="menu-item" data-section="sales">
            <i class="fa-solid fa-cart-shopping"></i> Sales
          </a>
          <a href="#" class="menu-item" data-section="customers">
            <i class="fa-solid fa-users"></i> Customers
          </a>
          <a href="#" class="menu-item" data-section="reports">
            <i class="fa-solid fa-file-lines"></i> Reports
          </a>
          <a href="#" class="menu-item" data-section="settings">
            <i class="fa-solid fa-gear"></i> Settings
          </a>
        </nav>

        <div class="sidebar-footer">
          <button class="btn-logout" id="logout-btn">
            <i class="fa-solid fa-sign-out-alt"></i> Logout
          </button>
        </div>
      </div>

      <div class="dashboard-main">
        <div class="dashboard-header">
          <div class="header-left">
            <h1 class="dashboard-title">Welcome, ${user.name || "User"}!</h1>
            <p class="dashboard-subtitle">Here's your business summary</p>
          </div>

          <div class="header-right">
            <div class="user-profile">
              <div class="profile-avatar">${(user.name || "U").charAt(0)}</div>
              <div class="profile-info">
                <p class="profile-name">${user.name || "User"}</p>
                <p class="profile-email">${user.email || "user@email.com"}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Overview Section -->
        <div class="dashboard-section active" data-section="overview">
          <div class="metrics-grid">
            <div class="metric-card">
              <div class="metric-icon revenue">
                <i class="fa-solid fa-dollar-sign"></i>
              </div>
              <div class="metric-content">
                <p class="metric-label">Total Revenue</p>
                <h3 class="metric-value">$45,231</h3>
                <p class="metric-change positive"><i class="fa-solid fa-arrow-up"></i> +12.5% from last month</p>
              </div>
            </div>

            <div class="metric-card">
              <div class="metric-icon customers">
                <i class="fa-solid fa-users"></i>
              </div>
              <div class="metric-content">
                <p class="metric-label">Active Customers</p>
                <h3 class="metric-value">1,234</h3>
                <p class="metric-change positive"><i class="fa-solid fa-arrow-up"></i> +8.2% from last month</p>
              </div>
            </div>

            <div class="metric-card">
              <div class="metric-icon orders">
                <i class="fa-solid fa-shopping-bag"></i>
              </div>
              <div class="metric-content">
                <p class="metric-label">Total Orders</p>
                <h3 class="metric-value">5,678</h3>
                <p class="metric-change positive"><i class="fa-solid fa-arrow-up"></i> +5.3% from last month</p>
              </div>
            </div>

            <div class="metric-card">
              <div class="metric-icon growth">
                <i class="fa-solid fa-chart-line"></i>
              </div>
              <div class="metric-content">
                <p class="metric-label">Growth Rate</p>
                <h3 class="metric-value">23.5%</h3>
                <p class="metric-change negative"><i class="fa-solid fa-arrow-down"></i> -2.1% from last month</p>
              </div>
            </div>
          </div>

          <div class="dashboard-charts">
            <div class="chart-container">
              <h3>Revenue Overview</h3>
              <div class="chart-placeholder">
                <p>Chart will be rendered here</p>
                <div class="chart-mock"></div>
              </div>
            </div>

            <div class="chart-container">
              <h3>Top Products</h3>
              <div class="products-list">
                <div class="product-item">
                  <span class="product-name">Product A</span>
                  <span class="product-sales">$12,500</span>
                </div>
                <div class="product-item">
                  <span class="product-name">Product B</span>
                  <span class="product-sales">$10,300</span>
                </div>
                <div class="product-item">
                  <span class="product-name">Product C</span>
                  <span class="product-sales">$8,200</span>
                </div>
                <div class="product-item">
                  <span class="product-name">Product D</span>
                  <span class="product-sales">$6,100</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Analytics Section -->
        <div class="dashboard-section" data-section="analytics">
          <h2>Analytics & Reports</h2>
          <div class="analytics-grid">
            <div class="analytics-card">
              <h4>Page Views</h4>
              <p class="analytics-value">45,231</p>
            </div>
            <div class="analytics-card">
              <h4>Conversion Rate</h4>
              <p class="analytics-value">3.2%</p>
            </div>
            <div class="analytics-card">
              <h4>Bounce Rate</h4>
              <p class="analytics-value">42.1%</p>
            </div>
            <div class="analytics-card">
              <h4>Avg Session Duration</h4>
              <p class="analytics-value">4m 35s</p>
            </div>
          </div>
        </div>

        <!-- Sales Section -->
        <div class="dashboard-section" data-section="sales">
          <h2>Sales Management</h2>
          <table class="sales-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#ORD-001</td>
                <td>John Doe</td>
                <td>$250.00</td>
                <td><span class="status-badge completed">Completed</span></td>
                <td>2024-04-20</td>
              </tr>
              <tr>
                <td>#ORD-002</td>
                <td>Jane Smith</td>
                <td>$180.50</td>
                <td><span class="status-badge pending">Pending</span></td>
                <td>2024-04-22</td>
              </tr>
              <tr>
                <td>#ORD-003</td>
                <td>Bob Wilson</td>
                <td>$420.75</td>
                <td><span class="status-badge completed">Completed</span></td>
                <td>2024-04-23</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Customers Section -->
        <div class="dashboard-section" data-section="customers">
          <h2>Customer Management</h2>
          <div class="customers-grid">
            <div class="customer-card">
              <div class="customer-avatar">JD</div>
              <h4>John Doe</h4>
              <p>john@example.com</p>
              <p class="customer-status">Active</p>
            </div>
            <div class="customer-card">
              <div class="customer-avatar">JS</div>
              <h4>Jane Smith</h4>
              <p>jane@example.com</p>
              <p class="customer-status">Active</p>
            </div>
            <div class="customer-card">
              <div class="customer-avatar">BW</div>
              <h4>Bob Wilson</h4>
              <p>bob@example.com</p>
              <p class="customer-status">Inactive</p>
            </div>
          </div>
        </div>

        <!-- Settings Section -->
        <div class="dashboard-section" data-section="settings">
          <h2>Settings</h2>
          <div class="settings-container">
            <div class="settings-section">
              <h3>Account Settings</h3>
              <form id="account-settings-form">
                <div class="form-group">
                  <label>Business Name</label>
                  <input type="text" placeholder="Your Business Name" value="My Business">
                </div>
                <div class="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="Your Email" value="${user.email}">
                </div>
                <div class="form-group">
                  <label>Phone</label>
                  <input type="tel" placeholder="Your Phone">
                </div>
                <button type="submit" class="btn-primary">Save Changes</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function initDashboardHandlers() {
  // Section navigation
  const menuItems = document.querySelectorAll(".menu-item");
  const sections = document.querySelectorAll(".dashboard-section");

  menuItems.forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const section = e.currentTarget.dataset.section;

      // Update active menu item
      menuItems.forEach(m => m.classList.remove("active"));
      e.currentTarget.classList.add("active");

      // Update active section
      sections.forEach(s => s.classList.remove("active"));
      const activeSection = document.querySelector(`[data-section="${section}"]`);
      if (activeSection) {
        activeSection.classList.add("active");
      }
    });
  });

  // Logout handler
  const logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "#";
      location.reload();
    });
  }

  // Settings form handler
  const settingsForm = document.getElementById("account-settings-form");
  if (settingsForm) {
    settingsForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Settings saved successfully!");
    });
  }

  // Sidebar toggle
  const sidebarToggle = document.getElementById("sidebar-toggle");
  const sidebar = document.querySelector(".dashboard-sidebar");
  if (sidebarToggle) {
    sidebarToggle.addEventListener("click", () => {
      sidebar.classList.toggle("collapsed");
    });
  }
}
