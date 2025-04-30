const Products = ({ name, price }) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-4">
      <img
        className="w-full h-48 object-cover rounded-xl"
        src="/images/Demoiselle patterened mugs -Waves,matte blue - Copy.png"
        alt={name}
      />
      <div className="pt-4">
         <h2 className="text-xl font-semibold text-blue-800">Demoiselle pattern mugs - Waves, matte blue</h2>

        <p className="text-lg text-green-600 font-medium mt-1">₹{250}</p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
          + Add to Cart
        </button>
      </div>
    </div>
  );
};

// Example usage


 
 export default Products;

