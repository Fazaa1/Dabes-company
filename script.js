// Navigasi Mobile
const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');

	burger.addEventListener('click', () => {
		// Toggle Nav
		nav.classList.toggle('nav-active');
		// Toggle Icon
		burger.classList.toggle('toggle');
	});

	// Tutup menu saat link diklik
	navLinks.forEach((link) => {
		link.addEventListener('click', () => {
			nav.classList.remove('nav-active');
			burger.classList.remove('toggle');
		});
	});
};
navSlide();

// Animasi Scroll
window.addEventListener('scroll', reveal);
function reveal() {
	var reveals = document.querySelectorAll('.reveal');
	for (var i = 0; i < reveals.length; i++) {
		var windowheight = window.innerHeight;
		var revealtop = reveals[i].getBoundingClientRect().top;
		var revealpoint = 150;
		if (revealtop < windowheight - revealpoint) {
			reveals[i].classList.add('active');
		}
	}
}
