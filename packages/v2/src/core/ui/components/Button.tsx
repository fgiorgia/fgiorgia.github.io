import React from 'react';
import Link from 'next/link';
import { ButtonProps } from '@/core/common/types';

const Button: React.FC<ButtonProps> = ({
  href,
  children,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) => {
  const baseClasses =
    'font-medium py-3 px-6 rounded-lg shadow-md transition-colors duration-200';

  const variantClasses: Record<string, string> = {
    primary:
      'bg-indigo-600 text-white hover:bg-indigo-700 disabled:bg-indigo-400',
    secondary:
      'bg-white text-indigo-700 hover:bg-indigo-50 disabled:bg-gray-100 disabled:text-gray-500',
    outline:
      'bg-transparent border border-white text-white hover:bg-indigo-600 disabled:opacity-50',
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClasses} {...props} legacyBehavior>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
