const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', changeTextSize);

function changeTextSize(event) {    
    textEl.style.fontSize = `${event.currentTarget.value}px`;
}