
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');

hamburger.addEventListener('click', function() {
  mobileMenu.classList.add('active');
});

closeMenu.addEventListener('click', function() {
  mobileMenu.classList.remove('active');
});

menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();    
      mobileMenu.classList.remove('active');
  
    });
  });

