const { Schema, model } = require('../connection');

const productSchema = new Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String },
    price: { type: Number, required: true },
    stock: { type: Number, default: 0 },
    category: { type: String, required: true },
    image: { type: String }, // URL to the product image
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('products', productSchema);
