import * as reviewService from '../services/reviewService.js';
import { getOne as getOneBook } from '../services/bookService.js';
import StatusError from '../utils/StatusError.js';

export const findBookMiddleware = (req, res, next) => {
    try {
        const bookId = Number(req.params.bookId);
        const book = getOneBook(bookId);
        if(!book)
            throw new StatusError('Book not found', 404);
        
        req.book = book;

        next();
    } catch (error) {
        next(error);
    }
}

export const reviewExistsMiddleware = (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const review = reviewService.getOne(req.book, id);

        if(!review)
            throw new StatusError('Review not found', 404);
        
        req.id = id;
        req.review = review;

        next();
    } catch (error) {
        next(error);
    }
}

export const getAll = (req, res, next) => {
    try {
        return res.json(reviewService.getAll(req.book));
    } catch (error) {
        next(error);
    }
}

export const create = (req, res, next) => {
    try {
        const review = req.body;

        return res.json(reviewService.add(req.book, review));
    } catch (error) {
        next(error);
    }
}

export const remove = (req, res, next) => {
    try {
        return res.json(reviewService.remove(req.book, req.id));
    } catch (error) {
        next(error);
    }
}