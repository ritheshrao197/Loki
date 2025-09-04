import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import './OrderTrackingPage.css';

interface OrderItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
  image: string;
}

interface OrderStatus {
  id: number;
  status: 'placed' | 'confirmed' | 'shipped' | 'out-for-delivery' | 'delivered';
  date: string;
  description: string;
}

interface Order {
  id: string;
  date: string;
  total: number;
  status: 'placed' | 'confirmed' | 'shipped' | 'out-for-delivery' | 'delivered';
  items: OrderItem[];
  statusHistory: OrderStatus[];
  shippingAddress: string;
  estimatedDelivery: string;
}

const OrderTrackingPage: React.FC = () => {
  const [orderId, setOrderId] = useState('');
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Mock order data
  const mockOrder: Order = {
    id: 'ORD-789456',
    date: '2023-06-15',
    total: 87.98,
    status: 'out-for-delivery',
    items: [
      {
        id: 1,
        name: 'Organic Cotton T-Shirt',
        quantity: 2,
        price: 29.99,
        image: '/images/tshirt.jpg'
      },
      {
        id: 2,
        name: 'Artisan Coffee Beans',
        quantity: 1,
        price: 18.50,
        image: '/images/coffee.jpg'
      }
    ],
    statusHistory: [
      {
        id: 1,
        status: 'placed',
        date: '2023-06-15 10:30 AM',
        description: 'Order placed successfully'
      },
      {
        id: 2,
        status: 'confirmed',
        date: '2023-06-15 2:15 PM',
        description: 'Order confirmed by seller'
      },
      {
        id: 3,
        status: 'shipped',
        date: '2023-06-16 9:00 AM',
        description: 'Order shipped from warehouse'
      },
      {
        id: 4,
        status: 'out-for-delivery',
        date: '2023-06-17 8:30 AM',
        description: 'Out for delivery'
      }
    ],
    shippingAddress: '123 Main Street, Anytown, CA 12345',
    estimatedDelivery: 'June 17, 2023 by 6:00 PM'
  };

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderId.trim()) {
      setError('Please enter an order ID');
      return;
    }
    
    setLoading(true);
    setError('');
    
    // Simulate API call
    setTimeout(() => {
      if (orderId === 'ORD-789456') {
        setOrder(mockOrder);
      } else {
        setError('Order not found. Please check the order ID and try again.');
      }
      setLoading(false);
    }, 1000);
  };

  const getStatusText = (status: Order['status']) => {
    switch (status) {
      case 'placed': return 'Order Placed';
      case 'confirmed': return 'Order Confirmed';
      case 'shipped': return 'Shipped';
      case 'out-for-delivery': return 'Out for Delivery';
      case 'delivered': return 'Delivered';
      default: return status;
    }
  };

  const getStatusClass = (status: Order['status']) => {
    switch (status) {
      case 'placed': return 'status-placed';
      case 'confirmed': return 'status-confirmed';
      case 'shipped': return 'status-shipped';
      case 'out-for-delivery': return 'status-out-for-delivery';
      case 'delivered': return 'status-delivered';
      default: return '';
    }
  };

  return (
    <div>
      <Navbar userType="buyer" />
      <main className="order-tracking-page">
        <div className="container">
          <div className="page-header">
            <h1>Track Your Order</h1>
            <p>Enter your order ID to track your shipment</p>
          </div>

          <div className="tracking-form-container">
            <form className="tracking-form" onSubmit={handleTrackOrder}>
              <div className="form-group">
                <label htmlFor="orderId">Order ID</label>
                <input
                  type="text"
                  id="orderId"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  placeholder="Enter your order ID (e.g., ORD-123456)"
                  className="order-id-input"
                />
              </div>
              <button 
                type="submit" 
                className="track-btn"
                disabled={loading}
              >
                {loading ? 'Tracking...' : 'Track Order'}
              </button>
            </form>
            
            {error && (
              <div className="error-message">
                {error}
              </div>
            )}
          </div>

          {order && (
            <div className="order-details">
              <div className="order-header">
                <div className="order-info">
                  <h2>Order #{order.id}</h2>
                  <p>Placed on {order.date}</p>
                </div>
                <div className="order-status">
                  <span className={`status-badge ${getStatusClass(order.status)}`}>
                    {getStatusText(order.status)}
                  </span>
                </div>
              </div>

              <div className="order-content">
                <div className="order-tracking">
                  <h3>Order Progress</h3>
                  <div className="tracking-timeline">
                    {order.statusHistory.map((statusItem, index) => (
                      <div 
                        key={statusItem.id} 
                        className={`timeline-item ${
                          index === order.statusHistory.length - 1 ? 'active' : ''
                        }`}
                      >
                        <div className="timeline-marker">
                          <div className="marker-inner"></div>
                        </div>
                        <div className="timeline-content">
                          <h4>{getStatusText(statusItem.status)}</h4>
                          <p className="timeline-date">{statusItem.date}</p>
                          <p className="timeline-description">{statusItem.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="delivery-estimate">
                    <h4>Estimated Delivery</h4>
                    <p>{order.estimatedDelivery}</p>
                  </div>
                </div>

                <div className="order-summary">
                  <h3>Order Summary</h3>
                  <div className="order-items">
                    {order.items.map(item => (
                      <div key={item.id} className="order-item">
                        <div className="item-image">
                          <img src={item.image || '/images/placeholder.jpg'} alt={item.name} />
                        </div>
                        <div className="item-details">
                          <h4>{item.name}</h4>
                          <p>Quantity: {item.quantity}</p>
                          <p>${item.price.toFixed(2)} each</p>
                        </div>
                        <div className="item-total">
                          <p>${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="order-totals">
                    <div className="total-row">
                      <span>Total:</span>
                      <span>${order.total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <div className="shipping-info">
                    <h4>Shipping Address</h4>
                    <p>{order.shippingAddress}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default OrderTrackingPage;