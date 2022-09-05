import { Box, Container, Flex, Heading } from '@chakra-ui/react';

import { Card, RedirectButton } from '../atoms';

export function Posts() {
  return (
    <Box
      as="section"
      w="full"
      borderY="2px"
      borderColor="brown"
      position="relative"
    >
      <Container as="article" w={11 / 12} maxW="1160px" py="32px" zIndex={50}>
        <Box w="270px" ml={[0, '20%']} borderBottom="2px" borderColor="brown">
          <Heading as="h2" fontSize="3xl" fontWeight="bold" color="brown">
            Últimas postagens
          </Heading>
        </Box>
        <Flex my="32px" gap="32px" flexWrap="wrap" justifyContent="center">
          <Card
            banner="/mock.png"
            id="1"
            updateAt="15/07/2021"
            title="Se sente cansado o dia todo?"
            content="Sentir-se esgotada é diferente de estar cansada um dia ou outro, é aquele sentimento de exaustão frequente onde você só gostaria de poder..."
          />
          <Card
            banner="/mock.png"
            id="2"
            updateAt="15/07/2021"
            title="Se sente cansado o dia todo?"
            content="Sentir-se esgotada é diferente de estar cansada um dia ou outro, é aquele sentimento de exaustão frequente onde você só gostaria de poder..."
          />
          <Card
            banner="/mock.png"
            id="3"
            updateAt="15/07/2021"
            title="Se sente cansado o dia todo?"
            content="Sentir-se esgotada é diferente de estar cansada um dia ou outro, é aquele sentimento de exaustão frequente onde você só gostaria de poder..."
          />
        </Flex>
        <Flex align="center" direction="column">
          <RedirectButton href="/blog" />
        </Flex>
      </Container>
    </Box>
  );
}
