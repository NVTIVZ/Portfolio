import type { NextPage } from 'next';
import React from 'react';
import Introduction from '../components/Introduction';
import ProjectsArea from '../components/ProjectsArea';
import TechStack from '../components/TechStack';

const Home: NextPage = () => {
  return (
    <>
      <Introduction />
      <TechStack />
      <ProjectsArea />
    </>
  );
};

export default Home;
