const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

document.querySelector('ul#ingredients').append(
  ...ingredients.map(ingredient => {
    const liRef = document.createElement('li');
    liRef.textContent = ingredient;
    liRef.classList.add('item');
    return liRef;
  })
);
