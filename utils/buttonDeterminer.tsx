import { Box } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
const buttonDeterminer = (tech: string) => {
  switch (tech) {
    case 'React':
      return (
        <Box
          d="flex"
          alignItems="center"
          py="1"
          px="2"
          backgroundColor="blue.600"
          borderRadius="md"
          mr="2"
          key="React"
        >
          <Image src="/images/react-original.svg" alt="react" width={4} />
          React
        </Box>
      );
    case 'Redux':
      return (
        <Box
          d="flex"
          alignItems="center"
          py="1"
          px="2"
          backgroundColor="purple.400"
          borderRadius="md"
          mr="2"
          key="Redux"
        >
          <Image src="/images/redux-original.svg" alt="redux" width={4} />
          Redux
        </Box>
      );
    case 'Styled-Components':
      return (
        <Box
          d="flex"
          alignItems="center"
          py="1"
          px="2"
          backgroundColor="yellow.500"
          borderRadius="md"
          mr="2"
          key="Styled-Components"
        >
          <Image
            src="/images/styled-components-original.svg"
            alt="redux"
            width={4}
          />
          Styled-Components
        </Box>
      );
    default:
      return null;
  }
};

export default buttonDeterminer;
