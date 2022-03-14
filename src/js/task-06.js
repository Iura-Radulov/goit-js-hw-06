const input = document.querySelector('#validation-input');
const dataInputLength = input.dataset.length;

input.addEventListener('blur', checknumberOfSymbol);

function checknumberOfSymbol(event) {
    
    if (event.currentTarget.value.length == dataInputLength) {
        input.classList.add('valid');
}
    if (event.currentTarget.value.length != dataInputLength) {
        input.classList.add('invalid');
}
    
}

   
