// Scroll to Top Button
window.addEventListener('scroll', function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Carousel for "Know More About Us" Section
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.col img');
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    
    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    slides[slideIndex - 1].style.display = 'block';
    
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Search Bar Functionality (Placeholder)
const searchBar = document.getElementById('searchBar');

searchBar.addEventListener('keyup', function(event) {
    const query = event.target.value.toLowerCase();
    // Perform search functionality here
});

// Sticky Header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Toggle Dark Mode
let darkMode = false;

function toggleDarkMode() {
    darkMode = !darkMode;
    const body = document.body;
    
    if (darkMode) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
}
