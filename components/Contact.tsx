import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  Link,
  Text,
  Textarea,
} from '@chakra-ui/react';
import React from 'react';

const Contact = () => {
  // const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  // const userId = process.env.NEXT_PUBLIC_USER_ID;

  // const [message, setMessage] = useState('');
  // const sendEmail = (e: any) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_vwogkyk', templateId!, e.target, userId).then(
  //     (result) => {
  //       setMessage('Message sent');
  //       e.target.reset();
  //     },
  //     (error) => {
  //       setMessage(error.text);
  //     }
  //   );
  // };

  return (
    <Box align="center" mt={[12, 24, 40]} mb={[24, 36, 72]} id="contact">
      <Heading fontSize="5xl"> Keep In Touch.</Heading>
      <Text fontSize="lg" mt="4">
        I am currently open to work as a intern or junior{' '}
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
            width="125px"
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
        <Link href="https://www.linkedin.com/in/jzawadzkidev/" target="_blank">
          <Button
            backgroundColor="rgba(255,255,255,0.1)"
            _hover={{ bg: 'rgba(255,255,255,0.2)' }}
            d="flex"
            alignItems="center"
            mr="4"
            position="static"
            mb={1}
            width="125px"
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
            width="125px"
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
        <Link
          href="https://drive.google.com/file/d/1bRrVbI0VVU9uECWTRHCXA_EZWdMPGfwd/view?usp=sharing"
          target="_blank"
        >
          <Button
            backgroundColor="rgba(255,255,255,0.1)"
            _hover={{ bg: 'rgba(255,255,255,0.2)' }}
            d="flex"
            mr="4"
            alignItems="center"
            position="static"
            width="125px"
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
        <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <Input placeholder="Name" my="4" name="name" type="text" />
          <Input placeholder="E-mail" my="4" name="email" type="email" />

          <Textarea
            placeholder="Message"
            my="4"
            name="message"
            resize="none"
            height={192}
          />
          <Box d="flex" mt={1}>
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
