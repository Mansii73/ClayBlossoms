const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  category: {
    type: String,
    required: true,
    enum: ['Pots', 'Tea Sets', 'Mugs', 'Jugs', 'Bowls', 'Vases']
  },
  images: [{
    type: String,
    required: true
  }],
  stock: {
    type: Number,
    required: true,
    min: 0,
    default: 0
  },
  brand: {
    type: String,
    default: false
  },
  ratings: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    rating: {
      type: Number,
      min: 1,
      max: 5
    },
    review: String
  }],
<<<<<<< HEAD
=======
  
>>>>>>> 5fe7e71ce3909064a4ccb4881d84de0faa000ad0
}, {
  createdAt: {
    type: Date,
    default: Date.now
  }
  
});

module.exports = mongoose.model('Product', productSchema); 