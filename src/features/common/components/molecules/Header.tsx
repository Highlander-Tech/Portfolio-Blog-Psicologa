import { Box, HStack, Link } from '@chakra-ui/react';

export function Header() {
  return (
    <Box as="header" w="full" borderBottom="1px" borderColor="brown">
      <Box w="70%" mx="auto" p="25">
        <HStack
          as="nav"
          spacing={35}
          textTransform="uppercase"
          fontFamily="Cormorant Garamond"
          fontSize="2xl"
          color="brown"
        >
          <Link href="/">Início</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contato">Contato</Link>
        </HStack>
      </Box>
    </Box>
  );
}
