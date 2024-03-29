import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    beige: {
      100: '#F8F1F1',
      200: '#E9CBBB',
    },
    brown: '#474544',
  },
  fonts: {
    heading: 'Cormorant Garamond',
    body: 'Roboto, sans-serif',
    fontSize: 'lg',
  },
  styles: {
    global: {
      body: {
        overflowX: 'hidden',
        bgColor: 'beige.100',
        color: 'brown',
      },
    },
  },
});
