const panels = document.querySelectorAll('.panel');

panels.forEach(p => {
    p.addEventListener('mouseenter', () => {
        removeActive();
        p.classList.add('active');
    });
});

const removeActive = () => {
    panels.forEach(p => p.classList.remove('active'));
};