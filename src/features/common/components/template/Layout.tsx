import type { ReactNode } from 'react';
import Head from 'next/head';

import { Footer, Header } from '../molecules';

type Props = {
  children: ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Monique Batista</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}
