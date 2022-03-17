const formEl = document.querySelector('.login-form');
const buttonFormEl = formEl.querySelector('button');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    const formDate = {
        email,
        password,
    };

    if (email === '' || password === '') {
        alert('Все поля должны быть заполнены');
    };
    if (email !== '' && password !== '') {
        console.log(formDate);
    };
    
    
    event.currentTarget.reset();
}