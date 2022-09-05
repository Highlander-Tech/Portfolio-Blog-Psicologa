import { Flex, Link, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';

interface PropsCard {
  title: string;
  content: string;
  banner: string;
  updateAt: string;
  id: string;
}

export function Card({ title, content, banner, updateAt, id }: PropsCard) {
  return (
    <Flex
      w={11 / 12}
      maxW="344px"
      bgColor="beige.200"
      direction="column"
      zIndex={50}
    >
      <Image
        height="250"
        width={344}
        src={banner}
        alt={title}
        priority={false}
        loading="lazy"
      />
      <VStack spacing={1} alignItems="left" w={11 / 12} mx="auto" mt="8px">
        <Text as="time" dateTime={updateAt} fontSize="md" color="brown">
          Publicado em: {updateAt}
        </Text>
        <Text
          as="span"
          fontFamily="Cormorant Garamond"
          fontWeight={700}
          color="brown"
          fontSize="2xl"
        >
          {title}
        </Text>
        <Text noOfLines={3} whiteSpace="pre-wrap" minH="48px">
          {content}
        </Text>
      </VStack>
      <Link href={`/blog/${id}`} fontSize="xl" mx="auto" my={4}>
        {'Leia mais >>'}
      </Link>
    </Flex>
  );
}
