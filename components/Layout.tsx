import { Flex } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Navigation from './Navigation';

const Layout = (props: any) => {
  return (
    <>
      <Head>
        <title>Jakub Zawadzki</title>
        <meta name="description" content="Portfolio - Jakub Zawadzki" />
      </Head>
      <Navigation />
      <Flex
        as="main"
        height="auto"
        flexDirection="column"
        px={[4, 8, 12, 24, 36, 48]}
        minH="100vh"
      >
        {props.children}
      </Flex>
      <Footer />
    </>
  );
};

export default Layout;
