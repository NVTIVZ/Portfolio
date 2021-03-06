import { Box, Fade, Flex, Heading, Image } from '@chakra-ui/react';
import React from 'react';

const TechStack = () => {
  const techstack = [
    'typeScript',
    'react',
    'nextjs',
    'redux',
    'html5',
    'css3',
    'styled-components',
    'chakraui',
    'nodejs',
    'express',
    'firebase',
    'mongodb',
  ];
  const renderStack = () => {
    return techstack.map((tech) => {
      return (
        <Image
          src={`/images/${tech}-original.svg`}
          width={14}
          height={14}
          alt="react-icon"
          key={tech}
          mx={1}
        />
      );
    });
  };

  return (
    <Fade in={true} transition={{ enter: { duration: 0.3, delay: 0.2 } }}>
      <Box d="flex" justifyContent="center" mt="2">
        <Heading fontSize={['3xl', '6xl']}>The Tech I Work With</Heading>
      </Box>
      <Box d="flex">
        <Flex
          backgroundColor="brand.third"
          mt="16"
          borderRadius="md"
          boxShadow="lg"
          mx="auto"
          flexWrap="wrap"
          justifyContent="center"
          p={2}
        >
          {renderStack()}
        </Flex>
      </Box>
    </Fade>
  );
};

export default TechStack;
