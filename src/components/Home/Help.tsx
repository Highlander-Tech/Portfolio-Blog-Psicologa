import { Box, Flex, Text } from '@chakra-ui/react'

interface Props {
  number: number
  title: string
  description: string
}

function Help({ number, title, description }: Props) {
  return (
    <Flex>
      <Text
        fontFamily="Cormorant Garamond"
        fontSize="7xl"
        fontWeight="bold"
        color="beige.200"
        mr="20px"
        mt="-42px"
      >
        {number}
      </Text>
      <Box fontFamily="Roboto" color="brown.700" textAlign="left" w="300px">
        <Text fontSize="lg" mb="10px">
          {title}
        </Text>
        <Text fontSize="md">{description}</Text>
      </Box>
    </Flex>
  )
}

export { Help }
export type { Props as HelpProps }
