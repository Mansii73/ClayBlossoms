const Product = require('../../models/Product');
const productService = require('../../services/productService');
const AppError = require('../../utils/AppError');

// Mock the Product model
jest.mock('../../models/Product');

describe('Product Service Error Handling', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getProductById', () => {
    test('should throw AppError when product is not found', async () => {
      Product.findById.mockResolvedValue(null);

      await expect(productService.getProductById('invalid-id'))
        .rejects
        .toThrow(new AppError('Product not found', 404));
    });

    test('should throw AppError when database error occurs', async () => {
      Product.findById.mockRejectedValue(new Error('Database error'));

      await expect(productService.getProductById('valid-id'))
        .rejects
        .toThrow(new AppError('Error fetching product', 500));
    });
  });

  describe('createProduct', () => {
    test('should throw AppError for validation errors', async () => {
      const validationError = new Error('Validation error');
      validationError.name = 'ValidationError';
      Product.prototype.save.mockRejectedValue(validationError);

      await expect(productService.createProduct({}))
        .rejects
        .toThrow(new AppError('Invalid product data', 400));
    });

    test('should throw AppError for database errors', async () => {
      Product.prototype.save.mockRejectedValue(new Error('Database error'));

      await expect(productService.createProduct({}))
        .rejects
        .toThrow(new AppError('Error creating product', 500));
    });
  });

  describe('updateProduct', () => {
    test('should throw AppError when product is not found', async () => {
      Product.findByIdAndUpdate.mockResolvedValue(null);

      await expect(productService.updateProduct('invalid-id', {}))
        .rejects
        .toThrow(new AppError('Product not found', 404));
    });

    test('should throw AppError for validation errors', async () => {
      const validationError = new Error('Validation error');
      validationError.name = 'ValidationError';
      Product.findByIdAndUpdate.mockRejectedValue(validationError);

      await expect(productService.updateProduct('valid-id', {}))
        .rejects
        .toThrow(new AppError('Invalid product data', 400));
    });
  });

  describe('addProductReview', () => {
    test('should throw AppError when product is not found', async () => {
      Product.findById.mockResolvedValue(null);

      await expect(productService.addProductReview('invalid-id', 'user-id', 'user-name', {}))
        .rejects
        .toThrow(new AppError('Product not found', 404));
    });

    test('should throw AppError when user already reviewed', async () => {
      const mockProduct = {
        reviews: [{ user: { toString: () => 'user-id' } }],
        save: jest.fn()
      };
      Product.findById.mockResolvedValue(mockProduct);

      await expect(productService.addProductReview('valid-id', 'user-id', 'user-name', {}))
        .rejects
        .toThrow(new AppError('Product already reviewed', 400));
    });
  });

  describe('updateStock', () => {
    test('should throw AppError when product is not found', async () => {
      Product.findById.mockResolvedValue(null);

      await expect(productService.updateStock('invalid-id', 1))
        .rejects
        .toThrow(new AppError('Product not found', 404));
    });

    test('should throw AppError when insufficient stock', async () => {
      const mockProduct = {
        stock: 0,
        save: jest.fn()
      };
      Product.findById.mockResolvedValue(mockProduct);

      await expect(productService.updateStock('valid-id', 1))
        .rejects
        .toThrow(new AppError('Insufficient stock', 400));
    });
  });
}); 