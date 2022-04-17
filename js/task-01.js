const listEl = document.querySelector('#categories');

console.log(`Number of categories: ${listEl.children.length}`);

const itemEl = document.querySelectorAll('.item');
const array = Array.from(itemEl);

for (const object of array) {
    console.log(`Category: ${object.firstElementChild.textContent}`);
    console.log(`Elements : ${object.querySelectorAll('ul > li').length}`);
};


