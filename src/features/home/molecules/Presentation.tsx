import {
  Box,
  Container,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import dynamic from 'next/dynamic';

import type { NavButtonProps } from '../atoms';
import { Photo } from '../atoms';

const NavButton = dynamic<NavButtonProps>(() =>
  import('../atoms/NavButton').then((module) => module.NavButton),
);

export function Presentation() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Box as="section" w="full">
      <Container
        display="flex"
        flexDirection={['column-reverse', 'row']}
        alignItems="center"
        gap="40px"
        py="32px"
        w={11 / 12}
        maxW="1160px"
      >
        <Photo />
        <Box as="article" maxW="720px">
          <Heading
            as="h1"
            fontFamily="Cookie"
            fontSize={['7xl', '9xl']}
            color="brown"
            fontWeight="normal"
          >
            Monique Batista
          </Heading>

          <VStack spacing={[4, 6]} alignItems="left">
            <UnorderedList fontSize="lg">
              <ListItem>Psicóloga</ListItem>
              <ListItem>Psicanalista</ListItem>
              <ListItem>Avaliação Psicológica</ListItem>
            </UnorderedList>
            <Text fontSize="lg">CRP 07/29504</Text>
            {isWideVersion && <NavButton border="1px" borderColor="brown" />}
          </VStack>
        </Box>
      </Container>
    </Box>
  );
}
