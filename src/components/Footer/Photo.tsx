import { Box, Image } from '@chakra-ui/react'

import { theme } from '../../styles'

const beige = theme.colors.beige[200]

export function Photo() {
  return (
    <>
      <Image src="footerImage.png" w="300" h="400" position="relative" />
      <Box
        w="300px"
        h="375px"
        border={`1px solid ${beige}`}
        position="absolute"
        mt="-3"
        ml="5"
        zIndex={1800}
      />
    </>
  )
}
