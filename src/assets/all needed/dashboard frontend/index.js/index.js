/* global document, window */

const STORAGE_KEYS = {
	users: 'hp_users',
	session: 'hp_session_user',
};

const PRODUCTS = [
	{
		id: 'tv',
		name: '4K Smart TV',
		price: 549.99,
		image: 'image/tv.jpg',
		description: 'Crisp 4K picture, smart apps, and smooth streaming for your living room.',
		specs: ['55-inch', '4K UHD', 'HDR', 'Wi‑Fi + Bluetooth'],
	},
	{
		id: 'laptop',
		name: 'Work & Study Laptop',
		price: 699.00,
		image: 'image/laptop.webp',
		description: 'A fast, lightweight laptop for everyday productivity and online classes.',
		specs: ['8 GB RAM', '256 GB SSD', 'Full HD display', 'Webcam'],
	},
	{
		id: 'pc',
		name: 'Desktop PC',
		price: 899.00,
		image: 'image/pc.jpg',
		description: 'A reliable desktop setup for multitasking, browsing, and home office use.',
		specs: ['16 GB RAM', '512 GB SSD', 'Windows-ready', 'Multiple USB ports'],
	},
];

function $(selector) {
	return document.querySelector(selector);
}

function safeText(value) {
	return String(value ?? '');
}

function formatPrice(amount) {
	const n = Number(amount);
	if (Number.isNaN(n)) return safeText(amount);
	return n.toLocaleString(undefined, { style: 'currency', currency: 'USD' });
}

function readJson(key, fallback) {
	try {
		const raw = window.localStorage.getItem(key);
		if (!raw) return fallback;
		return JSON.parse(raw);
	} catch {
		return fallback;
	}
}

function writeJson(key, value) {
	window.localStorage.setItem(key, JSON.stringify(value));
}

function getUsers() {
	return readJson(STORAGE_KEYS.users, []);
}

function saveUsers(users) {
	writeJson(STORAGE_KEYS.users, users);
}

function getSessionUser() {
	return readJson(STORAGE_KEYS.session, null);
}

function setSessionUser(user) {
	writeJson(STORAGE_KEYS.session, user);
}

function clearSession() {
	window.localStorage.removeItem(STORAGE_KEYS.session);
}

function bindGuestLinks() {
	const links = document.querySelectorAll('[data-guest="true"]');
	if (!links?.length) return;
	links.forEach((link) => {
		link.addEventListener('click', () => {
			clearSession();
		});
	});
}

function setMessage(targetEl, type, text) {
	if (!targetEl) return;
	if (!text) {
		targetEl.innerHTML = '';
		return;
	}
	const cls = type === 'ok' ? 'ok' : type === 'error' ? 'error' : '';
	targetEl.innerHTML = `<div class="message ${cls}">${escapeHtml(text)}</div>`;
}

function escapeHtml(text) {
	return safeText(text)
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&#039;');
}

function pageName() {
	return document.body?.dataset?.page || '';
}

function currentPath() {
	const p = window.location.pathname.split('/').pop() || 'index.html';
	return p.toLowerCase();
}

function renderHeader() {
	const header = $('#site-header');
	if (!header) return;

	const sessionUser = getSessionUser();
	const path = currentPath();

	const navLinks = [
		{ href: 'index.html', label: 'Home' },
		{ href: 'productlist.html', label: 'Products' },
	];

	const navHtml = navLinks
		.map((l) => {
			const isCurrent = path === l.href.toLowerCase();
			return `<a href="${l.href}" ${isCurrent ? 'aria-current="page"' : ''}>${l.label}</a>`;
		})
		.join('');

	const rightHtml = sessionUser
		? `
			<span class="pill" title="Signed in">Hi, ${escapeHtml(sessionUser.name || 'User')}</span>
			<button class="btn danger" type="button" id="logout-btn">
				<i class="bi bi-box-arrow-right" aria-hidden="true"></i>
				Logout
			</button>
		`
		: `
			<a class="btn" href="loginform.html">Login</a>
			<a class="btn primary" href="rigesterform.html">Register</a>
		`;

	header.innerHTML = `
		<div class="site-header">
			<div class="container header-inner">
				<a class="brand" href="index.html" aria-label="Homepage">
					<img src="image/logo.jpg" alt="" />
					<span>My Store</span>
				</a>
				<nav class="nav" aria-label="Primary">
					${navHtml}
				</nav>
				<div class="nav-right">
					${rightHtml}
				</div>
			</div>
		</div>
	`;

	const logoutBtn = $('#logout-btn');
	if (logoutBtn) {
		logoutBtn.addEventListener('click', () => {
			clearSession();
			window.location.href = 'index.html';
		});
	}
}

