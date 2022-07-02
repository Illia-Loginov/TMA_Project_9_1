import * as bookService from '../services/bookService.js';
import StatusError from '../utils/StatusError.js';
import { select } from '../utils/utilFuncs.js';

const shownKeys = [ 'id', 'title' ];
const maxTitleLength = 50;

export const findBookMiddleware = (req, res, next) => {
    if(req.params.id) {
        const id = Number(req.params.id);
        const book = bookService.getOne(id);
        if(book)
            req.book = book;
    }
    next();
}

export const validateTitleMiddleware = (req, res, next) => {
    try {
        const { title } = req.body;

        if(title.length > maxTitleLength)
            throw new StatusError(`Book title can't be longer than ${maxTitleLength} characters`, 400);
        
        next();
    } catch (error) {
        next(error);
    }
}

export const getAll = (req, res, next) => {
    try {
        const books = select(bookService.getAll(), shownKeys);
        return res.json(books);
    } catch (error) {
        next(error);
    }
}

export const getOne = (req, res, next) => {
    try {
        if(!req.book)
            throw new StatusError('Book not found', 404);

        const [ book ] = select([ req.book ], shownKeys);
        return res.json(book);
    } catch (error) {
        next(error);
    }
}

export const create = (req, res, next) => {
    try {
        const book = req.body;
        const [ result ] = select([ bookService.add(book) ], shownKeys);
        return res.json(result);
    } catch (error) {
        next(error);
    }
}

export const editTitle = (req, res, next) => {
    try {
        if(!req.book)
            throw new StatusError('Book not found', 404);
            
        const { title } = req.body;
        bookService.edit(req.book, { title });

        const [ result ] = select([ req.book ], shownKeys);
        return res.json(result);
    } catch (error) {
        next(error);
    }
}