const input = document.querySelector('#validation-input');
const dataInputLength = input.dataset.length;

input.addEventListener('blur', checknumberOfSymbol);

function checknumberOfSymbol(event) {
        
    if (event.currentTarget.value.length == dataInputLength) {
        input.classList.add('valid');
        input.classList.remove('invalid');
}
    if (event.currentTarget.value.length != dataInputLength) {
        input.classList.add('invalid');
        input.classList.remove('valid');
    };
    
};

   
