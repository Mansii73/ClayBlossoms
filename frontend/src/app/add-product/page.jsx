'use client';
import { useRouter } from 'next/navigation';

export default function ProductsPage() {
  const router = useRouter();

  const handleAdd = () => {
    router.push('/add-product'); // ye page.jsx ko load karega under /add-product
  };

  return (
    <div className="p-4">
      {/* Product List UI */}
      <button
        onClick={handleAdd}
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
      >
        + Add Product
      </button>
    </div>
  );
}
