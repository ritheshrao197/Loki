import api from './api';

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  seller: string;
  image: string;
  stock: number;
  rating?: number;
  numReviews?: number;
  createdAt: string;
  updatedAt: string;
}

export interface ProductListResponse {
  products: Product[];
  page: number;
  pages: number;
}

// Get all products
export const getProducts = async (keyword = '', pageNumber = ''): Promise<ProductListResponse> => {
  const response = await api.get(`/products?keyword=${keyword}&pageNumber=${pageNumber}`);
  return response.data;
};

// Get product by ID
export const getProductById = async (id: string): Promise<Product> => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

// Delete product
export const deleteProduct = async (id: string): Promise<any> => {
  const response = await api.delete(`/products/${id}`);
  return response.data;
};

// Create product
export const createProduct = async (product: Partial<Product>): Promise<Product> => {
  const response = await api.post('/products', product);
  return response.data;
};

// Update product
export const updateProduct = async (id: string, product: Partial<Product>): Promise<Product> => {
  const response = await api.put(`/products/${id}`, product);
  return response.data;
};