import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-500">{product.description}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-green-600 font-bold">₹{product.price}</span>
          <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

