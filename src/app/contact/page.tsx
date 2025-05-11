import { Card } from '../_components/card';
import { Socials } from '../_components/socials';

export default function Contact() {
  return (
    <Card>
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
           Contact Me
      </h1>
      <p className="mt-4 text-lg text-center text-gray-600 dark:text-gray-400">
            Please feel free to reach out to me via any channel!
      </p>
      <div className='animate-fadein mt-4'>
        <Socials iconClassName="m-2 hover:text-gray-400 dark:hover:text-gray-200"/>
      </div>
    </Card>);
}