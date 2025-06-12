import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getCommitsByRepo } from '../_utils/githubClient';
import { ExternalLink } from './link';

export async function Footer(){
  const lastCommit = await getCommitsByRepo('Vivekyy', 'website', 1);
  const url = lastCommit?.data[0]?.html_url;
  const date = new Date(lastCommit?.data[0]?.commit?.committer?.date as string).toDateString();

  return (
    <div className="fixed bottom-0 right-0 bg-gray-200 dark:bg-gray-800 rounded-sm">
      <span className="px-2 text-right text-gray-500 dark:text-gray-400 hover:dark:text-gray-200 hover:text-gray-700 text-sm italic">
        <ExternalLink href={url}>
            Last updated: {date}
          <FontAwesomeIcon icon={faGithub} className='ml-2' />
        </ExternalLink>
      </span>
    </div>
  );
}