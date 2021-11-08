import { Grid } from '@chakra-ui/layout';
import { NextPage } from 'next';
import ProjectCard from '../../components/ProjectCard';
import { allProjects } from '../../utils/dummy-data';

const ProjectsPage: NextPage = () => {
  const projects = allProjects();
  return (
    <Grid
      templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)' }}
      templateRows={{ base: 'repeat(4,1fr)', md: 'repeat(4,1fr)' }}
      mt={[8, 16, 24]}
      mb={32}
    >
      {projects.map((project) => {
        return (
          <ProjectCard
            name={project.name}
            imgURL={project.imgURL}
            stack={project.stack}
            description={project.description}
            key={project.name}
          />
        );
      })}
    </Grid>
  );
};

export default ProjectsPage;
