const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
const moon = document.getElementById('moon');
const button = document.getElementById('eclipseButton');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawStars() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 1.5;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.random()})`;
        ctx.fill();
    }
}

function animateStars() {
    drawStars();
    requestAnimationFrame(animateStars);
}

function animateMoon() {
    moon.style.transition = 'left 5s';
    moon.style.left = '50%';
}

button.addEventListener('click', animateMoon);

animateStars();
