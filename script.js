// 1. تفعيل Particles.js (الخلفية المتحركة)
particlesJS('particles-js', {
    "particles": {
        "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#3498db" }, // لون الجزيئات
        "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 } },
        "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } },
        "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } },
        "line_linked": { "enable": true, "distance": 150, "color": "#3498db", "opacity": 0.4, "width": 1 },
        "move": { "enable": true, "speed": 3, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
        "modes": {
            "grab": { "distance": 140, "line_linked": { "opacity": 1 } },
            "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 },
            "repulse": { "distance": 200, "duration": 0.4 },
            "push": { "particles_nb": 4 },
            "remove": { "particles_nb": 2 }
        }
    },
    "retina_detect": true
});


// 2. تفعيل مكتبة الحركات AOS
AOS.init({
    duration: 1000, // مدة الحركة (ثانية واحدة)
    once: true,     // الحركة تحصل مرة واحدة وأنت نازل
    offset: 100,    // تبدأ الحركة قبل ما توصل للعنصر بـ 100 بكسل
    mirror: false,  // لا تعيد الحركة عند التمرير لأعلى
});

// 3. منطق تبديل الثيم (Dark/Light)
// تصحيح منطق تبديل الثيم
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    // التحقق من الثيم الحالي وتبديله
    if (body.getAttribute('data-theme') === 'light') {
        body.removeAttribute('data-theme'); // العودة للـ Dark (الافتراضي)
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light'); // التحول للـ Light
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// التأكد من تطبيق الثيم المحفوظ عند فتح الصفحة
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.setAttribute('data-theme', 'light');
        icon.classList.replace('fa-sun', 'fa-moon');
    }
});


// 4. التأكد من الثيم المحفوظ عند تحميل الصفحة
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.replace('dark-theme', 'light-theme');
        icon.classList.replace('fa-sun', 'fa-moon');
    } else {
        body.classList.add('dark-theme'); // تأكد ان الدارك هو الديفولت لو مفيش ثيم محفوظ
        icon.classList.add('fa-sun');
    }
});

// 5. Smooth Scroll للتنقل بين الأقسام
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // نطرح ارتفاع الهيدر
                behavior: 'smooth'
            });
        }
    });
});
