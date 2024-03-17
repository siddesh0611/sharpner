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

    //edit button
    const editBtn = document.createElement('button');
    editBtn.textContent = "Edit";
    editBtn.type = 'button';
    listItem.appendChild(editBtn);

    // adding function to edit btn
    editBtn.onclick = () => {
        document.getElementById("username").value = `${obj.username}`;
        document.getElementById("email").value = `${obj.email}`;
        document.getElementById("phone").value = `${obj.phone}`;

        parentElem.removeChild(listItem);
        localStorage.removeItem(obj.email);



    }
}
// module.exports = handleFormSubmit;