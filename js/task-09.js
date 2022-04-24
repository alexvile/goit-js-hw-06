function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};


const magicBtn = document.querySelector('.change-color');
const color = document.querySelector('.color');

 
function paintBody() {
  const randomColor = getRandomHexColor();
  color.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
  
};

magicBtn.addEventListener('click', paintBody);






