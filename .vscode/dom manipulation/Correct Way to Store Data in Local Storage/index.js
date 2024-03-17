// The form inside the index.html file is already provided by us. 
// Your task is to store all the user details as an object inside the local storage,
//  instead of storing them as individual fields.

// NOTE: Make sure that when you are storing data in the local storage the key that you use is "User Details"

function handleFormSubmit(event) {
    const userName = document.getElementById("username");
    const useremail = document.getElementById("email");
    const userphone = document.getElementById("phone");

    // console.log(userName.value);

    let userDetail = {
        username: userName.value,
        email: useremail.value,
        phone: userphone.value,
    };

    let correct = JSON.stringify(userDetail);
    // console.log(correct);
    let moreCorrect = JSON.parse(correct);

    event.preventDefault();
    localStorage.setItem("User Detail", correct);
};

