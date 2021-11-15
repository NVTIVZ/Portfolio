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
    isFeatured: false,
  },
  {
    name: 'Genshin-Characters',
    description:
      'Site built with purpose of using react-query to fetch data from api and see how it compares to the pokedex i have created before',
    imgURL: '/images/pokedex.png',
    stack: ['TypeScript', 'NextJS', 'React-query', 'ChakraUI'],
    isFeatured: true,
  },
];

export const allProjects = () => {
  return projects;
};
