// document.getElementById("contactForm").addEventListener("submit", function(event) {
//     event.preventDefault();
//     const formData = new FormData(this);
//     const data = {};
//     formData.forEach((value, key) => {
//         data[key] = value;
//     })
//     console.log("Data -", data);
//     fetch('/submit-form', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data),
//     })
//     .then(response => response.json())
//     .then(result => {
//         console.log("Success Response-", result);
//     })
//     .catch(err => {
//         console.log("Error Response -", err);
//     })
// })

// example 6:
$(document).ready(() => {
    $('#contactForm').submit((event) => {
        event.preventDefault();
        const name = $('#name').val().trim();
        const email = $('#email').val().trim();
        const message = $('#message').val().trim();
        console.log("name -", name);
        console.log("email -", email);
        console.log("message -", message);
    })

    // Saving the form data to the server
    $.ajax({
        url: 'http://localhost:3000/submit-form',
        method: 'POST',
        data: {
            name,
            email,
            message,
        },
        success: (response) => {
            console.log("Response", response);
        },
        error: (e) => {
            console.log("Error", e);
        }
    })
});