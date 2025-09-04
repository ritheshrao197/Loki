import React from 'react';
import SellerSidebar from '../components/SellerSidebar';
import AnalyticsCharts from './AnalyticsCharts';
import './SellerDashboard.css';

const SellerDashboard: React.FC = () => {
  return (
    <div className="seller-layout">
      <SellerSidebar />
      <main className="seller-main">
        <div className="dashboard-header">
          <h1>Dashboard Overview</h1>
          <p>Welcome back! Here's what's happening with your store today.</p>
        </div>
        
        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>Total Sales</h3>
            <p className="stat-value">$1,248.00</p>
            <p className="stat-change positive">+12% from last month</p>
          </div>
          
          <div className="stat-card">
            <h3>Orders</h3>
            <p className="stat-value">24</p>
            <p className="stat-change positive">+5% from last month</p>
          </div>
          
          <div className="stat-card">
            <h3>Products</h3>
            <p className="stat-value">18</p>
            <p className="stat-change">No change</p>
          </div>
          
          <div className="stat-card">
            <h3>Visitors</h3>
            <p className="stat-value">1,242</p>
            <p className="stat-change negative">-3% from last month</p>
          </div>
        </div>
        
        <div className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="actions-grid">
            <a href="/seller/products/new" className="action-card">
              <h3>Add Product</h3>
              <p>Add a new product to your store</p>
            </a>
            <a href="/seller/orders" className="action-card">
              <h3>View Orders</h3>
              <p>Manage your recent orders</p>
            </a>
            <a href="/seller/promotions" className="action-card">
              <h3>Create Promotion</h3>
              <p>Set up discounts and offers</p>
            </a>
            <a href="/seller/payment-settlement" className="action-card">
              <h3>Payment Settlement</h3>
              <p>View your settlement history</p>
            </a>
          </div>
        </div>
        
        <AnalyticsCharts />
        
        <div className="dashboard-content">
          <div className="top-products">
            <h2>Top Selling Products</h2>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Sold</th>
                  <th>Revenue</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Handmade Ceramic Mug</td>
                  <td>$12.99</td>
                  <td>42</td>
                  <td>$545.58</td>
                </tr>
                <tr>
                  <td>Wooden Cutting Board</td>
                  <td>$24.99</td>
                  <td>28</td>
                  <td>$699.72</td>
                </tr>
                <tr>
                  <td>Organic Cotton T-Shirt</td>
                  <td>$19.99</td>
                  <td>19</td>
                  <td>$379.81</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SellerDashboard;