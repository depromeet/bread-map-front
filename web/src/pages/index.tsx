import type { NextPage } from 'next';
import Head from 'next/head';
import {
  Card,
  Container,
  Description,
  Grid,
  Main,
  // Footer,
  Title,
} from '@/components/home';

import Footer from 'components/Footer' 

interface GridItem {
  href: string;
  title: string;
  body: string;
}

const gridItems: GridItem[] = [
  {
    href: 'https://nextjs.org/docs',
    title: 'Documentation &rarr;',
    body: 'Find in-depth information about Next.js features and API.',
  },
  {
    href: 'https://nextjs.org/learn',
    title: 'Learn &rarr;',
    body: 'Learn about Next.js in an interactive course with quizzes!',
  },
  {
    href: 'https://github.com/vercel/next.js/tree/master/examples',
    title: 'Examples &rarr;',
    body: 'Discover and deploy boilerplate example Next.js projects.',
  },
  {
    href: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
    title: 'Deploy &rarr;',
    body: 'Instantly deploy your Next.js site to a public URL with Vercel.',
  },
];

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Title />
        <Description />
        <Grid>
          {gridItems.map(({ href, title, body }) => (
            <Card
              href={href}
              title={title}
              body={body}
              key={title}
            />
          ))}
        </Grid>
      </Main>
      <Footer />
    </Container>
  );
};

export default Home;
