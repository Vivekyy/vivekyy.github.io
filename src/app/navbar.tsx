'use client';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';

export function Navbar() {
  return (
    <nav className="bg-gray-200 dark:bg-gray-800 transition-colors">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-14 items-center justify-between">
          <Link href="/" className='text-black dark:text-white font-semibold'>Vivek Yanamadula</Link>
          <div>
            <MenuButton text="Home" route="/" />
            <span className='px-2 text-gray-500 dark:text-white'>|</span>
            <MenuButton text="Projects" route="/projects" />
            <span className='px-2 text-gray-500 dark:text-white'>|</span>
            <MenuButton text="Fun" route="/hobbies" />
          </div>
          <div>
            <ThemeSwitcher />
            <span className='px-2 text-gray-500 dark:text-white'>|</span>
            <ContactButton />
          </div>
        </div>
      </div>
    </nav>
  );
}

function MenuButton({text, route}: {text: string; route: string}) {
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

function ThemeSwitcher() {
  const [ theme, setTheme ] = useLocalStorage('theme', 'light');
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  useEffect(() => {
    // Set theme based on system preference
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

  return (
    <button onClick={toggleTheme} className="text-gray-500 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-white rounded-md p-2">
      {theme === 'light' ? '☀️' : '🌙'}
    </button>
  );
}