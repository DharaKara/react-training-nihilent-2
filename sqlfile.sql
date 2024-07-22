show databases;
use myapp_db;
show tables;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
SELECT * FROM users;
CREATE TABLE admin (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
SELECT * FROM admin;
CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    author VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    publication_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
SELECT * FROM books;
INSERT INTO books (author, name, publication_date) VALUES 
('Mary Shelley', 'Frankenstein', '1818-01-01'),
('Bram Stoker', 'Dracula', '1897-05-26'),
('H.P. Lovecraft', 'The Call of Cthulhu', '1928-02-01'),
('Shirley Jackson', 'The Haunting of Hill House', '1959-10-16'),
('Robert Louis Stevenson', 'Strange Case of Dr Jekyll and Mr Hyde', '1886-01-05'),
('William Peter Blatty', 'The Exorcist', '1971-06-01'),
('Anne Rice', 'Interview with the Vampire', '1976-04-12'),
('Richard Matheson', 'I Am Legend', '1954-01-01'),
('Clive Barker', 'Hellbound Heart', '1986-11-01');