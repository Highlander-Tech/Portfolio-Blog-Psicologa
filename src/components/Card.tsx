import { Flex, Box, Image, Heading, Text, Link } from "@chakra-ui/react"

interface PropsCard {
    title: string
    content: string
    banner: string
    updateAt: string
    id: string
}

export default function Card({title, content, banner, updateAt, id}: PropsCard) {

    return (
        <Flex
            key={id}
            w="800px"
            h="250px"
            borderRadius="10px"
            border="1px solid #E9CBBB"
            pr="20px"
            mb="15px"
        >
            <Image
                w="350px"
                h="248px"
                src={banner}
                mr="15px"
                alt={title}
            />
            <Box>
                <Heading
                    as="h2"
                    color="#474544"
                    fontFamily="Roboto"
                    fontSize="24px"
                    fontWeight="bold"
                    lineHeight="28px"
                    mt="15px"
                >
                    {title}
                </Heading>
                <Text
                    fontFamily="Roboto"
                    fontSize="18px"
                    fontWeight="normal"
                    lineHeight="21px"
                    fontStyle="normal"
                    color="black"
                    my="10px"
                >
                    Postado em: {updateAt}
                </Text>
                <Text
                    noOfLines={6}
                    fontFamily="Roboto"
                    fontStyle="normal"
                    fontSize="14px"
                    fontWeight="normal"
                    lineHeight="16px"
                    color="#474544"
                    whiteSpace="pre-wrap"
                    minH="110px"
                >
                    {content}
                </Text>
                <Flex
                    justifyContent="flex-end"
                    w="420px" 
                    h="150px"      
                >
                    <Link
                        href={`/blog/${id}`}
                        float="right"
                        mt="15px"
                        w="90px"
                        h="30px"
                        bgColor="#E9CBBB"
                        borderRadius="5px"
                        color="#F8F1F1"
                        fontFamily="Roboto"
                        fontStyle="normal"
                        fontWeight="normal"
                        fontSize="14px"
                        lineHeight="16px"
                        textAlign="center"
                        py="8px"
                    >
                        {"Leia mais >>"}
                    </Link>
                </Flex>
            </Box>
        </Flex>
    )
}