'use client';

import React from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from '../../components/Navbar';

const AdminLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Toaster position="top-right" />
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;