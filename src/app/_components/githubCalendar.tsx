'use client';

import GitHubCalendar from 'react-github-calendar';
import { useLocalStorage } from 'usehooks-ts';

export function GithubCommitCalendar() {
  const [ theme ] = useLocalStorage('theme', 'light');

  return (
    <div className='flex w-full justify-center text-gray-800 dark:text-white pb-4'>
      <GitHubCalendar username='vivekyy' colorScheme={theme as 'light' | 'dark' | undefined} />
    </div>);
}