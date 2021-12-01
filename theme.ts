// eslint-disable-next-line import/no-anonymous-default-export
import { extendTheme } from '@chakra-ui/react';

const Theme = extendTheme({
  colors: {
    brand: {
      primary: '#393E46',
      secondary: '#393E46',
      third: '#393E46',
      text: '#FFD369',
      baseText: '#EEEEEE',
    },
  },
  styles: {
    global: {
      body: {
        padding: '0',
        margin: '0',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
        bg: '#222831',

        color: '#EEEEEE',
      },
      html: {
        scrollBehavior: 'smooth',
        boxSizing: 'border-box',
      },
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
    },
  },
});

export default Theme;
