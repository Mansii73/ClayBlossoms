import React from 'react';

const Card = () => {
  return (
    <div className="p-4 max-w-sm mx-auto space-y-6 mt-5">

      {/* 1. Abstract Face Vases */}
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="overflow-hidden rounded-t-lg">
          <img 
            src="https://i.pinimg.com/736x/c3/88/22/c38822a4734e00271536266b4654a58d.jpg" 
            alt="Abstract Face Vases" 
            className="w-full h-60 object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Abstract Face Vases</h2>
          <p className="text-gray-600 mb-4">₹1,799</p>
        </div>
      </div>

      {/* 2. Sculptural Planter Set */}
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="overflow-hidden rounded-t-lg">
          <img 
            src="/mnt/data/ec44db0b-230c-4874-9332-12ffe2a0670e.png" 
            alt="Sculptural Planter Set" 
            className="w-full h-60 object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Sculptural Planter Set</h2>
          <p className="text-gray-600 mb-4">₹2,299</p>
        </div>
      </div>

      {/* 3. Hanging Wall Planter */}
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="overflow-hidden rounded-t-lg">
          <img 
            src="https://i.pinimg.com/736x/42/9a/1a/429a1a28763e1845cf09a470900b7afb.jpg" 
            alt="Wall-Mounted Planter" 
            className="w-full h-60 object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Wall-Mounted Terracotta Planter</h2>
          <p className="text-gray-600 mb-4">₹1,099</p>
        </div>
      </div>

      {/* 4. Artistic Clay Pots */}
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="overflow-hidden rounded-t-lg">
          <img 
            src="/mnt/data/bc61610f-640e-49f5-8103-74db2d684d70.png" 
            alt="Artistic Clay Pots" 
            className="w-full h-60 object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Artistic Clay Pots</h2>
          <p className="text-gray-600 mb-4">₹1,299</p>
        </div>
      </div>

      {/* 5. Face-Inspired Decor Vases */}
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="overflow-hidden rounded-t-lg">
          <img 
            src="/mnt/data/59a7cb65-5cd3-4712-bbcb-801cc26674a9.png" 
            alt="Face-Inspired Decor Vases" 
            className="w-full h-60 object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Face-Inspired Decor Vases</h2>
          <p className="text-gray-600 mb-4">₹1,599</p>
        </div>
      </div>

    </div>
  );
};

export default Card;
