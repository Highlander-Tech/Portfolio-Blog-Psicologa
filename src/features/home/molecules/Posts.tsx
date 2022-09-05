import { Box, Flex, Heading, useBreakpointValue } from '@chakra-ui/react';

import { Card, NavButton } from '../atoms';

export function Posts() {
  const borderConfig = useBreakpointValue({
    base: {
      borderLeft: 'none',
      borderColor: 'none',
      borderBottom: 'none',
    },
    lg: {
      borderLeft: '250px',
      borderColor: 'brown',
      borderBottom: '1500px transparent',
    },
    xl: {
      borderLeft: '510px',
      borderColor: 'brown',
      borderBottom: '1000px transparent',
    },
  });

  return (
    <Box
      as="section"
      w="full"
      borderY="2px"
      borderColor="brown"
      position="relative"
    >
      <Box h="100%" position="absolute" zIndex={0} {...borderConfig} />
      <Box as="article" mx="auto" w={['95%', '75%']} py="30px">
        <Box w="270px" ml={['0', '20%']} borderBottom="2px" borderColor="brown">
          <Heading as="h2" fontSize="3xl" fontWeight="bold" color="brown;">
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
          <NavButton href="/blog" border="1px" borderColor="brown">
            Acesse
          </NavButton>
        </Flex>
      </Box>
    </Box>
  );
}
