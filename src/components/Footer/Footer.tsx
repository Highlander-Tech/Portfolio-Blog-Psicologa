import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Box, Flex, Image, Link as ChakraLink, Stack, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

import { theme } from '../../styles'

import { Form, Link, Photo, Title } from './'

const brown = theme.colors.brown[700]
const beige = theme.colors.beige[200]

export function Footer() {
  const contato = {
    instagram: 'https://www.instagram.com',
    facebook: 'http://www.facebook.com',
    celular: '51991419753',
    email: 'giovani.franz@gmail.com',
  }

  return (
    <Box as="footer" w="full" borderTop={`1px solid ${brown}`} position="relative">
      <Flex w="70%" mx="auto" pt="10">
        <Photo />
        <Form />
        <Stack w="220px" borderLeft={`2px solid ${beige}`} pl="20px" direction="column" spacing="20px">
          <Title text="Redes Sociais" />
          <Stack direction="row" spacing={3}>
            <Link icon={FaInstagram} href={contato.instagram} />
            <Link icon={FaFacebook} href={contato.facebook} />
          </Stack>
          <Text color="beige.200" fontFamily="Cormorant Garamond" fontSize="3xl" fontWeight="bold">
            {'&'}
          </Text>
          <Title text="Whatsapp" />
          <Link icon={FaWhatsapp} href={`https://api.whatsapp.com/send?phone=55${contato.celular}`} />
        </Stack>
      </Flex>
      <Box as="div" position="absolute" bottom={0} right={20} w="155px">
        <NextLink href="https://www.highlandertech.com.br/" passHref>
          <ChakraLink as={'a'} target="_blank" _hover={{ textDecoration: 'none' }}>
            <Text textAlign="right" fontSize="18px" color="brown.700">
              Desenvolvido por
              <Image src="highlanderTechLogo.png" h="30px" />
            </Text>
          </ChakraLink>
        </NextLink>
      </Box>
    </Box>
  )
}
