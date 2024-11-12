function createExplosion(event) {
    const button = event.currentTarget;
    const x = event.clientX - button.offsetLeft;
    const y = event.clientY - button.offsetTop;

    for (let i = 0; i < 30; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        button.appendChild(circle);
        
        const size = (Math.random() * 100) + 5;
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
        circle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 100 + 30;
        const xMove = Math.cos(angle) * distance;
        const yMove = Math.sin(angle) * distance;

        circle.style.transform = `translate(${xMove}px, ${yMove}px)`;

        circle.addEventListener('animationend', () => {
            circle.remove();
        });
    }
}