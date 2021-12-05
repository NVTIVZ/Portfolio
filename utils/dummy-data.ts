const projects = [
  {
    name: 'Pokedex',
    description: 'Made by using PokeAPI with Redux as a global state ',
    imgURL: '/images/pokedex.png',
    stack: ['React', 'Redux', 'Styled-Components'],
    github: 'https://github.com/NVTIVZ/Pokedexv2',
    live: 'https://pedantic-carson-1f4d82.netlify.app/',
  },
  {
    name: 'Twitter clone',
    description:
      'Twitter clone created with purpose to get better understanding at styling using styled-components and firebase',
    imgURL: '/images/twitter.jpeg',
    stack: ['TypeScript', 'React', 'Redux', 'Styled-Components', 'Firebase'],
    github: 'https://github.com/NVTIVZ/Twitter-Typescript',
    live: 'https://cranky-elion-5a21ac.netlify.app',
  },
  {
    name: 'Mediation Time',
    description:
      'Website built as a template for mediation company, it used strappi as backend for content but it got changed to express with mongoDB ',
    imgURL: '/images/mediation.png',
    stack: [
      'TypeScript',
      'NextJS',
      'ChakraUI',
      'NodeJS',
      'ExpressJS',
      'MongoDB',
    ],
    github: 'https://github.com/NVTIVZ/Mediation-time',
    live: 'https://stupefied-franklin-a0d861.netlify.app',
  },
  {
    name: 'Genshin-Characters',
    description:
      'Site built with purpose of using react-query to fetch data from api and see how it compares to the pokedex i have created before',
    imgURL: '/images/genshin.jpeg',
    stack: ['TypeScript', 'React', 'React-query', 'ChakraUI'],
    github: 'https://github.com/NVTIVZ/Genshin-Characters',
    live: '',
  },
];

export const allProjects = () => {
  return projects;
};
