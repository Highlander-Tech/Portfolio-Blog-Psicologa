import { Box, Text, useBreakpointValue } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

import type { AgendeButtonProps } from '../../components'
import { theme } from '../../styles'

const AgendeButton = dynamic<AgendeButtonProps>(() =>
  import('../../components/AgendeButton').then((module) => module.AgendeButton),
)
const beige = theme.colors.beige[100]

export function Description() {
  const isWideVersion = useBreakpointValue({
    lg: false,
    xl: true,
  })

  return (
    <Box as="section" w="full" bgColor="brown.700" py="40px">
      <Text w={['95%', '50%']} mx="auto" fontSize="lg" color="beige.100" textAlign="center">
        A busca pela sua própria identificação na adolescência é uma tarefa incessante, e para tal, pode-se
        contar com o auxílio da terapia, posso te ajudar com a minha experiencia em clínica e agora levando
        isso para o on line. <br />
        <br />
        Se você está sentindo-se perdido e sem propósito, pode contar comigo para te ajudar a compreender que
        tuas dúvidas e inquietações fazem parte deste processo da adolescência.
        <br />
        <br /> Atuo também com família e conflitos gerados desta, ajudando as famílias em um processo de
        conhecimento e restauração de laços ou de harmonia para os seus integrantes.
      </Text>
      {isWideVersion && <AgendeButton border={`1px solid ${beige}`} ml="60%" mt="50px" />}
    </Box>
  )
}
