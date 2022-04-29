import type { ElementType } from 'react'
import { Icon, Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import NextLink from 'next/link'

import { theme } from '../../styles'

const beige = theme.colors.beige[200]

interface Props extends LinkProps {
  icon: ElementType
  href: string
}

function Link({ icon, href }: Props) {
  return (
    <NextLink href={href} passHref>
      <ChakraLink as={'a'} target="_blank">
        <Icon as={icon} fontSize="35px" color="brown.700" _hover={{ color: beige }} />
      </ChakraLink>
    </NextLink>
  )
}

export { Link }
export type { Props as LinkProps }
