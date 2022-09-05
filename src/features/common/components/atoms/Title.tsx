import type { HeadingProps } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';

type Props = {
  text: string;
} & HeadingProps;

export function Title({ text, ...rest }: Props) {
  return (
    <Heading as="h2" fontSize="3xl" fontWeight="bold" color="brown" {...rest}>
      {text}
    </Heading>
  );
}
