import { faBook, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, ImageCard, SubCard } from '../_components/card';
import { GithubCommitCalendar } from '../_components/githubCalendar';
import { PageContent } from '../_components/pageContent';
import { Sidebar } from '../_components/sidebar';
import projects from '../_data/projects.json';
import { getReposByUser } from '../_utils/githubClient';
import { getScholarResultsByAuthor } from '../_utils/googleScholarClient';

export default async function Projects() {
  const projects1 = [];
  const projects2 = [];
  for (let i = 0; i < projects.data.length; i++) {
    if (i % 2 === 0) {
      projects1.push(projects.data[i]);
    } else {
      projects2.push(projects.data[i]);
    }
  }
  return (
    <>
      <Sidebar />
      <PageContent>
        <h1 className='text-4xl font-bold m-4 mt-10 text-gray-700 dark:text-gray-200'>Stuff I&apos;ve done</h1>
        <div className='flex inline-flex'>
          <div className='w-[calc(.5*.85*(100svw-272px))] flex inline-flex flex-wrap h-min'>
            {projects1.map((project, index) => (
              <ImageCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link} />
            ))}
          </div>
          <div className='w-[calc(.5*.85*(100svw-272px))] flex inline-flex flex-wrap h-min'>
            {projects2.map((project, index) => (
              <ImageCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link} />
            ))}
          </div>
        </div>
        <h1 className='text-4xl font-bold m-4 mt-10 text-gray-700 dark:text-gray-200'>Digital Footprint</h1>
        <GithubCard />
        <ScholarCard />
      </PageContent>
    </>
  );
}

async function GithubCard() {
  const repos = await getReposByUser('vivekyy', 3);

  return (
    <Card padding="p-10">
      <div className='w-[calc(.8*(100svw-272px))]'>
        <h1 className="text-xl text-center font-bold text-gray-800 dark:text-white pb-6 hover:underline">
          <a href="https://github.com/Vivekyy" target="_blank" rel="noopener noreferrer">
              Github
          </a>
        </h1>
        <SubCard>
          <GithubCommitCalendar />
          <h2 className="text-left text-lg text-center font-bold text-gray-800 dark:text-white mb-2">
              Recent Repositories
          </h2>
          <div className='flex flex-col text-md text-blue-700 dark:text-blue-400 font-medium text-left'>
            {repos.data.map((repo, index) => (
              <a className='m-1' href={repo.html_url} target='_blank' rel="noopener noreferrer" key={index}>
                <FontAwesomeIcon icon={faBook} className='mx-2 text-gray-800 dark:text-gray-200' />{`Vivekyy/${repo.name}`}
              </a>))}
          </div>
        </SubCard>
      </div>
    </Card>
  );
}

async function ScholarCard() {
  const scholarEntries = await getScholarResultsByAuthor('Vivek Yanamadula', 4);

  return (
    <Card padding="p-10">
      <div className='w-[calc(.8*(100svw-272px))]'>
        <h1 className="text-xl text-center font-bold text-gray-800 dark:text-white pb-6 hover:underline">
          <a href="https://scholar.google.com/citations?user=hZSsEc0AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
              Google Scholar
          </a>
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
  );
}