import React from 'react';

const ProductCard = ({ image, title, description, price, rating, inStock, primaryText, secondaryText }) => {
    return (
        <div className="p-6 shadow-lg mt-10 rounded-lg space-y-4 border">
            <img src={image} alt={title} className="w-full h-48 object-cover rounded" />

            <div className="space-y-2">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="text-gray-600">{description}</p>

                <div className="flex items-center justify-between">
                    <span className="text-xl font-semibold text-green-600">₹{price}</span>
                    <span className="text-yellow-500 font-medium">{rating}⭐</span>
                </div>

                <p className={`text-sm ${inStock ? 'text-green-500' : 'text-red-500'}`}>
                    {inStock ? 'In Stock' : 'Out of Stock'}
                </p>
            </div>

            <div className="flex gap-3 pt-4">
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white rounded p-3 w-full">
                    {primaryText}
                </button>
                <button className="border border-indigo-500 text-indigo-500 hover:bg-indigo-50 rounded p-3 w-full">
                    {secondaryText}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
