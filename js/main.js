// API Key configuration
const API_KEY = 'YOUR_API_KEY_HERE';

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
});

// Handle navigation and mobile menu
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
}