import React, { useState } from 'react';
import SellerSidebar from '../components/SellerSidebar';
import './PaymentSettlementPage.css';

interface Settlement {
  id: number;
  period: string;
  totalSales: number;
  commission: number;
  gst: number;
  otherDeductions: number;
  netAmount: number;
  status: 'pending' | 'processing' | 'settled' | 'failed';
  settlementDate?: string;
}

const PaymentSettlementPage: React.FC = () => {
  const [settlements, setSettlements] = useState<Settlement[]>([
    {
      id: 1,
      period: 'June 2023',
      totalSales: 45000,
      commission: 4500,
      gst: 810,
      otherDeductions: 200,
      netAmount: 39490,
      status: 'settled',
      settlementDate: '2023-07-05'
    },
    {
      id: 2,
      period: 'May 2023',
      totalSales: 38500,
      commission: 3850,
      gst: 693,
      otherDeductions: 150,
      netAmount: 33807,
      status: 'settled',
      settlementDate: '2023-06-05'
    },
    {
      id: 3,
      period: 'April 2023',
      totalSales: 32750,
      commission: 3275,
      gst: 590,
      otherDeductions: 125,
      netAmount: 28760,
      status: 'settled',
      settlementDate: '2023-05-05'
    },
    {
      id: 4,
      period: 'March 2023',
      totalSales: 29800,
      commission: 2980,
      gst: 536,
      otherDeductions: 100,
      netAmount: 26184,
      status: 'processing'
    },
    {
      id: 5,
      period: 'February 2023',
      totalSales: 26500,
      commission: 2650,
      gst: 477,
      otherDeductions: 90,
      netAmount: 23283,
      status: 'pending'
    }
  ]);

  const [bankDetails, setBankDetails] = useState({
    accountHolderName: 'John Doe',
    bankName: 'State Bank of India',
    accountNumber: 'XXXXXX1234',
    ifscCode: 'SBIN0002499',
    branch: 'Mumbai Central'
  });

  const [showBankForm, setShowBankForm] = useState(false);
  const [newBankDetails, setNewBankDetails] = useState({ ...bankDetails });

  const handleBankDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewBankDetails({
      ...newBankDetails,
      [name]: value
    });
  };

  const handleSaveBankDetails = () => {
    setBankDetails(newBankDetails);
    setShowBankForm(false);
  };

  const getStatusClass = (status: Settlement['status']) => {
    switch (status) {
      case 'pending': return 'status-pending';
      case 'processing': return 'status-processing';
      case 'settled': return 'status-settled';
      case 'failed': return 'status-failed';
      default: return '';
    }
  };

  const getStatusText = (status: Settlement['status']) => {
    switch (status) {
      case 'pending': return 'Pending';
      case 'processing': return 'Processing';
      case 'settled': return 'Settled';
      case 'failed': return 'Failed';
      default: return status;
    }
  };

  return (
    <div className="seller-layout">
      <SellerSidebar />
      <main className="payment-settlement-page">
        <div className="container">
          <div className="page-header">
            <h1>Payment Settlement</h1>
            <p>View your settlement history and update bank details</p>
          </div>

          <div className="payment-content">
            <div className="bank-details-section">
              <div className="section-header">
                <h2>Bank Account Details</h2>
                <button 
                  className="edit-btn"
                  onClick={() => setShowBankForm(!showBankForm)}
                >
                  {showBankForm ? 'Cancel' : 'Edit'}
                </button>
              </div>
              
              {showBankForm ? (
                <form className="bank-details-form">
                  <div className="form-group">
                    <label htmlFor="accountHolderName">Account Holder Name</label>
                    <input
                      type="text"
                      id="accountHolderName"
                      name="accountHolderName"
                      value={newBankDetails.accountHolderName}
                      onChange={handleBankDetailsChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="bankName">Bank Name</label>
                    <input
                      type="text"
                      id="bankName"
                      name="bankName"
                      value={newBankDetails.bankName}
                      onChange={handleBankDetailsChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="accountNumber">Account Number</label>
                    <input
                      type="text"
                      id="accountNumber"
                      name="accountNumber"
                      value={newBankDetails.accountNumber}
                      onChange={handleBankDetailsChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="ifscCode">IFSC Code</label>
                    <input
                      type="text"
                      id="ifscCode"
                      name="ifscCode"
                      value={newBankDetails.ifscCode}
                      onChange={handleBankDetailsChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="branch">Branch</label>
                    <input
                      type="text"
                      id="branch"
                      name="branch"
                      value={newBankDetails.branch}
                      onChange={handleBankDetailsChange}
                    />
                  </div>
                  
                  <button 
                    type="button" 
                    className="save-btn"
                    onClick={handleSaveBankDetails}
                  >
                    Save Changes
                  </button>
                </form>
              ) : (
                <div className="bank-details-display">
                  <div className="detail-row">
                    <span className="label">Account Holder:</span>
                    <span>{bankDetails.accountHolderName}</span>
                  </div>
                  <div className="detail-row">
                    <span className="label">Bank:</span>
                    <span>{bankDetails.bankName}</span>
                  </div>
                  <div className="detail-row">
                    <span className="label">Account Number:</span>
                    <span>{bankDetails.accountNumber}</span>
                  </div>
                  <div className="detail-row">
                    <span className="label">IFSC Code:</span>
                    <span>{bankDetails.ifscCode}</span>
                  </div>
                  <div className="detail-row">
                    <span className="label">Branch:</span>
                    <span>{bankDetails.branch}</span>
                  </div>
                </div>
              )}
            </div>

            <div className="settlements-section">
              <div className="section-header">
                <h2>Settlement History</h2>
              </div>
              
              <div className="settlements-table-container">
                <table className="settlements-table">
                  <thead>
                    <tr>
                      <th>Period</th>
                      <th>Total Sales</th>
                      <th>Commission</th>
                      <th>GST</th>
                      <th>Other Deductions</th>
                      <th>Net Amount</th>
                      <th>Status</th>
                      <th>Settlement Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {settlements.map(settlement => (
                      <tr key={settlement.id}>
                        <td>{settlement.period}</td>
                        <td>₹{settlement.totalSales.toLocaleString()}</td>
                        <td>₹{settlement.commission.toLocaleString()}</td>
                        <td>₹{settlement.gst.toLocaleString()}</td>
                        <td>₹{settlement.otherDeductions.toLocaleString()}</td>
                        <td className="net-amount">₹{settlement.netAmount.toLocaleString()}</td>
                        <td>
                          <span className={`status-badge ${getStatusClass(settlement.status)}`}>
                            {getStatusText(settlement.status)}
                          </span>
                        </td>
                        <td>{settlement.settlementDate || 'N/A'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="payout-summary">
              <div className="summary-card">
                <h3>Total Settled</h3>
                <p className="summary-value">
                  ₹{settlements
                    .filter(s => s.status === 'settled')
                    .reduce((sum, s) => sum + s.netAmount, 0)
                    .toLocaleString()}
                </p>
              </div>
              
              <div className="summary-card">
                <h3>Pending Settlement</h3>
                <p className="summary-value">
                  ₹{settlements
                    .filter(s => s.status === 'pending' || s.status === 'processing')
                    .reduce((sum, s) => sum + s.netAmount, 0)
                    .toLocaleString()}
                </p>
              </div>
              
              <div className="summary-card">
                <h3>Last Settlement</h3>
                <p className="summary-value">
                  ₹{settlements
                    .find(s => s.status === 'settled')
                    ?.netAmount.toLocaleString() || '0'}
                </p>
                <p className="summary-date">
                  {settlements.find(s => s.status === 'settled')?.settlementDate || 'N/A'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PaymentSettlementPage;