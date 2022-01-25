import { Grid, GridItem, Link } from '@chakra-ui/layout';
import { Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { projects } from '../utils/dummy-data';
import ProjectCard from './ProjectCard';

const ProjectsArea = () => {
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
      <ProjectCard
        name={projects[0].name}
        imgURL={projects[0].imgURL}
        stack={projects[0].stack}
        description={projects[0].description}
        github={projects[0].github}
        live={projects[0].live}
        key={projects[0].name}
        right={true}
      />
      <ProjectCard
        name={projects[1].name}
        imgURL={projects[1].imgURL}
        stack={projects[1].stack}
        description={projects[1].description}
        github={projects[1].github}
        live={projects[1].live}
        key={projects[1].name}
        right={false}
      />
      <ProjectCard
        name={projects[2].name}
        imgURL={projects[2].imgURL}
        stack={projects[2].stack}
        description={projects[2].description}
        github={projects[2].github}
        live={projects[2].live}
        key={projects[2].name}
        right={true}
      />
      <ProjectCard
        name={projects[3].name}
        imgURL={projects[3].imgURL}
        stack={projects[3].stack}
        description={projects[3].description}
        github={projects[3].github}
        live={projects[3].live}
        key={projects[3].name}
        right={false}
      />
    </Grid>
  );
};

export default ProjectsArea;
