import { Box, Grid, Flex, GridItem } from '@chakra-ui/layout';
import { Heading, Text, Image } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

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
          mx="6"
          my="6"
          backgroundColor="brand.third"
          borderRadius="lg"
          rowSpan={2}
          colSpan={1}
        >
          <Box>
            <Image src={project.imgURL} alt="project" borderTopRadius="lg" />
          </Box>
          <Box ml="4">
            <Heading color="brand.text">{project.name}</Heading>
          </Box>
          <Flex ml="4" flexDirection="row">
            {project.stack.map((stack) => (
              <Text
                backgroundColor="cornflowerblue"
                borderRadius="md"
                key={stack}
                mr="1"
              >
                {stack}
              </Text>
            ))}
          </Flex>
          <Box ml="4" my="2">
            <Text fontWeight="semibold">{project.description}</Text>
          </Box>
        </GridItem>
      );
    });
  };

  return (
    <Grid
      templateColumns="repeat(2,1fr)"
      templateRows="repeat(4,1fr)"
      mx="16"
      mt="16"
    >
      <GridItem mx="6" rowSpan={1} colSpan={1}>
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
  );
};

export default ProjectsArea;
