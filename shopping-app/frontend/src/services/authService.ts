import api from './api';

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  role: 'buyer' | 'seller' | 'admin';
  mobile?: string;
}

interface UserData {
  _id: string;
  name: string;
  email: string;
  role: 'buyer' | 'seller' | 'admin';
  mobile?: string;
  address?: string;
  token: string;
}

// Login user
export const login = async (data: LoginData): Promise<UserData> => {
  const response = await api.post('/users/login', data);
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

// Register user
export const register = async (data: RegisterData): Promise<UserData> => {
  const response = await api.post('/users', data);
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

// Logout user
export const logout = (): void => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

// Get user profile
export const getUserProfile = async (): Promise<UserData> => {
  const response = await api.get('/users/profile');
  return response.data;
};

// Update user profile
export const updateUserProfile = async (data: Partial<UserData>): Promise<UserData> => {
  const response = await api.put('/users/profile', data);
  // Update local storage with new user data
  const currentUser = JSON.parse(localStorage.getItem('user') || '{}');
  const updatedUser = { ...currentUser, ...response.data };
  localStorage.setItem('user', JSON.stringify(updatedUser));
  return response.data;
};

// Check if user is authenticated
export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem('token');
};

// Get current user
export const getCurrentUser = (): UserData | null => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};