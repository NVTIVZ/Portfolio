import { Box, Heading, Text, Image, Button, Fade } from '@chakra-ui/react';
import React from 'react';

const Introduction = () => {
  return (
    <Fade in={true} transition={{ enter: { duration: 1, delay: 0.05 } }}>
      <Box mt={[24, 32, 48]} mb={[8, 16, 32]}>
        <Heading fontSize={['3xl', '5xl']} mb="-6" fontWeight="bold">
          Hello, my name is
        </Heading>
        <Text
          fontSize={['5xl', '7xl', '9xl']}
          color="brand.text"
          fontWeight="bold"
        >
          Andrzej Glowica
        </Text>
        <Text fontSize={['2xl', '4xl']} mt="-3" fontWeight="semibold">
          Lorem ipsum dolor sit, amet consectetur
        </Text>
        <Box d="flex" mt="4" zIndex="1"></Box>
      </Box>
    </Fade>
  );
};

export default Introduction;
