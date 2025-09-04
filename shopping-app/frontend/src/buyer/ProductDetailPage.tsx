import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './ProductDetailPage.css';

interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  description: string;
  imageUrl?: string;
  inStock: boolean;
}

const ProductDetailPage: React.FC = () => {
  // Mock product data
  const product: Product = {
    id: '1',
    name: 'Handmade Ceramic Mug',
    price: 12.99,
    rating: 4.5,
    description: 'Beautiful handmade ceramic mug crafted by local artisans. Perfect for your morning coffee or tea.',
    imageUrl: '',
    inStock: true
  };

  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.name} to cart`);
    // Implementation for adding to cart
  };

  const handleAddToWishlist = () => {
    console.log(`Added ${product.name} to wishlist`);
    // Implementation for adding to wishlist
  };

  return (
    <div>
      <Navbar userType="buyer" />
      <main className="product-detail">
        <div className="product-images">
          <div className="main-image">
            {product.imageUrl ? (
              <img src={product.imageUrl} alt={product.name} />
            ) : (
              <div className="placeholder-image">Product Image</div>
            )}
          </div>
          <div className="thumbnail-images">
            {[1, 2, 3].map((i) => (
              <div key={i} className="thumbnail">
                <div className="placeholder-image">Thumb {i}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <div className="rating">
            {'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5 - Math.floor(product.rating))}
            <span>({product.rating})</span>
          </div>
          <p className="price">${product.price.toFixed(2)}</p>
          <p className="description">{product.description}</p>
          
          <div className="product-options">
            <div className="quantity-selector">
              <label>Quantity:</label>
              <div className="quantity-controls">
                <button 
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button 
                  onClick={() => setQuantity(q => q + 1)}
                >
                  +
                </button>
              </div>
            </div>
            
            <div className="availability">
              {product.inStock ? (
                <span className="in-stock">In Stock</span>
              ) : (
                <span className="out-of-stock">Out of Stock</span>
              )}
            </div>
          </div>
          
          <div className="actions">
            <button 
              className="add-to-cart-btn"
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              Add to Cart
            </button>
            <button 
              className="wishlist-btn"
              onClick={handleAddToWishlist}
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetailPage;