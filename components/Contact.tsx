import {
  Box,
  Button,
  Heading,
  Text,
  Image,
  Input,
  Textarea,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import React from 'react';

const Contact = () => {
  return (
    <Box align="center" mt={[12, 24, 40]} mb={[18, 36, 60]}>
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
      <Text mt={2} fontSize="lg">
        You can contact me using form below
      </Text>
      <Box maxW={[400, 500]} mt={2}>
        <Formik
          initialValues={{ email: '', imie: '', wiadomosc: '' }}
          // validate={(values) => {
          //   const errors = { email: '' };
          //   if (!values.email) {
          //     errors.email = 'Pole nie moze byc puste';
          //   } else if (
          //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          //   ) {
          //     errors.email = 'Zły format adresu email';
          //   }
          //   throw errors;
          // }}
          onSubmit={async (values, { resetForm }) => {
            console.log(values);
            try {
              resetForm({});
            } catch {}
          }}
        >
          {({
            values,
            handleChange,
            handleSubmit,
            isSubmitting,
            errors,
            touched,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Input
                placeholder="Name"
                my="4"
                name="imie"
                onChange={handleChange}
                value={values.imie}
              />
              <Input
                placeholder="E-mail"
                my="4"
                name="email"
                onChange={handleChange}
                value={values.email}
              />
              <Text color="red.500" fontSize="small">
                {errors.email && touched.email && errors.email}
              </Text>
              <Textarea
                placeholder="Message"
                my="4"
                name="wiadomosc"
                resize="none"
                height={192}
                onChange={handleChange}
                value={values.wiadomosc}
              />
              <Box d="flex">
                <Button
                  color="brand.text"
                  backgroundColor="rgba(255,255,255,0.1)"
                  _hover={{ bg: 'rgba(255,255,255,0.2)' }}
                  mx="auto"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Send
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default Contact;
