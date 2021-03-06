const progress = document.getElementById('progress');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;

    if (currentActive >= circles.length) {
        currentActive = circles.length;
        next.disabled = true;
        prev.disabled = false;
    }

    update();
    console.log('Next')
});

prev.addEventListener('click', () => {
    currentActive--;

    if (currentActive <= 1) {
        currentActive = 1;
        prev.disabled = true;
        next.disabled = false;
    }

    update();
});

const update = () => {
    circles.forEach((circle, ind) => {
        if (ind < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');

    let length = (((actives.length - 1) / (circles.length - 1)) * 100) + '%';
    progress.style.width = length;
}

toggleActive = (circle, method) => circle.classList[method]('active');
ls``

// an hour of code a day keeps the debugs away.... :)

// day 3.18.22
// day 3.12.22
// day 3.21.22
// day 5.11.22
// day 5.28.22
// day 6.18.22