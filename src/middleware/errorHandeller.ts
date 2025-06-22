import { ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(500).json({
    message: err.message || 'Something went wrong',
    success: false,
    error: err,
  });
};

export default errorHandler;