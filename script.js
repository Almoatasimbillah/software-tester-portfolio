// 1. Particles.js Configuration
particlesJS('particles-js', {
    "particles": {
        "number": { "value": 50, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#3498db" },
        "opacity": { "value": 0.3 },
        "size": { "value": 3 },
        "line_linked": { "enable": true, "distance": 150, "color": "#3498db", "opacity": 0.2, "width": 1 },
        "move": { "enable": true, "speed": 2 }
    },
    "interactivity": {
        "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" } }
    },
    "retina_detect": true
});

// 2. AOS Initialization
AOS.init({ duration: 1000, once: true });

// 3. Perfect Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Check for saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.setAttribute('data-theme', 'light');
    icon.classList.replace('fa-sun', 'fa-moon');
}

themeToggle.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'light') {
        body.removeAttribute('data-theme');
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// 4. Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
