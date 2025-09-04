import React from 'react';
import './Navbar.css';

interface NavbarProps {
  userType: 'buyer' | 'seller' | 'admin';
}

const Navbar: React.FC<NavbarProps> = ({ userType }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2>Local Shopping App</h2>
      </div>
      <div className="navbar-menu">
        <a href="/seller">Sell With Us</a>
        {userType === 'buyer' && (
          <>
            <a href="/">Home</a>
            <a href="/products">Products</a>
            <a href="/cart">Cart</a>
            <a href="/checkout">Checkout</a>
            <a href="/profile">Profile</a>
            <a href="/order-tracking">Track Order</a>
            <a href="/reviews">Reviews</a>
            <a href="/notifications">Notifications</a>
          </>
        )}
        {userType === 'seller' && (
          <>
            <a href="/seller/dashboard">Dashboard</a>
            <a href="/seller/portal">Portal</a>
            <a href="/seller/products">Products</a>
            <a href="/seller/orders">Orders</a>
            <a href="/seller/inventory">Inventory</a>
            <a href="/seller/analytics">Analytics</a>
            <a href="/seller/promotions">Promotions</a>
            <a href="/seller/verification">Verification</a>
            <a href="/seller/payment-settlement">Payments</a>
            <a href="/seller/support">Support</a>
          </>
        )}
        {userType === 'admin' && (
          <>
            <a href="/admin/dashboard">Dashboard</a>
            <a href="/admin/user-management">Users</a>
            <a href="/admin/products">Products</a>
            <a href="/admin/analytics">Analytics</a>
            <a href="/admin/fraud-detection">Fraud Detection</a>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;