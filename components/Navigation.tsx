import { Flex, Box, Spacer } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Slide } from '@chakra-ui/transition';
import Link from 'next/link';

const Navigation = () => {
  return (
    <Slide
      direction="top"
      in={true}
      transition={{ enter: { duration: 0.7, delay: 0.01 } }}
    >
      <Flex
        as="nav"
        py="4"
        px={[0, 32]}
        backgroundColor="brand.primary"
        align="center"
      >
        <Box></Box>
        <Spacer />
        <Box>
          <Link href="/" passHref>
            <Button
              mr="6"
              backgroundColor="transparent"
              color="brand.baseText"
              _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}
            >
              Home
            </Button>
          </Link>

          <Link href="/projects" passHref>
            <Button
              mr="6"
              backgroundColor="transparent"
              color="brand.baseText"
              _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}
            >
              Projects
            </Button>
          </Link>

          <Link href="/contact" passHref>
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
    </Slide>
  );
};

export default Navigation;
