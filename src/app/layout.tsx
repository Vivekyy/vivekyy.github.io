import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import React from 'react';
import { Footer } from './_components/footer';
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
  title: 'Vivek\'s Website',
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#c2c6cd] dark:bg-gray-600`}
      >
        <Navbar />
        <div className='absolute top-[3.5rem] bg-gray-300 dark:bg-gray-700 inline-flex w-full h-[calc(100vh-3.5rem)]'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
