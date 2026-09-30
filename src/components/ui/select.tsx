import React from 'react';

interface SelectProps {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
}

interface TriggerProps {
  children: React.ReactNode;
  className?: string;
}

interface ValueProps {
  placeholder?: string;
}

interface ContentProps {
  children: React.ReactNode;
}

interface ItemProps {
  value: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Select: React.FC<SelectProps> = ({ children }) => {
  return <div className="relative">{children}</div>;
};

export const SelectTrigger: React.FC<TriggerProps> = ({ children, className }) => (
  <button
    type="button"
    className={`border border-gray-300 rounded px-3 py-2 bg-white flex justify-between items-center ${className}`}
  >
    {children}
  </button>
);

export const SelectValue: React.FC<ValueProps> = ({ placeholder }) => <span>{placeholder}</span>;

export const SelectContent: React.FC<ContentProps> = ({ children }) => (
  <div className="absolute mt-1 border border-gray-300 rounded bg-white z-10">{children}</div>
);

export const SelectItem: React.FC<ItemProps> = ({ children, onClick }) => (
  <div
    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
    onClick={onClick}
  >
    {children}
  </div>
);
