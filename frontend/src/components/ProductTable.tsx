import React from 'react';

interface Product {
  name: string;
  price: string;
  status: string;
}

const mockProducts: Product[] = [
  { name: 'Digital Coloring Book 1', price: '$9.99', status: 'Active' },
  { name: 'Digital Coloring Book 2', price: '$14.99', status: 'Inactive' },
];

const ProductTable = () => (
  <div
    className="p-6 rounded-lg shadow-md mt-6 overflow-x-auto"
    style={{ backgroundColor: 'var(--card-maple)' }}
  >
    <button
      className="px-4 py-2 rounded mb-4"
      style={{ backgroundColor: 'var(--primary-maple)', color: 'white' }}
    >
      Add Product
    </button>
    <table className="w-full text-left min-w-[600px]">
      <thead>
        <tr style={{ borderBottom: `1px solid var(--border-maple)` }}>
          <th className="py-2">Name</th>
          <th className="py-2">Price</th>
          <th className="py-2">Status</th>
          <th className="py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {mockProducts.map((product, idx) => (
          <tr key={idx} style={{ borderBottom: `1px solid var(--border-maple)` }}>
            <td className="py-2">{product.name}</td>
            <td className="py-2">{product.price}</td>
            <td className="py-2">{product.status}</td>
            <td className="py-2">
              <button className="mr-2" style={{ color: 'var(--accent-glow)' }}>Edit</button>
              <button style={{ color: 'var(--error)' }}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ProductTable;
