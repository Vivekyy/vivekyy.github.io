import React from 'react';

export function ExternalLink({ href, className, children }: { href: string | undefined, className?: string, children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}