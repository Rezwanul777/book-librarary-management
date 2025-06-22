import { NextFunction, Request, Response } from 'express';
import Book from './book.model';
import { ApiResponse } from '../../middleware/ApiResponse';



 const createBook = async (req: Request, res: Response): Promise<void> => {
 
  try {
    const book = new Book(req.body);

    const savedBook = await book.save();
    
    const response: ApiResponse = {
      success: true,
      message: 'Book created successfully',
      data: savedBook
    };
    
    res.status(201).json(response);
  } catch (error: any) {
    const response: ApiResponse = {
      success: false,
      message: 'Validation failed',
      error: error
    };
    
    res.status(404).json(response);
  }
};




 const getAllBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      filter,              // genre filter
      sortBy = 'createdAt', // default sorting field
      sort = 'desc',        // default order
      limit = '10'          // default number of results
    } = req.query;

    const query: any = {};
    if (filter) {
      query.genre = filter;
    }

    const books = await Book.find(query)
      .sort({ [sortBy as string]: sort === 'asc' ? 1 : -1 })
      .limit(Number(limit));

    res.status(200).json({
      success: true,
      message: 'Books retrieved successfully',
      data: books
    });
  } catch (error) {
    next(error);
  }
};

export const BookController={
    createBook,
    getAllBooks
}