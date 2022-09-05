import type { ButtonProps } from '@chakra-ui/react';
import { Button as ChakraButton } from '@chakra-ui/react';

export function Button({ ...rest }: ButtonProps) {
  return <ChakraButton bgColor="beige.200" rounded="lg" {...rest} />;
}
