import Head from 'next/head';

import { Inter } from 'next/font/google';

// Because it is a component, not a page, serverside rendering cannot be performed.

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>{children}</main>
    </>
  );
}
