import { Box, Input, Text, Textarea, VStack } from '@chakra-ui/react';

import { Button } from '../../atoms/Button';
import { Title } from '../../atoms/Title';

export function Form() {
  return (
    <Box
      w={['100%', '465px']}
      h="450px"
      px={['auto', '40px']}
      pt={['20px', 'auto']}
      borderRight={['none', '2px']}
      borderColor="beige.200"
      borderTop={['2px', 'none']}
    >
      <Title text="Contato" mb="20px" />
      <VStack spacing="10px" alignItems="left">
        <Text>Nome</Text>
        <Input bg="white" size="lg" placeholder="Nome" />
        <Text>Telefone</Text>
        <Input bg="white" size="lg" placeholder="(51) 9 9999-9999" />
        <Text>Mensagem</Text>
        <Textarea bg="white" h="100px" />
      </VStack>
      <Button
        mt="10px"
        float="right"
        w="150px"
        h="45px"
        color="white"
        textTransform="uppercase"
      >
        enviar
      </Button>
    </Box>
  );
}
