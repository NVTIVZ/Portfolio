import { Box, Heading, Grid, Image, Text } from '@chakra-ui/react';
import React from 'react';

const TechStack = () => {
  const techstack = [
    'React',
    'Redux',
    'HTML5',
    'CSS3',
    'Styled-Components',
    'ChakraUI',
    'Firebase',
    'TypeScript',
    'NextJS',
  ];
  const renderStack = () => {
    return techstack.map((tech) => {
      return (
        <Box d="flex" alignItems="center" key={tech} mx="2">
          <Image
            src={`/images/${tech}-original.svg`}
            width={7}
            height={7}
            alt="react-icon"
          />
          <Text fontSize="m" ml="1" fontWeight="semibold">
            {tech}
          </Text>
        </Box>
      );
    });
  };

  return (
    <Box
      backgroundColor="brand.third"
      mt="16"
      w={[350, 550]}
      borderRadius="md"
      boxShadow="lg"
      mx="auto"
    >
      <Box d="flex" justifyContent="center" mt="2">
        <Heading fontSize="xl">Tech Stack</Heading>
      </Box>
      <Grid
        templateColumns={{ base: 'repeat(3,1fr)', md: 'repeat(4,1fr)' }}
        my="3"
      >
        {renderStack()}
      </Grid>
    </Box>
  );
};

export default TechStack;