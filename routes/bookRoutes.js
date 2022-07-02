import express from 'express';
const router = express.Router();
import * as bookController from '../controllers/bookController.js';

// Middleware
router.use('/:id', bookController.findBookMiddleware);

// Routes
router.get('/', bookController.getAll)
router.get('/:id', bookController.getOne)
router.post('/', bookController.validateTitleMiddleware, bookController.create)
router.patch('/:id', bookController.validateTitleMiddleware, bookController.editTitle)

export default router;