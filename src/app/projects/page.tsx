import { PageContent } from '../_components/pageContent';
import { Sidebar } from '../_components/sidebar';

export default function Projects() {
  return (
    <>
      <Sidebar />
      <PageContent>
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
        Projects
        </h1>
        <p className="mt-4 text-lg text-center text-gray-600 dark:text-gray-400">
        Here are some of my projects.
        </p>
      </PageContent>
    </>
  );
}