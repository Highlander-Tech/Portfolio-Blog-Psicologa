import { Box, Flex, ListItem, Text, UnorderedList, useBreakpointValue, VStack } from '@chakra-ui/react'

import { AgendeButton, Photo, Title } from '../../components/Home'
import { theme } from '../../styles'

const brown = theme.colors.brown[700]

export function Presentation() {
  const isWideVersion = useBreakpointValue({
    lg: false,
    xl: true,
  })

  return (
    <Flex as="section" flexDirection={['column-reverse', 'row']} alignItems="center">
      <Photo />
      <Box as="article" mx={['auto', '30px']}>
        <Title text="Monique Batista" />
        <VStack spacing="18px" align="left">
          <UnorderedList fontSize="lg">
            <ListItem>Psicológa</ListItem>
            <ListItem>Psicanalista</ListItem>
            <ListItem>Avaliação Psicológica</ListItem>
          </UnorderedList>
          <Text fontSize="lg">CRP 07/29504</Text>
          {isWideVersion && <AgendeButton border={`1px solid ${brown}`} />}
        </VStack>
      </Box>
    </Flex>
  )
}