import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './FraudDetectionPage.css';

interface FraudAlert {
  id: number;
  type: 'suspicious_login' | 'unusual_transaction' | 'chargeback_risk' | 'account_takeover';
  severity: 'low' | 'medium' | 'high';
  userId: number;
  userName: string;
  description: string;
  timestamp: string;
  status: 'pending' | 'investigating' | 'resolved' | 'dismissed';
}

const FraudDetectionPage: React.FC = () => {
  const [alerts, setAlerts] = useState<FraudAlert[]>([
    {
      id: 1,
      type: 'suspicious_login',
      severity: 'high',
      userId: 1001,
      userName: 'John Doe',
      description: 'Multiple failed login attempts from unusual location',
      timestamp: '2023-06-20 14:30:22',
      status: 'pending'
    },
    {
      id: 2,
      type: 'unusual_transaction',
      severity: 'medium',
      userId: 1002,
      userName: 'Jane Smith',
      description: 'Large order from new device with different shipping address',
      timestamp: '2023-06-20 12:15:45',
      status: 'investigating'
    },
    {
      id: 3,
      type: 'chargeback_risk',
      severity: 'high',
      userId: 1003,
      userName: 'Robert Johnson',
      description: 'Multiple disputed transactions in short period',
      timestamp: '2023-06-20 10:45:18',
      status: 'pending'
    },
    {
      id: 4,
      type: 'account_takeover',
      severity: 'high',
      userId: 1004,
      userName: 'Emily Davis',
      description: 'Password change followed by suspicious activity',
      timestamp: '2023-06-20 09:20:33',
      status: 'resolved'
    },
    {
      id: 5,
      type: 'unusual_transaction',
      severity: 'low',
      userId: 1005,
      userName: 'Michael Brown',
      description: 'Slightly higher than average transaction amount',
      timestamp: '2023-06-20 08:10:55',
      status: 'dismissed'
    }
  ]);

  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleStatusChange = (alertId: number, newStatus: FraudAlert['status']) => {
    setAlerts(alerts.map(alert => 
      alert.id === alertId ? { ...alert, status: newStatus } : alert
    ));
  };

  const getSeverityClass = (severity: FraudAlert['severity']) => {
    switch (severity) {
      case 'low': return 'severity-low';
      case 'medium': return 'severity-medium';
      case 'high': return 'severity-high';
      default: return '';
    }
  };

  const getTypeText = (type: FraudAlert['type']) => {
    switch (type) {
      case 'suspicious_login': return 'Suspicious Login';
      case 'unusual_transaction': return 'Unusual Transaction';
      case 'chargeback_risk': return 'Chargeback Risk';
      case 'account_takeover': return 'Account Takeover';
      default: return type;
    }
  };

  const getStatusClass = (status: FraudAlert['status']) => {
    switch (status) {
      case 'pending': return 'status-pending';
      case 'investigating': return 'status-investigating';
      case 'resolved': return 'status-resolved';
      case 'dismissed': return 'status-dismissed';
      default: return '';
    }
  };

  const filteredAlerts = alerts.filter(alert => {
    const matchesFilter = filter === 'all' || alert.severity === filter;
    const matchesSearch = alert.userName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          alert.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div>
      <Navbar userType="admin" />
      <main className="fraud-detection-page">
        <div className="container">
          <div className="page-header">
            <h1>Fraud Detection</h1>
            <p>Monitor and manage potential fraud alerts</p>
          </div>

          <div className="fraud-controls">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search alerts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            
            <div className="filter-buttons">
              <button 
                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                All
              </button>
              <button 
                className={`filter-btn severity-high ${filter === 'high' ? 'active' : ''}`}
                onClick={() => setFilter('high')}
              >
                High Risk
              </button>
              <button 
                className={`filter-btn severity-medium ${filter === 'medium' ? 'active' : ''}`}
                onClick={() => setFilter('medium')}
              >
                Medium Risk
              </button>
              <button 
                className={`filter-btn severity-low ${filter === 'low' ? 'active' : ''}`}
                onClick={() => setFilter('low')}
              >
                Low Risk
              </button>
            </div>
          </div>

          <div className="alerts-table-container">
            <table className="alerts-table">
              <thead>
                <tr>
                  <th>Alert</th>
                  <th>Type</th>
                  <th>Severity</th>
                  <th>User</th>
                  <th>Timestamp</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredAlerts.length > 0 ? (
                  filteredAlerts.map(alert => (
                    <tr key={alert.id}>
                      <td>
                        <div className="alert-description">
                          <p>{alert.description}</p>
                        </div>
                      </td>
                      <td>
                        <span className="alert-type">{getTypeText(alert.type)}</span>
                      </td>
                      <td>
                        <span className={`severity-badge ${getSeverityClass(alert.severity)}`}>
                          {alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)}
                        </span>
                      </td>
                      <td>
                        <div className="user-info">
                          <h4>{alert.userName}</h4>
                          <p>ID: {alert.userId}</p>
                        </div>
                      </td>
                      <td>{alert.timestamp}</td>
                      <td>
                        <span className={`status-badge ${getStatusClass(alert.status)}`}>
                          {alert.status.charAt(0).toUpperCase() + alert.status.slice(1)}
                        </span>
                      </td>
                      <td>
                        <div className="action-buttons">
                          {alert.status === 'pending' && (
                            <>
                              <button 
                                className="investigate-btn"
                                onClick={() => handleStatusChange(alert.id, 'investigating')}
                              >
                                Investigate
                              </button>
                              <button 
                                className="dismiss-btn"
                                onClick={() => handleStatusChange(alert.id, 'dismissed')}
                              >
                                Dismiss
                              </button>
                            </>
                          )}
                          
                          {alert.status === 'investigating' && (
                            <>
                              <button 
                                className="resolve-btn"
                                onClick={() => handleStatusChange(alert.id, 'resolved')}
                              >
                                Resolve
                              </button>
                              <button 
                                className="dismiss-btn"
                                onClick={() => handleStatusChange(alert.id, 'dismissed')}
                              >
                                Dismiss
                              </button>
                            </>
                          )}
                          
                          {(alert.status === 'resolved' || alert.status === 'dismissed') && (
                            <button 
                              className="reopen-btn"
                              onClick={() => handleStatusChange(alert.id, 'pending')}
                            >
                              Reopen
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="no-alerts">
                      No fraud alerts found matching your criteria
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="fraud-stats">
            <div className="stat-card">
              <h3>Total Alerts</h3>
              <p className="stat-value">{alerts.length}</p>
            </div>
            
            <div className="stat-card">
              <h3>Pending</h3>
              <p className="stat-value">{alerts.filter(a => a.status === 'pending').length}</p>
            </div>
            
            <div className="stat-card">
              <h3>High Risk</h3>
              <p className="stat-value">{alerts.filter(a => a.severity === 'high').length}</p>
            </div>
            
            <div className="stat-card">
              <h3>Resolved</h3>
              <p className="stat-value">{alerts.filter(a => a.status === 'resolved').length}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FraudDetectionPage;