import { Box, Container, Flex, Heading, VStack } from '@chakra-ui/react';

import { Help } from '../atoms';

export function HelpYou() {
  return (
    <Box as="section" w="full">
      <Container w={11 / 12} maxW="1164px" py="40px">
        <Heading as="h2" fontSize="3xl" fontWeight="bold" color="brown">
          Como eu posso ajudar?
        </Heading>
        <Flex
          mt="32px"
          justifyContent="space-evenly"
          direction={['column', 'row']}
        >
          <VStack spacing="32px">
            <Help
              number={1}
              title="Identificar"
              description="Identificar os motivos do problema, a essência do que está acontecendo."
            />
            <Help
              number={2}
              title="Entender os Outros"
              description="Descobrir como lidar com os fatores externos, e como responder adequadamente."
            />
            <Help
              number={3}
              title="Entender a Si Mesmo"
              description="Descobrir como lidar com seus problemas e tomar a decisão certa."
            />
          </VStack>
          <Box mt={['32px', '64px']}>
            <VStack spacing="32px">
              <Help
                number={4}
                title="Ser Feliz"
                description="Descobrir o que esta faltando para a felicidade, e como começar."
              />
              <Help
                number={5}
                title="Terapia"
                description="Reescrever sua configuração, trabalhando seus medos e traumas."
              />
              <Help
                number={6}
                title="Falar"
                description="Abrir-se para um profissional que irá escutar o que você diz sem medo de julgamentos."
              />
            </VStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
