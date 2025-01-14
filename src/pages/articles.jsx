import AnimatedText from '@/components/AnimatedText';
import {GithubIcon} from '@/components/Icons';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg';
import {motion} from 'framer-motion'

const FramerImage = motion(Image)

const FeaturedArticles = ({type, title, summary, image, link, githubLink}) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 bg-dark dark:bg-light rounded-[2.5rem] w-[101%] h-[103%] rounded-br-3xl
      xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
      " />
      <Link
        className="w-1/2 cursor-pointer overflow-hidden rounded-2lg lg:w-full"
        href={link}
        target="_blank"
      >
        <FramerImage src={image} alt={title} className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration:0.2 }}
          priority 
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light sm:text-sm">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={githubLink} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark
            sm:px-4 sm:text-base
            "
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Article = ({title, image, githubLink, type, link}) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 bg-dark rounded-[2rem] w-[101%] h-[103%] rounded-br-3xl dark:bg-light md:-right-2" />

      <Link
        className="w-full cursor-pointer overflow-hidden rounded-2lg"
        href={link}
        target="_blank"
      >
        <FramerImage src={image} alt={title} className="w-full h-auto" 
          whileHover={{ scale: 1.05 }}
          transition={{ duration:0.2 }}
          priority 
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          50vw"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-2xl font-bold">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline"
          >
            Visit
          </Link>
          <Link href={githubLink} target="_blank" className="w-8">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Nozami | Articles Page</title>
        <meta name="description" content="about nozami" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text={'Articles'} className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedArticles
                title={'Crypto Screener Application'}
                image={project1}
                githubLink={'/'}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link={'/'}
                type={'Featured Article'}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Article
                title={'Crypto Screener Application'}
                image={project1}
                githubLink={'/'}
                link={'/'}
                type={'Featured Article'}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Article
                title={'Crypto Screener Application'}
                image={project1}
                githubLink={'/'}
                link={'/'}
                type={'Featured Article'}
              />
            </div>
            <div className="col-span-12">
              <FeaturedArticles
                title={'Crypto Screener Application'}
                image={project1}
                githubLink={'/'}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link={'/'}
                type={'Featured Article'}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Article
                title={'Crypto Screener Application'}
                image={project1}
                githubLink={'/'}
                link={'/'}
                type={'Featured Article'}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Article
                title={'Crypto Screener Application'}
                image={project1}
                githubLink={'/'}
                link={'/'}
                type={'Featured Article'}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default articles;
