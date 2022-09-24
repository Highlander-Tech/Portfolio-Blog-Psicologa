import { Box } from '@chakra-ui/react';
import Image from 'next/image';

interface Props {
  src: string;
}

function AboutPhoto({ src }: Props) {
  return (
    <Box position="relative" w="250px" h="450px">
      <Box
        position="absolute"
        zIndex={-1}
        borderTopRadius="150px"
        overflow="hidden"
      >
        <Image
          src={src}
          width={250}
          height={450}
          alt="foto ilustrativa"
          priority={false}
          loading="lazy"
          objectFit="fill"
        />
      </Box>
      <Box
        position="absolute"
        border="2px"
        top="5px"
        right="-5px"
        borderColor="beige.200"
        w="100%"
        h="100%"
        borderTopRadius="150px"
        boxShadow="md"
        zIndex="banner"
      />
    </Box>
  );
}

export { AboutPhoto };
export type { Props as AboutPhotoProps };