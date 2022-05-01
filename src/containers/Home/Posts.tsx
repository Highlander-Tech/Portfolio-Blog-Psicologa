import { Box, Flex, Heading, useBreakpointValue } from '@chakra-ui/react'

import { Card, NavButton } from '../../components/Home'
import { theme } from '../../styles'

const brown = theme.colors.brown[700]

export function Posts() {
  const borderConfig = useBreakpointValue({
    md: 'none',
    lg: {
      borderLeft: `250px solid ${brown}`,
      borderBottom: '1500px solid transparent',
    },
    xl: {
      borderLeft: `510px solid ${brown}`,
      borderBottom: '1000px solid transparent',
    },
  })

  return (
    <Box as="section" w="full" borderY={`2px solid ${brown}`} position="relative">
      <Box h="100%" position="absolute" zIndex={0} {...borderConfig} />
      <Box as="article" mx="auto" w={['95%', '75%']} py="30px">
        <Box w="270px" ml={['0', '20%']} borderBottom={`2px solid ${brown}`}>
          <Heading as="h2" fontSize="3xl" fontWeight="bold" color="brown.700;">
            Últimas postagens
          </Heading>
        </Box>
        <Flex my="20px" gap="30px" flexWrap="wrap" justifyContent="center">
          <Card
            banner="/mock.png"
            id="1"
            updateAt="15/07/2021"
            title="Se sente cansado o dia todo?"
            content="Sentir-se esgotada é diferente de estar cansada um dia ou outro, é aquele sentimento de exaustão frequente onde você só gostaria de poder..."
          />
          <Card
            banner="/mock.png"
            id="1"
            updateAt="15/07/2021"
            title="Se sente cansado o dia todo?"
            content="Sentir-se esgotada é diferente de estar cansada um dia ou outro, é aquele sentimento de exaustão frequente onde você só gostaria de poder..."
          />
          <Card
            banner="/mock.png"
            id="1"
            updateAt="15/07/2021"
            title="Se sente cansado o dia todo?"
            content="Sentir-se esgotada é diferente de estar cansada um dia ou outro, é aquele sentimento de exaustão frequente onde você só gostaria de poder..."
          />
        </Flex>
        <Flex align="center" direction="column">
          <NavButton href="/blog" border={`1px solid ${brown}`}>
            Acesse
          </NavButton>
        </Flex>
      </Box>
    </Box>
  )
}
