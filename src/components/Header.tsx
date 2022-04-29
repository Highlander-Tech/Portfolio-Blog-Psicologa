import { Box, Flex, Link } from '@chakra-ui/react'

export default function Header() {
  return (
    <Box w="full" h="70px" borderBottom="1px solid #474544">
      <Box w="1210px" mx="auto">
        <Flex
          justifyContent="space-between"
          w="445px"
          pt="30px"
          textTransform="uppercase"
          fontFamily="Cormorant Garamond"
          fontSize="24px"
          fontStyle="normal"
          fontWeight="normal"
          lineHeight="29px"
          color="#474544"
        >
          <Link href="/">Início</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contato">Contato</Link>
        </Flex>
      </Box>
    </Box>
  )
}
