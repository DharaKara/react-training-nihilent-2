// function fetchBooks() {
//     fetch('/books')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log("Books:", data); 
//             if (data.status === 'success' && Array.isArray(data.data)) {
//                 displayBooks(data.data); 
//             } else {
//                 throw new Error('Expected array of books, but received:', data);
//             }
//         })
//         .catch(err => {
//             console.error("Error fetching books:", err);
//         });
// }

function fetchBooks() {
    $.ajax({
        url: '/books',
        method: 'GET',
        success: (data) => {
            console.log("Books:", data); 
            if (data.status === 'success' && Array.isArray(data.data)) {
                displayBooks(data.data); 
            } else {
                throw new Error('Expected array of books, but received:', data);
            }
        },
        error: (err) => {
            console.error("Error fetching books:", err);
        }
    });
}
fetchBooks();

// function displayBooks(books) {
//     const booksListDiv = document.getElementById('booksList');
//     booksListDiv.innerHTML = '';

//     const ul = document.createElement('ul');

//     books.forEach(book => {
//         const li = document.createElement('li');
//         li.textContent = `${book.name} by ${book.author}, published on ${book.publication_date.slice(0,10)}`;
//         ul.appendChild(li);
//     });

//     booksListDiv.appendChild(ul);
// }

function displayBooks(books) {
    // Using jQuery's AJAX to fetch books data
    $.ajax({
        url: '/books',
        method: 'GET',
        success: (data) => {
            const booksListDiv = document.getElementById('booksList');
            booksListDiv.innerHTML = '';

            const ul = document.createElement('ul');

            books.forEach(book => {
                const li = document.createElement('li');
                li.textContent = `${book.name} by ${book.author}, published on ${book.publication_date.slice(0, 10)}`;
                ul.appendChild(li);
            });

            booksListDiv.appendChild(ul);
        },
        error: (err) => {
            console.error("Error fetching books:", err);
        }
    });
}

// function sortBooks(sortField, sortOrder) {
//     fetch(`/books/sort?sort=${sortField}&order=${sortOrder}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log("Sorted Books:", data); 
//             if (data.status === 'success' && Array.isArray(data.data)) {
//                 displayBooks(data.data); 
//             } else {
//                 throw new Error('Expected array of books, but received:', data);
//             }
//         })
//         .catch(err => {
//             console.error("Error sorting books:", err);
//         });
// }

function sortBooks(sortField, sortOrder) {
    $.ajax({
        url: `/books/sort?sort=${sortField}&order=${sortOrder}`,
        method: 'GET',
        success: (data) => {
            console.log("Sorted Books:", data); 
            if (data.status === 'success' && Array.isArray(data.data)) {
                displayBooks(data.data); 
            } else {
                throw new Error('Expected array of books, but received:', data);
            }
        },
        error: (err) => {
            console.error("Error sorting books:", err);
        }
    });
}