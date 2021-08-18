import { Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import React from 'react';
import Introduction from '../components/Introduction';

const Home: NextPage = () => {
  return (
    <Flex
      height="auto"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      backgroundColor="blue.50"
    >
      <Introduction />
    </Flex>
  );
};

export default Home;
