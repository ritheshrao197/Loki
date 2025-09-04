import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BuyerHome from './buyer/BuyerHome';
import HomePage from './buyer/HomePage';
import SellerDashboard from './seller/SellerDashboard';
import AdminDashboard from './admin/AdminDashboard';
import CheckoutForm from './buyer/CheckoutForm';
import SellerPortal from './seller/SellerPortal';
import ProductForm from './seller/ProductForm';
import InventoryTable from './seller/InventoryTable';
import OrderTable from './seller/OrderTable';
import AnalyticsCharts from './seller/AnalyticsCharts';
import PromotionManager from './seller/PromotionManager';
import VerificationStatusCard from './seller/VerificationStatusCard';
import CartPage from './buyer/CartPage';
import ProductDetailPage from './buyer/ProductDetailPage';
import ProfilePage from './buyer/ProfilePage';
import UserTable from './admin/UserTable';
import ProductApprovalPanel from './admin/ProductApprovalPanel';
import { AuthProvider } from './contexts/AuthContext';
import LoginPage from './buyer/LoginPage';
import RegisterPage from './buyer/RegisterPage';
import ForgotPasswordPage from './buyer/ForgotPasswordPage';
import ProductListingPage from './buyer/ProductListingPage';
import OrderTrackingPage from './buyer/OrderTrackingPage';
import ReviewsPage from './buyer/ReviewsPage';
import NotificationsPage from './buyer/NotificationsPage';
import SellerOnboardingPage from './seller/SellerOnboardingPage';
import UserManagementPage from './admin/UserManagementPage';
import AnalyticsDashboardPage from './admin/AnalyticsDashboardPage';
import FraudDetectionPage from './admin/FraudDetectionPage';
import PaymentSettlementPage from './seller/PaymentSettlementPage';
import SupportChatbotPage from './seller/SupportChatbotPage';
import DesignSystemDemo from './design-system/DesignSystemDemo';
import SellerHomepage from './seller/SellerHomepage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Buyer Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<BuyerHome />} />
            <Route path="/products" element={<ProductListingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/checkout" element={<CheckoutForm />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/order-tracking" element={<OrderTrackingPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            
            {/* Seller Routes */}
            <Route path="/seller" element={<SellerHomepage />} />
            <Route path="/seller/dashboard" element={<SellerDashboard />} />
            <Route path="/seller/onboarding" element={<SellerOnboardingPage />} />
            <Route path="/seller/portal" element={<SellerPortal />} />
            <Route path="/seller/products" element={<ProductForm />} />
            <Route path="/seller/products/new" element={<ProductForm />} />
            <Route path="/seller/inventory" element={<InventoryTable />} />
            <Route path="/seller/orders" element={<OrderTable />} />
            <Route path="/seller/analytics" element={<AnalyticsCharts />} />
            <Route path="/seller/promotions" element={<PromotionManager />} />
            <Route path="/seller/verification" element={<VerificationStatusCard />} />
            <Route path="/seller/payment-settlement" element={<PaymentSettlementPage />} />
            <Route path="/seller/support" element={<SupportChatbotPage />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<UserTable />} />
            <Route path="/admin/user-management" element={<UserManagementPage />} />
            <Route path="/admin/products" element={<ProductApprovalPanel />} />
            <Route path="/admin/analytics" element={<AnalyticsDashboardPage />} />
            <Route path="/admin/fraud-detection" element={<FraudDetectionPage />} />
            
            {/* Design System Demo */}
            <Route path="/design-system" element={<DesignSystemDemo />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;