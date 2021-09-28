import { Box, Flex } from '@chakra-ui/react'
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
interface Option {
    children: ReactNode;
}

export default function Layout({ children }: Option) {
    const bgColor = '#F8F1F1';

    return (
        <Box
            bgColor={bgColor}
        >
            <Header />
            <Flex
                flexDirection="column"
            >
                {children}
            </Flex>
            <Footer />
        </Box>
    );
}