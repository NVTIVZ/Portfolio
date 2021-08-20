import { Box, Button, Heading, Text, Image } from '@chakra-ui/react';
import React from 'react';

const Contact = () => {
  return (
    <Box align="center" my={[12, 24, 32]}>
      <Heading fontSize="5xl"> Keep In Touch.</Heading>
      <Text fontSize="lg" mt="1.5">
        {"I'm"} currently open to work as a{' '}
        <Box as="span" color="brand.text">
          Front-end Developer.
        </Box>
      </Text>
      <Box d="flex" justifyContent="center" mt="4">
        <Button
          backgroundColor="rgba(255,255,255,0.1)"
          _hover={{ bg: 'rgba(255,255,255,0.2)' }}
          d="flex"
          alignItems="center"
          mr="4"
          position="static"
        >
          <Image
            src="/images/linkedin-original.svg"
            alt="linkedin"
            width={5}
            mr="2"
          />
          LinkedIn
        </Button>
        <Button
          backgroundColor="rgba(255,255,255,0.1)"
          _hover={{ bg: 'rgba(255,255,255,0.2)' }}
          d="flex"
          mr="4"
          alignItems="center"
          position="static"
        >
          <Image src="/images/mail.svg" alt="mail" width={5} mr="2" mt="0.5" />
          Email
        </Button>
        <Button
          backgroundColor="rgba(255,255,255,0.1)"
          _hover={{ bg: 'rgba(255,255,255,0.2)' }}
          d="flex"
          mr="4"
          alignItems="center"
          position="static"
        >
          <Image
            src="/images/file-text.svg"
            alt="mail"
            width={5}
            mr="2"
            mt="0.5"
          />
          Resume
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
