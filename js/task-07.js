const inputSlider = document.querySelector("#font-size-control");
const string = document.querySelector('#text')

inputSlider.addEventListener('input', onInputChange);

function onInputChange(event) {
    string.style.fontSize = `${event.currentTarget.value}px`;
};