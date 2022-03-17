const categories = document.querySelector('#categories');
const numberOfCategories = categories.children.length;
console.log(`Number of categories: ${numberOfCategories}`);

const categoryArray = document.querySelectorAll('#categories > .item');

categoryArray.forEach(category => {
    const textOfCategory = category.querySelector('h2').textContent;
    const numberOfElements = category.querySelector('ul').children.length;
    console.log(`Category: ${textOfCategory}`);
    console.log(`Elements: ${numberOfElements}`);    
});
