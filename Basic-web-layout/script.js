document.addEventListener('DOMContentLoaded', (event) => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');

            const targetSection = document.querySelector(this.getAttribute('href'));
            sections.forEach(section => section.style.display = 'none');
            targetSection.style.display = 'block';
        });
    });

    // Show the first section by default
    sections.forEach(section => section.style.display = 'none');
    sections[0].style.display = 'block';
    navLinks[0].classList.add('active');
});
