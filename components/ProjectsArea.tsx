import { Grid, GridItem, Link } from '@chakra-ui/layout';
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
      position="static"
    >
      <GridItem rowSpan={1} colSpan={1} d="flex" flexDirection="column">
        <Heading fontSize={['4xl', '6xl', '7xl']} mx={['auto', 0]}>
          My Projects
        </Heading>
        <Text mt={2} fontSize={['xl', '2xl']}>
          Here is some featured projects i{"'ve"} been working on past months.
          The rest of my works you can find on my{' '}
          <Link
            href="https://github.com/NVTIVZ"
            target="_blank"
            color="brand.text"
          >
            GitHub
          </Link>
        </Text>
      </GridItem>
      {renderProjects()}
    </Grid>
  );
};

export default ProjectsArea;
