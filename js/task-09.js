function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const colorEl = document.querySelector('.color');

buttonEl.addEventListener('click', onButtonChangeColor);

function onButtonChangeColor(event) {
  const changingColor = getRandomHexColor()
  bodyEl.style.backgroundColor = changingColor;
  colorEl.textContent = changingColor;
  
}