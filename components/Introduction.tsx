import { Box, Heading, Stack, Text, Image, Flex, Grid } from '@chakra-ui/react';
import React from 'react';

const Introduction = () => {
  const techstack = [
    'React',
    'Redux',
    'HTML5',
    'CSS3',
    'Styled-Components',
    'ChakraUI',
    'Firebase',
    'TypeScript',
  ];

  const renderStack = () => {
    return techstack.map((tech) => {
      return (
        <Box d="flex" alignItems="center" key={tech} mx="2">
          <Image
            src={`/images/${tech}-original.svg`}
            width={8}
            height={8}
            alt="react-icon"
          />
          <Text fontSize="m" ml="1">
            {tech}
          </Text>
        </Box>
      );
    });
  };

  return (
    <>
      {}
      <Stack mt="32" direction="row" spacing={16}>
        <Box mt="8">
          <Heading fontSize="3xl" mb="-6">
            Hello, my name is
          </Heading>
          <Text fontSize="7xl" color="blue.400">
            Andrzej Glowica
          </Text>
          <Text fontSize="2xl" mt="-3">
            Lorem ipsum dolor sit, amet consectetur
          </Text>
        </Box>

        <Image src="/images/coding.svg" width={400} alt="coding" />
      </Stack>
      <Box
        backgroundColor="blue.100"
        mt="16"
        w="550px"
        borderRadius="md"
        boxShadow="lg"
      >
        <Box d="flex" justifyContent="center">
          <Heading fontSize="xl">Tech Stack</Heading>
        </Box>
        <Grid templateColumns="repeat(4,1fr)" my="3">
          {renderStack()}
        </Grid>
      </Box>
    </>
  );
};

export default Introduction;
