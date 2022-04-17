const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');

const elements = ingredients.map(element => {
  const ingredientEl = document.createElement('li');
  ingredientEl.classList.add('item');
  ingredientEl.textContent = element;
  return ingredientEl;
});

  ingredientsListEl.append(...elements);