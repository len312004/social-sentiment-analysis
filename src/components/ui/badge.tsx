import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'secondary';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default' }) => {
  let baseStyle = 'inline-flex items-center px-2 py-0.5 rounded text-xs font-medium';

  if (variant === 'outline') baseStyle += ' border border-gray-300 text-gray-700';
  else if (variant === 'secondary') baseStyle += ' bg-gray-200 text-gray-800';
  else baseStyle += ' bg-blue-500 text-white';

  return <span className={baseStyle}>{children}</span>;
};
