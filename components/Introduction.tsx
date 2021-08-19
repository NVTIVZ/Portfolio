import {
  Box,
  Heading,
  Stack,
  Text,
  Image,
  Flex,
  Grid,
  Button,
} from '@chakra-ui/react';
import React from 'react';

const Introduction = () => {
  return (
    <>
      <Box mt={[8, 16, 48]}>
        <Heading fontSize="5xl" mb="-6" fontWeight="bold">
          Hello, my name is
        </Heading>
        <Text fontSize="9xl" color="brand.text" fontWeight="bold">
          Andrzej Glowica
        </Text>
        <Text fontSize="4xl" mt="-3" fontWeight="semibold">
          Lorem ipsum dolor sit, amet consectetur
        </Text>
        <Box d="flex" mt="2" zIndex="1">
          <Button
            backgroundColor="rgba(255,255,255,0.1)"
            _hover={{ bg: 'rgba(255,255,255,0.2)' }}
            d="flex"
            alignItems="center"
            mr="4"
            position="static"
          >
            <Image
              src="/images/github-original.svg"
              alt="github"
              width={5}
              mr="2"
            />
            Github
          </Button>
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
            <Image
              src="/images/mail.svg"
              alt="mail"
              width={5}
              mr="2"
              mt="0.5"
            />
            Email
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Introduction;
