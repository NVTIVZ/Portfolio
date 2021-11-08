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
    name: 'Twitterro',
    description:
      'Twitter clone created with purpose to get better understanding at styling and firebase',
    imgURL: '/images/pokedex.png',
    stack: ['React', 'Redux', 'Styled-Components', 'Firebase', 'TypeScript'],
    isFeatured: true,
  },
  {
    name: 'Siemanko',
    description:
      'Simple Pokedex made by using React, Redux, Styled-Components,Axios',
    imgURL: '/images/pokedex.png',
    stack: ['React', 'Redux', 'Styled-Components'],
    isFeatured: false,
  },
  {
    name: 'Pokedex3',
    description:
      'Simple Pokedex made by using React, Redux, Styled-Components,Axios',
    imgURL: '/images/pokedex.png',
    stack: ['React', 'Redux', 'Styled-Components'],
    isFeatured: true,
  },
];

export const allProjects = () => {
  return projects;
};

export const featuredProjects = () => {
  return projects.filter((name) => name.isFeatured);
};
