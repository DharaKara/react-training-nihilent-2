function handleFormSubmit(formId, endpoint, method) {
    document.getElementById(formId).addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(this);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        let fetchOptions = {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        };

        if (method === 'PUT') {
            endpoint = endpoint.replace(':name', data.updateName);
            delete data.updateName;
            fetchOptions.body = JSON.stringify({
                updateAuthor: data.updateAuthor,
                updatePublicationDate: data.updatePublicationDate
            });
        } else if (method === 'DELETE') {
            endpoint = endpoint.replace(':name', data.deleteName);
            delete data.deleteName;
            fetchOptions.body = JSON.stringify({});
        }

        fetch(endpoint, fetchOptions)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok');
            })
            .then(result => {
                console.log("Success Response:", result);
            })
            .catch(err => {
                console.error("Error Response:", err);
            });
    });
}

handleFormSubmit("insertForm", "/books", 'POST');
handleFormSubmit("updateForm", "/books/:name", 'PUT');
handleFormSubmit("deleteForm", "/books/:name", 'DELETE');
