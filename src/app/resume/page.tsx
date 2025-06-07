'use client';

import { faBriefcase, faFlask, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Card } from '../_components/card';
import { PageContent } from '../_components/pageContent';
import { Sidebar } from '../_components/sidebar';
import resume from '../_data/resume.json';

export default function Resume() {
  const [ onSkills, setOnSkills ] = useState(true);
  return (
    <>
      <Sidebar />
      <PageContent>
        <div className="flex inline-flex text-4xl font-bold m-4 mt-10 text-gray-400 dark:text-gray-500">
          <div className={onSkills ? 'text-gray-700 dark:text-gray-200' : 'hover:text-gray-500 dark:hover:text-gray-400'} onClick={() => setOnSkills(true)}>
            Skills
          </div>
          <div className='pr-4 pl-4'>|</div>
          <div className={onSkills ? 'hover:text-gray-500 dark:hover:text-gray-400' : 'text-gray-700 dark:text-gray-200'} onClick={() => setOnSkills(false)}>
            Background
          </div>
        </div>
        {onSkills ? <Skills /> : <Background />}
      </PageContent>
    </>
  );
}

function Skills() {
  return (<></>);
}

function Background() {
  return (
    <>
      <ResumeCard
        title="Education"
        content={resume.education}
        icon={<FontAwesomeIcon icon={faUserGraduate} />} />
      <ResumeCard
        title="Work Experience"
        content={resume.work}
        icon={<FontAwesomeIcon icon={faBriefcase} />} />
      <ResumeCard
        title="Research"
        content={resume.research}
        icon={<FontAwesomeIcon icon={faFlask} />} />
    </>
  );
}

function ResumeCard({title, content, icon}: {title: string, content: any[], icon: React.ReactNode}) {
  return (
    <div className='w-full flex inline-flex text-gray-800 dark:text-gray-200 justify-center'>
      <div className='pt-12 pl-8 pr-4 text-3xl'>
        {icon}
      </div>
      <Card padding="p-10 pt-8 pb-6 w-full" centering={false}>
        <h2 className='text-xl font-bold pb-4'>{title}</h2>
        {content.map((item, index) => (
          <div key={index} className='flex flex-col ml-2 w-full'>
            <h3 className='text-lg font-semibold'>{item.title}</h3>
            <div className='prose !max-w-none leading-none text-gray-800 dark:text-gray-200'>
              <ReactMarkdown>
                {item.description}
              </ReactMarkdown>
            </div>
          </div>))}
      </Card>
    </div>

  );
}