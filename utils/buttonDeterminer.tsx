const buttonDeterminer = (tech: string) => {
  switch (tech) {
    case 'React':
      return 'blue.600';
    case 'Redux':
      return 'purple.400';
    case 'Styled-Components':
      return 'yellow.500';
    case 'Firebase':
      return 'orange.700';
    case 'TypeScript':
      return 'blue.400';
    default:
      return null;
  }
};

export default buttonDeterminer;
