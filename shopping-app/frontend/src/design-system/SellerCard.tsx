import React from 'react';
import './SellerCard.css';

interface SellerCardProps {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviewCount: number;
  productCount: number;
  isVerified: boolean;
  profileImage?: string;
  onClick?: (id: string) => void;
}

const SellerCard: React.FC<SellerCardProps> = ({
  id,
  name,
  location,
  rating,
  reviewCount,
  productCount,
  isVerified,
  profileImage,
  onClick
}) => {
  return (
    <div className="seller-card" onClick={() => onClick?.(id)}>
      <div className="seller-header">
        <div className="seller-image-container">
          <img 
            src={profileImage || 'https://via.placeholder.com/80x80?text=Seller'} 
            alt={name} 
            className="seller-image"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/80x80?text=Seller';
            }}
          />
          {isVerified && (
            <div className="verification-badge" title="Verified Seller">
              ✓
            </div>
          )}
        </div>
        <div className="seller-info">
          <h3 className="seller-name">{name}</h3>
          <p className="seller-location">📍 {location}</p>
        </div>
      </div>
      
      <div className="seller-stats">
        <div className="stat">
          <span className="stat-value">{rating.toFixed(1)}</span>
          <span className="stat-label">Rating</span>
        </div>
        <div className="stat">
          <span className="stat-value">{reviewCount}</span>
          <span className="stat-label">Reviews</span>
        </div>
        <div className="stat">
          <span className="stat-value">{productCount}</span>
          <span className="stat-label">Products</span>
        </div>
      </div>
    </div>
  );
};

export default SellerCard;