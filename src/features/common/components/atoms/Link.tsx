import type { ElementType } from 'react';
import { Icon, Link as ChakraLink, LinkProps } from '@chakra-ui/react';
import NextLink from 'next/link';

interface Props extends LinkProps {
  icon: ElementType;
  href: string;
}

function Link({ icon, href }: Props) {
  return (
    <NextLink href={href} passHref>
      <ChakraLink as="a" target="_blank">
        <Icon
          as={icon}
          fontSize="35px"
          color="brown"
          _hover={{ color: 'beige.200' }}
        />
      </ChakraLink>
    </NextLink>
  );
}

export { Link };
export type { Props as LinkProps };
