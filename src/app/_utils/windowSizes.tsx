'use client';

import { useEffect, useState } from 'react';

export function useMobileView(): boolean {
  return useWindowSize() <= 900;
}

function useWindowSize(): number {
  const [ width, setWidth ] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return width;
}