const mainheader = document.getElementById('main-heading');
mainheader.textContent = 'Fruit World';
mainheader.style.color = 'orange';

const header = document.getElementById('header');
header.style.backgroundColor = 'green';
header.style.borderBottom = '2px solid orange';

const basket = document.getElementById('basket-heading');
basket.style.color = 'green';

const thanksDiv = document.getElementById('thanks');
const paragraph = document.createElement('p');
paragraph.textContent = 'Please visit us again';
thanksDiv.appendChild(paragraph);