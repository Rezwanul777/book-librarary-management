import { Router } from 'express';
import bookRoutes from '../modules/books/book.routes';

const router = Router();
router.use('/books', bookRoutes);

export default router;