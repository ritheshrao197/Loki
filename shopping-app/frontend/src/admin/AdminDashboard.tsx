import React from 'react';
import Navbar from '../components/Navbar';
import './AdminDashboard.css';

const AdminDashboard: React.FC = () => {
  return (
    <div>
      <Navbar userType="admin" />
      <div className="admin-dashboard">
        <header className="admin-header">
          <h1>Admin Dashboard</h1>
          <p>Overview of platform metrics and management tools</p>
        </header>
        
        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>Total Users</h3>
            <p className="stat-value">1,248</p>
            <p className="stat-change positive">+12% from last month</p>
          </div>
          
          <div className="stat-card">
            <h3>Total Orders</h3>
            <p className="stat-value">862</p>
            <p className="stat-change positive">+8% from last month</p>
          </div>
          
          <div className="stat-card">
            <h3>Total Revenue</h3>
            <p className="stat-value">$24,568.00</p>
            <p className="stat-change positive">+15% from last month</p>
          </div>
          
          <div className="stat-card">
            <h3>Products Listed</h3>
            <p className="stat-value">342</p>
            <p className="stat-change">No change</p>
          </div>
        </div>
        
        <div className="admin-content">
          <div className="recent-activity">
            <h2>Recent Activity</h2>
            <div className="activity-list">
              <div className="activity-item">
                <p><strong>New seller registration:</strong> Artisan Crafts Co.</p>
                <span className="timestamp">2 hours ago</span>
              </div>
              <div className="activity-item">
                <p><strong>New product listing:</strong> Handwoven Basket</p>
                <span className="timestamp">5 hours ago</span>
              </div>
              <div className="activity-item">
                <p><strong>Order placed:</strong> ORD-8742 for $42.99</p>
                <span className="timestamp">1 day ago</span>
              </div>
            </div>
          </div>
          
          <div className="quick-actions">
            <h2>Management Tools</h2>
            <div className="actions-grid">
              <a href="/admin/user-management" className="action-card">
                <h3>User Management</h3>
                <p>Manage all user accounts</p>
              </a>
              <a href="/admin/products" className="action-card">
                <h3>Product Moderation</h3>
                <p>Review and approve listings</p>
              </a>
              <a href="/admin/analytics" className="action-card">
                <h3>Analytics Dashboard</h3>
                <p>View platform metrics</p>
              </a>
              <a href="/admin/fraud-detection" className="action-card">
                <h3>Fraud Detection</h3>
                <p>Monitor suspicious activity</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;