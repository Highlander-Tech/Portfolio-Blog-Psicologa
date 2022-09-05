import { Box, Container, Text, useBreakpointValue } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

import { NavButtonProps } from '../atoms';

const NavButton = dynamic<NavButtonProps>(() =>
  import('../atoms/NavButton').then((module) => module.NavButton),
);

export function Description() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Box as="section" w="full" bgColor="brown" py="40px">
      <Container w={11 / 12} maxW="1160px">
        <Text mx="auto" fontSize="lg" color="beige.100" textAlign="center">
          A busca pela sua própria identificação na adolescência é uma tarefa
          incessante, e para tal, pode-se contar com o auxílio da terapia, posso
          te ajudar com a minha experiencia em clínica e agora levando isso para
          o on line.
          <br />
          <br />
          Se você está sentindo-se perdido e sem propósito, pode contar comigo
          para te ajudar a compreender que tuas dúvidas e inquietações fazem
          parte deste processo da adolescência.
          <br />
          <br /> Atuo também com família e conflitos gerados desta, ajudando as
          famílias em um processo de conhecimento e restauração de laços ou de
          harmonia para os seus integrantes.
        </Text>
        {isWideVersion && (
          <NavButton border="1px" borderColor="beige.100" ml="60%" mt={6} />
        )}
      </Container>
    </Box>
  );
}
