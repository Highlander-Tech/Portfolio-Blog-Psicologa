import { Heading, HeadingProps } from '@chakra-ui/react'

interface Props extends HeadingProps {
  text: string
}

export function Title({ text, ...rest }: Props) {
  return (
    <Heading
      as="h1"
      textAlign="center"
      fontFamily="Cookie"
      fontSize={['8xl', '9xl']}
      color="brown.700"
      fontStyle="normal"
      fontWeight="normal"
      {...rest}
    >
      {text}
    </Heading>
  )
}
