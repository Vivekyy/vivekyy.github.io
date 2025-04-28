import React from 'react';

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md p-20">
      {children}
    </div>
  );
}