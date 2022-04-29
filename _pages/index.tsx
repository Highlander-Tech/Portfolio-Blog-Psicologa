import { useEffect, useState } from 'react'
import { Box, Button, Flex, Heading, Image, Link, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import Prismic from '@prismicio/client'
import { GetStaticProps } from 'next'
import { RichText } from 'prismic-dom'

import { getPosts } from '../src/services/posts'
import { getPrismicClient } from '../src/services/prismic'

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const home = await prismic.query([Prismic.Predicates.at('document.type', 'home')], {
    pageSize: 1,
  })

  const blog = await prismic.query([Prismic.Predicates.at('document.type', 'post')], {
    pageSize: 3,
  })

  return {
    props: {
      name: RichText.asText(home.results[0].data.nome),
      photo: home.results[0].data.photo.url,
      email: home.results[0].data.email,
      facebook: home.results[0].data.facebook,
      instagram: home.results[0].data.instagram,
      telefone: home.results[0].data.telefone,
      posts: getPosts(blog.results),
    },
    revalidate: 60 * 60, // 1 hora
  }
}

interface Post extends Array<any> {
  id: string
  title: string
  banner: string
  content: string
  updateAt: string
}

interface HomeProps {
  name: string
  photo: string
  email: string
  facebook: string
  instagram: string
  telefone: number
  posts: Post
}

export default function Home(props: HomeProps) {
  const [cards, setCards] = useState([<></>])

  useEffect(() => {
    setCards(
      props.posts.reverse().map((post: Post) => {
        return (
          <Box key={post.id} w="350px" h="420px" bgColor="#E9CBBB">
            <Image src={post.banner} h="240px" w="350px" alt="Foto Perfil Monique Batista" />
            <Box
              w="325px"
              color="#474544"
              fontFamily="Roboto"
              fontStyle="normal"
              fontWeight="normal"
              pl="10px"
            >
              <Text fontSize="14px" lineHeight="16px" mt="18px">
                Publicado em: {post.updateAt}
              </Text>

              <Heading as="h3" fontSize="24px" lineHeight="32px" fontWeight={500} mb="10px" isTruncated>
                {post.title}
              </Heading>
              <Text fontSize="14px" lineHeight="16px" h="48px" noOfLines={3} mb="20px">
                {post.content}
              </Text>
              <Link
                href={`/blog/${post.id}`}
                ml="110px"
                w="110px"
                fontSize="18px"
                fontWeight="normal"
                lineHeight="24px"
              >
                {'Leia Mais >>'}
              </Link>
            </Box>
          </Box>
        )
      }),
    )
  }, [props.posts])

  return (
    <>
      <Box w="1210px" h="480px" mx="auto">
        <Heading
          as="h2"
          mt="30px"
          fontFamily="Cormorant Garamond"
          fontSize="36px"
          fontWeight="bold"
          lineHeight="44px"
          color="#474544"
        >
          Como eu posso ajudar?
        </Heading>
        <Flex mt="35px" mx="auto" w="1210px" justifyContent="space-evenly">
          <Box>
            <Flex>
              <Text
                fontFamily="Cormorant Garamond"
                fontSize="72px"
                fontWeight="bold"
                fontStyle="normal"
                lineHeight="72px"
                color="#E9CBBB"
                mt="-26px"
                mr="20px"
              >
                1
              </Text>
              <Box fontFamily="Roboto" fontStyle="normal" fontWeight="normal" color="#474544">
                <Text fontSize="18px" lineHeight="21px" mb="14px">
                  Indentificar
                </Text>
                <Text fontSize="14px" lineHeight="16px" w="300px">
                  Identificar os motivos do problema, a essência do que está acontecendo.
                </Text>
              </Box>
            </Flex>
            <Flex mt="35px">
              <Text
                fontFamily="Cormorant Garamond"
                fontSize="72px"
                fontWeight="bold"
                fontStyle="normal"
                lineHeight="72px"
                color="#E9CBBB"
                mt="-26px"
                mr="20px"
              >
                2
              </Text>
              <Box fontFamily="Roboto" fontStyle="normal" fontWeight="normal" color="#474544">
                <Text fontSize="18px" lineHeight="21px" mb="14px">
                  Entender os Outros
                </Text>
                <Text fontSize="14px" lineHeight="16px" w="300px">
                  Descobrir como lidar com os fatores externos, e como responder adequadamente.
                </Text>
              </Box>
            </Flex>
            <Flex mt="35px">
              <Text
                fontFamily="Cormorant Garamond"
                fontSize="72px"
                fontWeight="bold"
                fontStyle="normal"
                lineHeight="72px"
                color="#E9CBBB"
                mt="-26px"
                mr="20px"
              >
                3
              </Text>
              <Box fontFamily="Roboto" fontStyle="normal" fontWeight="normal" color="#474544">
                <Text fontSize="18px" lineHeight="21px" mb="14px">
                  Entender a Si Mesmo
                </Text>
                <Text fontSize="14px" lineHeight="16px" w="300px">
                  Descobrir como lidar com seus problemas e tomar a decisão certa.
                </Text>
              </Box>
            </Flex>
          </Box>
          <Image
            src="component_2.png"
            w="218px"
            h="135px"
            position="absolute"
            top="1240px"
            left="1080px"
            transform="rotate(-10deg)"
            alt="component_2"
          />
          <Box mt="60px">
            <Flex>
              <Text
                fontFamily="Cormorant Garamond"
                fontSize="72px"
                fontWeight="bold"
                fontStyle="normal"
                lineHeight="72px"
                color="#E9CBBB"
                mt="-26px"
                mr="20px"
              >
                4
              </Text>
              <Box fontFamily="Roboto" fontStyle="normal" fontWeight="normal" color="#474544">
                <Text fontSize="18px" lineHeight="21px" mb="14px">
                  Ser Feliz
                </Text>
                <Text fontSize="14px" lineHeight="16px" w="300px">
                  Descobrir o que esta faltando para a felicidade, e como começar.
                </Text>
              </Box>
            </Flex>
            <Flex mt="35px">
              <Text
                fontFamily="Cormorant Garamond"
                fontSize="72px"
                fontWeight="bold"
                fontStyle="normal"
                lineHeight="72px"
                color="#E9CBBB"
                mt="-26px"
                mr="20px"
              >
                5
              </Text>
              <Box fontFamily="Roboto" fontStyle="normal" fontWeight="normal" color="#474544">
                <Text fontSize="18px" lineHeight="21px" mb="14px">
                  Terapia
                </Text>
                <Text fontSize="14px" lineHeight="16px" w="300px">
                  Reescrever sua configuração, trabalhando seus medos e traumas.
                </Text>
              </Box>
            </Flex>
            <Flex mt="35px">
              <Text
                fontFamily="Cormorant Garamond"
                fontSize="72px"
                fontWeight="bold"
                fontStyle="normal"
                lineHeight="72px"
                color="#E9CBBB"
                mt="-26px"
                mr="20px"
              >
                6
              </Text>
              <Box fontFamily="Roboto" fontStyle="normal" fontWeight="normal" color="#474544">
                <Text fontSize="18px" lineHeight="21px" mb="14px">
                  Falar
                </Text>
                <Text fontSize="14px" lineHeight="16px" w="300px">
                  Abrir-se para um profissional que irá escutar o que você diz sem medo de julgamentos.
                </Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box
        borderY="2px solid #474544"
        bgImage="57.png"
        bgPosition="0px"
        bgRepeat="no-repeat"
        h="750px"
        w="full"
      >
        <Box w="1110px" mx="auto">
          <Box ml="120px">
            <Heading
              as="h2"
              fontFamily="Cormorant Garamond"
              fontSize="36px"
              fontWeight="bold"
              lineHeight="44px"
              color="#474544;"
              mt="28px"
            >
              Últimas postagens
            </Heading>
            <Image src="line.png" w="280px" h="1px" mt="10px" alt="line" />
          </Box>
          <Flex mt="20px" w="1110px" justifyContent="space-between">
            {cards}
          </Flex>
          <Box w="185px" h="185px" mx="auto">
            <Button
              mt="15px"
              mx="auto"
              w="185px"
              h="185px"
              borderRadius="50%"
              bgColor="#E9CBBB"
              fontFamily="Cormorant Garamond"
              fontSize="32px"
              fontWeight="bold"
              fontStyle="normal"
              lineHeight="39px"
              color="#474544"
              transform="rotate(-10deg)"
            >
              <Link
                href="/blog"
                h="185px"
                w="185px"
                position="absolute"
                border="1px solid #474544;"
                borderRadius="50%"
                ml="15px"
                mt="15px"
                filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
              />
              Acesse
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}
