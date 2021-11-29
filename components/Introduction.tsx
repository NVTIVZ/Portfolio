import { Box, Heading, Text, Image, Button, Fade } from '@chakra-ui/react';
import React from 'react';

const Introduction = () => {
  return (
    <Fade in={true} transition={{ enter: { duration: 0.3, delay: 0.1 } }}>
      <Box
        pt={[24, 32, 64]}
        mb={[8, 12, 48]}
        id="home"
        d="flex"
        flexDirection={{ base: 'column', xl: 'row' }}
        justifyContent="center"
        alignItems="center"
      >
        <Box pr={8}>
          <Text
            fontSize={['3xl', '5xl', '6xl', '6xl']}
            color="brand.text"
            fontWeight="bold"
          >
            Jakub Zawadzki
          </Text>
        </Box>
        <Box
          width="463px"
          pl={8}
          borderLeft={{ base: 'none', xl: '4px' }}
          borderColor={{ base: 'none', xl: 'brand.third' }}
        >
          <Text fontWeight="semibold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
            recusandae, reiciendis praesentium corporis ab quis laudantium
            molestiae aperiam itaque dignissimos, rerum quasi, sit quas expedita
            quibusdam repellat illo tempora! Ea?
          </Text>
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
