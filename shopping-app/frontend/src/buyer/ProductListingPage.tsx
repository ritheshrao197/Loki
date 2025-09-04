import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import './ProductListingPage.css';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  inStock: boolean;
  location: string;
}

const ProductListingPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [locationFilter, setLocationFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  // Mock data for products
  useEffect(() => {
    const mockProducts: Product[] = [
      {
        id: 1,
        name: 'Organic Cotton T-Shirt',
        price: 29.99,
        originalPrice: 39.99,
        rating: 4.5,
        reviewCount: 128,
        image: '/images/tshirt.jpg',
        category: 'Clothing',
        inStock: true,
        location: 'New York'
      },
      {
        id: 2,
        name: 'Handcrafted Wooden Bowl',
        price: 45.00,
        rating: 4.8,
        reviewCount: 56,
        image: '/images/bowl.jpg',
        category: 'Home Decor',
        inStock: true,
        location: 'California'
      },
      {
        id: 3,
        name: 'Artisan Coffee Beans',
        price: 18.50,
        originalPrice: 22.00,
        rating: 4.9,
        reviewCount: 203,
        image: '/images/coffee.jpg',
        category: 'Food',
        inStock: true,
        location: 'Seattle'
      },
      {
        id: 4,
        name: 'Leather Wallet',
        price: 65.00,
        rating: 4.3,
        reviewCount: 89,
        image: '/images/wallet.jpg',
        category: 'Accessories',
        inStock: false,
        location: 'Texas'
      },
      {
        id: 5,
        name: 'Ceramic Plant Pot',
        price: 32.00,
        originalPrice: 40.00,
        rating: 4.6,
        reviewCount: 72,
        image: '/images/pot.jpg',
        category: 'Home Decor',
        inStock: true,
        location: 'New York'
      },
      {
        id: 6,
        name: 'Handwoven Scarf',
        price: 38.00,
        rating: 4.7,
        reviewCount: 45,
        image: '/images/scarf.jpg',
        category: 'Clothing',
        inStock: true,
        location: 'Colorado'
      }
    ];
    setProducts(mockProducts);
    setFilteredProducts(mockProducts);
  }, []);

  // Filter and sort products
  useEffect(() => {
    let result = [...products];
    
    // Apply search filter
    if (searchTerm) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply category filter
    if (selectedCategory !== 'all') {
      result = result.filter(product => 
        product.category === selectedCategory
      );
    }
    
    // Apply price filter
    result = result.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Apply location filter
    if (locationFilter !== 'all') {
      result = result.filter(product => 
        product.location === locationFilter
      );
    }
    
    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result.sort((a, b) => b.id - a.id);
        break;
      default:
        // Featured - default order
        break;
    }
    
    setFilteredProducts(result);
  }, [products, searchTerm, selectedCategory, priceRange, locationFilter, sortBy]);

  const categories = ['all', 'Clothing', 'Home Decor', 'Food', 'Accessories'];
  const locations = ['all', 'New York', 'California', 'Seattle', 'Texas', 'Colorado'];

  const handlePriceRangeChange = (index: number, value: number) => {
    const newRange = [...priceRange] as [number, number];
    newRange[index] = value;
    setPriceRange(newRange);
  };

  return (
    <div>
      <Navbar userType="buyer" />
      <main className="product-listing-page">
        <div className="container">
          <div className="page-header">
            <h1>Products</h1>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <button className="search-btn">Search</button>
            </div>
          </div>

          <div className="content-wrapper">
            {/* Filters sidebar */}
            <div className={`filters-sidebar ${showFilters ? 'active' : ''}`}>
              <div className="filters-header">
                <h2>Filters</h2>
                <button 
                  className="close-filters"
                  onClick={() => setShowFilters(false)}
                >
                  ×
                </button>
              </div>
              
              <div className="filter-group">
                <h3>Categories</h3>
                <ul className="filter-list">
                  {categories.map(category => (
                    <li key={category}>
                      <label>
                        <input
                          type="radio"
                          name="category"
                          checked={selectedCategory === category}
                          onChange={() => setSelectedCategory(category)}
                        />
                        {category === 'all' ? 'All Categories' : category}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="filter-group">
                <h3>Price Range</h3>
                <div className="price-range">
                  <div className="price-inputs">
                    <input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => handlePriceRangeChange(0, Number(e.target.value))}
                      className="price-input"
                    />
                    <span>to</span>
                    <input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => handlePriceRangeChange(1, Number(e.target.value))}
                      className="price-input"
                    />
                  </div>
                  <div className="range-slider">
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      value={priceRange[0]}
                      onChange={(e) => handlePriceRangeChange(0, Number(e.target.value))}
                      className="range-input"
                    />
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      value={priceRange[1]}
                      onChange={(e) => handlePriceRangeChange(1, Number(e.target.value))}
                      className="range-input"
                    />
                  </div>
                </div>
              </div>
              
              <div className="filter-group">
                <h3>Location</h3>
                <select 
                  value={locationFilter} 
                  onChange={(e) => setLocationFilter(e.target.value)}
                  className="location-select"
                >
                  {locations.map(location => (
                    <option key={location} value={location}>
                      {location === 'all' ? 'All Locations' : location}
                    </option>
                  ))}
                </select>
              </div>
              
              <button className="apply-filters-btn">Apply Filters</button>
            </div>
            
            {/* Main content */}
            <div className="main-content">
              <div className="toolbar">
                <div className="results-info">
                  <p>{filteredProducts.length} products found</p>
                </div>
                
                <div className="toolbar-actions">
                  <button 
                    className="filter-toggle"
                    onClick={() => setShowFilters(true)}
                  >
                    Filters
                  </button>
                  
                  <select 
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value)}
                    className="sort-select"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                    <option value="newest">Newest</option>
                  </select>
                </div>
              </div>
              
              <div className="products-grid">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map(product => (
                    <div key={product.id} className="product-card">
                      <div className="product-image">
                        <img src={product.image || '/images/placeholder.jpg'} alt={product.name} />
                        {!product.inStock && (
                          <div className="out-of-stock">Out of Stock</div>
                        )}
                        {product.originalPrice && (
                          <div className="discount-badge">
                            {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                          </div>
                        )}
                      </div>
                      <div className="product-info">
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-category">{product.category}</p>
                        <div className="product-rating">
                          <span className="rating">{product.rating}</span>
                          <span className="stars">
                            {'★'.repeat(Math.floor(product.rating))}
                            {'☆'.repeat(5 - Math.floor(product.rating))}
                          </span>
                          <span className="review-count">({product.reviewCount})</span>
                        </div>
                        <div className="product-price">
                          <span className="current-price">${product.price.toFixed(2)}</span>
                          {product.originalPrice && (
                            <span className="original-price">${product.originalPrice.toFixed(2)}</span>
                          )}
                        </div>
                        <div className="product-location">
                          <span>📍 {product.location}</span>
                        </div>
                        <div className="product-actions">
                          <button className="add-to-cart-btn">Add to Cart</button>
                          <button className="wishlist-btn">♡</button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="no-products">
                    <p>No products found matching your criteria.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductListingPage;