document.querySelector('.menu-toggle').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = this;
    
    // Toggle classes
    navLinks.classList.toggle('open');
    menuToggle.classList.toggle('open');
    
    // Change aria-label for accessibility
    const isOpen = navLinks.classList.contains('open');
    menuToggle.setAttribute('aria-label', isOpen ? 'close menu' : 'open menu');
});