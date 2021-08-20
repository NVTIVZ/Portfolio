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
        >
          <Image src="/images/react-original.svg" alt="react" width={4} />
          React
        </Box>
      );
    default:
      return null;
  }
};

export default buttonDeterminer;
