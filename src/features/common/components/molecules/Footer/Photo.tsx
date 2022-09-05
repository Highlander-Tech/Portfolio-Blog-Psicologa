import { Box } from '@chakra-ui/react';
import Image from 'next/image';

interface Props {
  src: string;
}

function Photo({ src }: Props) {
  return (
    <Box position="relative" mt="-24px">
      <Image
        src={src}
        width={300}
        height={400}
        alt="foto ilustrativa"
        priority={false}
        loading="lazy"
      />
      <Box
        w="310px"
        h="375px"
        border="1px"
        borderColor="beige.200"
        position="absolute"
        top="-16px"
        left="8px"
        zIndex={1800}
      />
    </Box>
  );
}

export { Photo };
export type { Props as PhotoProps };
