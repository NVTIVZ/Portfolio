import { Box, Grid, Flex, GridItem } from '@chakra-ui/layout';
import { Heading, Text, Image, Fade } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import buttonDeterminer from '../utils/buttonDeterminer';
import { allProjects } from '../utils/dummy-data';
import ProjectCard from './ProjectCard';
const ProjectsArea = () => {
  const projects = allProjects();

  const renderProjects = () => {
    return projects.map((project) => {
      return (
        <ProjectCard
          name={project.name}
          imgURL={project.imgURL}
          stack={project.stack}
          description={project.description}
          key={project.name}
        />
      );
    });
  };

  return (
    <Fade in={true} transition={{ enter: { duration: 1, delay: 1 } }}>
      <Grid
        templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)' }}
        templateRows={{ base: 'repeat(5,1fr)', md: 'repeat(5,1fr)' }}
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
