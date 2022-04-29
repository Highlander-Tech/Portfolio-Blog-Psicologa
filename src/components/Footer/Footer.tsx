import { Box, Flex, useBreakpointValue } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

import { theme } from '../../styles'

import { Form, PhotoProps, SocialMedia } from './'

const Photo = dynamic<PhotoProps>(() => import('./Photo').then((module) => module.Photo))
const Logo = dynamic<EmptyObject>(() => import('./Logo').then((module) => module.Logo))

const contato = {
  instagram: 'https://www.instagram.com',
  facebook: 'http://www.facebook.com',
  whatsapp: '51991419753',
  email: 'giovani.franz@gmail.com',
}

const brown = theme.colors.brown[700]

export function Footer() {
  const isWideVersion = useBreakpointValue({
    lg: false,
    xl: true,
  })

  return (
    <Box as="footer" w="100%" borderTop={`1px solid ${brown}`} position="relative" py="40px">
      <Flex w={['95%', '70%']} mx="auto" pt="10" flexDir={['column-reverse', 'row']}>
        {isWideVersion && <Photo src="/footerImage.png" />}
        <Form />
        <SocialMedia {...contato} />
      </Flex>
      {isWideVersion && <Logo />}
    </Box>
  )
}
