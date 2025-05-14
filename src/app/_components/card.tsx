import React from 'react';

export function Card({ children, padding }: { children: React.ReactNode, padding?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md ${padding || 'p-20'} m-5`}>
      {children}
    </div>
  );
}

export function SubCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-left justify-center bg-gray-300 dark:bg-gray-900 rounded-lg shadow-md p-5">
      {children}
    </div>
  );
}