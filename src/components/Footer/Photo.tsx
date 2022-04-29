import { Box, Image } from '@chakra-ui/react'

import { theme } from '../../styles'

interface Props {
  src: string
}

const beige = theme.colors.beige[200]

function Photo({ src }: Props) {
  return (
    <>
      <Image src={src} w="300" h="400" position="relative" />
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

export { Photo }
export type { Props as PhotoProps }
