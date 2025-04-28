import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import React from 'react';
import { Navbar } from './_components/navbar';
import './globals.css';

config.autoAddCss = false;

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: [ 'latin' ],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: [ 'latin' ],
});

export const metadata: Metadata = {
  title: 'Vivek Yanamadula',
  description: 'Personal website of Vivek Yanamadula',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className='bg-gray-300 dark:bg-gray-700'>
          {children}
        </div>
      </body>
    </html>
  );
}
