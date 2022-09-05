import { Box, Flex, Text } from '@chakra-ui/react';

type Props = {
  number: number;
  title: string;
  description: string;
};

function Help({ number, title, description }: Props) {
  // TODO Tirar margem negativa e alinhar usando flexbox
  return (
    <Flex h="96px">
      <Text
        fontFamily="Cormorant Garamond"
        fontSize="7xl"
        fontWeight="bold"
        color="beige.200"
        mr="24px"
        mt="-40px"
      >
        {number}
      </Text>
      <Box fontFamily="Roboto" color="brown" textAlign="left" w="304px">
        <Text fontSize="lg" mb="8px">
          {title}
        </Text>
        <Text fontSize="md">{description}</Text>
      </Box>
    </Flex>
  );
}

export { Help };
export type { Props as HelpProps };
