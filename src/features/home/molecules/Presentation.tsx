import {
  Box,
  Flex,
  ListItem,
  Text,
  UnorderedList,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import dynamic from 'next/dynamic';

import type { NavButtonProps } from '../atoms';
import { Photo, Title } from '../atoms';

const NavButton = dynamic<NavButtonProps>(() =>
  import('../atoms/NavButton').then((module) => module.NavButton),
);

export function Presentation() {
  const isWideVersion = useBreakpointValue({
    lg: false,
    xl: true,
  });

  return (
    <Flex
      as="section"
      flexDirection={['column-reverse', 'row']}
      alignItems="center"
      py="30px"
      w={['95%', '70%']}
      mx="auto"
    >
      <Photo />
      <Box as="article" mx={['auto', '30px']}>
        <Title text="Monique Batista" />
        <VStack spacing="18px" align="left">
          <UnorderedList fontSize="lg">
            <ListItem>Psicóloga</ListItem>
            <ListItem>Psicanalista</ListItem>
            <ListItem>Avaliação Psicológica</ListItem>
          </UnorderedList>
          <Text fontSize="lg">CRP 07/29504</Text>
          {isWideVersion && (
            <NavButton border="1px" borderColor="brown">
              Agende
            </NavButton>
          )}
        </VStack>
      </Box>
    </Flex>
  );
}
