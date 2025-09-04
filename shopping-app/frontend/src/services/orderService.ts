import api from './api';

export interface OrderItem {
  name: string;
  qty: number;
  image: string;
  price: number;
  product: string;
}

export interface ShippingAddress {
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface Order {
  _id: string;
  user: string;
  orderItems: OrderItem[];
  shippingAddress: ShippingAddress;
  paymentMethod: string;
  paymentResult?: {
    id?: string;
    status?: string;
    update_time?: string;
    email_address?: string;
  };
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  isPaid: boolean;
  paidAt?: string;
  isDelivered: boolean;
  deliveredAt?: string;
  createdAt: string;
  updatedAt: string;
}

// Create new order
export const createOrder = async (order: any): Promise<Order> => {
  const response = await api.post('/orders', order);
  return response.data;
};

// Get order by ID
export const getOrderById = async (id: string): Promise<Order> => {
  const response = await api.get(`/orders/${id}`);
  return response.data;
};

// Update order to paid
export const payOrder = async (orderId: string, paymentResult: any): Promise<Order> => {
  const response = await api.put(`/orders/${orderId}/pay`, paymentResult);
  return response.data;
};

// Get logged in user orders
export const getMyOrders = async (): Promise<Order[]> => {
  const response = await api.get('/orders/myorders');
  return response.data;
};

// Get all orders (admin)
export const getOrders = async (): Promise<Order[]> => {
  const response = await api.get('/orders');
  return response.data;
};

// Update order to delivered (admin)
export const deliverOrder = async (orderId: string): Promise<Order> => {
  const response = await api.put(`/orders/${orderId}/deliver`, {});
  return response.data;
};