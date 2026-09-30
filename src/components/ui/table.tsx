import React from 'react';

interface TableProps {
  children: React.ReactNode;
}

interface CellProps {
  children: React.ReactNode;
  className?: string;
}

export const Table: React.FC<TableProps> = ({ children }) => (
  <table className="min-w-full divide-y divide-gray-200">{children}</table>
);

export const TableHeader: React.FC<TableProps> = ({ children }) => <thead className="bg-gray-50">{children}</thead>;

export const TableBody: React.FC<TableProps> = ({ children }) => <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>;

export const TableRow: React.FC<TableProps> = ({ children }) => <tr>{children}</tr>;

export const TableHead: React.FC<CellProps> = ({ children, className }) => (
  <th
    scope="col"
    className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${className}`}
  >
    {children}
  </th>
);

export const TableCell: React.FC<CellProps> = ({ children, className }) => (
  <td className={`px-6 py-4 whitespace-nowrap text-sm text-gray-900 ${className}`}>{children}</td>
);
