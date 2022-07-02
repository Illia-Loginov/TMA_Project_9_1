import express from 'express';
const router = express.Router({ mergeParams: true });
import * as reviewController from '../controllers/reviewController.js';

// Middleware
router.use(reviewController.findBookMiddleware);
router.use('/:id', reviewController.reviewExistsMiddleware);

// Routes
router.get('/', reviewController.getAll)
router.post('/', reviewController.create)
router.delete('/:id', reviewController.remove)

export default router;