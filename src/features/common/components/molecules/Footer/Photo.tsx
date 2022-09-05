import { Box, Image } from '@chakra-ui/react';

interface Props {
  src: string;
}

function Photo({ src }: Props) {
  return (
    <>
      <Image
        src={src}
        w="300"
        h="400"
        position="relative"
        mt="-25px"
        alt="foto ilustrativa"
      />
      <Box
        w="310px"
        h="375px"
        border="1px"
        borderColor="beige.200"
        position="absolute"
        mt="-65px"
        ml="10px"
        zIndex={1800}
      />
    </>
  );
}

export { Photo };
export type { Props as PhotoProps };
