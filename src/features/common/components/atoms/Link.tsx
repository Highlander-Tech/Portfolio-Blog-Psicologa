import type { ElementType } from 'react';
import type { LinkProps } from '@chakra-ui/react';
import { Icon, Link as ChakraLink } from '@chakra-ui/react';
import NextLink from 'next/link';

type Props = {
  icon: ElementType;
  href: string;
} & LinkProps;

function Link({ icon, href }: Props) {
  return (
    <NextLink href={href} passHref>
      <ChakraLink as="a" target="_blank" rel="noreferrer">
        <Icon
          as={icon}
          fontSize="36px"
          color="brown"
          _hover={{ color: 'beige.200' }}
        />
      </ChakraLink>
    </NextLink>
  );
}

export { Link };
export type { Props as LinkProps };
