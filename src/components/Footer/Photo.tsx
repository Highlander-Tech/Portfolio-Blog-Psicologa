import { Box, Image } from '@chakra-ui/react'

import { theme } from '../../styles'

interface Props {
  src: string
}

const beige = theme.colors.beige[200]

function Photo({ src }: Props) {
  return (
    <>
      <Image src={src} w="300" h="400" position="relative" mt="-25px" />
      <Box
        w="310px"
        h="375px"
        border={`1px solid ${beige}`}
        position="absolute"
        mt="-65px"
        ml="10px"
        zIndex={1800}
      />
    </>
  )
}

export { Photo }
export type { Props as PhotoProps }
