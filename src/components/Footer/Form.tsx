import { Box, Input, Text, Textarea, VStack } from '@chakra-ui/react'

import { Button } from '../Button'

import { Title } from './Title'

export function Form() {
  return (
    <Box w="465px" h="365px" mx="40px">
      <Title text="contato" mb="20px" />
      <VStack spacing="10px" fontWeight="normal" lineHeight="24px" letterSpacing="0.5px" alignItems="left">
        <Text>Nome</Text>
        <Input bg="white" size="lg" placeholder="Nome" />
        <Text>Telefone</Text>
        <Input bg="white" size="lg" placeholder="(51) 9 9999-9999" />
        <Text>Mensagem</Text>
        <Textarea w="460px" bg="white" h="100px" />
      </VStack>
      <Button mt="10px" float="right" w="150px" h="45px" color="white" textTransform="uppercase">
        enviar
      </Button>
    </Box>
  )
}
