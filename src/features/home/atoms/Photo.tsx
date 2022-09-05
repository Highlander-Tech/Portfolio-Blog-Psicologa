import { Box, Image } from '@chakra-ui/react';
import NextImage from 'next/image';

export function Photo() {
  return (
    <Box position="relative" display="block" maxW="312px" w="100%" h="504px">
      <Image
        as={NextImage}
        src="/mock.png"
        alt="props.name" // TODO: puxar dados do CMS
        rounded="180px"
        layout="fill"
        priority
        loading="eager"
      />
      <Box
        maxW="312px"
        w="100%"
        h="490px"
        rounded="180px"
        border="1px"
        borderColor="brown"
        position="absolute"
        zIndex={50}
        top="10px"
        left="-10px"
      />
    </Box>
  );
}
