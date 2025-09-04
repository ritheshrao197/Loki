import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SellerOnboardingPage.css';

const SellerOnboardingPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Business Information
    businessName: '',
    businessType: '',
    gstNumber: '',
    businessAddress: '',
    businessCity: '',
    businessState: '',
    businessZip: '',
    
    // Personal Information
    fullName: '',
    aadhaarNumber: '',
    phoneNumber: '',
    email: '',
    
    // Bank Details
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    accountHolderName: '',
    
    // Documents
    gstCertificate: null as File | null,
    aadhaarFront: null as File | null,
    aadhaarBack: null as File | null,
    bankPassbook: null as File | null,
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        [fieldName]: e.target.files[0]
      });
      
      // Clear error when user selects a file
      if (errors[fieldName]) {
        setErrors({
          ...errors,
          [fieldName]: ''
        });
      }
    }
  };

  const validateStep = (currentStep: number) => {
    const newErrors: Record<string, string> = {};
    
    switch (currentStep) {
      case 1:
        if (!formData.businessName) newErrors.businessName = 'Business name is required';
        if (!formData.businessType) newErrors.businessType = 'Business type is required';
        if (!formData.gstNumber) newErrors.gstNumber = 'GST number is required';
        if (!formData.businessAddress) newErrors.businessAddress = 'Business address is required';
        if (!formData.businessCity) newErrors.businessCity = 'City is required';
        if (!formData.businessState) newErrors.businessState = 'State is required';
        if (!formData.businessZip) newErrors.businessZip = 'ZIP code is required';
        break;
        
      case 2:
        if (!formData.fullName) newErrors.fullName = 'Full name is required';
        if (!formData.aadhaarNumber) newErrors.aadhaarNumber = 'Aadhaar number is required';
        if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
        if (!formData.email) newErrors.email = 'Email is required';
        break;
        
      case 3:
        if (!formData.bankName) newErrors.bankName = 'Bank name is required';
        if (!formData.accountNumber) newErrors.accountNumber = 'Account number is required';
        if (!formData.ifscCode) newErrors.ifscCode = 'IFSC code is required';
        if (!formData.accountHolderName) newErrors.accountHolderName = 'Account holder name is required';
        break;
        
      case 4:
        if (!formData.gstCertificate) newErrors.gstCertificate = 'GST certificate is required';
        if (!formData.aadhaarFront) newErrors.aadhaarFront = 'Aadhaar front photo is required';
        if (!formData.aadhaarBack) newErrors.aadhaarBack = 'Aadhaar back photo is required';
        if (!formData.bankPassbook) newErrors.bankPassbook = 'Bank passbook copy is required';
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateStep(step)) {
      setIsLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        alert('Seller onboarding submitted successfully! Our team will review your application and get back to you soon.');
        navigate('/seller/dashboard');
      }, 2000);
    }
  };

  const renderStepIndicator = () => {
    return (
      <div className="step-indicator">
        {[1, 2, 3, 4].map((stepNumber) => (
          <div 
            key={stepNumber} 
            className={`step ${step === stepNumber ? 'active' : step < stepNumber ? 'pending' : 'completed'}`}
          >
            <div className="step-number">{stepNumber}</div>
            <div className="step-label">
              {stepNumber === 1 && 'Business'}
              {stepNumber === 2 && 'Personal'}
              {stepNumber === 3 && 'Bank'}
              {stepNumber === 4 && 'Documents'}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="seller-onboarding-page">
      <div className="container">
        <div className="onboarding-header">
          <h1>Seller Onboarding</h1>
          <p>Complete your registration to start selling on our platform</p>
        </div>

        {renderStepIndicator()}

        <div className="onboarding-content">
          <form className="onboarding-form" onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="form-step">
                <h2>Business Information</h2>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="businessName">Business Name *</label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className={errors.businessName ? 'error' : ''}
                    />
                    {errors.businessName && <span className="error-message">{errors.businessName}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="businessType">Business Type *</label>
                    <select
                      id="businessType"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleInputChange}
                      className={errors.businessType ? 'error' : ''}
                    >
                      <option value="">Select Business Type</option>
                      <option value="sole-proprietorship">Sole Proprietorship</option>
                      <option value="partnership">Partnership</option>
                      <option value="private-limited">Private Limited</option>
                      <option value="llp">LLP</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.businessType && <span className="error-message">{errors.businessType}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="gstNumber">GST Number *</label>
                    <input
                      type="text"
                      id="gstNumber"
                      name="gstNumber"
                      value={formData.gstNumber}
                      onChange={handleInputChange}
                      placeholder="Enter 15-digit GST number"
                      className={errors.gstNumber ? 'error' : ''}
                    />
                    {errors.gstNumber && <span className="error-message">{errors.gstNumber}</span>}
                  </div>
                  
                  <div className="form-group full-width">
                    <label htmlFor="businessAddress">Business Address *</label>
                    <input
                      type="text"
                      id="businessAddress"
                      name="businessAddress"
                      value={formData.businessAddress}
                      onChange={handleInputChange}
                      placeholder="Street address"
                      className={errors.businessAddress ? 'error' : ''}
                    />
                    {errors.businessAddress && <span className="error-message">{errors.businessAddress}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="businessCity">City *</label>
                    <input
                      type="text"
                      id="businessCity"
                      name="businessCity"
                      value={formData.businessCity}
                      onChange={handleInputChange}
                      className={errors.businessCity ? 'error' : ''}
                    />
                    {errors.businessCity && <span className="error-message">{errors.businessCity}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="businessState">State *</label>
                    <input
                      type="text"
                      id="businessState"
                      name="businessState"
                      value={formData.businessState}
                      onChange={handleInputChange}
                      className={errors.businessState ? 'error' : ''}
                    />
                    {errors.businessState && <span className="error-message">{errors.businessState}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="businessZip">ZIP Code *</label>
                    <input
                      type="text"
                      id="businessZip"
                      name="businessZip"
                      value={formData.businessZip}
                      onChange={handleInputChange}
                      className={errors.businessZip ? 'error' : ''}
                    />
                    {errors.businessZip && <span className="error-message">{errors.businessZip}</span>}
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="form-step">
                <h2>Personal Information</h2>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name *</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={errors.fullName ? 'error' : ''}
                    />
                    {errors.fullName && <span className="error-message">{errors.fullName}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="aadhaarNumber">Aadhaar Number *</label>
                    <input
                      type="text"
                      id="aadhaarNumber"
                      name="aadhaarNumber"
                      value={formData.aadhaarNumber}
                      onChange={handleInputChange}
                      placeholder="Enter 12-digit Aadhaar number"
                      className={errors.aadhaarNumber ? 'error' : ''}
                    />
                    {errors.aadhaarNumber && <span className="error-message">{errors.aadhaarNumber}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number *</label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="Enter 10-digit mobile number"
                      className={errors.phoneNumber ? 'error' : ''}
                    />
                    {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="form-step">
                <h2>Bank Details</h2>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="bankName">Bank Name *</label>
                    <input
                      type="text"
                      id="bankName"
                      name="bankName"
                      value={formData.bankName}
                      onChange={handleInputChange}
                      className={errors.bankName ? 'error' : ''}
                    />
                    {errors.bankName && <span className="error-message">{errors.bankName}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="accountNumber">Account Number *</label>
                    <input
                      type="text"
                      id="accountNumber"
                      name="accountNumber"
                      value={formData.accountNumber}
                      onChange={handleInputChange}
                      className={errors.accountNumber ? 'error' : ''}
                    />
                    {errors.accountNumber && <span className="error-message">{errors.accountNumber}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="ifscCode">IFSC Code *</label>
                    <input
                      type="text"
                      id="ifscCode"
                      name="ifscCode"
                      value={formData.ifscCode}
                      onChange={handleInputChange}
                      placeholder="Enter 11-character IFSC code"
                      className={errors.ifscCode ? 'error' : ''}
                    />
                    {errors.ifscCode && <span className="error-message">{errors.ifscCode}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="accountHolderName">Account Holder Name *</label>
                    <input
                      type="text"
                      id="accountHolderName"
                      name="accountHolderName"
                      value={formData.accountHolderName}
                      onChange={handleInputChange}
                      className={errors.accountHolderName ? 'error' : ''}
                    />
                    {errors.accountHolderName && <span className="error-message">{errors.accountHolderName}</span>}
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="form-step">
                <h2>Document Upload</h2>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="gstCertificate">GST Certificate *</label>
                    <input
                      type="file"
                      id="gstCertificate"
                      onChange={(e) => handleFileChange(e, 'gstCertificate')}
                      accept=".pdf,.jpg,.jpeg,.png"
                      className={errors.gstCertificate ? 'error' : ''}
                    />
                    {errors.gstCertificate && <span className="error-message">{errors.gstCertificate}</span>}
                    <p className="file-hint">Upload PDF, JPG, or PNG (Max 5MB)</p>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="aadhaarFront">Aadhaar Front Photo *</label>
                    <input
                      type="file"
                      id="aadhaarFront"
                      onChange={(e) => handleFileChange(e, 'aadhaarFront')}
                      accept=".jpg,.jpeg,.png"
                      className={errors.aadhaarFront ? 'error' : ''}
                    />
                    {errors.aadhaarFront && <span className="error-message">{errors.aadhaarFront}</span>}
                    <p className="file-hint">Upload JPG or PNG (Max 5MB)</p>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="aadhaarBack">Aadhaar Back Photo *</label>
                    <input
                      type="file"
                      id="aadhaarBack"
                      onChange={(e) => handleFileChange(e, 'aadhaarBack')}
                      accept=".jpg,.jpeg,.png"
                      className={errors.aadhaarBack ? 'error' : ''}
                    />
                    {errors.aadhaarBack && <span className="error-message">{errors.aadhaarBack}</span>}
                    <p className="file-hint">Upload JPG or PNG (Max 5MB)</p>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="bankPassbook">Bank Passbook Copy *</label>
                    <input
                      type="file"
                      id="bankPassbook"
                      onChange={(e) => handleFileChange(e, 'bankPassbook')}
                      accept=".pdf,.jpg,.jpeg,.png"
                      className={errors.bankPassbook ? 'error' : ''}
                    />
                    {errors.bankPassbook && <span className="error-message">{errors.bankPassbook}</span>}
                    <p className="file-hint">Upload PDF, JPG, or PNG (Max 5MB)</p>
                  </div>
                </div>
              </div>
            )}

            <div className="form-actions">
              {step > 1 && (
                <button 
                  type="button" 
                  className="prev-btn"
                  onClick={handlePrevious}
                >
                  Previous
                </button>
              )}
              
              {step < 4 ? (
                <button 
                  type="button" 
                  className="next-btn"
                  onClick={handleNext}
                >
                  Next
                </button>
              ) : (
                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isLoading}
                >
                  {isLoading ? 'Submitting...' : 'Submit Application'}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SellerOnboardingPage;