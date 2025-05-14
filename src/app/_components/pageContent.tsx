import React from 'react';

export async function PageContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col bg-gray-300 dark:bg-gray-700 items-center justify-center w-full h-max">
      {children}
    </div>
  );
}

export function PageCentering({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-[calc(100vh-3.5rem)] justify-center items-center'>
      {children}
    </div>
  );
}