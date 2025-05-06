
'use client';

import { useEffect, useState } from 'react';

export function Typewriter({text}: {text: string}) {
  const [ index, setIndex ] = useState(0);
  const typingSpeed = 100; // Speed in milliseconds

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (index < text.length) {
        setIndex(index + 1);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [ index, text ]);

  return (
    <span>{text.substring(0, index)}<Cursor /></span>
  );
}

function Cursor() {
  return (
    <span className="animate-pulsefade">|</span>
  );
}