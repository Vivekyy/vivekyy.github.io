import { faBook, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { Card, SubCard } from '../_components/card';
import { GithubCommitCalendar } from '../_components/githubCalendar';
import { PageContent } from '../_components/pageContent';
import { Sidebar } from '../_components/sidebar';
import { getReposByUser } from '../_utils/githubClient';
import { getScholarResultsByAuthor } from '../_utils/googleScholarClient';

export default async function Projects() {
  return (
    <>
      <Sidebar />
      <PageContent>
        <div className='w-[calc(.85*(100svw-272px))] flex inline-flex flex-wrap'>
          <ProjectCard
            title="Vivek Yanamadula"
            description="I am a fullstack software engineer and tech enthusiast. I love to work on open source projects and contribute to the community."
            imagePath="/static/me.jpg"
            link="" />
          <ProjectCard
            title="Vivek Yanamadula"
            description="I am a fullstack software engineer and tech enthusiast. I love to work on open source projects and contribute to the community."
            imagePath="/static/me.jpg"
            link="" />
          <ProjectCard
            title="Vivek Yanamadula"
            description="I am a fullstack software engineer and tech enthusiast. I love to work on open source projects and contribute to the community."
            imagePath="/static/me.jpg"
            link="" />
        </div>
        <GithubCard />
        <ScholarCard />
      </PageContent>
    </>
  );
}

function ProjectCard({title, description, imagePath, link}: {title: string, description: string, imagePath: string, link: string}) {
  return (
    <div className='w-1/2'>
      <Card padding="p-10 m-4">
        <Image src={imagePath} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" width={100} height={100}/>
        <a href={link} target='_blank' rel="noopener noreferrer" className="text-lg text-center font-bold text-gray-800 dark:text-white pb-4 hover:underline">
          {title}
        </a>
        <p className="text-gray-800 dark:text-gray-200 mb-4">
          {description}
        </p>
      </Card>
    </div>
  );
}

async function GithubCard() {
  const repos = await getReposByUser('vivekyy', 3);

  return (
    <Card padding="p-10">
      <div className='w-[calc(.8*(100svw-272px))]'>
        <h1 className="text-xl text-center font-bold text-gray-800 dark:text-white pb-6">
              Github
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
        <h1 className="text-xl text-center font-bold text-gray-800 dark:text-white pb-6">
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
  );
}