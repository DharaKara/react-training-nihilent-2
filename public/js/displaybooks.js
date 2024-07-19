
function fetchBooks() {
    fetch('/books')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log("Books:", data); 
            if (data.status === 'success' && Array.isArray(data.data)) {
                displayBooks(data.data); 
            } else {
                throw new Error('Expected array of books, but received:', data);
            }
        })
        .catch(err => {
            console.error("Error fetching books:", err);
        });
}


fetchBooks();

function displayBooks(books) {
    const booksListDiv = document.getElementById('booksList');
    booksListDiv.innerHTML = '';

    const ul = document.createElement('ul');

    books.forEach(book => {
        const li = document.createElement('li');
        li.textContent = `${book.name} by ${book.author}, published on ${book.publication_date.slice(0,10)}`;
        ul.appendChild(li);
    });

    booksListDiv.appendChild(ul);
}

function sortBooks(sortField, sortOrder) {
    fetch(`/books/sort?sort=${sortField}&order=${sortOrder}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log("Sorted Books:", data); 
            if (data.status === 'success' && Array.isArray(data.data)) {
                displayBooks(data.data); 
            } else {
                throw new Error('Expected array of books, but received:', data);
            }
        })
        .catch(err => {
            console.error("Error sorting books:", err);
        });
}
