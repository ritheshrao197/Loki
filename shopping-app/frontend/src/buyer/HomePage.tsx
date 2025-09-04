import React from 'react';
import Navbar from '../components/Navbar';
import './HomePage.css';

const HomePage: React.FC = () => {
  // Mock data for categories
  const categories = [
    { id: 1, name: 'Handicrafts & Art', icon: '🧵' },
    { id: 2, name: 'Clothing & Textiles', icon: '👕' },
    { id: 3, name: 'Homemade Foods & Spices', icon: '🍲' },
    { id: 4, name: 'Home & Decor', icon: '🪑' },
    { id: 5, name: 'Gifts & Festive Specials', icon: '🎁' },
    { id: 6, name: 'Organic & Eco-Friendly Products', icon: '🌱' },
  ];

  // Mock data for sellers
  const sellers = [
    { id: 1, name: 'Artisan Crafts Co.', location: 'Jaipur, Rajasthan', isVerified: true },
    { id: 2, name: 'Organic Textiles', location: 'Coimbatore, Tamil Nadu', isVerified: true },
    { id: 3, name: 'Spice Bazaar', location: 'Kochi, Kerala', isVerified: true },
    { id: 4, name: 'Woodwork Masters', location: 'Jodhpur, Rajasthan', isVerified: true },
  ];

  // Mock data for products
  const products = [
    { id: 1, name: 'Handmade Ceramic Mug', price: 299, originalPrice: 399, rating: 4.5 },
    { id: 2, name: 'Wooden Cutting Board', price: 499, rating: 4.2 },
    { id: 3, name: 'Organic Cotton T-Shirt', price: 799, originalPrice: 999, rating: 4.8 },
    { id: 4, name: 'Handcrafted Jewelry', price: 1299, rating: 4.9 },
  ];

  return (
    <div>
      <Navbar userType="buyer" />
      <main className="home-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>Shop Local, Support Local – Discover Made in India Products</h1>
            <p>Find authentic goods from verified local manufacturers, artisans, and small sellers near you.</p>
            <div className="hero-buttons">
              <a href="/products" className="btn btn-primary">🛍️ Start Shopping</a>
              <a href="/seller/onboarding" className="btn btn-secondary">🏪 Become a Seller</a>
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="featured-categories">
          <div className="container">
            <div className="section-header">
              <h2>Featured Categories</h2>
              <a href="/categories" className="view-all-link">View All Categories</a>
            </div>
            <div className="categories-grid">
              {categories.map(category => (
                <div key={category.id} className="category-card">
                  <div className="category-icon">{category.icon}</div>
                  <h3>{category.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Shop With Us */}
        <section className="why-shop">
          <div className="container">
            <h2>Why Shop With Us</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">✅</div>
                <h3>Authentic Local Products</h3>
                <p>Directly from verified manufacturers & sellers.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💰</div>
                <h3>Fair Prices</h3>
                <p>No middlemen, better value for both buyer & seller.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🚚</div>
                <h3>Fast & Reliable Delivery</h3>
                <p>Local delivery partners for quick service.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🌍</div>
                <h3>Support Communities</h3>
                <p>Every purchase empowers small businesses.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Sellers */}
        <section className="featured-sellers">
          <div className="container">
            <div className="section-header">
              <h2>Featured Sellers</h2>
              <a href="/sellers" className="view-all-link">View All Sellers</a>
            </div>
            <div className="sellers-grid">
              {sellers.map(seller => (
                <div key={seller.id} className="seller-card">
                  <div className="seller-logo">
                    <div className="placeholder-logo">{seller.name.charAt(0)}</div>
                  </div>
                  <div className="seller-info">
                    <h3>{seller.name}</h3>
                    <p>{seller.location}</p>
                    {seller.isVerified && <span className="verified-badge">Verified Seller</span>}
                  </div>
                  <a href={`/seller/${seller.id}`} className="view-shop-btn">View Shop</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Trending Products */}
        <section className="trending-products">
          <div className="container">
            <div className="section-header">
              <h2>Top Trending Products</h2>
              <a href="/products" className="view-all-link">View All Products</a>
            </div>
            <div className="products-grid">
              {products.map(product => (
                <div key={product.id} className="product-card">
                  <div className="product-image">
                    <div className="placeholder-image">Product Image</div>
                  </div>
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <div className="product-price">
                      <span className="current-price">₹{product.price}</span>
                      {product.originalPrice && (
                        <span className="original-price">₹{product.originalPrice}</span>
                      )}
                    </div>
                    <div className="product-rating">
                      <span>⭐ {product.rating}/5</span>
                    </div>
                    <button className="add-to-cart-btn">Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Special Offers */}
        <section className="special-offers">
          <div className="container">
            <div className="offer-content">
              <h2>🎉 Festive Collections – Handpicked from Local Artisans</h2>
              <p>Exclusive festival deals (Diwali, Holi, Raksha Bandhan).</p>
              <a href="/festive-collection" className="shop-now-btn">Shop Now</a>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="how-it-works">
          <div className="container">
            <h2>How It Works</h2>
            <div className="steps-container">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-icon">🔍</div>
                <h3>Browse Local Shops & Products</h3>
                <p>Search by category or location.</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-icon">🛒</div>
                <h3>Add to Cart & Checkout</h3>
                <p>Simple and secure payment options.</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-icon">🚚</div>
                <h3>Get Fast Delivery</h3>
                <p>Right from your local seller's shop to your door.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-Action */}
        <section className="cta-section">
          <div className="container">
            <h2>Join India's Local Shopping Revolution</h2>
            <a href="/seller/onboarding" className="become-seller-btn">🏪 Register as a Seller</a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="home-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-links">
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
              <a href="/seller">Sell With Us</a>
              <a href="/seller-help">Seller Help</a>
              <a href="/faqs">FAQs</a>
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms & Conditions</a>
            </div>
            <div className="social-media">
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Facebook">🇫</a>
              <a href="#" aria-label="LinkedIn">🇱</a>
              <a href="#" aria-label="YouTube">▶️</a>
            </div>
            <div className="footer-tagline">
              <p>Made in India, For India.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;