function renderFooter() {
	const footer = $('#site-footer');
	if (!footer) return;

	const year = new Date().getFullYear();
	footer.innerHTML = `
		<div class="site-footer">
			<div class="container small">
				<div>© ${year} My Store</div>
				<div class="muted">Demo front-end (localStorage only)</div>
			</div>
		</div>
	`;
}

function renderHome() {
	const root = $('#page');
	if (!root) return;

	const featured = PRODUCTS.slice(0, 3)
		.map(
			(p) => `
			<article class="card product">
				<img src="${p.image}" alt="${escapeHtml(p.name)}" />
				<div>
					<h3>${escapeHtml(p.name)}</h3>
					<div class="price">${formatPrice(p.price)} <small>USD</small></div>
					<p class="muted">${escapeHtml(p.description)}</p>
				</div>
				<div>
					<a class="btn primary" href="productview.html?id=${encodeURIComponent(p.id)}">View</a>
					<a class="btn" href="productlist.html">All products</a>
				</div>
			</article>
		`,
		)
		.join('');

	root.innerHTML = `
		<section class="card hero" aria-label="Intro">
			<div>
				<h1>Simple products website</h1>
				<p>Browse products and open details. Login/register is optional (you can use the site as a guest).</p>
				<div class="hero-actions">
					<a class="btn primary" href="productlist.html">Browse products</a>
					<a class="btn" href="loginform.html">Login (optional)</a>
				</div>
			</div>
			<div class="card">
				<div class="muted">Signed-in status</div>
				<div id="home-session" class="small" style="margin-top:8px"></div>
			</div>
		</section>

		<section style="margin-top:16px">
			<h2 style="margin: 0 0 10px">Featured</h2>
			<div class="grid products">${featured}</div>
		</section>
	`;

	const sessionUser = getSessionUser();
	const sessionEl = $('#home-session');
	if (sessionEl) {
		sessionEl.textContent = sessionUser ? `You are logged in as ${sessionUser.email}.` : 'You are not logged in.';
	}
}

function renderProductList() {
	const root = $('#page');
	if (!root) return;

	const items = PRODUCTS.map(
		(p) => `
		<article class="card product">
			<img src="${p.image}" alt="${escapeHtml(p.name)}" />
			<div>
				<h3>${escapeHtml(p.name)}</h3>
				<div class="price">${formatPrice(p.price)} <small>USD</small></div>
				<p class="muted">${escapeHtml(p.description)}</p>
			</div>
			<div>
				<a class="btn primary" href="productview.html?id=${encodeURIComponent(p.id)}">View details</a>
			</div>
		</article>
	`,
	).join('');

	root.innerHTML = `
		<section class="card">
			<h1 style="margin: 0 0 6px">Products</h1>
			<p class="muted" style="margin: 0">Select a product to see details.</p>
		</section>
		<section style="margin-top:14px" class="grid products">${items}</section>
	`;
}

