import React from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css';

interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  imageUrl?: string;
}

interface ProductGridProps {
  products: Product[];
  onAddToCart: (id: string) => void;
  onAddToWishlist: (id: string) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onAddToCart,
  onAddToWishlist
}) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          rating={product.rating}
          imageUrl={product.imageUrl}
          onAddToCart={onAddToCart}
          onAddToWishlist={onAddToWishlist}
        />
      ))}
    </div>
  );
};

export default ProductGrid;