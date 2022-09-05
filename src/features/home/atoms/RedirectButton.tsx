import { Box, Button, ButtonProps } from '@chakra-ui/react';
import NextLink from 'next/link';

type Props = {
  href: string;
} & ButtonProps;

function RedirectButton({ href, ...rest }: Props) {
  return (
    <NextLink href={href} passHref>
      <Button
        as="a"
        w="184px"
        h="184px"
        rounded="full"
        bgColor="beige.200"
        fontFamily="Cormorant Garamond"
        fontSize="3xl"
        fontWeight="bold"
        color="brown"
        transform="rotate(-10deg)"
        position="relative"
        {...rest}
      >
        <Box
          h="184px"
          w="184px"
          position="absolute"
          border="1px"
          borderColor="brown"
          rounded="full"
          left="8px"
          top="8px"
          filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
        />
        Acesse
      </Button>
    </NextLink>
  );
}

export { RedirectButton };
export type { Props as RedirectButtonProps };
