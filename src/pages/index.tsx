import { Box } from '@chakra-ui/react'

import { Description, Presentation } from '../containers/Home'

export default function Home() {
  return (
    <Box as="main" pt="30px" w={['95%', '70%']} mx="auto">
      <Presentation />
      <Description />
    </Box>
  )
}
