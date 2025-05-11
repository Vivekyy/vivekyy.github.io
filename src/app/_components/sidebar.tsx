import Image from 'next/image';
import { Socials } from './socials';

export function Sidebar() {
  return (
    <div className="absolute left-0 top-14 h-[calc(100svh-3.5rem)] items-center justify-center text-center bg-[#c2c6cd] dark:bg-gray-600 p-14">
      <div className="flex items-center justify-center w-40 h-40 mb-4 bg-gray-200 dark:bg-gray-900 rounded-full">
        <Image
          src="/static/me.jpg"
          alt="Vivek Yanamadula"
          width={140}
          height={140}
          className="rounded-full"
        />
      </div>
      <h1 className="text-md font-bold text-center text-gray-800 dark:text-white">
        Vivek Yanamadula
      </h1>
      <p className="mt-1 text-sm italic text-center text-gray-600 dark:text-gray-400">
        Fullstack Software Engineer
      </p>
      <div className=''>
        <Socials iconClassName="m-2 hover:text-gray-400 dark:hover:text-gray-200"/>
      </div>
    </div>
  );
}