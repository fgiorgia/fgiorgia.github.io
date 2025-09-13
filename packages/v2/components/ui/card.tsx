import React from 'react';
import { CardProps } from '@/types';

const Card: React.FC<CardProps> = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`bg-white rounded-lg overflow-hidden shadow-md ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
