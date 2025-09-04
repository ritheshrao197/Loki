import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ProductGrid from '../components/ProductGrid';
import './BuyerHome.css';

// Mock product data
const mockProducts = [
  {
    id: '1',
    name: 'Handmade Ceramic Mug',
    price: 12.99,
    rating: 4.5,
    imageUrl: ''
  },
  {
    id: '2',
    name: 'Wooden Cutting Board',
    price: 24.99,
    rating: 4.8,
    imageUrl: ''
  },
  {
    id: '3',
    name: 'Organic Cotton T-Shirt',
    price: 19.99,
    rating: 4.2,
    imageUrl: ''
  },
  {
    id: '4',
    name: 'Handcrafted Jewelry',
    price: 34.99,
    rating: 4.9,
    imageUrl: ''
  }
];

const BuyerHome: React.FC = () => {
  const [products] = useState(mockProducts);

  const handleAddToCart = (id: string) => {
    console.log(`Added product ${id} to cart`);
    // Implementation for adding to cart
  };

  const handleAddToWishlist = (id: string) => {
    console.log(`Added product ${id} to wishlist`);
    // Implementation for adding to wishlist
  };

  return (
    <div>
      <Navbar userType="buyer" />
      <main className="buyer-home">
        <div className="hero-section">
          <h1>Discover Local Treasures</h1>
          <p>Shop unique products from local manufacturers and sellers</p>
          <div className="hero-buttons">
            <a href="/products" className="btn btn-primary">Browse Products</a>
            <a href="/categories" className="btn btn-secondary">Shop by Category</a>
          </div>
        </div>

        <div className="featured-section">
          <h2>Featured Products</h2>
          <ProductGrid 
            products={products} 
            onAddToCart={handleAddToCart}
            onAddToWishlist={handleAddToWishlist}
          />
        </div>

        <div className="quick-links">
          <h2>Quick Links</h2>
          <div className="links-grid">
            <a href="/order-tracking" className="link-card">
              <h3>Track Order</h3>
              <p>Check the status of your recent orders</p>
            </a>
            <a href="/profile" className="link-card">
              <h3>My Account</h3>
              <p>Manage your profile and preferences</p>
            </a>
            <a href="/wishlist" className="link-card">
              <h3>Wishlist</h3>
              <p>View your saved items</p>
            </a>
            <a href="/notifications" className="link-card">
              <h3>Notifications</h3>
              <p>Stay updated with latest offers</p>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BuyerHome;