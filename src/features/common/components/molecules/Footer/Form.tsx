import { Box, Input, Text, Textarea, VStack } from '@chakra-ui/react';

import { Button } from '../../atoms/Button';
import { Title } from '../../atoms/Title';

export function Form() {
  return (
    <Box
      w="100vw"
      maxW="464px"
      h="448px"
      borderColor="beige.200"
      borderTop={['2px', 'none']}
      borderRight={['none', '2px']}
    >
      <Box w={[11 / 12]} mx="auto" px={['auto', '32px']} pt={['20px', 'auto']}>
        <Title text="Contato" mb="16px" />
        <VStack spacing="8px" alignItems="left">
          <Text>Nome</Text>
          <Input bg="white" size="lg" placeholder="Nome" />
          <Text>Telefone</Text>
          <Input bg="white" size="lg" placeholder="(51) 9 9999-9999" />
          <Text>Mensagem</Text>
          <Textarea bg="white" h="96px" />
        </VStack>
        <Button
          mt="8px"
          float="right"
          w="160px"
          h="48px"
          color="white"
          textTransform="uppercase"
        >
          enviar
        </Button>
      </Box>
    </Box>
  );
}
