const projects = [
  {
    name: 'Pokedex',
    description:
      'My first own project built using a PokeAPI from which i was fetching data using axios into Redux.Purpose of this project was to get better at basics of React and Redux   ',
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
    stack: ['React', 'Redux', 'Styled-Components', 'Firebase'],
    github: 'https://github.com/NVTIVZ/Twitter-Typescript',
    live: 'https://cranky-elion-5a21ac.netlify.app',
  },
  {
    name: 'Mediation Time',
    description:
      'Website built as a template for mediation company, it used strappi as backend for content but it got changed to express with mongoDB ',
    imgURL: '/images/mediation.png',
    stack: ['NextJS', 'ChakraUI', 'NodeJS', 'ExpressJS', 'MongoDB'],
    github: 'https://github.com/NVTIVZ/Mediation-time',
    live: 'https://stupefied-franklin-a0d861.netlify.app',
  },
  {
    name: 'TFT Builder',
    description:
      "Project I am currently working on, it is team builder for the game Teamfight Tactics. It will have interactive board where you'll be able to drag and drop units  ",
    imgURL: '/images/tft.png',
    stack: ['React', 'Styled-Components', 'DND-Kit'],
    github: 'https://github.com/NVTIVZ/TFT-Builder',
    live: false,
  },
];

export const allProjects = () => {
  return projects;
};
