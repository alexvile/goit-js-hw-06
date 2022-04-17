// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// };

const magicBtn = document.querySelector('.change-color');
const color = document.querySelector('.color');

 
function getRandomHexColor() {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  color.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
  
};


magicBtn.addEventListener('click', getRandomHexColor);