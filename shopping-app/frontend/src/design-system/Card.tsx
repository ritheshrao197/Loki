import React from 'react';
import './Card.css';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'elevated' | 'outlined';
  padding?: 'none' | 'small' | 'medium' | 'large';
}

const Card: React.FC<CardProps> = ({
  variant = 'elevated',
  padding = 'medium',
  children,
  className = '',
  ...props
}) => {
  const baseClasses = ['card', `card-${variant}`, `card-padding-${padding}`];
  
  return (
    <div className={`${baseClasses.join(' ')} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;