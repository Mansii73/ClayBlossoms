const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: error.message });
  }
});

// Get single product
router.get('/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

<<<<<<< HEAD
// Create product (Admin only)
router.post('/add', async (req, res) => {
  console.log(req.body);
=======
// Create product
router.post('/products', async (req, res) => {
>>>>>>> 5fe7e71ce3909064a4ccb4881d84de0faa000ad0
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(400).json({ message: error.message });
  }
});

// Update product
router.put('/products/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(400).json({ message: error.message });
  }
});

// Delete product
router.delete('/products/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ message: error.message });
  }
});

// Add product rating and review
router.post('/products/:id/reviews', isAuthenticated, async (req, res) => {
  try {
    const { rating, review } = req.body;
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Check if user already reviewed
    const existingReview = product.ratings.find(
      r => r.user.toString() === req.user._id.toString()
    );

    if (existingReview) {
      existingReview.rating = rating;
      existingReview.review = review;
    } else {
      product.ratings.push({
        user: req.user._id,
        rating,
        review
      });
    }

    // Calculate average rating
    const totalRatings = product.ratings.reduce((acc, item) => acc + item.rating, 0);
    product.averageRating = totalRatings / product.ratings.length;

    await product.save();
    res.json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;