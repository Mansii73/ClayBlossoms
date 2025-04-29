const express = require('express');
const ProductModel = require('../models/ProductModel');
require('dotenv').config();

const router = express.Router();

// Add a new product
router.post('/add', (req, res) => {
    console.log('Adding Product:', req.body);

    new ProductModel(req.body).save()
        .then((result) => {
            res.status(201).json({ message: 'Product added successfully', data: result });
        })
        .catch((err) => {
            if (err?.code === 11000) {
                res.status(400).json({ message: 'Product already exists' });
            } else {
                res.status(500).json({ message: 'An error occurred while adding the product', error: err });
            }
            console.error(err);
        });
});

// Get all products
router.get('/getall', (req, res) => {
    ProductModel.find()
        .then((products) => {
            res.status(200).json(products);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ message: 'Failed to fetch products', error: err });
        });
});

// Get products by category
router.get('/getbycategory/:category', (req, res) => {
    ProductModel.find({ category: req.params.category })
        .then((products) => {
            res.status(200).json(products);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ message: 'Failed to fetch products by category', error: err });
        });
});

// Get product by name
router.get('/getbyname/:name', (req, res) => {
    ProductModel.findOne({ name: req.params.name })
        .then((product) => {
            if (product) {
                res.status(200).json(product);
            } else {
                res.status(404).json({ message: 'Product not found' });
            }
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ message: 'Failed to fetch product by name', error: err });
        });
});

// Get product by ID
router.get('/getbyid/:id', (req, res) => {
    ProductModel.findById(req.params.id)
        .then((product) => {
            if (product) {
                res.status(200).json(product);
            } else {
                res.status(404).json({ message: 'Product not found' });
            }
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ message: 'Failed to fetch product by ID', error: err });
        });
});

// Update product
router.put('/update/:id', (req, res) => {
    ProductModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((updatedProduct) => {
            if (updatedProduct) {
                res.status(200).json({ message: 'Product updated successfully', data: updatedProduct });
            } else {
                res.status(404).json({ message: 'Product not found' });
            }
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ message: 'Failed to update product', error: err });
        });
});

// Delete product
router.delete('/delete/:id', (req, res) => {
    ProductModel.findByIdAndDelete(req.params.id)
        .then((deletedProduct) => {
            if (deletedProduct) {
                res.status(200).json({ message: 'Product deleted successfully', data: deletedProduct });
            } else {
                res.status(404).json({ message: 'Product not found' });
            }
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ message: 'Failed to delete product', error: err });
        });
});

module.exports = router;




