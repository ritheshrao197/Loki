import React, { useState } from 'react';
import './PromotionManager.css';

interface Promotion {
  id: string;
  name: string;
  code: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  startDate: string;
  endDate: string;
  status: 'active' | 'scheduled' | 'expired';
  usageCount: number;
  maxUsage: number | null;
}

const PromotionManager: React.FC = () => {
  const [promotions, setPromotions] = useState<Promotion[]>([
    {
      id: '1',
      name: 'Summer Sale',
      code: 'SUMMER20',
      discountType: 'percentage',
      discountValue: 20,
      startDate: '2023-06-01',
      endDate: '2023-08-31',
      status: 'active',
      usageCount: 42,
      maxUsage: 100
    },
    {
      id: '2',
      name: 'First Order',
      code: 'WELCOME10',
      discountType: 'percentage',
      discountValue: 10,
      startDate: '2023-01-01',
      endDate: '2023-12-31',
      status: 'active',
      usageCount: 128,
      maxUsage: null
    },
    {
      id: '3',
      name: 'Clearance',
      code: 'CLEARANCE15',
      discountType: 'percentage',
      discountValue: 15,
      startDate: '2023-07-01',
      endDate: '2023-07-15',
      status: 'expired',
      usageCount: 24,
      maxUsage: 50
    }
  ]);
  
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    code: '',
    discountType: 'percentage' as 'percentage' | 'fixed',
    discountValue: 0,
    startDate: '',
    endDate: '',
    maxUsage: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newPromotion: Promotion = {
      id: (promotions.length + 1).toString(),
      name: formData.name,
      code: formData.code,
      discountType: formData.discountType,
      discountValue: Number(formData.discountValue),
      startDate: formData.startDate,
      endDate: formData.endDate,
      status: new Date(formData.startDate) > new Date() ? 'scheduled' : 'active',
      usageCount: 0,
      maxUsage: formData.maxUsage ? Number(formData.maxUsage) : null
    };
    
    setPromotions([...promotions, newPromotion]);
    setShowForm(false);
    setFormData({
      name: '',
      code: '',
      discountType: 'percentage',
      discountValue: 0,
      startDate: '',
      endDate: '',
      maxUsage: ''
    });
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'active': return 'status-active';
      case 'scheduled': return 'status-scheduled';
      case 'expired': return 'status-expired';
      default: return '';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Active';
      case 'scheduled': return 'Scheduled';
      case 'expired': return 'Expired';
      default: return status;
    }
  };

  return (
    <div className="promotion-manager">
      <div className="promotion-header">
        <h2>Promotion Manager</h2>
        <button 
          className="add-promotion-btn"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancel' : 'Add Promotion'}
        </button>
      </div>
      
      {showForm && (
        <div className="promotion-form-container">
          <h3>Create New Promotion</h3>
          <form onSubmit={handleSubmit} className="promotion-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Promotion Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="code">Coupon Code</label>
                <input
                  type="text"
                  id="code"
                  name="code"
                  value={formData.code}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="discountType">Discount Type</label>
                <select
                  id="discountType"
                  name="discountType"
                  value={formData.discountType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="percentage">Percentage</option>
                  <option value="fixed">Fixed Amount</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="discountValue">
                  Discount Value ({formData.discountType === 'percentage' ? '%' : '$'})
                </label>
                <input
                  type="number"
                  id="discountValue"
                  name="discountValue"
                  value={formData.discountValue}
                  onChange={handleInputChange}
                  min="0"
                  step="0.01"
                  required
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="startDate">Start Date</label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="endDate">End Date</label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="maxUsage">Maximum Usage (leave blank for unlimited)</label>
              <input
                type="number"
                id="maxUsage"
                name="maxUsage"
                value={formData.maxUsage}
                onChange={handleInputChange}
                min="1"
              />
            </div>
            
            <div className="form-actions">
              <button type="submit" className="submit-btn">Create Promotion</button>
            </div>
          </form>
        </div>
      )}
      
      <div className="promotions-table-container">
        <table className="promotions-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Code</th>
              <th>Discount</th>
              <th>Period</th>
              <th>Status</th>
              <th>Usage</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {promotions.map(promotion => (
              <tr key={promotion.id}>
                <td>{promotion.name}</td>
                <td>
                  <span className="coupon-code">{promotion.code}</span>
                </td>
                <td>
                  {promotion.discountType === 'percentage' 
                    ? `${promotion.discountValue}%` 
                    : `$${promotion.discountValue}`}
                </td>
                <td>
                  {promotion.startDate} to {promotion.endDate}
                </td>
                <td>
                  <span className={`status-badge ${getStatusClass(promotion.status)}`}>
                    {getStatusText(promotion.status)}
                  </span>
                </td>
                <td>
                  {promotion.maxUsage 
                    ? `${promotion.usageCount}/${promotion.maxUsage}` 
                    : `${promotion.usageCount}/∞`}
                </td>
                <td>
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PromotionManager;