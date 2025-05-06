import React from 'react';

export function PageContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[calc(100svh-3.5rem)]">
      {children}
      <div className="absolute bottom-0 right-2">
        <span className="text-gray-500 dark:text-gray-400 text-sm italic">
          Last updated: 5/6/2025
        </span>
      </div>
    </div>
  );
}