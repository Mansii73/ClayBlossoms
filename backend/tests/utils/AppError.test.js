const AppError = require('../../utils/AppError');

describe('AppError', () => {
  test('should create an error with correct properties', () => {
    const message = 'Test error message';
    const statusCode = 400;
    const error = new AppError(message, statusCode);

    expect(error).toBeInstanceOf(Error);
    expect(error.message).toBe(message);
    expect(error.statusCode).toBe(statusCode);
    expect(error.status).toBe('fail');
    expect(error.isOperational).toBe(true);
  });

  test('should set status to error for 5xx status codes', () => {
    const error = new AppError('Server error', 500);
    expect(error.status).toBe('error');
  });

  test('should set status to fail for 4xx status codes', () => {
    const error = new AppError('Bad request', 400);
    expect(error.status).toBe('fail');
  });

  test('should capture stack trace', () => {
    const error = new AppError('Test error', 400);
    expect(error.stack).toBeDefined();
  });
}); 