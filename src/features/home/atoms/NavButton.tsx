import type { MouseEvent } from 'react';
import { useCallback } from 'react';
import { Box, Button, ButtonProps } from '@chakra-ui/react';

function NavButton({ border, borderColor, ...rest }: ButtonProps) {
  const handleClick = useCallback(
    (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
      event.preventDefault();
      window.scrollTo({ top: 99999, behavior: 'smooth' });
    },
    [],
  );

  return (
    <Button
      w="184px"
      h="184px"
      borderRadius="50%"
      bgColor="beige.200"
      fontFamily="Cormorant Garamond"
      fontSize="3xl"
      fontWeight="bold"
      color="brown"
      transform="rotate(-10deg)"
      position="relative"
      {...rest}
      onClick={(event) => handleClick(event)}
    >
      <Box
        as="button"
        h="184px"
        w="184px"
        position="absolute"
        border={border}
        borderColor={borderColor}
        borderRadius="50%"
        left="8px"
        top="8px"
        filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
      />
      Agende
    </Button>
  );
}

export { NavButton };
export type { ButtonProps as NavButtonProps };
