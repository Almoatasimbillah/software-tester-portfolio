// Initialize AOS - تفعيل مكتبة الحركات
AOS.init({
    duration: 1000, // مدة الحركة (ثانية واحدة)
    once: true,     // الحركة تحصل مرة واحدة وأنت نازل
});

// كود الثيم والـ Smooth Scroll زي ما هم
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'light') {
        body.removeAttribute('data-theme');
        icon.classList.replace('fa-sun', 'fa-moon');
    } else {
        body.setAttribute('data-theme', 'light');
        icon.classList.replace('fa-moon', 'fa-sun');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});
