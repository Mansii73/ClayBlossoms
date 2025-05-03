'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Welcome to ClayBlossoms</h1>
      <Link 
        href="/admin" 
        className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Go to Admin Dashboard
      </Link>
    </main>
  );
}







