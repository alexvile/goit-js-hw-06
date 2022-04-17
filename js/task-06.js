const inputEl = document.querySelector('#validation-input');
const symbolMinLength = inputEl.dataset.length;




inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    if (event.currentTarget.value.length < symbolMinLength) {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    } else {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    };
};




