import { Grid, GridItem } from '@chakra-ui/layout';
import { Fade, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
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
          github={project.github}
          live={project.live}
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
        pt={[8, 16, 48]}
        id="projects"
      >
        <GridItem rowSpan={1} colSpan={1}>
          <Heading fontSize={['6xl', '8xl']}>My Projects.</Heading>
        </GridItem>
        {renderProjects()}
      </Grid>
    </Fade>
  );
};

export default ProjectsArea;
