import React from 'react';
import './ProductCard.css';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  rating: number;
  imageUrl?: string;
  onAddToCart: (id: string) => void;
  onAddToWishlist: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  rating,
  imageUrl,
  onAddToCart,
  onAddToWishlist
}) => {
  return (
    <div className="product-card">
      <div className="product-image">
        {imageUrl ? (
          <img src={imageUrl} alt={name} />
        ) : (
          <div className="placeholder-image">Product Image</div>
        )}
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <p className="price">${price.toFixed(2)}</p>
        <div className="rating">
          {'★'.repeat(Math.floor(rating))}{'☆'.repeat(5 - Math.floor(rating))}
          <span>({rating})</span>
        </div>
        <div className="actions">
          <button onClick={() => onAddToCart(id)}>Add to Cart</button>
          <button onClick={() => onAddToWishlist(id)}>Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;