import { Box, Flex, Text } from '@chakra-ui/react';

type Props = {
  number: number;
  title: string;
  description: string;
};

function Help({ number, title, description }: Props) {
  return (
    <Flex h="96px" w={11 / 12} maxW="400px" gap={5} alignItems="start">
      <Text
        as="span"
        fontFamily="Cormorant Garamond"
        fontSize="7xl"
        lineHeight={0.25}
        fontWeight="bold"
        color="beige.200"
      >
        {number}
      </Text>
      <Box w="304px">
        <Text as="span" fontSize="lg" mb={1}>
          {title}
        </Text>
        <Text fontSize="md">{description}</Text>
      </Box>
    </Flex>
  );
}

export { Help };
export type { Props as HelpProps };
