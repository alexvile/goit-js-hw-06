const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesEl = document.getElementById('boxes');
const inputEl = document.querySelector('[type="number"]');


inputEl.addEventListener('input', onInputChange);
createBtn.addEventListener('click', onCreateClick);
destroyBtn.addEventListener('click', onDestroyClick);
 
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let quantity = 0;

function onInputChange(e) {
  quantity = e.target.value;
}


let elements = [];

let parameter = 20;


function onCreateClick() {
  createBoxes(quantity);
}

function createBoxes(amount) {

  for (let i = 0; i < amount; i += 1) {
    parameter += 10;
    
  const boxEl = document.createElement('div');

  boxEl.style.backgroundColor = getRandomHexColor();
  boxEl.style.margin = '10px';
  boxEl.style.width = `${parameter}px`;
  boxEl.style.height = `${parameter}px`;
  boxEl.style.outline = "1px solid black";

  elements.push(boxEl);
  }

  boxesEl.append(...elements);

}

function onDestroyClick() {
  destroyBoxes();
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
  // quantity = 0;
  elements = [];
  parameter = 20;
}

