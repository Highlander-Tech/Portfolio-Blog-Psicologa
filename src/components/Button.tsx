import { Button as ChakraButton } from '@chakra-ui/react'

export function Button({ ...rest }) {
  return <ChakraButton bgColor="beige.200" borderRadius="5px" {...rest} />
}
