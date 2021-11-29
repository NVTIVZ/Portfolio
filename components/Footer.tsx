import { Box } from '@chakra-ui/layout';

const Footer = () => {
  return (
    <Box
      as="footer"
      backgroundColor="brand.primary"
      d="flex"
      justifyContent="center"
      py="6"
      width="100%"
      color="brand.baseText"
      fontWeight="semibold"
    >
      <Box
        position="absolute"
        right="10"
        fontSize="sm"
        bottom="45"
        onClick={() => window.scrollTo(0, 0)}
        cursor="pointer"
      >
        Scroll to Top
      </Box>
      Created by Jakub Zawadzki 2021
    </Box>
  );
};

export default Footer;
