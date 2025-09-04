import React from 'react';
import './AnalyticsCharts.css';

// Simple chart component using CSS only (no external libraries)
const BarChart: React.FC<{ data: { label: string; value: number }[]; title: string }> = ({
  data,
  title
}) => {
  const maxValue = Math.max(...data.map(item => item.value), 0);
  
  return (
    <div className="chart-container">
      <h3>{title}</h3>
      <div className="bar-chart">
        {data.map((item, index) => (
          <div key={index} className="bar-item">
            <div 
              className="bar" 
              style={{ height: `${maxValue ? (item.value / maxValue) * 100 : 0}%` }}
            >
              <span className="bar-value">${item.value}</span>
            </div>
            <div className="bar-label">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Simple line chart component
const LineChart: React.FC<{ data: { label: string; value: number }[]; title: string }> = ({
  data,
  title
}) => {
  const maxValue = Math.max(...data.map(item => item.value), 0);
  
  return (
    <div className="chart-container">
      <h3>{title}</h3>
      <div className="line-chart">
        <div className="chart-grid">
          {/* Y-axis labels */}
          <div className="y-axis">
            <span>${maxValue.toFixed(0)}</span>
            <span>${(maxValue * 0.75).toFixed(0)}</span>
            <span>${(maxValue * 0.5).toFixed(0)}</span>
            <span>${(maxValue * 0.25).toFixed(0)}</span>
            <span>$0</span>
          </div>
          
          {/* Chart area */}
          <div className="chart-area">
            <svg viewBox={`0 0 ${data.length * 50 + 50} 200`} className="line-chart-svg">
              <polyline
                fill="none"
                stroke="#3498db"
                strokeWidth="2"
                points={data.map((item, index) => 
                  `${index * 50 + 25},${200 - (maxValue ? (item.value / maxValue) * 180 : 0)}`
                ).join(' ')}
              />
              {data.map((item, index) => (
                <circle
                  key={index}
                  cx={index * 50 + 25}
                  cy={200 - (maxValue ? (item.value / maxValue) * 180 : 0)}
                  r="4"
                  fill="#3498db"
                />
              ))}
            </svg>
            
            {/* X-axis labels */}
            <div className="x-axis">
              {data.map((item, index) => (
                <span key={index}>{item.label}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AnalyticsCharts: React.FC = () => {
  // Mock data for charts
  const salesData = [
    { label: 'Mon', value: 1200 },
    { label: 'Tue', value: 1900 },
    { label: 'Wed', value: 1500 },
    { label: 'Thu', value: 2200 },
    { label: 'Fri', value: 1800 },
    { label: 'Sat', value: 2500 },
    { label: 'Sun', value: 1700 }
  ];
  
  const productPerformanceData = [
    { label: 'Mug', value: 545 },
    { label: 'Board', value: 699 },
    { label: 'Shirt', value: 379 },
    { label: 'Bowl', value: 312 },
    { label: 'Pot', value: 287 }
  ];
  
  const revenueTrendData = [
    { label: 'Jan', value: 8500 },
    { label: 'Feb', value: 9200 },
    { label: 'Mar', value: 7800 },
    { label: 'Apr', value: 10500 },
    { label: 'May', value: 11200 },
    { label: 'Jun', value: 9800 }
  ];

  return (
    <div className="analytics-charts">
      <div className="charts-header">
        <h2>Sales Analytics</h2>
        <div className="date-filter">
          <select>
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
            <option>Year to Date</option>
          </select>
        </div>
      </div>
      
      <div className="charts-grid">
        <div className="chart-card">
          <BarChart data={salesData} title="Weekly Sales" />
        </div>
        
        <div className="chart-card">
          <BarChart data={productPerformanceData} title="Top Products Revenue" />
        </div>
        
        <div className="chart-card full-width">
          <LineChart data={revenueTrendData} title="Revenue Trend" />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCharts;