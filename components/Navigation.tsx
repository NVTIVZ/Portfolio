import { Flex, Box, Spacer } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import Link from 'next/link';

const Navigation = () => {
  return (
    <Flex
      as="nav"
      py="4"
      px={[0, 8, 32]}
      backgroundColor="brand.primary"
      align="center"
      display={['none', 'flex']}
    >
      <Box></Box>
      <Spacer />
      <Box>
        <Link href="#projects" passHref>
          <Button
            mr="6"
            backgroundColor="transparent"
            color="brand.baseText"
            _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}
          >
            Projects
          </Button>
        </Link>

        <Link href="#contact" passHref>
          <Button
            mr="6"
            backgroundColor="transparent"
            color="brand.baseText"
            _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}
          >
            Contact
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default Navigation;
