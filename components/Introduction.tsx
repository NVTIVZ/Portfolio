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
    <>
      {}
      <Stack mt="24" direction="row" spacing={32} mx="auto">
        <Box mt="8" my="auto">
          <Heading fontSize="3xl" mb="-6" fontWeight="bold">
            Hello, my name is
          </Heading>
          <Text fontSize="7xl" color="brand.text" fontWeight="bold">
            Andrzej Glowica
          </Text>
          <Text fontSize="2xl" mt="-3" fontWeight="semibold">
            Lorem ipsum dolor sit, amet consectetur
          </Text>
        </Box>
        <Box>
          <Image src="/images/coding.svg" width={450} alt="coding" />
        </Box>
      </Stack>
      <Box
        backgroundColor="brand.third"
        mt="16"
        w="550px"
        borderRadius="md"
        boxShadow="lg"
        mx="auto"
      >
        <Box d="flex" justifyContent="center" mt="2">
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
