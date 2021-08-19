// eslint-disable-next-line import/no-anonymous-default-export
import { extendTheme } from '@chakra-ui/react';

const Theme = extendTheme({
  colors: {
    brand: {
      primary: '#082032',
      secondary: '#2C394B',
      third: '#334756',
      text: '#FF4C29',
      baseText: '#EEEEEE',
    },
  },
});

export default Theme;
