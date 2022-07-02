import express from 'express';
const app = express();

// Middleware
app.use(express.json())

// Routes
import bookRoutes from './routes/bookRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';

app.use('/books', bookRoutes);
app.use('/books/:bookId/reviews', reviewRoutes);

// Error handling
import errorHandler from './middleware/errorHandler.js';
app.use(errorHandler)

const PORT = 5000;
app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`))