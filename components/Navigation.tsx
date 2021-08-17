import { Flex, Box, Spacer } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import Link from 'next/link';
const Navigation = () => {
  return (
    <Flex py="4" px="96" backgroundColor="blue.400" align="center">
      <Box></Box>
      <Spacer />
      <Box>
        <Button colorScheme="gray" mr="6">
          <Link href="/">Home</Link>
        </Button>
        <Button colorScheme="gray" mr="6">
          <Link href="/projects">Projects</Link>
        </Button>
        <Button colorScheme="gray">
          <Link href="/contact">Contact</Link>
        </Button>
      </Box>
    </Flex>
  );
};

export default Navigation;
