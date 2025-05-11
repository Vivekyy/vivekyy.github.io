import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { getCommitsByRepo } from '../_utils/githubClient';

export async function PageContent({ children }: { children: React.ReactNode }) {
  const lastCommit = await getCommitsByRepo('Vivekyy', 'website', 1);
  const url = lastCommit?.data[0]?.html_url;
  const date = new Date(lastCommit?.data[0]?.commit?.committer?.date as string).toDateString();

  return (
    <div className="flex flex-col items-center justify-center w-full h-[calc(100svh-3.5rem)]">
      {children}
      <div className="absolute bottom-0 right-2">
        <span className="text-right text-gray-500 dark:text-gray-400 hover:dark:text-gray-200 hover:text-gray-700 text-sm italic">
          <a href={url} target="_blank" rel="noopener noreferrer">
            Last updated: {date}
            <FontAwesomeIcon icon={faGithub} className='mx-2' />
          </a>
        </span>
      </div>
    </div>
  );
}