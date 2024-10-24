// Select the hamburger icon, mobile menu, and close button
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');

// Show mobile menu when hamburger is clicked
hamburger.addEventListener('click', function() {
  mobileMenu.classList.add('active');
});

// Hide mobile menu when close button is clicked
closeMenu.addEventListener('click', function() {
  mobileMenu.classList.remove('active');
});
