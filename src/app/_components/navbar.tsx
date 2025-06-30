'use client';

import { faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { useMobileView } from '../_utils/windowSizes';
import React from 'react';
import ClickAwayListener from 'react-click-away-listener';

const Pages = [
  { text: 'Home', route: '/' },
  { text: 'Resume', route: '/resume' },
  { text: 'Projects', route: '/projects' },
  { text: 'Fun', route: '/hobbies' },
];

export function Navbar() {
  if (useMobileView()) {
    return <MobileNavbar />;
  }
  return (
    <DesktopNavbar />
  );
}

function DesktopNavbar() {
  return (
    <nav className="bg-gray-200 dark:bg-gray-800 transition-colors">
      <Link href="/" className='absolute left-6 top-4 text-black dark:text-white font-semibold'>Vivek Yanamadula</Link>
      <div className="w-screen mx-auto px-2">
        <div className="relative flex h-14 items-center justify-center">
          {Pages.map((page, index) => (
            <div key={index}>
              <MenuButton key={page.route} text={page.text} route={page.route} />
              {index !== (Pages.length-1) && <span key={index} className='px-2 text-gray-500 dark:text-white'>|</span>}
            </div>
          ))}
        </div>
      </div>
      <div className='absolute right-6 top-2'>
        <ThemeSwitcher />
        <span className='px-2 text-gray-500 dark:text-white'>|</span>
        <ContactButton />
      </div>
    </nav>
  );
}

function MobileNavbar() {
  return (
    <nav className="bg-gray-200 dark:bg-gray-800 transition-colors">
      <div className='absolute left-6 top-3'>
        <Dropdown />
        <span className="px-2"></span>
        <Link href="/" className='text-black dark:text-white font-semibold'>Vivek Yanamadula</Link>
      </div>
      <div className='absolute right-6 top-2'>
        <ThemeSwitcher />
        <span className='px-2 text-gray-500 dark:text-white'>|</span>
        <ContactButton />
      </div>
      <div className="w-screen mx-auto px-2 h-14"></div>
    </nav>
  );
}

function MenuButton({ text, route }: { text: string; route: string }) {
  const inFocus = usePathname() === route;
  return (
    <div className="inline-flex items-center justify-center" >
      <Link href={route} className={`${inFocus ? 'bg-gray-400 dark:bg-gray-900 text-white' : 'text-black dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-white'} inline-flex items-center justify-center rounded-md p-2 focus:bg-gray-400 dark:focus:bg-gray-900 focus:text-white`}>
        {text}
      </Link>
    </div>
  );
}

function ContactButton() {
  const inFocus = usePathname() === '/contact';
  return (
    <Link href="/contact" className={`${inFocus ? 'bg-gray-600 text-white' : 'bg-gray-300 dark:bg-gray-900 hover:bg-gray-500 dark:hover:bg-gray-700 hover:text-white'} rounded-md px-3 py-2 text-sm font-medium text-black dark:text-white focus:bg-gray-600 focus-text-white`}>
      Contact Me
      <div className='px-1 inline-flex'></div>
      <FontAwesomeIcon className='text-sm' icon={faEnvelope} />
    </Link>
  );
}

function Dropdown() {
  const [ hideItems, setHideItems ] = useState(true);

  return (
    <ClickAwayListener onClickAway={() => setHideItems(true)}>
      <div className="relative inline-block text-left">
        <div>
          <button
            onClick={() => setHideItems(!hideItems)}
            className={`${!hideItems ? 'bg-gray-600 text-white' : 'bg-gray-300 dark:bg-gray-900 hover:bg-gray-500 dark:hover:bg-gray-700 hover:text-white'} rounded-md px-3 py-2 text-sm font-medium text-black dark:text-white`}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div className={`${hideItems && 'hidden'} !z-100 absolute animate-fadein-fast rounded-md bg-white dark:bg-gray-900 shadow-lg mt-1 ml-1`}>
          <div className="px-2 py-1 flex flex-col">
            {Pages.map((page) => (
              <DropdownLink key={page.route} text={page.text} route={page.route} onClick={() => setHideItems(true)} />
            ))}
          </div>
        </div>
      </div>
    </ClickAwayListener>
  );
}

function DropdownLink({ text, route, onClick }: { text: string; route: string; onClick: () => void }) {
  const inFocus = usePathname() === route;
  return (
    <Link href={route} onClick={onClick} className={`${inFocus ? 'text-white' : 'text-black dark:text-gray-400 hover:text-white'} p-2 focus:text-white`}>
      {text}
    </Link>
  );
}

function ThemeSwitcher() {
  const [ theme, setTheme ] = useLocalStorage('theme', 'light');
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  // Set theme based on system preference
  useEffect(() => {
    const handleThemeChange = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? 'dark' : 'light';
      setTheme(newTheme);
    };
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', handleThemeChange);
    if (mediaQuery.matches) {
      setTheme('dark');
    }
    return () => {
      mediaQuery.removeEventListener('change', handleThemeChange);
    };
  }, [ setTheme ]);

  // Set theme based on local storage
  useEffect(() => {
    const htmlSelector = document.querySelector('html');
    if (htmlSelector) {
      htmlSelector.classList.remove('light', 'dark');
      htmlSelector.classList.add(theme);
    }
  }, [ theme ]);

  // Hydration fix
  const [ hydrated, setHydrated ] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    return null;
  }

  return (
    <button onClick={toggleTheme} className="text-gray-500 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-white rounded-md p-2">
      {theme === 'light' ? '☀️' : '🌙'}
    </button>
  );
}