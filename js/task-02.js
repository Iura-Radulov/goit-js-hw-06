const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = ingredients.map(element => {
const ingredientEl = document.createElement('li');
  ingredientEl.classList.add('item');
  ingredientEl.textContent = element;
  return ingredientEl;
})

const ingredientsContainerEl = document.querySelector('#ingredients');

ingredientsContainerEl.append(...ingredientsList);