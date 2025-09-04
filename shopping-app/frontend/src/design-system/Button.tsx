import React from 'react';
import './Button.css';
import { colors, borderRadius, spacing } from './theme';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  children,
  className = '',
  ...props
}) => {
  const baseClasses = ['btn', `btn-${variant}`, `btn-${size}`, fullWidth ? 'btn-full-width' : ''];
  
  return (
    <button
      className={`${baseClasses.join(' ')} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className="btn-icon btn-icon-left">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="btn-icon btn-icon-right">{icon}</span>
      )}
    </button>
  );
};

export default Button;