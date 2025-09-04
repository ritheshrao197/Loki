import React, { useState } from 'react';
import './ProductApprovalPanel.css';

interface Product {
  id: string;
  name: string;
  seller: string;
  price: number;
  category: string;
  status: 'pending' | 'approved' | 'rejected';
  submissionDate: string;
}

const ProductApprovalPanel: React.FC = () => {
  // Mock product data
  const [products] = useState<Product[]>([
    {
      id: '1',
      name: 'Handwoven Basket',
      seller: 'Artisan Crafts Co.',
      price: 29.99,
      category: 'Home & Kitchen',
      status: 'pending',
      submissionDate: '2023-06-15'
    },
    {
      id: '2',
      name: 'Organic Skincare Set',
      seller: 'Natural Beauty Co.',
      price: 45.99,
      category: 'Beauty',
      status: 'pending',
      submissionDate: '2023-06-14'
    }
  ]);

  const handleApprove = (productId: string) => {
    console.log(`Approved product ${productId}`);
    // Implementation for approving product
  };

  const handleReject = (productId: string) => {
    console.log(`Rejected product ${productId}`);
    // Implementation for rejecting product
  };

  return (
    <div className="product-approval-container">
      <div className="panel-header">
        <h2>Product Approval</h2>
        <p>Pending product listings requiring review</p>
      </div>
      
      <div className="approval-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="seller">Seller: {product.seller}</p>
              <p className="price">Price: ${product.price.toFixed(2)}</p>
              <p className="category">Category: {product.category}</p>
              <p className="date">Submitted: {product.submissionDate}</p>
            </div>
            
            <div className="product-actions">
              <button 
                className="approve-btn"
                onClick={() => handleApprove(product.id)}
              >
                Approve
              </button>
              <button 
                className="reject-btn"
                onClick={() => handleReject(product.id)}
              >
                Reject
              </button>
              <button className="view-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductApprovalPanel;