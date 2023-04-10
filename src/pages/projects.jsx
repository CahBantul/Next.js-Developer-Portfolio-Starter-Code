import AnimatedText from '@/components/AnimatedText';
import {GithubIcon} from '@/components/Icons';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg';

const FeaturedProject = ({type, title, summary, image, link, githubLink}) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl">
      <div className="absolute top-0 -right-3 -z-10 bg-dark rounded-[2.5rem] w-[101%] h-[103%] rounded-br-3xl" />
      <Link
        className="w-1/2 cursor-pointer overflow-hidden rounded-2lg"
        href={link}
        target="_blank"
      >
        <Image src={image} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={githubLink} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({title, image, githubLink, type, link}) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative">
      <div className="absolute top-0 -right-3 -z-10 bg-dark rounded-[2rem] w-[101%] h-[103%] rounded-br-3xl" />

      <Link
        className="w-full cursor-pointer overflow-hidden rounded-2lg"
        href={link}
        target="_blank"
      >
        <Image src={image} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
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

const projects = () => {
  return (
    <>
      <Head>
        <title>Nozami | Projects Page</title>
        <meta name="description" content="about nozami" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text={'Projects'} className="mb-16" />
          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                title={'Crypto Screener Application'}
                image={project1}
                githubLink={'/'}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link={'/'}
                type={'Featured Project'}
              />
            </div>
            <div className="col-span-6">
              <Project
                title={'Crypto Screener Application'}
                image={project1}
                githubLink={'/'}
                link={'/'}
                type={'Featured Project'}
              />
            </div>
            <div className="col-span-6">
              <Project
                title={'Crypto Screener Application'}
                image={project1}
                githubLink={'/'}
                link={'/'}
                type={'Featured Project'}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title={'Crypto Screener Application'}
                image={project1}
                githubLink={'/'}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link={'/'}
                type={'Featured Project'}
              />
            </div>
            <div className="col-span-6">
              <Project
                title={'Crypto Screener Application'}
                image={project1}
                githubLink={'/'}
                link={'/'}
                type={'Featured Project'}
              />
            </div>
            <div className="col-span-6">
              <Project
                title={'Crypto Screener Application'}
                image={project1}
                githubLink={'/'}
                link={'/'}
                type={'Featured Project'}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
