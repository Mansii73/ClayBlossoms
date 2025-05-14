const errorHandler = require('../../middlewares/errorHandler');
const AppError = require('../../utils/AppError');

describe('Error Handler Middleware', () => {
  let mockReq;
  let mockRes;
  let mockNext;

  beforeEach(() => {
    mockReq = {};
    mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    mockNext = jest.fn();
    process.env.NODE_ENV = 'development';
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should handle operational errors in development', () => {
    const error = new AppError('Test error', 400);
    errorHandler(error, mockReq, mockRes, mockNext);

    expect(mockRes.status).toHaveBeenCalledWith(400);
    expect(mockRes.json).toHaveBeenCalledWith({
      status: 'fail',
      error: error,
      message: 'Test error',
      stack: error.stack
    });
  });

  test('should handle operational errors in production', () => {
    process.env.NODE_ENV = 'production';
    const error = new AppError('Test error', 400);
    errorHandler(error, mockReq, mockRes, mockNext);

    expect(mockRes.status).toHaveBeenCalledWith(400);
    expect(mockRes.json).toHaveBeenCalledWith({
      status: 'fail',
      message: 'Test error'
    });
  });

  test('should handle programming errors in production', () => {
    process.env.NODE_ENV = 'production';
    const error = new Error('Programming error');
    errorHandler(error, mockReq, mockRes, mockNext);

    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.json).toHaveBeenCalledWith({
      status: 'error',
      message: 'Something went wrong'
    });
  });

  test('should handle MongoDB duplicate key errors', () => {
    const error = {
      code: 11000,
      errmsg: 'Duplicate field value: "test@example.com"'
    };
    errorHandler(error, mockReq, mockRes, mockNext);

    expect(mockRes.status).toHaveBeenCalledWith(400);
    expect(mockRes.json).toHaveBeenCalledWith({
      status: 'fail',
      message: 'Duplicate field value: "test@example.com". Please use another value!'
    });
  });

  test('should handle MongoDB validation errors', () => {
    const error = {
      name: 'ValidationError',
      errors: {
        name: { message: 'Name is required' },
        email: { message: 'Invalid email format' }
      }
    };
    errorHandler(error, mockReq, mockRes, mockNext);

    expect(mockRes.status).toHaveBeenCalledWith(400);
    expect(mockRes.json).toHaveBeenCalledWith({
      status: 'fail',
      message: 'Invalid input data. Name is required. Invalid email format.'
    });
  });

  test('should handle MongoDB Cast errors', () => {
    const error = {
      name: 'CastError',
      path: 'id',
      value: 'invalid-id'
    };
    errorHandler(error, mockReq, mockRes, mockNext);

    expect(mockRes.status).toHaveBeenCalledWith(400);
    expect(mockRes.json).toHaveBeenCalledWith({
      status: 'fail',
      message: 'Invalid id: invalid-id'
    });
  });

  test('should handle JWT errors', () => {
    const error = {
      name: 'JsonWebTokenError'
    };
    errorHandler(error, mockReq, mockRes, mockNext);

    expect(mockRes.status).toHaveBeenCalledWith(401);
    expect(mockRes.json).toHaveBeenCalledWith({
      status: 'fail',
      message: 'Invalid token. Please log in again!'
    });
  });

  test('should handle JWT expired errors', () => {
    const error = {
      name: 'TokenExpiredError'
    };
    errorHandler(error, mockReq, mockRes, mockNext);

    expect(mockRes.status).toHaveBeenCalledWith(401);
    expect(mockRes.json).toHaveBeenCalledWith({
      status: 'fail',
      message: 'Your token has expired! Please log in again.'
    });
  });
}); 