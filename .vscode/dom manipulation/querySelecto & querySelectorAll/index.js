const mainHeading = document.querySelector('#main-heading');
mainHeading.style.textAlign = 'right';

const fruits = document.querySelector('.fruits');
fruits.style.backgroundColor = 'gray';
fruits.style.padding = '30px';
fruits.style.margin = '30px';
fruits.style.width = '50%';
fruits.style.borderRadius = '5px';
fruits.style.listStyleType = 'none';

const basketHead = document.querySelector('h2');
basketHead.style.marginLeft = '30px';

const fruitItems = document.querySelectorAll('.fruit');
for (let i = 0; i < fruitItems.length; i++) {
    fruitItems[i].style.backgroundColor = 'white';
    fruitItems[i].style.padding = '10px';
    fruitItems[i].style.margin = '10px';
    fruitItems[i].style.borderRadius = '5px';

}


// Write answer to the questions asked below:
const basket = document.querySelector('#basket-heading');
basket.style.color = 'brown';

const oddfruit = document.querySelectorAll('.fruit:nth-child(even)')
for (let i = 0; i < oddfruit.length; i++) {
    oddfruit[i].style.backgroundColor = 'brown';
    oddfruit[i].style.color = 'white';

}