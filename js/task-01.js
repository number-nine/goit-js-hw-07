const liListRef = document.querySelectorAll('li.item');

console.log('Number of categories: ', liListRef.length);

liListRef.forEach(element => {
    console.log('Category: ', element.firstElementChild.textContent);
    console.log('Elements: ', element.lastElementChild.children.length);
});
