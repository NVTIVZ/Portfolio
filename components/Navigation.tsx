import { Flex, Box, Spacer } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import Link from 'next/link';
const Navigation = () => {
  return (
    <Flex py="4" px="32" backgroundColor="blue.400" align="center">
      <Box></Box>
      <Spacer />
      <Box>
        <Link href="/" passHref>
          <Button colorScheme="gray" mr="6">
            Home
          </Button>
        </Link>

        <Link href="/projects" passHref>
          <Button colorScheme="gray" mr="6">
            Projects
          </Button>
        </Link>

        <Link href="/contact" passHref>
          <Button colorScheme="gray">Contact</Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default Navigation;
