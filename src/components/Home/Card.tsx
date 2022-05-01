import { Flex, Heading, Image, Link, Text, VStack } from '@chakra-ui/react'

interface PropsCard {
  title: string
  content: string
  banner: string
  updateAt: string
  id: string
}

export function Card({ title, content, banner, updateAt, id }: PropsCard) {
  return (
    <Flex w="350px" bgColor="beige.200" direction="column">
      <Image h="250px" src={banner} alt={title} />
      <VStack spacing={'5px'} alignItems="left" w="90%" mx="auto" mt="10px">
        <Text fontSize="md" color="brown.700">
          Publicado em: {updateAt}
        </Text>
        <Heading as="h3" color="brown.700" fontSize="2xl">
          {title}
        </Heading>
        <Text noOfLines={3} fontSize="md" whiteSpace="pre-wrap" minH="50px">
          {content}
        </Text>
      </VStack>
      <Link href={`/blog/${id}`} fontSize="xl" mx="auto" my="20px">
        {'Leia mais >>'}
      </Link>
    </Flex>
  )
}
