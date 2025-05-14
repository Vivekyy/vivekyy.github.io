import React from 'react';

export async function PageContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      {children}
    </div>
  );
}