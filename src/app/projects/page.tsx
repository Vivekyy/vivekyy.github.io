import { faBook, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, SubCard } from '../_components/card';
import { PageContent } from '../_components/pageContent';
import { Sidebar } from '../_components/sidebar';
import { getReposByUser } from '../_utils/githubClient';
import { getScholarResultsByAuthor } from '../_utils/googleScholarClient';

export default async function Projects() {
  const repos = await getReposByUser('vivekyy', 4);
  const scholarEntries = await getScholarResultsByAuthor('Vivek Yanamadula', 4);

  return (
    <>
      <Sidebar />
      <PageContent>
        <Card padding={10}>
          <div className='w-[55svw]'>
            <h1 className="text-xl text-center font-bold text-gray-800 dark:text-white mb-4">
              Recent Repositories
            </h1>
            <SubCard>
              <div className='flex flex-col text-md text-blue-700 dark:text-blue-400 font-medium text-left'>
                {repos.data.map((repo, index) => (
                  <a className='m-1' href={repo.html_url} target='_blank' rel="noopener noreferrer" key={index}>
                    <FontAwesomeIcon icon={faBook} className='mx-2 text-gray-800 dark:text-gray-200' />{`Vivekyy/${repo.name}`}
                  </a>))}
              </div>
            </SubCard>
          </div>
        </Card>
        <Card padding={10}>
          <div className='w-[55svw]'>
            <h1 className="text-xl text-center font-bold text-gray-800 dark:text-white mb-4">
              Google Scholar
            </h1>
            <SubCard>
              <div className='flex flex-col text-md text-blue-700 dark:text-blue-400 font-medium text-left'>
                {scholarEntries.map((entry, index) => (
                  <a className='m-1' href={entry.link} target='_blank' rel="noopener noreferrer" key={index}>
                    <FontAwesomeIcon icon={faNewspaper} className='mx-2 text-gray-800 dark:text-gray-200' />{entry.title}
                  </a>))}
              </div>
            </SubCard>
          </div>
        </Card>
      </PageContent>
    </>
  );
}