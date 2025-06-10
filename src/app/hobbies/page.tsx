import { ImageCard } from '../_components/card';
import { PageContent } from '../_components/pageContent';
import { Sidebar } from '../_components/sidebar';
import hobbies from '../_data/hobbies.json';

export default async function Fun() {
  const projects1 = [];
  const projects2 = [];
  for (let i = 0; i < hobbies.data.length; i++) {
    if (i % 2 === 0) {
      projects1.push(hobbies.data[i]);
    } else {
      projects2.push(hobbies.data[i]);
    }
  }
  return (
    <>
      <Sidebar />
      <PageContent>
        <h1 className='text-4xl font-bold m-4 mt-10 text-gray-700 dark:text-gray-200'>Fun Stuff</h1>
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
      </PageContent>
    </>
  );
}