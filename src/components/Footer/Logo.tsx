import { Box, Image, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

export function Logo() {
  return (
    <Box as="div" position="absolute" bottom="40px" right="20px" w="155px">
      <NextLink href="https://www.highlandertech.com.br/" passHref>
        <Link as="a" target="_blank" _hover={{ textDecoration: 'none' }}>
          <Text textAlign="right" fontSize="18px" color="brown.700">
            Desenvolvido por
            <Image src="highlanderTechLogo.png" h="30px" />
          </Text>
        </Link>
      </NextLink>
    </Box>
  )
}
