const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;

    if (formElements.email.value === '' || formElements.password.value === '') {
        alert('Одно из полей ввода не заполнено !');
    } else {
        const formData = {
        mail,
        password,
        };
        
        console.log(formData);
        formEl.reset();
        
    }
}



