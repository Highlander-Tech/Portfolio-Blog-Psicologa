import { Heading, HeadingProps } from '@chakra-ui/react';

interface Props extends HeadingProps {
  text: string;
}

export function Title({ text, ...rest }: Props) {
  return (
    <Heading as="h2" fontSize="3xl" fontWeight="bold" color="brown" {...rest}>
      {text}
    </Heading>
  );
}
