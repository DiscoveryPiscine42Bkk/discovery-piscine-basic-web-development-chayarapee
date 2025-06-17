const button = document.getElementById('toggleButton');
const container = document.getElementById('container');
const hr = document.getElementById('lable');
let clickCount = 0;

button.addEventListener('click', () => {
  clickCount++;

  if (clickCount === 1) {
    container.classList.add('green-bg');
    hr.classList.add('hr-green');
    button.classList.add('large');
  } else if (clickCount === 2) {
    container.classList.remove('green-bg');
    hr.classList.remove('hr-green');
    button.classList.remove('large');
    button.classList.add('large-2');
    container.classList.add('red-bg');
    hr.classList.add('hr-red');
  }
});