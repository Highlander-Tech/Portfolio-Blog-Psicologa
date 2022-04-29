import { Box, Flex, Image, Link as ChakraLink, Text, useBreakpointValue } from '@chakra-ui/react'
import NextLink from 'next/link'

import { theme } from '../../styles'

import { Form, Photo, SocialMedia } from './'

const brown = theme.colors.brown[700]

export function Footer() {
  const isWideVersion = useBreakpointValue({
    lg: false,
    xl: true,
  })

  const contato = {
    instagram: 'https://www.instagram.com',
    facebook: 'http://www.facebook.com',
    whatsapp: '51991419753',
    email: 'giovani.franz@gmail.com',
  }

  return (
    <Box as="footer" w="100%" borderTop={`1px solid ${brown}`} position="relative" py="40px">
      <Flex w={['95%', '70%']} mx="auto" pt="10" flexDir={['column-reverse', 'row']}>
        {isWideVersion && <Photo />}
        <Form />
        <SocialMedia {...contato} />
      </Flex>
      {isWideVersion && (
        <Box as="div" position="absolute" bottom="40px" right="20px" w="155px">
          <NextLink href="https://www.highlandertech.com.br/" passHref>
            <ChakraLink as={'a'} target="_blank" _hover={{ textDecoration: 'none' }}>
              <Text textAlign="right" fontSize="18px" color="brown.700">
                Desenvolvido por
                <Image src="highlanderTechLogo.png" h="30px" />
              </Text>
            </ChakraLink>
          </NextLink>
        </Box>
      )}
    </Box>
  )
}
