import { Box, Button } from '@chakra-ui/react'

interface Props {
  border: string
}

export function AgendeButton({ border }: Props) {
  return (
    <Button
      w="185px"
      h="185px"
      borderRadius="50%"
      bgColor="beige.200"
      fontFamily="Cormorant Garamond"
      fontSize="3xl"
      fontWeight="bold"
      color="brown.700"
      transform="rotate(-10deg)"
      position="relative"
    >
      <Box
        h="185px"
        w="185px"
        position="absolute"
        border={border}
        borderRadius="50%"
        ml="15px"
        mt="15px"
        filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
        onClick={() => window.scrollTo({ top: 99999, behavior: 'smooth' })}
      />
      Agende
    </Button>
  )
}
