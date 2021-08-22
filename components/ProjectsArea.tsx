import { Box, Grid, Flex, GridItem } from '@chakra-ui/layout';
import { Heading, Text, Image, Fade } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import buttonDeterminer from '../utils/buttonDeterminer';

const ProjectsArea = () => {
  const projects = [
    {
      name: 'Pokedex',
      description:
        'Simple Pokedex made by using React, Redux, Styled-Components,Axios',
      imgURL: '/images/pokedex.png',
      stack: ['React', 'Redux', 'Styled-Components'],
    },
    {
      name: 'Twitterro',
      description:
        'Twitter clone created with purpose to get better understanding at styling and firebase',
      imgURL: '/images/pokedex.png',
      stack: ['React', 'Redux', 'Styled-Components', 'Firebase', 'TypeScript'],
    },
    {
      name: 'Pokedex3',
      description:
        'Simple Pokedex made by using React, Redux, Styled-Components,Axios',
      imgURL: '/images/pokedex.png',
      stack: ['React', 'Redux', 'Styled-Components'],
    },
  ];

  const renderProjects = () => {
    return projects.map((project) => {
      return (
        <GridItem
          flexDirection="column"
          key={project.name}
          mx="2"
          my="6"
          backgroundColor="brand.third"
          borderRadius="lg"
          rowSpan={[1, 2]}
          colSpan={1}
          boxShadow="lg"
        >
          <Box>
            <Image src={project.imgURL} alt="project" borderTopRadius="lg" />
          </Box>
          <Box ml="4" mt="1">
            <Heading color="brand.text">{project.name}</Heading>
          </Box>
          <Flex ml="4" flexDirection="row" mt="1" flexWrap="wrap">
            {project.stack.map((stack) => {
              return (
                <Box
                  d="flex"
                  alignItems="center"
                  py="1"
                  px="2"
                  backgroundColor={`${buttonDeterminer(stack)}`}
                  borderRadius="md"
                  mr="2"
                  key={stack}
                >
                  <Image
                    src={`/images/${stack}-original.svg`}
                    alt="react"
                    width={4}
                  />
                  <Text fontSize="sm" ml="0.5">
                    {stack}
                  </Text>
                </Box>
              );
            })}
          </Flex>
          <Box
            mx="4"
            my="2"
            pt="1"
            borderTop="1px"
            borderColor="rgba(255,255,255,0.5)"
          >
            <Text fontWeight="semibold">{project.description}</Text>
          </Box>
        </GridItem>
      );
    });
  };

  return (
    <Fade in={true} transition={{ enter: { duration: 1, delay: 1 } }}>
      <Grid
        templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)' }}
        templateRows={{ base: 'repeat(4,1fr)', md: 'repeat(4,1fr)' }}
        mt={[8, 16, 48]}
      >
        <GridItem rowSpan={1} colSpan={1}>
          <Heading fontSize={['2xl', '5xl']}>All Creative Works.</Heading>
          <Text mt="3" fontSize="lg">
            {"Here's"} some of my projects that I have worked on.
          </Text>
          <Text mt="3" color="brand.text" fontWeight="semibold" fontSize="xl">
            <Link href="/projects">Explore more</Link>
          </Text>
        </GridItem>
        {renderProjects()}
      </Grid>
    </Fade>
  );
};

export default ProjectsArea;
