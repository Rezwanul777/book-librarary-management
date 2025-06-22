import { Router } from 'express';
import { BookController } from './book.controller';


const bookRoutes = Router();


bookRoutes.post('/', BookController.createBook);


export default bookRoutes;