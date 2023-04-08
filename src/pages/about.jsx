import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import React from 'react';

const about = () => {
  return (
    <>
      <Head>
        <title>Nozami | About Page</title>
        <meta name="description" content="about nozami" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text={'Passion Fuels Purpose!'} />
        </Layout>
      </main>
    </>
  );
};

export default about;
