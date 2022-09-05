import { Box, Link, Text } from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';

export function Logo() {
  return (
    <Box w="160px">
      <Link
        as={NextLink}
        href="https://www.highlandertech.com.br/"
        target="_blank"
        rel="noreferrer"
        passHref
      >
        <Box as="a">
          <Text fontSize="md" color="brown">
            Desenvolvido por
          </Text>
          <Image
            src="/highlander.svg"
            width="157"
            height="28"
            alt="Logo HighlanderTech"
            priority={false}
            loading="lazy"
          />
        </Box>
      </Link>
    </Box>
  );
}
