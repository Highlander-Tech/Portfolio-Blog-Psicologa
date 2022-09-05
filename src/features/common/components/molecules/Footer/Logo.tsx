import { Box, Image, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

export function Logo() {
  return (
    <Box as="div" position="absolute" bottom="40px" right="20px" w="155px">
      <Link
        as={NextLink}
        href="https://www.highlandertech.com.br/"
        target="_blank"
        passHref
      >
        <Box as="a">
          <Text textAlign="right" fontSize="18px" color="brown">
            Desenvolvido por
          </Text>
          <Image src="highlanderTechLogo.png" h="30px" alt="logo" />
        </Box>
      </Link>
    </Box>
  );
}
