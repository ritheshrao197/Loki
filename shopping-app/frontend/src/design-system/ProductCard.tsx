import React from 'react';
import './ProductCard.css';
import Button from './Button';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  isFeatured?: boolean;
  onAddToCart: (id: string) => void;
  onAddToWishlist?: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  originalPrice,
  imageUrl,
  rating,
  reviewCount,
  isFeatured = false,
  onAddToCart,
  onAddToWishlist
}) => {
  const discountPercentage = originalPrice 
    ? Math.round(((originalPrice - price) / originalPrice) * 100) 
    : 0;

  return (
    <div className={`product-card ${isFeatured ? 'product-card-featured' : ''}`}>
      {discountPercentage > 0 && (
        <div className="product-discount-badge">
          {discountPercentage}% OFF
        </div>
      )}
      
      {isFeatured && (
        <div className="product-featured-badge">
          Featured
        </div>
      )}
      
      <div className="product-image-container">
        <img 
          src={imageUrl} 
          alt={name} 
          className="product-image"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://via.placeholder.com/300x300?text=Product+Image';
          }}
        />
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        
        <div className="product-price-container">
          <span className="product-price">₹{price.toFixed(2)}</span>
          {originalPrice && (
            <span className="product-original-price">₹{originalPrice.toFixed(2)}</span>
          )}
        </div>
        
        <div className="product-rating">
          <div className="rating-stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span 
                key={star} 
                className={`star ${star <= rating ? 'filled' : ''}`}
              >
                ★
              </span>
            ))}
          </div>
          <span className="review-count">({reviewCount})</span>
        </div>
        
        <div className="product-actions">
          <Button 
            variant="primary" 
            size="small" 
            fullWidth 
            onClick={() => onAddToCart(id)}
          >
            Add to Cart
          </Button>
          
          {onAddToWishlist && (
            <Button 
              variant="outline" 
              size="small" 
              onClick={() => onAddToWishlist(id)}
              aria-label="Add to wishlist"
            >
              ♡
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;