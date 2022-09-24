import React from 'react';
import { Box, HStack, Text } from '@chakra-ui/react';

import { OccupationBox } from '../atoms/OccupationBox';

function Occupations() {
  return (
    <Box w="100%">
      <Text mb="29px" fontSize="2xl" fontFamily="Cormorant Garamond">
        Áreas de Atuação:
      </Text>
      <HStack>
        <OccupationBox text="Psicologia Clínica" />
        <OccupationBox text="Psicanálise" />
        <OccupationBox text="Psicoterapia com Adolescentes" />
        <OccupationBox text="Psicologia de Casais" />
      </HStack>
    </Box>
  );
}

export { Occupations };
