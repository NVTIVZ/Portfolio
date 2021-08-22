import { Box } from '@chakra-ui/layout';

const Footer = () => {
  return (
    <Box
      as="footer"
      backgroundColor="brand.primary"
      d="flex"
      justifyContent="center"
      py="6"
      bottom="0"
      position="absolute"
      width="100%"
      color="brand.baseText"
      fontWeight="semibold"
    >
      Created by NVTIVZ 2021
    </Box>
  );
};

export default Footer;
