import React, { useState } from 'react';
import './InventoryTable.css';

interface InventoryItem {
  id: string;
  name: string;
  sku: string;
  price: number;
  stock: number;
  status: 'in_stock' | 'low_stock' | 'out_of_stock';
}

const InventoryTable: React.FC = () => {
  // Mock inventory data
  const [inventoryItems] = useState<InventoryItem[]>([
    {
      id: '1',
      name: 'Handmade Ceramic Mug',
      sku: 'HM-MUG-001',
      price: 12.99,
      stock: 42,
      status: 'in_stock'
    },
    {
      id: '2',
      name: 'Wooden Cutting Board',
      sku: 'WC-BRD-002',
      price: 24.99,
      stock: 15,
      status: 'low_stock'
    },
    {
      id: '3',
      name: 'Organic Cotton T-Shirt',
      sku: 'OC-TSH-003',
      price: 19.99,
      stock: 0,
      status: 'out_of_stock'
    }
  ]);

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'in_stock': return 'status-in-stock';
      case 'low_stock': return 'status-low-stock';
      case 'out_of_stock': return 'status-out-of-stock';
      default: return '';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'in_stock': return 'In Stock';
      case 'low_stock': return 'Low Stock';
      case 'out_of_stock': return 'Out of Stock';
      default: return status;
    }
  };

  return (
    <div className="inventory-table-container">
      <div className="table-header">
        <h2>Inventory Tracking</h2>
        <button className="add-product-btn">Add Product</button>
      </div>
      
      <div className="table-wrapper">
        <table className="inventory-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>SKU</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {inventoryItems.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.sku}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>{item.stock}</td>
                <td>
                  <span className={`status-badge ${getStatusClass(item.status)}`}>
                    {getStatusText(item.status)}
                  </span>
                </td>
                <td>
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryTable;