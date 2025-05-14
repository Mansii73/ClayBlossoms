const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middlewares/auth');
const {
  validateCreateProduct,
  validateUpdateProduct,
  validateProductReview,
  validateProductQuery
} = require('../middlewares/validateProduct');
const {
  getProducts,
  getFeaturedProducts,
  getCategories,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview
} = require('../controllers/productController');

// Public routes
router.get('/', validateProductQuery, getProducts);
router.get('/featured', getFeaturedProducts);
router.get('/categories', getCategories);
router.get('/:id', getProductById);

// Protected routes
router.post('/:id/reviews', protect, validateProductReview, createProductReview);

// Admin routes
router.post('/', protect, admin, validateCreateProduct, createProduct);
router.put('/:id', protect, admin, validateUpdateProduct, updateProduct);
router.delete('/:id', protect, admin, deleteProduct);

module.exports = router; 