import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Title } from 'features/common/components/atoms';

function AboutMe() {
  return (
    <Box w="100%">
      <Title text="Sobre mim:" mb="16px" />
      <Text mb="21px">
        Psicóloga formada pela Universidade Luterana do Brasil, com ênfase em
        Psicologia Clínica e Psicanálise, e experiências nas áreas hospitalar,
        clínica e organizacional.
      </Text>
      <Text>
        Atuo com tratamento psicanalítico, com formato intensivo e abordagem de
        elementos de funcionamento social e comportamental desde a perspectiva
        da formação do caráter e personalidade, com o objetivo de ajudar o
        paciente a ter qualidade de vida.
      </Text>
    </Box>
  );
}

export { AboutMe };
