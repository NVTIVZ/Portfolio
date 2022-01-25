import { Box, Fade, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const Introduction = () => {
  return (
    <Fade in={true} transition={{ enter: { duration: 0.4, delay: 0.2 } }}>
      <Box
        pt={[16, 32, 64]}
        mb={[8, 12, 48]}
        id="home"
        d="flex"
        flexDirection={{ base: 'column', xl: 'row' }}
        justifyContent="center"
        alignItems="center"
      >
        <Box
          pr={{ base: '0', xl: '8' }}
          pb={{ base: '8', xl: '0' }}
          d="flex"
          flexDirection="column"
        >
          <Text
            fontSize={['4xl', '5xl', '6xl', '6xl']}
            color="brand.text"
            fontWeight="bold"
          >
            Jakub Zawadzki
          </Text>
          <Box d="flex">
            <Box ml="auto" alignItems="center" d="flex" mt={2}>
              <Image
                src="/images/map-pin.svg"
                alt="pin"
                width="28"
                height="28"
              />
            </Box>{' '}
            <Text
              mt={2}
              fontWeight="bold"
              color="whiteAlpha.600"
              fontSize="2xl"
              ml={1}
            >
              Wrocław,Poland
            </Text>
          </Box>
        </Box>
        <Box
          width={['300px', '463px']}
          pl={{ base: '0', xl: '8' }}
          pt={{ base: '8', xl: '0' }}
          borderLeft={{ base: 'none', xl: '4px' }}
          borderTop={{ base: '4px', xl: 'none' }}
          borderColor={{ base: 'brand.third', xl: 'brand.third' }}
        >
          <Text fontWeight="hairline" fontSize="xl">
            Hello, I{"'m"} a self-taught Frontend developer who took a liking in
            creating static and dynamic mobile-responsive websites.
          </Text>
          <Text fontWeight="hairline" mt={4} fontSize="xl">
            I make web apps using{' '}
            <Box as="span" color="blue.300">
              React
            </Box>{' '}
            /{' '}
            <Box as="span" color="gray.400">
              NextJS
            </Box>{' '}
            and CSS /{' '}
            <Box as="span" color="green.400">
              ChakraUI
            </Box>
          </Text>
        </Box>
      </Box>
    </Fade>
  );
};

export default Introduction;
