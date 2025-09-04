import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './AnalyticsDashboardPage.css';

const AnalyticsDashboardPage: React.FC = () => {
  const [timeRange, setTimeRange] = useState('7d');

  // Mock data for charts
  const salesData = [
    { date: '2023-06-01', sales: 12000, orders: 120 },
    { date: '2023-06-02', sales: 15000, orders: 150 },
    { date: '2023-06-03', sales: 18000, orders: 180 },
    { date: '2023-06-04', sales: 14000, orders: 140 },
    { date: '2023-06-05', sales: 22000, orders: 220 },
    { date: '2023-06-06', sales: 25000, orders: 250 },
    { date: '2023-06-07', sales: 28000, orders: 280 },
  ];

  const topSellers = [
    { id: 1, name: 'Organic Essentials', sales: 45000, orders: 450 },
    { id: 2, name: 'Handcrafted Home', sales: 38000, orders: 380 },
    { id: 3, name: 'Tech Gadgets', sales: 32000, orders: 320 },
    { id: 4, name: 'Fashion Forward', sales: 28000, orders: 280 },
    { id: 5, name: 'Healthy Eats', sales: 25000, orders: 250 },
  ];

  const topCategories = [
    { category: 'Electronics', sales: 85000, percentage: 35 },
    { category: 'Clothing', sales: 62000, percentage: 26 },
    { category: 'Home & Garden', sales: 48000, percentage: 20 },
    { category: 'Food & Beverage', sales: 32000, percentage: 13 },
    { category: 'Beauty', sales: 15000, percentage: 6 },
  ];

  const userGrowth = [
    { month: 'Jan', buyers: 1200, sellers: 45 },
    { month: 'Feb', buyers: 1500, sellers: 52 },
    { month: 'Mar', buyers: 1800, sellers: 60 },
    { month: 'Apr', buyers: 2200, sellers: 75 },
    { month: 'May', buyers: 2800, sellers: 95 },
    { month: 'Jun', buyers: 3500, sellers: 120 },
  ];

  // Calculate summary metrics
  const totalSales = salesData.reduce((sum, day) => sum + day.sales, 0);
  const totalOrders = salesData.reduce((sum, day) => sum + day.orders, 0);
  const avgOrderValue = totalSales / totalOrders;
  const totalBuyers = userGrowth[userGrowth.length - 1].buyers;
  const totalSellers = userGrowth[userGrowth.length - 1].sellers;

  return (
    <div>
      <Navbar userType="admin" />
      <main className="analytics-dashboard-page">
        <div className="container">
          <div className="page-header">
            <h1>Analytics Dashboard</h1>
            <div className="time-range-selector">
              <select 
                value={timeRange} 
                onChange={(e) => setTimeRange(e.target.value)}
                className="time-range-select"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
                <option value="1y">Last year</option>
              </select>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="summary-cards">
            <div className="summary-card">
              <h3>Total Sales</h3>
              <p className="summary-value">${(totalSales / 1000).toFixed(1)}K</p>
              <p className="summary-change positive">+12.5% from last period</p>
            </div>
            
            <div className="summary-card">
              <h3>Total Orders</h3>
              <p className="summary-value">{totalOrders}</p>
              <p className="summary-change positive">+8.3% from last period</p>
            </div>
            
            <div className="summary-card">
              <h3>Avg. Order Value</h3>
              <p className="summary-value">${avgOrderValue.toFixed(2)}</p>
              <p className="summary-change negative">-2.1% from last period</p>
            </div>
            
            <div className="summary-card">
              <h3>Total Users</h3>
              <p className="summary-value">{totalBuyers + totalSellers}</p>
              <p className="summary-change positive">+15.7% from last period</p>
            </div>
          </div>

          {/* Charts Section */}
          <div className="charts-section">
            <div className="chart-container">
              <h2>Sales & Orders Trend</h2>
              <div className="chart">
                <div className="chart-placeholder">
                  <p>Sales Trend Chart Visualization</p>
                  <div className="chart-bars">
                    {salesData.map((day, index) => (
                      <div key={index} className="chart-bar">
                        <div 
                          className="bar-sales" 
                          style={{ height: `${(day.sales / 30000) * 100}%` }}
                        ></div>
                        <div 
                          className="bar-orders" 
                          style={{ height: `${(day.orders / 300) * 100}%` }}
                        ></div>
                        <span className="chart-label">{day.date.split('-')[2]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="chart-container">
              <h2>User Growth</h2>
              <div className="chart">
                <div className="chart-placeholder">
                  <p>User Growth Chart Visualization</p>
                  <div className="line-chart">
                    <div className="line-chart-lines">
                      {userGrowth.map((data, index) => (
                        <div key={index} className="line-point">
                          <div 
                            className="point-buyers" 
                            style={{ bottom: `${(data.buyers / 4000) * 100}%` }}
                          ></div>
                          <div 
                            className="point-sellers" 
                            style={{ bottom: `${(data.sellers / 150) * 100}%` }}
                          ></div>
                          <span className="chart-label">{data.month}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Data Tables */}
          <div className="data-section">
            <div className="data-table-container">
              <h2>Top Performing Sellers</h2>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Seller</th>
                    <th>Sales</th>
                    <th>Orders</th>
                    <th>Growth</th>
                  </tr>
                </thead>
                <tbody>
                  {topSellers.map(seller => (
                    <tr key={seller.id}>
                      <td>{seller.name}</td>
                      <td>${(seller.sales / 1000).toFixed(1)}K</td>
                      <td>{seller.orders}</td>
                      <td className="positive">+{Math.floor(Math.random() * 20) + 5}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="data-table-container">
              <h2>Top Categories</h2>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Sales</th>
                    <th>Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  {topCategories.map((category, index) => (
                    <tr key={index}>
                      <td>{category.category}</td>
                      <td>${(category.sales / 1000).toFixed(1)}K</td>
                      <td>
                        <div className="percentage-bar">
                          <div 
                            className="percentage-fill" 
                            style={{ width: `${category.percentage}%` }}
                          ></div>
                          <span className="percentage-text">{category.percentage}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AnalyticsDashboardPage;