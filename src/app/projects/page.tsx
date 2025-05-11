import { Sidebar } from '../_components/sidebar';

export default function Projects() {
  return (
    <>
      <Sidebar />
      <div className="flex flex-col items-center justify-center w-full h-full p-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
        Projects
        </h1>
        <p className="mt-4 text-lg text-center text-gray-600 dark:text-gray-400">
        Here are some of my projects.
        </p>
      </div>
    </>
  );
}