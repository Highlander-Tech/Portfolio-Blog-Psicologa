import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from 'features/common/components/template/Layout';
import type { AppProps } from 'next/app';

import { theme } from '../styles';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
export default App;
