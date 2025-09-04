import React from 'react';
import SellerSidebar from '../components/SellerSidebar';
import AnalyticsCharts from './AnalyticsCharts';
import PromotionManager from './PromotionManager';
import VerificationStatusCard from './VerificationStatusCard';
import './SellerPortal.css';

const SellerPortal: React.FC = () => {
  return (
    <div className="seller-layout">
      <SellerSidebar />
      <main className="seller-main">
        <div className="portal-header">
          <h1>Seller Portal</h1>
          <p>Manage your store, products, and sales performance</p>
        </div>
        
        <div className="portal-content">
          <div className="portal-section">
            <h2>Account Status</h2>
            <VerificationStatusCard />
          </div>
          
          <div className="portal-section">
            <h2>Sales Analytics</h2>
            <AnalyticsCharts />
          </div>
          
          <div className="portal-section">
            <h2>Promotions</h2>
            <PromotionManager />
          </div>
        </div>
      </main>
    </div>
  );
};

export default SellerPortal;