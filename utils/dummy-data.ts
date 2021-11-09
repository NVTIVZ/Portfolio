const projects = [
  {
    name: 'Pokedex',
    description:
      'Simple Pokedex made by using React, Redux, Styled-Components,Axios',
    imgURL: '/images/pokedex.png',
    stack: ['React', 'Redux', 'Styled-Components'],
    isFeatured: true,
  },
  {
    name: 'Twitter clone',
    description:
      'Twitter clone created with purpose to get better understanding at styling and firebase',
    imgURL: '/images/pokedex.png',
    stack: ['TypeScript', 'React', 'Redux', 'Styled-Components', 'Firebase'],
    isFeatured: true,
  },
  {
    name: 'Mediation Templemate',
    description:
      'Simple Pokedex made by using React, Redux, Styled-Components,Axios',
    imgURL: '/images/pokedex.png',
    stack: [
      'TypeScript',
      'NextJS',
      'ChakraUI',
      'NodeJS',
      'ExpressJS',
      'MongoDB',
    ],
    isFeatured: false,
  },
  {
    name: 'Genshin-Characters',
    description:
      'Simple Pokedex made by using React, Redux, Styled-Components,Axios',
    imgURL: '/images/pokedex.png',
    stack: ['TypeScript', 'NextJS', 'React-query', 'ChakraUI'],
    isFeatured: true,
  },
];

export const allProjects = () => {
  return projects;
};