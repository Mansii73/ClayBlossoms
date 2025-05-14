const Product = require('../models/Product');
const AppError = require('../utils/AppError');

class ProductService {
  // Get all products with filtering and pagination
  async getProducts(query) {
    try {
      const { 
        category, 
        search, 
        sort, 
        page = 1, 
        limit = 10,
        minPrice,
        maxPrice,
        featured,
        inStock
      } = query;
      
      const filterQuery = {};

      // Apply filters
      if (category) filterQuery.category = category;
      if (featured === 'true') filterQuery.featured = true;
      if (inStock === 'true') filterQuery.stock = { $gt: 0 };

      // Price range filter
      if (minPrice || maxPrice) {
        filterQuery.price = {};
        if (minPrice) filterQuery.price.$gte = Number(minPrice);
        if (maxPrice) filterQuery.price.$lte = Number(maxPrice);
      }

      // Search filter
      if (search) {
        filterQuery.$or = [
          { name: { $regex: search, $options: 'i' } },
          { description: { $regex: search, $options: 'i' } }
        ];
      }

      // Sort options
      const sortOptions = {
        'price-asc': { price: 1 },
        'price-desc': { price: -1 },
        'rating-desc': { rating: -1 },
        'newest': { createdAt: -1 }
      };

      const sortOption = sortOptions[sort] || { createdAt: -1 };

      // Execute query with pagination
      const [products, total] = await Promise.all([
        Product.find(filterQuery)
          .sort(sortOption)
          .limit(limit * 1)
          .skip((page - 1) * limit),
        Product.countDocuments(filterQuery)
      ]);

      return {
        products,
        totalPages: Math.ceil(total / limit),
        currentPage: Number(page),
        totalProducts: total
      };
    } catch (error) {
      throw new AppError('Error fetching products', 500);
    }
  }

  // Get featured products
  async getFeaturedProducts() {
    try {
      return await Product.find({ featured: true })
        .limit(6)
        .sort({ rating: -1 });
    } catch (error) {
      throw new AppError('Error fetching featured products', 500);
    }
  }

  // Get product categories with counts
  async getCategories() {
    try {
      return await Product.aggregate([
        {
          $group: {
            _id: '$category',
            count: { $sum: 1 }
          }
        }
      ]);
    } catch (error) {
      throw new AppError('Error fetching categories', 500);
    }
  }

  // Get single product by ID
  async getProductById(id) {
    try {
      const product = await Product.findById(id);
      if (!product) {
        throw new AppError('Product not found', 404);
      }
      return product;
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new AppError('Error fetching product', 500);
    }
  }

  // Create new product
  async createProduct(productData) {
    try {
      const product = new Product(productData);
      await product.save();
      return product;
    } catch (error) {
      if (error.name === 'ValidationError') {
        throw new AppError('Invalid product data', 400);
      }
      throw new AppError('Error creating product', 500);
    }
  }

  // Update product
  async updateProduct(id, updateData) {
    try {
      const product = await Product.findByIdAndUpdate(
        id,
        updateData,
        { new: true, runValidators: true }
      );
      if (!product) {
        throw new AppError('Product not found', 404);
      }
      return product;
    } catch (error) {
      if (error instanceof AppError) throw error;
      if (error.name === 'ValidationError') {
        throw new AppError('Invalid product data', 400);
      }
      throw new AppError('Error updating product', 500);
    }
  }

  // Delete product
  async deleteProduct(id) {
    try {
      const product = await Product.findByIdAndDelete(id);
      if (!product) {
        throw new AppError('Product not found', 404);
      }
      return { message: 'Product removed' };
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new AppError('Error deleting product', 500);
    }
  }

  // Add product review
  async addProductReview(productId, userId, userName, reviewData) {
    try {
      const product = await Product.findById(productId);
      if (!product) {
        throw new AppError('Product not found', 404);
      }

      // Check if user already reviewed
      const alreadyReviewed = product.reviews.find(
        r => r.user.toString() === userId.toString()
      );

      if (alreadyReviewed) {
        throw new AppError('Product already reviewed', 400);
      }

      const review = {
        user: userId,
        name: userName,
        rating: Number(reviewData.rating),
        comment: reviewData.comment
      };

      product.reviews.push(review);
      product.numReviews = product.reviews.length;
      product.rating = product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length;

      await product.save();
      return { message: 'Review added' };
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new AppError('Error adding review', 500);
    }
  }

  // Update product stock
  async updateStock(productId, quantity) {
    try {
      const product = await Product.findById(productId);
      if (!product) {
        throw new AppError('Product not found', 404);
      }

      if (product.stock < quantity) {
        throw new AppError('Insufficient stock', 400);
      }

      product.stock -= quantity;
      await product.save();
      return product;
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new AppError('Error updating stock', 500);
    }
  }

  // Get products by category
  async getProductsByCategory(category, limit = 10) {
    try {
      return await Product.find({ category })
        .limit(limit)
        .sort({ rating: -1 });
    } catch (error) {
      throw new AppError('Error fetching products by category', 500);
    }
  }

  // Get related products
  async getRelatedProducts(productId, limit = 4) {
    try {
      const product = await Product.findById(productId);
      if (!product) {
        throw new AppError('Product not found', 404);
      }

      return await Product.find({
        category: product.category,
        _id: { $ne: productId }
      })
        .limit(limit)
        .sort({ rating: -1 });
    } catch (error) {
      if (error instanceof AppError) throw error;
      throw new AppError('Error fetching related products', 500);
    }
  }
}

module.exports = new ProductService(); 