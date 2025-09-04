import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './NotificationsPage.css';

interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: 'order' | 'promotion' | 'alert' | 'info';
}

const NotificationsPage: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: 'Order Confirmed',
      message: 'Your order #ORD-789456 has been confirmed and is being processed.',
      time: '2 hours ago',
      read: false,
      type: 'order'
    },
    {
      id: 2,
      title: 'Special Offer',
      message: 'Get 20% off on all electronics this weekend only!',
      time: '1 day ago',
      read: true,
      type: 'promotion'
    },
    {
      id: 3,
      title: 'Delivery Update',
      message: 'Your package is out for delivery and will arrive today between 2-6 PM.',
      time: '1 day ago',
      read: false,
      type: 'order'
    },
    {
      id: 4,
      title: 'New Arrival',
      message: 'Check out our new collection of organic skincare products.',
      time: '2 days ago',
      read: true,
      type: 'info'
    },
    {
      id: 5,
      title: 'Flash Sale',
      message: 'Limited time offer: 30% off on selected items. Ends tonight at midnight!',
      time: '3 days ago',
      read: false,
      type: 'promotion'
    },
    {
      id: 6,
      title: 'Payment Reminder',
      message: 'Your payment for order #ORD-456789 is due in 2 days.',
      time: '3 days ago',
      read: true,
      type: 'alert'
    }
  ]);

  const [filter, setFilter] = useState('all');

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => 
      ({ ...notification, read: true })
    ));
  };

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(notification => 
      notification.id !== id
    ));
  };

  const filteredNotifications = notifications.filter(notification => {
    if (filter === 'all') return true;
    if (filter === 'unread') return !notification.read;
    return notification.type === filter;
  });

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div>
      <Navbar userType="buyer" />
      <main className="notifications-page">
        <div className="container">
          <div className="page-header">
            <h1>Notifications</h1>
            <div className="header-actions">
              <span className="unread-count">{unreadCount} unread</span>
              <button 
                className="mark-all-btn"
                onClick={markAllAsRead}
                disabled={unreadCount === 0}
              >
                Mark all as read
              </button>
            </div>
          </div>

          <div className="notifications-content">
            <div className="filters">
              <button 
                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                All
              </button>
              <button 
                className={`filter-btn ${filter === 'unread' ? 'active' : ''}`}
                onClick={() => setFilter('unread')}
              >
                Unread
              </button>
              <button 
                className={`filter-btn ${filter === 'order' ? 'active' : ''}`}
                onClick={() => setFilter('order')}
              >
                Orders
              </button>
              <button 
                className={`filter-btn ${filter === 'promotion' ? 'active' : ''}`}
                onClick={() => setFilter('promotion')}
              >
                Promotions
              </button>
              <button 
                className={`filter-btn ${filter === 'alert' ? 'active' : ''}`}
                onClick={() => setFilter('alert')}
              >
                Alerts
              </button>
            </div>

            <div className="notifications-list">
              {filteredNotifications.length > 0 ? (
                filteredNotifications.map(notification => (
                  <div 
                    key={notification.id} 
                    className={`notification-card ${notification.read ? 'read' : 'unread'}`}
                  >
                    <div className="notification-icon">
                      {notification.type === 'order' && '📦'}
                      {notification.type === 'promotion' && '🎉'}
                      {notification.type === 'alert' && '⚠️'}
                      {notification.type === 'info' && 'ℹ️'}
                    </div>
                    <div className="notification-content">
                      <div className="notification-header">
                        <h3>{notification.title}</h3>
                        <span className="notification-time">{notification.time}</span>
                      </div>
                      <p className="notification-message">{notification.message}</p>
                      <div className="notification-actions">
                        {!notification.read && (
                          <button 
                            className="action-btn mark-read"
                            onClick={() => markAsRead(notification.id)}
                          >
                            Mark as read
                          </button>
                        )}
                        <button 
                          className="action-btn delete"
                          onClick={() => deleteNotification(notification.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-notifications">
                  <p>No notifications found</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotificationsPage;