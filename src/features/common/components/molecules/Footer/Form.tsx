import { useState } from 'react';
import { Box, Input, Text, Textarea, VStack } from '@chakra-ui/react';

import { formatAndValidadePhoneNumber } from 'utils/format-and-validade-phone-number';

import { Button } from '../../atoms/Button';
import { Title } from '../../atoms/Title';

export function Form() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const formIsValid = name && phoneNumber && message;

  const handleChangeName = (event: any) => {
    event.preventDefault();
    setName(event?.target.value);
  };

  const handleChangePhoneNumber = (event: any) => {
    event.preventDefault();
    setPhoneNumber(formatAndValidadePhoneNumber(event?.target.value));
  };

  const handleChangeMessage = (event: any) => {
    event.preventDefault();
    setMessage(event?.target.value);
  };

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
          <Input
            bg="white"
            size="lg"
            placeholder="Nome"
            value={name}
            onChange={handleChangeName}
          />
          <Text>Telefone</Text>
          <Input
            bg="white"
            size="lg"
            placeholder="(51) 9 9999-9999"
            maxLength={15}
            value={phoneNumber}
            onChange={handleChangePhoneNumber}
          />
          <Text>Mensagem</Text>
          <Textarea
            bg="white"
            h="96px"
            value={message}
            onChange={handleChangeMessage}
          />
        </VStack>
        <Button
          mt="8px"
          float="right"
          w="160px"
          h="48px"
          color="white"
          textTransform="uppercase"
          disabled={!formIsValid}
        >
          enviar
        </Button>
      </Box>
    </Box>
  );
}
