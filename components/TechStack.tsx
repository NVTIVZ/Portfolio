import { Box, Heading, Grid, Image, Text, Fade, Flex } from '@chakra-ui/react';
import React from 'react';

const TechStack = () => {
  const techstack = [
    'TypeScript',
    'React',
    'NextJS',
    'Redux',
    'HTML5',
    'CSS3',
    'Styled-Components',
    'ChakraUI',
    'NodeJS',
    'Express',
    'Firebase',
    'MongoDB',
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
    <Fade in={true} transition={{ enter: { duration: 1, delay: 0.5 } }}>
      <Box d="flex" justifyContent="center" mt="2">
        <Heading fontSize="5xl">The Tech I Work With</Heading>
      </Box>
      <Box d="flex">
        <Flex
          backgroundColor="brand.third"
          mt="16"
          borderRadius="md"
          boxShadow="lg"
          mx="auto"
          p={2}
        >
          {renderStack()}
        </Flex>
      </Box>
    </Fade>
  );
};

export default TechStack;
