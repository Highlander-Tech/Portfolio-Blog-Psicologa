import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

type Props = {
  text: string;
};

function OccupationBox({ text }: Props) {
  return (
    <Flex
      w="200px"
      h="150px"
      backgroundColor="beige.200"
      p="1"
      alignItems="center"
      justifyContent="center"
      borderRadius="lg"
    >
      <Text fontWeight="bold" fontSize="md" align="center">
        {text}
      </Text>
    </Flex>
  );
}

export { OccupationBox };
