import { Box, Flex, Image, Link, Text } from '@chakra-ui/react'

interface SobreProps {
  photo: string
  content: string
  instagram: string
  facebook: string
}

export default function Sobre({ photo, content, instagram, facebook }: SobreProps) {
  return (
    <Box borderRadius="10px" bgColor="#E9CBBB" w="300px" h="500px" mt="32px">
      <Image src={photo} w="300px" h="350px" borderTopRadius="10px" alt="Foto Perfil Monique Batista" />
      <Box
        mt="10px"
        color="#474544"
        fontFamily="Roboto"
        fontSize="14px"
        lineHeight="16px"
        fontWeight={300}
        mx="auto"
        w="280px"
      >
        <Text h="48px" noOfLines={3}>
          {content}
        </Text>
        <Text my="15px">CRP 07 29504</Text>
        <Flex w="80px" justifyContent="space-between">
          <Link
            w="35px"
            h="35px"
            bgImage="insta_o.png"
            bgSize="cover"
            href={`https://www.instagram.com/${instagram}/`}
            _hover={{ backgroundImage: 'insta_v.png' }}
          />
          <Link
            w="35px"
            h="35px"
            bgImage="face_o.png"
            bgSize="cover"
            _hover={{ backgroundImage: 'face_v.png' }}
            href={`/https://www.facebook.com/${facebook}/`}
          />
        </Flex>
      </Box>
    </Box>
  )
}
