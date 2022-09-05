import type { PropsWithChildren } from 'react';
import { Box, Button, ButtonProps } from '@chakra-ui/react';
import { useRouter } from 'next/router';

type Props = PropsWithChildren<
  {
    border: string;
    href?: string;
  } & ButtonProps
>;

function NavButton({
  border,
  href,
  children,
  ...rest
}: PropsWithChildren<Props>) {
  const router = useRouter();

  function handleClick() {
    if (href) {
      router.push(href);
    } else {
      window.scrollTo({ top: 99999, behavior: 'smooth' });
    }
  }

  return (
    <Button
      w="185px"
      h="185px"
      borderRadius="50%"
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
        as="a"
        href={href}
        h="185px"
        w="185px"
        position="absolute"
        border={border}
        borderRadius="50%"
        ml="15px"
        mt="15px"
        filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
        onClick={() => handleClick}
      />
      {children}
    </Button>
  );
}

export { NavButton };
export type { Props as NavButtonProps };
