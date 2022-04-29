import { Heading, HeadingProps } from '@chakra-ui/react'

interface Props extends HeadingProps {
  text: string
}

export function Title({ text, ...rest }: Props) {
  return (
    <Heading
      as="h2"
      fontFamily="Cormorant Garamond"
      fontSize="3xl"
      fontWeight="bold"
      color="brown.700"
      {...rest}
    >
      {text}
    </Heading>
  )
}
