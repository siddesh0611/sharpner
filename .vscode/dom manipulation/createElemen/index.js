// Inside the first Div, after the main heading add a sub-heading (h3 tag) "Buy high quality organic fruits online".
// 2. Make the sub-heading text italic.
// 2. Inside the second Div, before the unordered list add a paragraph tag showing "Total fruits: 4".
// 3. On this paragraph tag set an id of "fruits-total".

const head3 = document.createElement('h3');
const head3Text = document.createTextNode('Buy high quality organic fruits online');
head3.appendChild(head3Text);

const fdiv = document.getElementsByTagName('div');
fdiv[0].appendChild(head3);
head3.style.fontStyle = 'italic';

const para = document.createElement('p');
const paraText = document.createTextNode('Total fruits: 4');
para.appendChild(paraText);

const seconddiv = fdiv[1];
const fruits = document.querySelector('.fruits');
seconddiv.insertBefore(para, fruits);

para.id = 'fruits-total'