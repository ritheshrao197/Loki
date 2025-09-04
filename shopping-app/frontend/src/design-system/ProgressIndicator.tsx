import React from 'react';
import './ProgressIndicator.css';

interface ProgressIndicatorProps {
  steps: string[];
  currentStep: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  steps,
  currentStep
}) => {
  return (
    <div className="progress-container">
      <div className="progress-bar">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className={`progress-step ${index < currentStep ? 'completed' : ''} ${index === currentStep ? 'active' : ''}`}
          >
            <div className="step-indicator">
              {index < currentStep ? (
                <span className="checkmark">✓</span>
              ) : (
                <span className="step-number">{index + 1}</span>
              )}
            </div>
            <div className="step-label">{step}</div>
            {index < steps.length - 1 && (
              <div className={`step-connector ${index < currentStep ? 'completed' : ''}`}></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;