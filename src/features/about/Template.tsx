import { HStack, useBreakpointValue, VStack } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

import { AboutPhotoProps } from './atoms/AboutPhoto';
import { AboutMe } from './molecules/AboutMe';
import { Occupations } from './molecules/Occupations';

const AboutPhoto = dynamic<AboutPhotoProps>(() =>
  import('./atoms/AboutPhoto').then((module) => module.AboutPhoto),
);

export default function About() {
  const isWideVersion = useBreakpointValue({
    lg: false,
    xl: true,
  });

  return (
    <HStack maxW="1160px" w="100%" h="100%" mx="auto" mt="16px" px="4">
      {isWideVersion && <AboutPhoto src="/mock.png" />}
      <VStack maxW="847px" pl="10px">
        <AboutMe />
        <Occupations />
      </VStack>
    </HStack>
  );
}
