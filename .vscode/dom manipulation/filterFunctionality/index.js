// 1. Use DOM Manipulation to add another input element inside form, before the button. This input element will take the description of
//  the fruit.

// 2. Use DOM Manipulation to show the fruit description (in italics) on screen alongwith the fruit name. This description should 
// be shown in the next line (HINT: To show description on next line you can make use of the paragraph tag).

// 3. Now, create a filter that shows only those fruits whose either name or description or both matches the entered text.


// Add input element inside form, before button, to take fruit description
const form = document.querySelector('form');
const descriptionInput = document.createElement('input');

descriptionInput.setAttribute('type', 'text');
// // descriptionInput.setAttribute('name', 'description');
// // descriptionInput.setAttribute('placeholder', 'Enter fruit description');
form.insertBefore(descriptionInput, form.lastElementChild);

// Show the fruit description in italics on the next line
const description = document.getElementsByTagName('p');
for (let i = 0; i < description.length; i++) {
    description[i].style.fontStyle = 'italic';


}

// Create a filter that shows only those fruits whose either name or description or both matches the entered text


const filterInput = document.getElementById('filter');

filterInput.addEventListener('keyup', function () {
    const searchText = this.value.toLowerCase();
    const fruitItems = document.querySelectorAll('.fruits .fruit');

    fruitItems.forEach(function (item) {
        // Assuming the first child (text node) is the fruit name, and the first <p> tag contains the description
        const fruitName = item.firstChild.textContent.trim().toLowerCase();
        const description = item.querySelector('p') ? item.querySelector('p').textContent.toLowerCase() : '';

        // Checking if the search text is in the fruit name or the description
        if (fruitName.includes(searchText) || description.includes(searchText)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });

});

