import { Grid, GridItem } from '@chakra-ui/layout';
import { Fade, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { allProjects } from '../utils/dummy-data';
import ProjectCard from './ProjectCard';
const ProjectsArea = () => {
  const projects = allProjects();

  const renderProjects = () => {
    return projects.map((project, index) => {
      return (
        <ProjectCard
          name={project.name}
          imgURL={project.imgURL}
          stack={project.stack}
          description={project.description}
          github={project.github}
          live={project.live}
          key={project.name}
          index={index}
        />
      );
    });
  };

  return (
    <Grid
      templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)' }}
      templateRows={{ base: 'repeat(5,1fr)', md: 'repeat(5,1fr)' }}
      mt={[8, 16, 32]}
      id="projects"
    >
      <GridItem rowSpan={1} colSpan={1}>
        <Heading fontSize={['6xl', '8xl']}>My Projects.</Heading>
        <Text mt={2} fontSize={'2xl'}>
          Here is some projects i{"'ve"} been working on past months.
        </Text>
      </GridItem>
      {renderProjects()}
    </Grid>
  );
};

export default ProjectsArea;
