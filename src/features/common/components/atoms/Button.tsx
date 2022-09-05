import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';

export function Button({ ...rest }: ButtonProps) {
  return <ChakraButton bgColor="beige.200" borderRadius="5px" {...rest} />;
}
