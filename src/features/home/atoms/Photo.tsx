import { Box, Image } from '@chakra-ui/react';

export function Photo() {
  return (
    <>
      <Image
        src="/mock.png"
        alt="props.name"
        w="310px"
        h="500px"
        borderRadius="180px"
        position="relative"
      />
      <Box
        mt="10px"
        ml="-10px"
        w="310px"
        h="490px"
        border="1px"
        borderColor="brown"
        borderRadius="180px"
        position="absolute"
        zIndex={1800}
      />
    </>
  );
}
