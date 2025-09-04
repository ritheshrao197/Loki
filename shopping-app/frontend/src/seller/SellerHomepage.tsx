import React from 'react';
import './SellerHomepage.css';
import { useNavigate } from 'react-router-dom';

const SellerHomepage: React.FC = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/seller/onboarding');
  };

  const handleLearnMoreClick = () => {
    // Scroll to the "How It Works" section
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="seller-homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">Grow Your Business. Sell Directly to Lakhs of Buyers.</h1>
          <p className="hero-subtitle">
            Join India's trusted marketplace for local manufacturers, artisans, and shop owners. 
            Start selling online with zero hassle and maximum visibility.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={handleRegisterClick}>
              🚀 Start Selling Today
            </button>
            <button className="btn btn-secondary" onClick={handleLearnMoreClick}>
              📖 Learn How It Works
            </button>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="value-proposition-section">
        <div className="container">
          <h2 className="section-title">Why Sell With Us</h2>
          <div className="value-grid">
            <div className="value-item">
              <div className="value-icon">📈</div>
              <h3>Expand Your Reach</h3>
              <p>Get access to thousands of buyers across India.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">💰</div>
              <h3>Increase Profits</h3>
              <p>Sell directly to customers, reduce middlemen costs.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🛠️</div>
              <h3>Easy Setup</h3>
              <p>List products in minutes, manage everything from your phone.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🔒</div>
              <h3>Secure Payments</h3>
              <p>Fast, safe, and reliable payouts directly to your bank.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🏅</div>
              <h3>Verified Seller Badge</h3>
              <p>Build trust with buyers instantly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Sell Section */}
      <section className="who-can-sell-section">
        <div className="container">
          <h2 className="section-title">Who Can Sell?</h2>
          <div className="seller-types-grid">
            <div className="seller-type">
              <div className="seller-icon">🧵</div>
              <h3>Manufacturers</h3>
              <p>(handicrafts, clothing, furniture, etc.)</p>
            </div>
            <div className="seller-type">
              <div className="seller-icon">🍲</div>
              <h3>Homemade Food Producers</h3>
              <p>(spices, snacks, pickles, etc.)</p>
            </div>
            <div className="seller-type">
              <div className="seller-icon">👕</div>
              <h3>Small Retailers & Local Shops</h3>
            </div>
            <div className="seller-type">
              <div className="seller-icon">🌱</div>
              <h3>Farmers & Organic Sellers</h3>
            </div>
            <div className="seller-type">
              <div className="seller-icon">🎨</div>
              <h3>Artisans & Creative Entrepreneurs</h3>
            </div>
          </div>
          <div className="seller-message">
            <p>👉 If you create, produce, or sell locally — this platform is for you.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section" id="how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Register & Verify</h3>
              <p>Sign up with Aadhaar, GSTIN, or shop license.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>List Your Products</h3>
              <p>Upload images, add descriptions & set prices.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Start Selling</h3>
              <p>Receive orders, deliver easily with our logistics partners, and get paid directly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Earnings & Benefits Section */}
      <section className="earnings-section">
        <div className="container">
          <h2 className="section-title">Your Shop, Your Profits.</h2>
          <div className="benefits-list">
            <ul>
              <li>No heavy commissions like big e-commerce giants.</li>
              <li>Transparent payment system – weekly/instant settlements.</li>
              <li>Growth tools – discounts, promotions, and featured listings.</li>
              <li>Insights dashboard – track sales, revenue, and customer trends.</li>
            </ul>
          </div>
          <div className="earnings-example">
            <p>📊 Example: A seller earning ₹40,000/month offline could grow to ₹60,000+ with online visibility.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">Success Stories</h2>
          <div className="testimonial">
            <p className="testimonial-text">
              "I used to sell only in my local market. Now I get orders from across the state. 
              The app is simple, and my profits have grown by 35% in 3 months."
            </p>
            <p className="testimonial-author">– Ramesh Kumar, Handloom Seller (Varanasi)</p>
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Don't Just Sell. Grow Your Brand.</h2>
          <p className="cta-subtitle">
            Join the movement empowering 6.3 crore+ Indian small businesses.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary" onClick={handleRegisterClick}>
              🏪 Register as a Seller Now
            </button>
            <button className="btn btn-secondary">
              📲 Download the Seller App
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="seller-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Help for Sellers</h3>
              <ul>
                <li><a href="#support">Seller Support</a></li>
                <li><a href="#faqs">FAQs</a></li>
                <li><a href="#commission">Commission Rates</a></li>
                <li><a href="#policies">Policies</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Contact</h3>
              <ul>
                <li>Seller Helpline (Toll-Free)</li>
                <li>Email Support</li>
              </ul>
            </div>
          </div>
          <div className="footer-tagline">
            <p>Your Products. Your Customers. Your Growth.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SellerHomepage;