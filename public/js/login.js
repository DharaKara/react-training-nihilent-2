document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => {
        console.log("Success Response-", result);
        
        if (result.status === 'success') {
            window.location.href = result.redirect;
        } else {
            console.error("Login failed:", result.error);
        }
    })
    .catch(err => {
        console.error("Error Response -", err);
    });
});
