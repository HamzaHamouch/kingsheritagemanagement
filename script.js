// Minimal JS for potential smooth scrolling and dynamic header effects

// Ensure smooth scroll for all anchor links (native CSS is already used, but this can handle exceptions)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// For a complex header, we could add a sticky class here, 
// but a fixed header with blurring is already handled by CSS.
console.log("Kings Heritage LLC Website Initialized");

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-links a');

    if (menuToggle && navMenu) {
        // 1. Toggle Menu Open/Closed
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('is-active');
            
            // Optional: Prevent scrolling when menu is open
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'initial';
        });

        // 2. Close Menu when any link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('is-active');
                document.body.style.overflow = 'initial';
            });
        });
    }
});