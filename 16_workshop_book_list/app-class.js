'use strict';

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class Ui {
    addBookToList = function(book) {
        const list = document.querySelector('.book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `;
        list.appendChild(row);
    }

    deleteBook = function(target) {
        target.parentElement.parentElement.remove();
    }

    clearFields = function() {
        document.querySelector('.title').value = '';
        document.querySelector('.author').value = '';
        document.querySelector('.isbn').value = '';
    }

    showAlert = function(message, className) {
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.container');
        const form = document.querySelector('.form');
        container.insertBefore(div, form);
        setTimeout(function() {
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

document.querySelector('.book-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.querySelector('.title').value;
    const author = document.querySelector('.author').value;
    const isbn = document.querySelector('.isbn').value;

    const book = new Book(title, author, isbn);

    const ui = new Ui();
    if([title, author, isbn].includes('')) {
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        ui.addBookToList(book);
        ui.showAlert('The book has been added!', 'success');
        ui.clearFields();
    }
})

document.querySelector('.book-list').addEventListener('click', function(e) {
    e.preventDefault();
    const ui = new Ui();
    if (e.target.className === 'delete') {
        console.log(e.target)
        ui.deleteBook(e.target);
        ui.showAlert('The book has been removed!', 'success');
    }
})
