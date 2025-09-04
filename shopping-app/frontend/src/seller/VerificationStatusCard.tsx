import React, { useState } from 'react';
import './VerificationStatusCard.css';

const VerificationStatusCard: React.FC = () => {
  // Mock verification status data
  const [verificationStatus, setVerificationStatus] = useState({
    status: 'pending', // pending, submitted, verified, rejected
    submittedDate: '2023-06-15',
    reviewedDate: null as string | null,
    rejectionReason: null as string | null,
    documents: [
      { id: 1, name: 'Business License', status: 'approved' as 'pending' | 'approved' | 'rejected' },
      { id: 2, name: 'Tax ID Certificate', status: 'pending' as 'pending' | 'approved' | 'rejected' },
      { id: 3, name: 'Bank Account Verification', status: 'pending' as 'pending' | 'approved' | 'rejected' }
    ]
  });

  const [showUploadForm, setShowUploadForm] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState<number | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleDocumentUpload = (documentId: number) => {
    setSelectedDocument(documentId);
    setShowUploadForm(true);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      // Simulate file upload progress
      setUploadProgress(0);
      const interval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            // Update document status after upload
            setVerificationStatus(prevStatus => ({
              ...prevStatus,
              documents: prevStatus.documents.map(doc => 
                doc.id === selectedDocument 
                  ? { ...doc, status: 'pending' } 
                  : doc
              )
            }));
            setShowUploadForm(false);
            setSelectedDocument(null);
            return 0;
          }
          return prev + 10;
        });
      }, 200);
    }
  };

  const getStatusText = () => {
    switch (verificationStatus.status) {
      case 'pending': return 'Not Submitted';
      case 'submitted': return 'Under Review';
      case 'verified': return 'Verified';
      case 'rejected': return 'Rejected';
      default: return 'Unknown';
    }
  };

  const getStatusClass = () => {
    switch (verificationStatus.status) {
      case 'pending': return 'status-pending';
      case 'submitted': return 'status-submitted';
      case 'verified': return 'status-verified';
      case 'rejected': return 'status-rejected';
      default: return '';
    }
  };

  const handleSubmitForReview = () => {
    setVerificationStatus({
      ...verificationStatus,
      status: 'submitted',
      submittedDate: new Date().toISOString().split('T')[0]
    });
  };

  return (
    <div className="verification-status-card">
      <div className="card-header">
        <h2>Account Verification</h2>
        <span className={`status-badge ${getStatusClass()}`}>
          {getStatusText()}
        </span>
      </div>
      
      <div className="verification-content">
        {verificationStatus.status === 'pending' && (
          <div className="verification-info">
            <p>Verify your account to unlock all seller features and build trust with buyers.</p>
            <p className="required-text">* Required for product listings and receiving payments</p>
          </div>
        )}
        
        {verificationStatus.status === 'submitted' && (
          <div className="verification-info">
            <p>Your verification documents are under review. This usually takes 1-3 business days.</p>
            <p className="submitted-date">Submitted on: {verificationStatus.submittedDate}</p>
          </div>
        )}
        
        {verificationStatus.status === 'verified' && (
          <div className="verification-info">
            <p className="verified-text">✓ Your account is fully verified!</p>
            <p>Enjoy all seller features and benefits.</p>
          </div>
        )}
        
        {verificationStatus.status === 'rejected' && (
          <div className="verification-info">
            <p className="rejected-text">⚠ Verification rejected</p>
            {verificationStatus.rejectionReason && (
              <p className="rejection-reason">Reason: {verificationStatus.rejectionReason}</p>
            )}
            <p>Please correct the issues and resubmit your documents.</p>
          </div>
        )}
        
        <div className="documents-list">
          <h3>Required Documents</h3>
          <ul>
            {verificationStatus.documents.map(document => (
              <li key={document.id} className="document-item">
                <div className="document-info">
                  <span className="document-name">{document.name}</span>
                  <span className={`document-status ${document.status}`}>
                    {document.status.charAt(0).toUpperCase() + document.status.slice(1)}
                  </span>
                </div>
                {document.status !== 'approved' && (
                  <button 
                    className="upload-btn"
                    onClick={() => handleDocumentUpload(document.id)}
                  >
                    {document.status === 'pending' ? 'Upload' : 'Re-upload'}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
        
        {showUploadForm && selectedDocument && (
          <div className="upload-form">
            <h3>Upload Document</h3>
            <div className="file-upload-area">
              <input 
                type="file" 
                onChange={handleFileUpload}
                accept=".pdf,.jpg,.jpeg,.png"
              />
              {uploadProgress > 0 && (
                <div className="upload-progress">
                  <div 
                    className="progress-bar" 
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                  <span>{uploadProgress}%</span>
                </div>
              )}
            </div>
            <div className="form-actions">
              <button 
                className="cancel-btn"
                onClick={() => setShowUploadForm(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
        
        {verificationStatus.status === 'pending' && (
          <div className="submit-section">
            <p>All documents uploaded? Submit for review to complete verification.</p>
            <button 
              className="submit-btn"
              onClick={handleSubmitForReview}
              disabled={verificationStatus.documents.some(doc => doc.status !== 'approved')}
            >
              Submit for Review
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerificationStatusCard;