// Add the Edit Button:
const deleteBtn = document.querySelectorAll('.delete-btn');

deleteBtn.forEach(deleteBtn => {
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'edit-btn';

    deleteBtn.parentElement.insertBefore(editBtn, deleteBtn.nextSibling);
});


// Implement the code as in video but with one extra 'Edit' button in 'li'
const form = document.querySelector('form');
const fruits = document.querySelector('.fruits');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const fruitsToAdd = document.getElementById('fruit-to-add');

    const newList = document.createElement('li');
    newList.innerHTML = fruitsToAdd.value + '<button class="delete-btn">x</button>';

    fruits.appendChild(newList);
});

fruits.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
        const fruitToDelete = event.target.parentElement;
        fruits.removeChild(fruitToDelete);
    };
});



