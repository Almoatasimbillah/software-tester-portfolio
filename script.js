// 1. تفعيل مكتبة الحركات AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// 2. منطق تبديل الثيم (Dark/Light)
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    // تبديل الكلاس بين dark-theme و light-theme
    if (body.classList.contains('dark-theme')) {
        body.classList.replace('dark-theme', 'light-theme');
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light'); // حفظ اختيارك
    } else {
        body.classList.replace('light-theme', 'dark-theme');
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    }
});

// 3. التأكد من الثيم المحفوظ عند تحميل الصفحة
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.replace('dark-theme', 'light-theme');
        icon.classList.replace('fa-sun', 'fa-moon');
    }
});

// 4. Smooth Scroll للتنقل بين الأقسام
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
