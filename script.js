document.addEventListener('DOMContentLoaded', () => {
	const hamburger = document.getElementById('hamburger');
	const navLinks = document.getElementById('nav-links');
	const navItems = document.querySelectorAll('.nav-item');

	// Toggle Menu Hamburger
	hamburger.addEventListener('click', () => {
		navLinks.classList.toggle('active');

		// Ganti ikon bars ke times (silang)
		const icon = hamburger.querySelector('i');
		icon.classList.toggle('fa-bars');
		icon.classList.toggle('fa-times');
	});

	// Tutup menu saat link diklik (untuk mobile)
	navItems.forEach((item) => {
		item.addEventListener('click', () => {
			navLinks.classList.remove('active');
			const icon = hamburger.querySelector('i');
			icon.classList.add('fa-bars');
			icon.classList.remove('fa-times');

			// Set active class
			navItems.forEach((link) => link.classList.remove('active'));
			item.classList.add('active');
		});
	});

	// Navbar Scroll Effect
	window.addEventListener('scroll', () => {
		const header = document.getElementById('main-header');
		if (window.scrollY > 50) {
			header.style.height = '70px';
			header.style.background = 'rgba(255, 255, 255, 0.98)';
		} else {
			header.style.height = '80px';
			header.style.background = 'rgba(255, 255, 255, 0.95)';
		}
	});
});