function renderProductView() {
	const root = $('#page');
	if (!root) return;

	const params = new URLSearchParams(window.location.search);
	const id = params.get('id');
	const product = PRODUCTS.find((p) => p.id === id);

	if (!product) {
		root.innerHTML = `
			<section class="card">
				<h1 style="margin:0 0 8px">Product not found</h1>
				<p class="muted" style="margin:0 0 14px">Open the product list and select a product again.</p>
				<a class="btn primary" href="productlist.html">Back to products</a>
			</section>
		`;
		return;
	}

	const specs = (product.specs || []).map((s) => `<li>${escapeHtml(s)}</li>`).join('');
	root.innerHTML = `
		<section class="card">
			<div class="row" style="align-items:start">
				<div>
					<img src="${product.image}" alt="${escapeHtml(product.name)}" style="width:100%; border-radius:12px; border:1px solid var(--border); aspect-ratio: 4 / 3; object-fit: cover;" />
				</div>
				<div>
					<h1 style="margin:0 0 8px">${escapeHtml(product.name)}</h1>
					<div class="price" style="margin-bottom:10px">${formatPrice(product.price)} <small>USD</small></div>
					<p class="muted" style="margin:0 0 12px">${escapeHtml(product.description)}</p>

					<div class="card" style="padding:12px">
						<div class="muted" style="margin-bottom:8px">Specs</div>
						<ul style="margin:0; padding-left: 18px">${specs}</ul>
					</div>

					<div style="margin-top:14px; display:flex; gap:10px; flex-wrap:wrap">
						<a class="btn" href="productlist.html">Back</a>
						<a class="btn primary" href="productlist.html">Continue shopping</a>
					</div>
				</div>
			</div>
		</section>
	`;
}

function bindLogin() {
	const form = $('#login-form');
	if (!form) return;
	const msg = $('#auth-message');

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		setMessage(msg, '', '');

		const email = String($('#login-email')?.value || '').trim().toLowerCase();
		const password = String($('#login-password')?.value || '');

		if (!email || !password) {
			setMessage(msg, 'error', 'Please enter email and password.');
			return;
		}

		const users = getUsers();
		const user = users.find((u) => u.email === email && u.password === password);

		if (!user) {
			setMessage(msg, 'error', 'Invalid email or password.');
			return;
		}

		setSessionUser({ name: user.name, email: user.email });
		setMessage(msg, 'ok', 'Login successful. Redirecting…');
		window.setTimeout(() => {
			window.location.href = 'productlist.html';
		}, 600);
	});
}

function bindRegister() {
	const form = $('#register-form');
	if (!form) return;
	const msg = $('#auth-message');

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		setMessage(msg, '', '');

		const name = String($('#reg-name')?.value || '').trim();
		const email = String($('#reg-email')?.value || '').trim().toLowerCase();
		const password = String($('#reg-password')?.value || '');
		const confirm = String($('#reg-confirm')?.value || '');

		if (!name || !email || !password || !confirm) {
			setMessage(msg, 'error', 'Please fill in all required fields.');
			return;
		}
		if (password.length < 4) {
			setMessage(msg, 'error', 'Password should be at least 4 characters.');
			return;
		}
		if (password !== confirm) {
			setMessage(msg, 'error', 'Passwords do not match.');
			return;
		}

		const users = getUsers();
		const exists = users.some((u) => u.email === email);
		if (exists) {
			setMessage(msg, 'error', 'That email is already registered. Please login instead.');
			return;
		}

		users.push({ name, email, password });
		saveUsers(users);
		setSessionUser({ name, email });

		setMessage(msg, 'ok', 'Registration successful. Redirecting…');
		window.setTimeout(() => {
			window.location.href = 'productlist.html';
		}, 700);
	});
}

function init() {
	renderHeader();
	renderFooter();
	bindGuestLinks();

	const p = pageName();
	if (p === 'home') renderHome();
	if (p === 'productlist') renderProductList();
	if (p === 'productview') renderProductView();
	if (p === 'login') bindLogin();
	if (p === 'register') bindRegister();
}

document.addEventListener('DOMContentLoaded', init);

