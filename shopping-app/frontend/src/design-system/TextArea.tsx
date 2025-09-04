import React, { forwardRef } from 'react';
import './Input.css';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({
  label,
  error,
  helperText,
  fullWidth = false,
  className = '',
  id,
  ...props
}, ref) => {
  const inputId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className={`input-container ${fullWidth ? 'input-full-width' : ''}`}>
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
        </label>
      )}
      
      <div className={`input-wrapper ${error ? 'input-error' : ''}`}>
        <textarea
          ref={ref}
          id={inputId}
          className={`input-field textarea-field ${className}`}
          {...props}
        />
      </div>
      
      {(error || helperText) && (
        <div className={`input-helper-text ${error ? 'input-error-text' : ''}`}>
          {error || helperText}
        </div>
      )}
    </div>
  );
});

export default TextArea;