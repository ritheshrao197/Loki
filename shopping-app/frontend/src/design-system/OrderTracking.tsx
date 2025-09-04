import React from 'react';
import './OrderTracking.css';

interface OrderTrackingProps {
  steps: {
    id: string;
    label: string;
    description: string;
    timestamp?: string;
    isCompleted: boolean;
    isActive: boolean;
  }[];
}

const OrderTracking: React.FC<OrderTrackingProps> = ({ steps }) => {
  return (
    <div className="order-tracking">
      <div className="tracking-line"></div>
      {steps.map((step, index) => (
        <div 
          key={step.id} 
          className={`tracking-step ${step.isCompleted ? 'completed' : ''} ${step.isActive ? 'active' : ''}`}
        >
          <div className="step-icon">
            {step.isCompleted ? (
              <span className="completed-icon">✓</span>
            ) : (
              <span className="step-number">{index + 1}</span>
            )}
          </div>
          <div className="step-content">
            <h3 className="step-title">{step.label}</h3>
            <p className="step-description">{step.description}</p>
            {step.timestamp && (
              <p className="step-timestamp">{step.timestamp}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderTracking;