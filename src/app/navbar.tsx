'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
  return (
    <nav className="bg-gray-300 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-14 items-center justify-between">
          <Link href="/" className='text-white font-semibold'>Vivek Yanamadula</Link>
          <div>
            <MenuButton text="Home" route="/" />
            <span className='px-2'>|</span>
            <MenuButton text="Projects" route="/projects" />
            <span className='px-2'>|</span>
            <MenuButton text="Fun" route="/hobbies" />
          </div>
          <ContactButton />
        </div>
      </div>
    </nav>
  );
}

function MenuButton({text, route}: {text: string; route: string}) {
  const inFocus = usePathname() === route;
  return (
    <div className="inline-flex items-center justify-center" >
      <Link href={route} className={`${inFocus ? 'bg-gray-900 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'} inline-flex items-center justify-center rounded-md p-2 focus:bg-gray-900 focus:text-white`}>
        {text}
      </Link>
    </div>
  );
}

function ContactButton() {
  const inFocus = usePathname() === '/contact';
  return (
    <Link href="/contact" className={`${inFocus ? 'bg-gray-600' : 'bg-gray-900 hover:bg-gray-700'} rounded-md px-3 py-2 text-sm font-medium text-white focus:bg-gray-600`}>
      Contact Me
    </Link>
  );
}