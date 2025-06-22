import { Router } from 'express';
import bookRoutes from '../modules/books/book.routes';
import borrowRoutes from '../modules/borrow/borrow.route';

const router = Router();

router.use('/books', bookRoutes);
router.use('/borrow', borrowRoutes);

export default router;