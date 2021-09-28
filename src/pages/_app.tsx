import Head from 'next/head'
import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import Layout from '../components/Layout'

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Layout>
        <Head>
          <title>Monique Batista</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
export default App
