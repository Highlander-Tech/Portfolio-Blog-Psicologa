import { HStack, VStack } from '@chakra-ui/react';

import { AboutPhoto } from './atoms/AboutPhoto';
import { AboutMe } from './molecules/AboutMe';
import { Occupations } from './molecules/Occupations';

export default function About() {
  return (
    <HStack maxW="1160px" w="100%" h="100%" mx="auto" mt="16px">
      <AboutPhoto src="/mock.png" />
      <VStack justify="flex-start">
        <AboutMe />
        <Occupations />
      </VStack>
    </HStack>
  );
}
