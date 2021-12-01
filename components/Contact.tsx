import {
  Box,
  Button,
  Heading,
  Text,
  Image,
  Input,
  Textarea,
  Link,
} from '@chakra-ui/react';
import React from 'react';
import emailjs from 'emailjs-com';
import apiKeys from '../utils/apiKeys';

const Contact = () => {
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_vwogkyk',
        apiKeys.TEMPLATE_ID,
        e.target,
        apiKeys.USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Box align="center" mt={[12, 24, 40]} mb={[24, 36, 72]} id="contact">
      <Heading fontSize="5xl"> Keep In Touch.</Heading>
      <Text fontSize="lg" mt="4">
        I am currently open to work as a{' '}
        <Box as="span" color="brand.text">
          Front-end Developer.
        </Box>
      </Text>
      <Box d="flex" justifyContent="center" mt="4" flexWrap="wrap">
        <Link href="https://github.com/NVTIVZ" target="_blank">
          <Button
            backgroundColor="rgba(255,255,255,0.1)"
            _hover={{ bg: 'rgba(255,255,255,0.2)' }}
            d="flex"
            alignItems="center"
            mr="4"
            position="static"
            mb={1}
          >
            <Image
              src="/images/github-original.svg"
              alt="github"
              width={5}
              mr="2"
            />
            Github
          </Button>
        </Link>
        <Link
          href="https://www.linkedin.com/in/jakub-zawadzki-27b511227/"
          target="_blank"
        >
          <Button
            backgroundColor="rgba(255,255,255,0.1)"
            _hover={{ bg: 'rgba(255,255,255,0.2)' }}
            d="flex"
            alignItems="center"
            mr="4"
            position="static"
            mb={1}
          >
            <Image
              src="/images/linkedin-original.svg"
              alt="linkedin"
              width={5}
              mr="2"
            />
            LinkedIn
          </Button>
        </Link>
        <Link href="mailto:j.zawadzkidev@gmail.com" target="_blank">
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
        </Link>
        <Link href="https://github.com/NVTIVZ" target="_blank">
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
              alt="resume"
              width={5}
              mr="2"
              mt="0.5"
            />
            Resume
          </Button>
        </Link>
      </Box>
      <Text mt={2} fontSize="lg">
        You can contact me using form below
      </Text>
      <Box maxW={[400, 500]} mt={2}>
        <form onSubmit={sendEmail}>
          <Input placeholder="Name" my="4" name="name" />
          <Input placeholder="E-mail" my="4" name="email" />

          <Textarea
            placeholder="Message"
            my="4"
            name="message"
            resize="none"
            height={192}
          />
          <Box d="flex">
            <Button
              color="brand.text"
              backgroundColor="rgba(255,255,255,0.1)"
              _hover={{ bg: 'rgba(255,255,255,0.2)' }}
              mx="auto"
              type="submit"
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Contact;
