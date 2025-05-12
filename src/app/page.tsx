
import Image from 'next/image';
import { Card } from './_components/card';
import { PageContent } from './_components/pageContent';
import { Typewriter } from './_utils/typewriter';

export default function Home(){
  return (
    <PageContent>
      <Card>
        <div className="flex items-center justify-center w-50 h-50 mb-4 bg-gray-300 dark:bg-gray-900 rounded-full">
          <Image
            src="/static/me.jpg"
            alt="Vivek Yanamadula"
            width={180}
            height={180}
            className="rounded-full"
          />
        </div>
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
        Welcome to my personal website!
        </h1>
        <p className="mt-4 text-lg text-center text-gray-600 dark:text-gray-400">
          <Typewriter text="Hi! I'm Vivek, a fullstack software engineer and tech enthusiast." />
        </p>
      </Card>
    </PageContent>
  );
}
