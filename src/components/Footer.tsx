import { Flex, Box, Image, Heading, Text, Input, Button, Textarea, Link } from "@chakra-ui/react"
import axios from "axios"
import { useState, useEffect } from "react"

export default function Footer() {

    const [contato, setContato] = useState({
        Instagram: "",
        Facebook: "",
        Celular: "",
        Email: "",
    })

    useEffect(() => {
        (async () => {
            const data = await axios.get("https://moniquebatista.herokuapp.com/pages").then(response => {
                return (response.data[0].Home)
            })
            setContato(data)
        })()
    }, [])
    
    return (
        <Box
            h="480px"
            w="full"
        >
            <Flex
                w="1100px"
                mx="auto"
                mt="20px"
                justifyContent="space-between"
            >
                <Image
                    src="footerImage.png"
                    w="300px"
                    h="400px"
                    ml="-20px"
                    mt="10px"
                />
                <Box
                    w="300px"
                    h="375px"
                    border="1px solid #E9CBBB"
                    position="absolute"
                    zIndex="9999"
                >
                </Box>

                <Box
                    w="465px"
                    h="365px"
                >
                    <Heading
                        as="h2"
                        fontFamily="Cormorant Garamond"
                        fontSize="36px"
                        fontWeight="bold"
                        lineHeight="44px"
                        fontStyle="normal"
                        color="#474544"
                        mb="20px"
                    >
                        Contato
                    </Heading>

                    <Box
                        color="#474544"
                        fontFamily="Roboto"
                        fontSize="16px"
                        fontWeight="normal"
                        lineHeight="24px"
                        letterSpacing="0.5px"
                    >
                        <Text>
                            Nome
                        </Text>
                        <Input
                            w="460px"
                            bg="white"
                            size="lg"
                            placeholder="Nome"
                        />
                        <Text
                            mt="10px"
                        >
                            Telefone
                        </Text>
                        <Input
                            w="460px"
                            bg="white"
                            size="lg"
                            placeholder="(51) 9 9999-9999"
                        />
                        <Text
                            mt="10px"
                        >
                            Mensagem
                        </Text>
                        <Textarea
                            w="460px"
                            bg="white"
                            h="100px"
                        />
                    </Box>

                    <Button
                        mr="5px"
                        mt="10px"
                        float="right"
                        bgColor="#E9CBBB"
                        w="150px"
                        h="45px"
                        borderRadius="5px"
                        color="#F8F1F1"
                        textTransform="uppercase"
                        fontFamily="Roboto"
                        fontSize="16px"
                        fontStyle="normal"
                        fontWeight="normal"
                        lineHeight="30px"
                    >
                        enviar
                    </Button>
                </Box>

                <Box
                    w="220px"
                    borderLeft="2px solid #E9CBBB"
                    pl="20px"
                >
                    <Heading
                        as="h2"
                        fontFamily="Cormorant Garamond"
                        fontSize="36px"
                        fontWeight="bold"
                        lineHeight="44px"
                        fontStyle="normal"
                        color="#474544"
                    >
                        Redes Sociais
                    </Heading>
                    <Flex
                        w="80px"
                        justifyContent="space-between"
                        mt="20px"
                    >
                        <Link
                            w="35px"
                            h="35px"
                            bgImage="insta_o.png"
                            bgSize="cover"
                            href={`https://www.instagram.com/${contato.Instagram}/`}
                            _hover={{ backgroundImage: "insta_v.png" }}
                        />
                        <Link
                            w="35px"
                            h="35px"
                            bgImage="face_o.png"
                            bgSize="cover"
                            _hover={{ backgroundImage: "face_v.png" }}
                            href={`/https://www.facebook.com/${contato.Facebook}/`}
                        />
                    </Flex>
                    <Text
                        my="20px"
                        color="#E9CBBB"
                        fontFamily="Cormorant Garamond"
                        fontSize="36px"
                        fontWeight="bold"
                        fontStyle="normal"
                        lineHeight="44px"
                    >
                        {"&"}
                    </Text>
                    <Heading
                        as="h2"
                        fontFamily="Cormorant Garamond"
                        fontSize="36px"
                        fontWeight="bold"
                        lineHeight="44px"
                        fontStyle="normal"
                        color="#474544"
                        mb="15px"
                    >
                        Whatsapp
                    </Heading>

                    <Link
                        href={`https://api.whatsapp.com/send?phone=55${contato.Celular}`}
                        fontFamily="Roboto"
                        fontSize="24px"
                        fontWeight="normal"
                        lineHeight="30px"
                        color="#474544"
                    >
                        {contato.Celular}
                    </Link>

                    <Box
                        mt="120px"
                        position="absolute"
                        ml="400px"
                    >
                        <Text
                            textAlign="right"
                            fontStyle="Roboto"
                            fontSize="18px"
                            lineHeight="21px"
                            color="#474544"
                        >
                            Desenvolvido por
                        </Text>
                        <Link
                            href="https://www.highlandertech.com.br/"
                            float="right"
                            bgImage="highlander.png"
                            w="157px"
                            h="28px"
                        />
                    </Box>
                </Box>
            </Flex>
        </Box>
    )
}