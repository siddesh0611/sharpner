function handleFormSubmit(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    const obj = {
        username,
        email,
        phone
    }

    localStorage.setItem(obj.email, JSON.stringify(obj));
    showUserScreen(obj);
}

function showUserScreen(obj) {
    const parentElem = document.getElementById('listofitems');
    const listItem = document.createElement('li');
    listItem.textContent = `${obj.username} - ${obj.email} - ${obj.phone}`;

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.type = 'button';
    listItem.appendChild(deleteBtn);

    parentElem.appendChild(listItem);

    // Adding functionality to the delete button
    deleteBtn.onclick = () => {
        parentElem.removeChild(listItem);
        localStorage.removeItem(obj.email);
    };
}
// module.exports = handleFormSubmit;