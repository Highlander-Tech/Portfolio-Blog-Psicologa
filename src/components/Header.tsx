import { Box, HStack, Link } from '@chakra-ui/react'

import { theme } from '../styles'

const brown = theme.colors.brown

export function Header() {
  return (
    <Box as="header" w="full" borderBottom={`1px solid ${brown}`}>
      <Box w="70%" mx="auto" p="25">
        <HStack
          as="nav"
          spacing={35}
          textTransform="uppercase"
          fontFamily="Cormorant Garamond"
          fontSize="2xl"
          color="brown.700"
        >
          <Link href="/">Início</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contato">Contato</Link>
        </HStack>
      </Box>
    </Box>
  )
}
