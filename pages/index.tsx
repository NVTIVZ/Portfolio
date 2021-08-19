import { Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import React from 'react';
import Introduction from '../components/Introduction';
import ProjectsArea from '../components/ProjectsArea';

const Home: NextPage = () => {
  return (
    <Flex
      height="auto"
      flexDirection="column"
      backgroundColor="theming.secondary"
      px="32"
    >
      <Introduction />
      <ProjectsArea />
    </Flex>
  );
};

export default Home;
