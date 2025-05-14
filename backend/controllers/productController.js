const productService = require('../services/productService');

// @desc    Get all products
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res, next) => {
  const result = await productService.getProducts(req.query);
  res.json(result);
};

// @desc    Get featured products
// @route   GET /api/products/featured
// @access  Public
const getFeaturedProducts = async (req, res, next) => {
  const products = await productService.getFeaturedProducts();
  res.json(products);
};

// @desc    Get product categories
// @route   GET /api/products/categories
// @access  Public
const getCategories = async (req, res, next) => {
  const categories = await productService.getCategories();
  res.json(categories);
};

// @desc    Get single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = async (req, res, next) => {
  const product = await productService.getProductById(req.params.id);
  res.json(product);
};

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = async (req, res, next) => {
  const product = await productService.createProduct(req.body);
  res.status(201).json(product);
};

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = async (req, res, next) => {
  const product = await productService.updateProduct(req.params.id, req.body);
  res.json(product);
};

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = async (req, res, next) => {
  await productService.deleteProduct(req.params.id);
  res.json({ message: 'Product removed' });
};

// @desc    Create new review
// @route   POST /api/products/:id/reviews
// @access  Private
const createProductReview = async (req, res, next) => {
  const result = await productService.addProductReview(
    req.params.id,
    req.user._id,
    req.user.name,
    req.body
  );
  res.status(201).json(result);
};

module.exports = {
  getProducts,
  getFeaturedProducts,
  getCategories,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview
}; 