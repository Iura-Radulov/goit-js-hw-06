const decrementButton = document.querySelector('[data-action="decrement"]')
const incrementButton = document.querySelector('[data-action="increment"]')
const value = document.querySelector('#value');

let counterValue = 0;

decrementButton.addEventListener('click', onClickdecrementButton)
incrementButton.addEventListener('click', onClickincrementButton)

function onClickdecrementButton(event) {
    counterValue -= 1;
    value.textContent = counterValue;
}

function onClickincrementButton(event) {
    counterValue += 1;
    value.textContent = counterValue;
}

