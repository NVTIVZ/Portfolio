const projects = [
  {
    name: 'Pokedex',
    description:
      'Simple Pokedex made by using React, Redux, Styled-Components,Axios',
    imgURL: '/images/pokedex.png',
    stack: ['React', 'Redux', 'Styled-Components'],
    github: 'https://github.com/NVTIVZ/Pokedexv2',
    live: 'https://pedantic-carson-1f4d82.netlify.app/',
  },
  {
    name: 'Twitter clone',
    description:
      'Twitter clone created with purpose to get better understanding at styling and firebase',
    imgURL: '/images/pokedex.png',
    stack: ['TypeScript', 'React', 'Redux', 'Styled-Components', 'Firebase'],
    github: 'https://github.com/NVTIVZ/Twitter-Typescript',
    live: '',
  },
  {
    name: 'Mediation Time',
    description:
      'Website built as a template for mediation company, it used strappi as backend for content but it got changed to express with mongoDB ',
    imgURL: '/images/pokedex.png',
    stack: [
      'TypeScript',
      'NextJS',
      'ChakraUI',
      'NodeJS',
      'ExpressJS',
      'MongoDB',
    ],
    github: 'https://github.com/NVTIVZ/Pokedexv2',
    live: '',
  },
  {
    name: 'Genshin-Characters',
    description:
      'Site built with purpose of using react-query to fetch data from api and see how it compares to the pokedex i have created before',
    imgURL: '/images/pokedex.png',
    stack: ['TypeScript', 'NextJS', 'React-query', 'ChakraUI'],
    github: 'https://github.com/NVTIVZ/Pokedexv2',
    live: '',
  },
];

export const allProjects = () => {
  return projects;
};
