document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    menuBtn.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });
    
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
});
