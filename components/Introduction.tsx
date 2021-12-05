import { Box, Heading, Text, Image, Button, Fade } from '@chakra-ui/react';
import React from 'react';

const Introduction = () => {
  return (
    <Fade in={true} transition={{ enter: { duration: 0.3, delay: 0.1 } }}>
      <Box
        pt={[16, 32, 64]}
        mb={[8, 12, 48]}
        id="home"
        d="flex"
        flexDirection={{ base: 'column', xl: 'row' }}
        justifyContent="center"
        alignItems="center"
      >
        <Box pr={{ base: '0', xl: '8' }} pb={{ base: '8', xl: '0' }}>
          <Text
            fontSize={['4xl', '5xl', '6xl', '6xl']}
            color="brand.text"
            fontWeight="bold"
          >
            Jakub Zawadzki
          </Text>
        </Box>
        <Box
          width={['300px', '463px']}
          pl={{ base: '0', xl: '8' }}
          pt={{ base: '8', xl: '0' }}
          borderLeft={{ base: 'none', xl: '4px' }}
          borderTop={{ base: '4px', xl: 'none' }}
          borderColor={{ base: 'brand.third', xl: 'brand.third' }}
        >
          <Text fontWeight="semibold">Hello, I{"'m"}</Text>
          <Text fontWeight="semibold" mt={4}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
            recusandae, reiciendis praesentium corporis ab quis laudantium
            molestiae aperiam itaque dignissimos, rerum quasi, sit quas expedita
            quibusdam repellat illo tempora! Ea?
          </Text>
        </Box>
      </Box>
    </Fade>
  );
};

export default Introduction;
