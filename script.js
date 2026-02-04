// 1. Smooth Scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // بيمنع الحركة المفاجئة
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // بيخلي النزول للقسم انسيابي
        });
    });
});

// 2. Simple Greeting Message in Console
console.log("Welcome to Almoatasimbillah's Portfolio - Software Tester");
