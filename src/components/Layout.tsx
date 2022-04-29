import { ReactNode } from 'react'
import { Box, Flex } from '@chakra-ui/react'

import Footer from './Footer'
import Header from './Header'
interface Option {
  children: ReactNode
}

export default function Layout({ children }: Option) {
  const bgColor = '#F8F1F1'

  return (
    <Box bgColor={bgColor}>
      <Header />
      <Flex flexDirection="column">{children}</Flex>
      <Footer />
    </Box>
  )
}
