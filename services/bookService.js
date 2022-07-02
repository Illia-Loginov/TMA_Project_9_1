import books from '../models/books.js';

export const getAll = () => {
    return books;
}

export const getOne = (id) => {
    return books.find(book => book.id === id);
}

export const add = (book) => {
    if(books.length === 0)
        book.id = 1;
    else
        book.id = books[books.length - 1].id + 1;
    book.reviews = [];
    books.push(book);

    return book;
}

export const edit = (book, patch) => {
    for(let key of Object.keys(patch)) {
        book[key] = patch[key];
    }
}