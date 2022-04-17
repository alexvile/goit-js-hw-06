const incrementBtn = document.querySelector('#counter button[data-action="increment"]');
const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
const valueEl = document.querySelector('#value');


let counterValue = 0;

const onIncrementBtnClick = event => {
    counterValue += 1;
    console.log(counterValue);
    valueEl.textContent = counterValue;

};

incrementBtn.addEventListener('click', onIncrementBtnClick);


const onDecrementBtnClick = event => {
    counterValue -= 1;
    console.log(counterValue);
    valueEl.textContent = counterValue;
};

decrementBtn.addEventListener('click', onDecrementBtnClick);






