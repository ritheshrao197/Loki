import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { login as loginService, logout as logoutService, getCurrentUser, isAuthenticated } from '../services/authService';

type UserRole = 'buyer' | 'seller' | 'admin';

interface User {
  _id: string;
  name: string;
  email: string;
  role: UserRole;
  mobile?: string;
  address?: string;
  token: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  userRole: UserRole | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (name: string, email: string, password: string, role: UserRole, mobile?: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authStatus, setAuthStatus] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [userRole, setUserRole] = useState<UserRole | null>(null);

  useEffect(() => {
    // Check if user is already authenticated on app load
    const authenticated = isAuthenticated();
    setAuthStatus(authenticated);
    
    if (authenticated) {
      const currentUser = getCurrentUser();
      if (currentUser) {
        setUser(currentUser);
        setUserRole(currentUser.role);
      }
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const userData = await loginService({ email, password });
      setAuthStatus(true);
      setUser(userData);
      setUserRole(userData.role);
    } catch (error) {
      throw error;
    }
  };

  const register = async (name: string, email: string, password: string, role: UserRole, mobile?: string) => {
    try {
      const userData = await loginService({ email, password });
      setAuthStatus(true);
      setUser(userData);
      setUserRole(userData.role);
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    logoutService();
    setAuthStatus(false);
    setUser(null);
    setUserRole(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated: authStatus, user, userRole, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};