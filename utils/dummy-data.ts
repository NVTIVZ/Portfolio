const projects = [
  {
    name: 'Pokedex',
    description:
      'My first own project built using a PokeAPI from which i was fetching data using axios into Redux.Purpose of this project was to get better at basics of React and Redux   ',
    imgURL: '/images/pokedex.png',
    stack: ['React', 'Redux', 'Styled-Components'],
    github: 'https://github.com/NVTIVZ/Pokedexv2',
    live: 'https://nvtivz-pokedex.netlify.app',
  },
  {
    name: 'Twitter clone',
    description:
      'Twitter clone created with purpose to get better understanding at styling using styled-components and firebase',
    imgURL: '/images/twitter.jpeg',
    stack: ['React', 'Redux', 'Styled-Components', 'Firebase'],
    github: 'https://github.com/NVTIVZ/Twitter-Typescript',
    live: 'https://nvtivz-twitter-clone.netlify.app/',
  },
  {
    name: 'Mediation Time',
    description:
      'Website built as a template for mediation company, it used strappi as backend for content but it got changed to express with mongoDB ',
    imgURL: '/images/mediation.png',
    stack: ['NextJS', 'ChakraUI', 'NodeJS', 'ExpressJS', 'MongoDB'],
    github: 'https://github.com/NVTIVZ/Mediation-time',
    live: 'https://nvtivz-mediation.netlify.app/',
  },
  {
    name: 'vreddit',
    description:
      'Project I am currently working on, it is a reddit like website with users able to create posts and discuss with each other.',
    imgURL: '/images/vreddit.png',
    stack: ['NextJS', 'Styled-Components', 'Firebase'],
    github: 'https://github.com/NVTIVZ/vreddit',
    live: 'false',
  },
];

export const allProjects = () => {
  return projects;
};
