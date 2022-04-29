import { useEffect, useState } from 'react'
import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react'
import Prismic from '@prismicio/client'
import { motion } from 'framer-motion'
import { GetStaticProps } from 'next'
import { RichText } from 'prismic-dom'

import { getPrismicClient } from '../src/services/prismic'

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const sobre = await prismic.query([Prismic.Predicates.at('document.type', 'sobre')], {
    pageSize: 1,
  })

  return {
    props: {
      sobre: RichText.asHtml(sobre.results[0].data.content),
      photo: sobre.results[0].data.photo.url,
    },
    revalidate: 60 * 60, // 1 hora
  }
}

interface SobreProps {
  sobre: string
  photo: string
}

export default function Sobre({ sobre, photo }: SobreProps) {
  const MotionBox = motion(Box)
  const [text, setText] = useState(
    'A Psicoterapia busca proporcionar ao adolescente um espaço de escuta e de compreensão, um ambiente seguro e acolhedor, para que ele possa expressar as suas dúvidas, angústias, desejos, medos, dentro deste processo tão importante e conflituoso da sua vida: a adolescência.',
  )
  const [select, setSelect] = useState('1')

  useEffect(() => {
    switch (select) {
      case '1':
        setText(
          'A Psicoterapia busca proporcionar ao adolescente um espaço de escuta e de compreensão, um ambiente seguro e acolhedor, para que ele possa expressar as suas dúvidas, angústias, desejos, medos, dentro deste processo tão importante e conflituoso da sua vida: a adolescência.',
        )
        break
      case '2':
        setText(
          'A Psicoterapia é um método para tratar sintomas psicológicos e emocionais, conduzido por um profissional com formação em Psicologia Clínica.',
        )
        break
      case '3':
        setText(
          'Tratamento psicanalítico clássico, com formato intensivo e abordagem de elementos de funcionamento social e comportamental desde a perspectiva da formação do caráter e personalidade.',
        )
        break
      case '4':
        setText(
          'Identificar pontos de conflitos, sintonizar a comunicação, promover melhorias na convivência diária, definir mudanças, traçar novos objetivos conjugais ou ainda lidar com situações inesperadas.',
        )
        break
    }
  }, [select])

  return (
    <Box w="full" h="800px" bgImage="58.png" borderBottom="1px solid #474544">
      <Flex w="1210px" h="800px" mx="auto" mt="32px">
        <Box>
          <Box
            w="250px"
            h="450px"
            borderRadius="150px 150px 0px 0px"
            border="2px solid #E9CBBB"
            position="absolute"
            filter="0px 4px 4px rgba(0, 0, 0, 0.25))"
            ml="5px"
            mt="5px"
          />
          <Image
            src={photo}
            w="250px"
            h="450px"
            borderRadius="150px 150px 0px 0px"
            alt="Foto Perfil Monique Batista"
          />
        </Box>
        <Box ml="20px" w="830px" color="#474544">
          <Heading
            as="h1"
            fontFamily="Cormorant Garamond"
            fontSize="36px"
            fontStyle="normal"
            fontWeight="bold"
            lineHeight="44px"
            mb="25px"
          >
            Sobre Mim
          </Heading>
          <Box
            whiteSpace="pre-wrap"
            fontFamily="Roboto"
            fontSize="18px"
            fontStyle="normal"
            lineHeight="21px"
            fontWeight="normal"
            h="176px"
            dangerouslySetInnerHTML={{ __html: sobre }}
          />
          <Heading
            as="h3"
            fontFamily="Cormorant Garamond"
            fontSize="24px"
            fontStyle="normal"
            fontWeight="normal"
            lineHeight="29px"
            mb="30px"
          >
            Áreas de Atuação:
          </Heading>
          <Flex justifyContent="space-between">
            <Button
              bgColor="#E9CBBB"
              borderRadius="10px"
              w="200px"
              h="150px"
              fontFamily="Roboto"
              fontSize="18px"
              fontStyle="normal"
              fontWeight="normal"
              lineHeight="21px"
              textAlign="center"
              color="#474544"
              whiteSpace="normal"
              onClick={() => setSelect('1')}
            >
              Psicologia Clínica
            </Button>
            <Button
              bgColor="#E9CBBB"
              borderRadius="10px"
              w="200px"
              h="150px"
              fontFamily="Roboto"
              fontSize="18px"
              fontStyle="normal"
              fontWeight="normal"
              lineHeight="21px"
              textAlign="center"
              color="#474544"
              whiteSpace="normal"
              onClick={() => setSelect('2')}
            >
              Psicanálise
            </Button>
            <Button
              bgColor="#E9CBBB"
              borderRadius="10px"
              w="200px"
              h="150px"
              fontFamily="Roboto"
              fontSize="18px"
              fontStyle="normal"
              fontWeight="normal"
              lineHeight="21px"
              textAlign="center"
              color="#474544"
              whiteSpace="normal"
              onClick={() => setSelect('3')}
            >
              Psicoterapia com Adolescentes
            </Button>
            <Button
              bgColor="#E9CBBB"
              borderRadius="10px"
              w="200px"
              h="150px"
              fontFamily="Roboto"
              fontSize="18px"
              fontStyle="normal"
              fontWeight="normal"
              lineHeight="21px"
              textAlign="center"
              color="#474544"
              whiteSpace="normal"
              onClick={() => setSelect('4')}
            >
              Psicologia de Casais
            </Button>
          </Flex>

          <MotionBox
            mt="30px"
            w="410px"
            color="#474544"
            fontFamily="Roboto"
            fontSize="18px"
            fontStyle="normal"
            fontWeight="normal"
            lineHeight="21px"
            borderLeft="2px solid #E9CBBB"
            pl="10px"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            {text}
          </MotionBox>
        </Box>
      </Flex>
    </Box>
  )
}
