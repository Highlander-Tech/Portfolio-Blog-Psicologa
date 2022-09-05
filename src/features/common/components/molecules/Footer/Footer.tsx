import { Box, Container, useBreakpointValue } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

import { Form } from './Form';
import type { PhotoProps } from './Photo';
import { SocialMedia } from './SocialMedia';

const Photo = dynamic<PhotoProps>(() =>
  import('./Photo').then((module) => module.Photo),
);
const Logo = dynamic<EmptyObject>(() =>
  import('./Logo').then((module) => module.Logo),
);

const contato = {
  instagram: 'https://www.instagram.com',
  facebook: 'http://www.facebook.com',
  whatsapp: '51991419753',
  email: 'giovani.franz@gmail.com',
};

export function Footer() {
  const isWideVersion = useBreakpointValue({
    lg: false,
    xl: true,
  });

  return (
    <Box
      as="footer"
      w="full"
      position="relative"
      py="40px"
      zIndex={100}
      backgroundColor="beige.100"
    >
      <Container
        display="flex"
        flexDirection={['column-reverse', 'row']}
        alignItems="center"
        pt={10}
        w={11 / 12}
        maxW="1160px"
      >
        {isWideVersion && <Photo src="/footer/banner.png" />}
        <Form />
        <SocialMedia {...contato} />
      </Container>
      <Box position="absolute" right={5} height="80px">
        {isWideVersion && <Logo />}
      </Box>
    </Box>
  );
}
