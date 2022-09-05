import { Box, Image } from '@chakra-ui/react';
// import Image from 'next/image';

export function Photo() {
  return (
    <Box position="relative" display="block" maxW="312px" w={11 / 12} h="504px">
      <Image
        src="/mock.png"
        alt="props.name" // TODO: puxar dados do CMS
        width={310}
        height={500}
        rounded="180px"
      />
      <Box
        w="310px"
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
