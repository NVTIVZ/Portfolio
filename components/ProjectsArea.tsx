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
      name: 'Pokedex2',
      description:
        'Simple Pokedex made by using React, Redux, Styled-Components,Axios',
      imgURL: '/images/pokedex.png',
      stack: ['React', 'Redux', 'Styled-Components'],
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
          mr="6"
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
          <Box ml="4">
            <Heading color="brand.text">{project.name}</Heading>
          </Box>
          <Flex ml="4" flexDirection="row" mt="1">
            {project.stack.map((stack) => buttonDeterminer(stack))}
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
    <Fade in={true} transition={{ enter: { duration: 1.5, delay: 2 } }}>
      <Grid
        templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)' }}
        templateRows={{ base: 'repeat(4,1fr)', md: 'repeat(4,1fr)' }}
        mt="16"
      >
        <GridItem rowSpan={1} colSpan={1}>
          <Heading fontSize="5xl">All Creative Works.</Heading>
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
