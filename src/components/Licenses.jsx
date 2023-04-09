import {useScroll, motion} from 'framer-motion';
import React, {useRef} from 'react';
import LiIcon from './LiIcon';

const Details = ({type, issuedBy, issued}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{y: 50}}
        whileInView={{y: 0}}
        transition={{duration: 0.5, type: 'spring'}}
      >
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-dark">{issuedBy}</span>
        <p className="capitalize font-medium text-dark/50">Issued {issued}</p>
      </motion.div>
    </li>
  );
};

const Licenses = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold w-full text-center mb-32 text-8xl">
        Licenses & Certifications
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{scaleY: scrollYProgress}}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="flex flex-col w-full items-start justify-between ml-4">
          <Details
            type={'Belajar Membuat Aplikasi Back-End untuk Pemula'}
            issuedBy={'Dicoding Indonesia'}
            issued={'March 2023'}
          />
          <Details
            type={'Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)'}
            issuedBy={'Dicoding Indonesia'}
            issued={'March 2023'}
          />
          <Details
            type={'Belajar Dasar-Dasar  Development and Operations (DevOps)'}
            issuedBy={'Dicoding Indonesia'}
            issued={'Dec 2022'}
          />
          <Details
            type={'Belajar Jaringan Komputer untuk Pemula'}
            issuedBy={'Dicoding Indonesia'}
            issued={'Dec 2022'}
          />
          <Details
            type={'Belajar Javascript (Basic)'}
            issuedBy={'HackerRank'}
            issued={'Aug 2022'}
          />
          <Details
            type={'Belajar Dasar Pemrograman JavaScript'}
            issuedBy={'Dicoding Indonesia'}
            issued={'Jun 2022'}
          />

          <Details
            type={'Back End Development and APIs'}
            issuedBy={'freeCodeCamp'}
            issued={'Jan 2022'}
          />
          <Details
            type={'Menjadi Front-End Web Developer Expert'}
            issuedBy={'Dicoding Indonesia'}
            issued={'Jul 2021'}
          />
          <Details
            type={'Belajar Membuat Front-End Web untuk Pemula'}
            issuedBy={'Dicoding Indonesia'}
            issued={'Jun 2022'}
          />

          <Details
            type={'Belajar Prinsip Pemrograman SOLID'}
            issuedBy={'Dicoding Indonesia'}
            issued={'Jun 2021'}
          />
          <Details
            type={'Belajar Fundamental Front-End Web Development'}
            issuedBy={'Dicoding Indonesia'}
            issued={'Oct 2020'}
          />
          <Details
            type={'Belajar Dasar Pemrograman Web'}
            issuedBy={'Dicoding Indonesia'}
            issued={'May 2020'}
          />
        </ul>
      </div>
    </div>
  );
};

export default Licenses;
