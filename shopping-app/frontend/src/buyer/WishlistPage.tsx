import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './WishlistPage.css';

interface WishlistItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  imageUrl?: string;
}

const WishlistPage: React.FC = () => {
  // Mock wishlist data
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([
    {
      id: '1',
      name: 'Handmade Ceramic Mug',
      price: 12.99,
      originalPrice: 15.99,
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
      originalPrice: 29.99,
      rating: 4.2,
      imageUrl: ''
    }
  ]);

  const removeFromWishlist = (id: string) => {
    setWishlistItems(items => items.filter(item => item.id !== id));
  };

  const moveToCart = (id: string) => {
    // In a real app, you would add the item to the cart
    console.log(`Moved item ${id} to cart`);
    removeFromWishlist(id);
    alert('Item moved to cart!');
  };

  return (
    <div>
      <Navbar userType="buyer" />
      <main className="wishlist-page">
        <h1>My Wishlist</h1>
        
        {wishlistItems.length === 0 ? (
          <p className="empty-wishlist">Your wishlist is empty</p>
        ) : (
          <div className="wishlist-content">
            <div className="wishlist-items">
              {wishlistItems.map(item => (
                <div key={item.id} className="wishlist-item">
                  <div className="item-image">
                    {item.imageUrl ? (
                      <img src={item.imageUrl} alt={item.name} />
                    ) : (
                      <div className="placeholder-image">Image</div>
                    )}
                  </div>
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <div className="price-container">
                      <span className="current-price">${item.price.toFixed(2)}</span>
                      {item.originalPrice && item.originalPrice > item.price && (
                        <span className="original-price">${item.originalPrice.toFixed(2)}</span>
                      )}
                    </div>
                    <div className="rating">
                      {'★'.repeat(Math.floor(item.rating))}{'☆'.repeat(5 - Math.floor(item.rating))}
                      <span>({item.rating})</span>
                    </div>
                  </div>
                  <div className="item-actions">
                    <button 
                      className="move-to-cart-btn"
                      onClick={() => moveToCart(item.id)}
                    >
                      Move to Cart
                    </button>
                    <button 
                      className="remove-btn"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default WishlistPage;