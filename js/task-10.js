function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsEl = document.querySelector("#controls");
const inputEl = controlsEl.querySelector('input');
const buttonCreateEl = controlsEl.querySelector('[data-create]');
const buttonDestroyEl = controlsEl.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

buttonCreateEl.addEventListener('click', createBoxes);
buttonDestroyEl.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  amount = inputEl.value;
 let size = 30;
  for (let i = 1; i <= amount; i += 1) {
    const divEl = document.createElement('div');
    
    divEl.style.width = `${size}px`;
    divEl.style.height = `${size}px`;
    size += 10;

    divEl.style.backgroundColor = getRandomHexColor();
    boxesEl.append(divEl);
  }
  
};

function destroyBoxes() {
  boxesEl.innerHTML = '';
};