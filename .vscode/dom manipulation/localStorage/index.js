// 1. In the html file create a form with 3 input fields: one for collecting username,
// second for collecting email, and third for collecting phone number.

// 2. Make sure you use label tag for each of these input fields.

// 3. The form should have a button of submit type.

// 4. On form submission collect the user details mentioned above and then store them in the browser's local storage.

const form = document.querySelector('form');
const userDetail = document.getElementById('user');
const userEmail = document.getElementById('email');
const userTel = document.getElementById('phoneNum');

form.addEventListener('submit', function handleFormSubmit(event) {
    event.preventDefault();
    localStorage.setItem('Username', userDetail.value);
    localStorage.setItem('Email', userEmail.value);
    localStorage.setItem('Phone', userTel.value);

})