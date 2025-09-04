import React, { forwardRef } from 'react';
import './Input.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  helperText,
  fullWidth = false,
  startIcon,
  endIcon,
  className = '',
  id,
  ...props
}, ref) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className={`input-container ${fullWidth ? 'input-full-width' : ''}`}>
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
        </label>
      )}
      
      <div className={`input-wrapper ${error ? 'input-error' : ''} ${startIcon ? 'input-with-start-icon' : ''} ${endIcon ? 'input-with-end-icon' : ''}`}>
        {startIcon && (
          <div className="input-icon input-icon-start">
            {startIcon}
          </div>
        )}
        
        <input
          ref={ref}
          id={inputId}
          className={`input-field ${className}`}
          {...props}
        />
        
        {endIcon && (
          <div className="input-icon input-icon-end">
            {endIcon}
          </div>
        )}
      </div>
      
      {(error || helperText) && (
        <div className={`input-helper-text ${error ? 'input-error-text' : ''}`}>
          {error || helperText}
        </div>
      )}
    </div>
  );
});

export default Input;