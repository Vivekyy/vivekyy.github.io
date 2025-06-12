'use client';

import GitHubCalendar from 'react-github-calendar';
import { useLocalStorage } from 'usehooks-ts';
import socials from '../_data/socials.json';

export function GithubCommitCalendar() {
  const username = socials.data.Github.split('/').pop() || '';
  const [ theme ] = useLocalStorage('theme', 'light');

  return (
    <div className='flex w-full justify-center text-gray-800 dark:text-white pb-4'>
      <GitHubCalendar username={username} colorScheme={theme as 'light' | 'dark' | undefined} />
    </div>);
}