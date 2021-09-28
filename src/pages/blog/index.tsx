import { Flex, Text, Button, Box } from "@chakra-ui/react"
import { useEffect, useState } from 'react'
import { MouseEvent } from 'react'
import Sobre from '../../components/Sobre'
import Card from '../../components/Card'
import {GetStaticProps} from "next";
import {getPrismicClient} from "../../services/prismic";
import Prismic from "@prismicio/client";
import {getPosts} from "../../services/posts"

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient()

    const home = await prismic.query([
            Prismic.Predicates.at("document.type", 'home')],
        {
            pageSize: 1
        })

    const blog = await prismic.query([
        Prismic.Predicates.at('document.type', 'blog')],
        {
            pageSize:1
        })

    const blogPosts = await prismic.query([
            Prismic.Predicates.at("document.type", 'post')],
        {
            pageSize: 100
        })

    return {
        props: {
            sobre:blog.results[0].data.sobre,
            facebook: home.results[0].data.facebook,
            instagram: home.results[0].data.instagram,
            photo:home.results[0].data.photo.url,
            telefone: home.results[0].data.telefone,
            posts: getPosts(blogPosts.results)
        },
        revalidate: 60 * 60 // 1 hora
    }
}

export default function TemplateBlog(props: any) {
    const [category, setCategory] = useState("")
    const [artigos, setArtigos] = useState(props.posts)
    const [index, setIndex] = useState(5);
    const [overflow, setOverflow] = useState("hidden");
    const [moreButtom, setMoreButtom] = useState("none");
    const [Cards, setCards] = useState(<>, </>);

    function handleClick(event: MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        setIndex(index + 5)
        setOverflow("scroll")
    }

    useEffect(() => {
        setCards(artigos.slice(0, index).map((artigo: any) => {
            return (
                <Card
                    title={artigo.title}
                    content={artigo.content}
                    banner={artigo.banner}
                    updateAt={artigo.updateAt}
                    id={artigo.id}
                    key={artigo.id}
                />)
        }))

        if (artigos.length > 5) {
            setMoreButtom("block")
        }

        if (artigos.length <= index) {
            setMoreButtom("none")
        }

    }, [artigos, index]);

    useEffect(() => {
        if (props.size <= index) {
            setMoreButtom("none")
        }
    }, [index, props.size]);

    
    return (
            <Box
                bgImage="59.png"
                bgRepeat="no-repeat"
                w="full"
                h="1500px"
                borderBottom="1px solid #474544;"
            >
                <Flex
                    w="1210px"
                    mx="auto"
                >
                    <Box
                        w="860px"
                    >
                        <Box
                            borderRight="1px solid #474544"
                            pt="32px"
                            h="1499px"
                            overflow={overflow}
                            overflowX="hidden"
                        >
                            {Cards}
                            <Box
                                w="255px"
                                mx="auto"
                            >
                                <Button
                                    onClick={handleClick}
                                    bgColor="#474544"
                                    w="255px"
                                    h="70px"
                                    fontFamily="Cormorant Garamond"
                                    fontStyle="normal"
                                    fontWeight="bold"
                                    fontSize="24px"
                                    color="#F8F1F1"
                                    lineHeight="29px"
                                    textTransform="uppercase"
                                    my="40px"
                                    display={moreButtom}
                                >
                                    Carregar Mais
                                </Button>
                            </Box>
                        </Box>

                    </Box>
                    <Box
                        ml="50px"
                    >
                        <Sobre 
                            instagram={props.instagram}
                            facebook={props.facebook}
                            content={props.sobre}
                            photo={props.photo}
                        />
                        <Box
                            w="300px"
                            minH="250px"
                            border="1px solid #E9CBBB"
                            mt="40px"
                            pl="10px"
                            pt="10px"
                        >
                            <Text
                                fontFamily="Roboto"
                                color="#474544"
                                fontSize="18px"
                                fontWeight="normal"
                                lineHeight="21px"
                                mb="10px"
                                fontStyle="normal"
                            >
                                Categorias
                            </Text>
                            LISTA DE CATEGORIAS
                        </Box>
                    </Box>
                </Flex>
            </Box>
    )
}