import React from 'react';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  primary = false,
  size = 'medium',
}) => {
  const baseStyles = 'font-semibold rounded cursor-pointer border-0';
  const sizeStyles = {
    small: 'text-xs py-2 px-4',
    medium: 'text-sm py-3 px-6',
    large: 'text-base py-4 px-8',
  };
  const colorStyles = primary
    ? 'bg-blue-500 text-white hover:bg-blue-600'
    : 'bg-gray-200 text-gray-800 hover:bg-gray-300';

  return (
    <button
      type="button"
      className={`${baseStyles} ${sizeStyles[size]} ${colorStyles}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
