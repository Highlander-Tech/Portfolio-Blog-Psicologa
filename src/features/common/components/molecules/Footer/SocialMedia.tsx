import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Stack, Text, useBreakpointValue } from '@chakra-ui/react';

import { Link, Title } from '../../atoms';

type Props = {
  instagram: string;
  facebook: string;
  whatsapp: string;
};

export function SocialMedia({ instagram, facebook, whatsapp }: Props) {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Stack
      w="220px"
      h={['192px', '408px']}
      pl={['0', '24px']}
      direction="column"
      spacing="24px"
      mx={['auto', '0']}
      pb={['24px', 'auto']}
    >
      <Title text="Redes Sociais" textAlign={['center', 'left']} />
      <Stack direction="row" spacing={3} justifyContent={['center', 'left']}>
        <Link icon={FaInstagram} href={instagram} />
        <Link icon={FaFacebook} href={facebook} />
        {!isWideVersion && <Link icon={FaWhatsapp} href={whatsapp} />}
      </Stack>
      {isWideVersion && (
        <>
          <Text
            color="beige.200"
            fontFamily="Cormorant Garamond"
            fontSize="3xl"
            fontWeight="bold"
          >
            &
          </Text>
          <Title text="Whatsapp" />
          <Link icon={FaWhatsapp} href={whatsapp} />
        </>
      )}
    </Stack>
  );
}
