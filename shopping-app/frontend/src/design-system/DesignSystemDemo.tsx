import React, { useState } from 'react';
import './DesignSystemDemo.css';
import { 
  Button, 
  Card, 
  ProductCard, 
  SellerCard, 
  Input, 
  TextArea, 
  ProgressIndicator, 
  OrderTracking 
} from './index';

const DesignSystemDemo: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  
  const handleAddToCart = (id: string) => {
    console.log(`Added product ${id} to cart`);
  };
  
  const handleAddToWishlist = (id: string) => {
    console.log(`Added product ${id} to wishlist`);
  };
  
  const handleSellerClick = (id: string) => {
    console.log(`Clicked on seller ${id}`);
  };
  
  const progressSteps = ['Cart', 'Address', 'Payment', 'Confirm'];
  
  const orderTrackingSteps = [
    {
      id: 'ordered',
      label: 'Order Placed',
      description: 'Your order has been placed successfully',
      timestamp: '2023-05-15 10:30 AM',
      isCompleted: true,
      isActive: false
    },
    {
      id: 'packed',
      label: 'Order Packed',
      description: 'Your order is being packed',
      timestamp: '2023-05-15 2:15 PM',
      isCompleted: true,
      isActive: false
    },
    {
      id: 'shipped',
      label: 'Order Shipped',
      description: 'Your order has been shipped',
      timestamp: '2023-05-16 9:45 AM',
      isCompleted: true,
      isActive: false
    },
    {
      id: 'delivered',
      label: 'Out for Delivery',
      description: 'Your order is out for delivery',
      isCompleted: false,
      isActive: true
    },
    {
      id: 'completed',
      label: 'Delivered',
      description: 'Your order has been delivered',
      isCompleted: false,
      isActive: false
    }
  ];
  
  return (
    <div className="design-system-demo">
      <div className="container">
        <h1>Design System Demo</h1>
        <p className="mb-3">This page demonstrates all the components in our design system.</p>
        
        {/* Buttons Section */}
        <section className="mb-3">
          <h2>Buttons</h2>
          <Card>
            <div className="flex gap-2 flex-wrap">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="text">Text</Button>
              <Button variant="primary" disabled>Disabled</Button>
            </div>
            
            <div className="flex gap-2 flex-wrap mt-2">
              <Button variant="primary" size="small">Small</Button>
              <Button variant="primary" size="medium">Medium</Button>
              <Button variant="primary" size="large">Large</Button>
            </div>
          </Card>
        </section>
        
        {/* Forms Section */}
        <section className="mb-3">
          <h2>Form Elements</h2>
          <Card>
            <div className="grid grid-cols-2 gap-2">
              <Input 
                label="Name"
                placeholder="Enter your name"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Input 
                label="Email"
                type="email"
                placeholder="Enter your email"
                error="Please enter a valid email"
              />
              <Input 
                label="Search"
                placeholder="Search for products..."
                startIcon="🔍"
              />
              <Input 
                label="Location"
                placeholder="Enter your location"
                startIcon="📍"
              />
            </div>
            
            <TextArea
              label="Message"
              placeholder="Enter your message"
              value={textareaValue}
              onChange={(e) => setTextareaValue(e.target.value)}
              helperText="Maximum 500 characters"
            />
          </Card>
        </section>
        
        {/* Progress Indicator */}
        <section className="mb-3">
          <h2>Progress Indicator</h2>
          <Card>
            <ProgressIndicator steps={progressSteps} currentStep={2} />
          </Card>
        </section>
        
        {/* Product Cards */}
        <section className="mb-3">
          <h2>Product Cards</h2>
          <div className="grid grid-cols-3 gap-2">
            <ProductCard
              id="1"
              name="Handmade Ceramic Mug"
              price={299}
              originalPrice={399}
              imageUrl="https://via.placeholder.com/300x300?text=Mug"
              rating={4.5}
              reviewCount={128}
              isFeatured={true}
              onAddToCart={handleAddToCart}
              onAddToWishlist={handleAddToWishlist}
            />
            <ProductCard
              id="2"
              name="Wooden Cutting Board"
              price={499}
              imageUrl="https://via.placeholder.com/300x300?text=Board"
              rating={4.2}
              reviewCount={86}
              onAddToCart={handleAddToCart}
              onAddToWishlist={handleAddToWishlist}
            />
            <ProductCard
              id="3"
              name="Organic Cotton T-Shirt"
              price={799}
              originalPrice={999}
              imageUrl="https://via.placeholder.com/300x300?text=T-Shirt"
              rating={4.8}
              reviewCount={215}
              onAddToCart={handleAddToCart}
              onAddToWishlist={handleAddToWishlist}
            />
          </div>
        </section>
        
        {/* Seller Cards */}
        <section className="mb-3">
          <h2>Seller Cards</h2>
          <div className="grid grid-cols-2 gap-2">
            <SellerCard
              id="1"
              name="Artisan Crafts Co."
              location="Jaipur, Rajasthan"
              rating={4.7}
              reviewCount={142}
              productCount={28}
              isVerified={true}
              profileImage="https://via.placeholder.com/80x80?text=ACC"
              onClick={handleSellerClick}
            />
            <SellerCard
              id="2"
              name="Organic Textiles"
              location="Coimbatore, Tamil Nadu"
              rating={4.9}
              reviewCount={89}
              productCount={15}
              isVerified={true}
              profileImage="https://via.placeholder.com/80x80?text=OT"
              onClick={handleSellerClick}
            />
          </div>
        </section>
        
        {/* Order Tracking */}
        <section className="mb-3">
          <h2>Order Tracking</h2>
          <Card>
            <OrderTracking steps={orderTrackingSteps} />
          </Card>
        </section>
      </div>
    </div>
  );
};

export default DesignSystemDemo;