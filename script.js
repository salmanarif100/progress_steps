const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentAactive = 1;

next.addEventListener ('click', () => {
  currentAactive++;

  if (currentAactive > circles.length) {
    currentAactive = circles.length;
  }
  update ();
})

prev.addEventListener ('click', () => {
  currentAactive--;

  if (currentAactive < 1) {
    currentAactive = 1;
  }
  update ();
})

function update () {
  circles.forEach ((circle, idx) => {
    if(idx < currentAactive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  })
  const actives = document.querySelectorAll('.active');

  progress.style.width = (actives.length -1) / (circles.length -1) * 100 + '%';

  if (currentAactive === 1) {
    prev.disabled = true;
  } else if (currentAactive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}