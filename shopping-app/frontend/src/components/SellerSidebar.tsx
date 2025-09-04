import React from 'react';
import './SellerSidebar.css';

const SellerSidebar: React.FC = () => {
  return (
    <div className="seller-sidebar">
      <h2>Seller Dashboard</h2>
      <nav>
        <ul>
          <li><a href="/seller/dashboard">Dashboard</a></li>
          <li><a href="/seller/portal">Seller Portal</a></li>
          <li><a href="/seller/products">Products</a></li>
          <li><a href="/seller/orders">Orders</a></li>
          <li><a href="/seller/inventory">Inventory</a></li>
          <li><a href="/seller/analytics">Analytics</a></li>
          <li><a href="/seller/promotions">Promotions</a></li>
          <li><a href="/seller/verification">Verification</a></li>
          <li><a href="/seller/payment-settlement">Payment Settlement</a></li>
          <li><a href="/seller/support">Support Chatbot</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default SellerSidebar;