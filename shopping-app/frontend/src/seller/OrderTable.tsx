import React, { useState } from 'react';
import './OrderTable.css';

interface Order {
  id: string;
  customer: string;
  date: string;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
}

const OrderTable: React.FC = () => {
  // Mock order data
  const [orders] = useState<Order[]>([
    {
      id: 'ORD-001',
      customer: 'John Smith',
      date: '2023-06-15',
      total: 37.98,
      status: 'processing'
    },
    {
      id: 'ORD-002',
      customer: 'Sarah Johnson',
      date: '2023-06-14',
      total: 24.99,
      status: 'shipped'
    },
    {
      id: 'ORD-003',
      customer: 'Mike Davis',
      date: '2023-06-12',
      total: 62.97,
      status: 'delivered'
    }
  ]);

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'pending': return 'status-pending';
      case 'processing': return 'status-processing';
      case 'shipped': return 'status-shipped';
      case 'delivered': return 'status-delivered';
      case 'cancelled': return 'status-cancelled';
      default: return '';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending': return 'Pending';
      case 'processing': return 'Processing';
      case 'shipped': return 'Shipped';
      case 'delivered': return 'Delivered';
      case 'cancelled': return 'Cancelled';
      default: return status;
    }
  };

  const updateOrderStatus = (orderId: string, newStatus: Order['status']) => {
    console.log(`Update order ${orderId} status to ${newStatus}`);
    // Implementation for updating order status
  };

  return (
    <div className="order-table-container">
      <div className="table-header">
        <h2>Order Management</h2>
        <div className="filters">
          <select>
            <option>All Orders</option>
            <option>Pending</option>
            <option>Processing</option>
            <option>Shipped</option>
            <option>Delivered</option>
          </select>
        </div>
      </div>
      
      <div className="table-wrapper">
        <table className="order-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Total</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.date}</td>
                <td>${order.total.toFixed(2)}</td>
                <td>
                  <span className={`status-badge ${getStatusClass(order.status)}`}>
                    {getStatusText(order.status)}
                  </span>
                </td>
                <td>
                  {order.status === 'processing' && (
                    <button 
                      className="action-btn"
                      onClick={() => updateOrderStatus(order.id, 'shipped')}
                    >
                      Mark as Shipped
                    </button>
                  )}
                  {order.status === 'shipped' && (
                    <button 
                      className="action-btn"
                      onClick={() => updateOrderStatus(order.id, 'delivered')}
                    >
                      Mark as Delivered
                    </button>
                  )}
                  {(order.status === 'pending' || order.status === 'processing') && (
                    <button 
                      className="cancel-btn"
                      onClick={() => updateOrderStatus(order.id, 'cancelled')}
                    >
                      Cancel
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderTable;