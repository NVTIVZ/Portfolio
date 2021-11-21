import { Box, Heading, Text, Image, Button, Fade } from '@chakra-ui/react';
import React from 'react';

const Introduction = () => {
  return (
    <Fade in={true} transition={{ enter: { duration: 0.3, delay: 0.1 } }}>
      <Box pt={[24, 32, 48]} mb={[8, 12, 16]} id="home" d="flex">
        <Box>
          <Heading fontSize={['3xl', '5xl']} mb="-6" fontWeight="bold">
            Hello, my name is
          </Heading>
          <Text
            fontSize={['4xl', '6xl', '8xl']}
            color="brand.text"
            fontWeight="bold"
          >
            Jakub Zawadzki
          </Text>
          <Text fontSize={['2xl', '4xl']} mt="-3" fontWeight="semibold">
            Lorem ipsum dolor sit, amet consectetur
          </Text>
          <Box d="flex" mt="4" zIndex="1"></Box>
        </Box>
        <Image
          src="/images/photo.png"
          alt="photo"
          ml="auto"
          mr={24}
          height={450}
          boxShadow="60px -32px #FFD369"
        />
      </Box>
    </Fade>
  );
};

export default Introduction;
