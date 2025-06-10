import Image from 'next/image';
import React from 'react';
import ReactMarkdown from 'react-markdown';

export function Card({ children, padding, centering = true }: { children: React.ReactNode, padding?: string, centering?: boolean }) {
  return (
    <div className={`flex flex-col ${centering && 'items-center justify-center'} bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md ${padding || 'p-20'} m-5`}>
      {children}
    </div>
  );
}

export function SubCard({ children, padding }: { children: React.ReactNode, padding?: string }) {
  return (
    <div className={`flex flex-col items-left justify-center bg-gray-300 dark:bg-gray-600 rounded-lg shadow-md ${padding || 'p-5'}`}>
      {children}
    </div>
  );
}

export function ImageCard({title, description, image, link}: {title: string, description: string, image: string, link?: string}) {
  return (
    <div className='w-full'>
      <Card padding="p-10">
        <div className={`relative h-48 w-full mb-4 shadow-md ${link && 'hover:h-60 transition-all duration-300 ease-in-out'}`}>
          <a href={link} target='_blank' rel="noopener noreferrer">
            <Image src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" fill={true}/>
          </a>
        </div>
        <a href={link} target='_blank' rel="noopener noreferrer">
          <p className={`text-lg text-center font-bold text-gray-800 dark:text-white pb-4 ${link && 'hover:underline'}`}>
            {title}
          </p>
        </a>
        <div className="prose leading-none text-gray-800 dark:text-gray-200">
          <ReactMarkdown>
            {description}
          </ReactMarkdown>
        </div>
      </Card>
    </div>
  );
}