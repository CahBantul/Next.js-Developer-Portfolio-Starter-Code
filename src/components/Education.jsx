import {useScroll, motion} from 'framer-motion';
import React, {useRef} from 'react';
import LiIcon from './LiIcon';

const Details = ({type, time, place, info}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{y: 50}}
        whileInView={{y: 0}}
        transition={{duration: 0.5, type: 'spring'}}
      >
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full text-justify">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold w-full text-center mb-32 text-8xl">Education</h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{scaleY: scrollYProgress}}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"
        />
        <ul className="flex flex-col w-full items-start justify-between ml-4">
          <Details
            type={'Bachelor of Naval Architecture'}
            time={'2010 - 2016'}
            place={'Institut Teknologi Sepuluh Nopember Surabaya'}
            info={
              'Naval architecture is an engineering field that designs, constructs, and maintains ships and other marine vessels. It includes areas such as hydrodynamics, stability, and resistance, and ensures safety and efficiency.'
            }
          />
          <Details
            type={'Full Stack Web Developer'}
            time={'Jan 2021 - Aug 2021'}
            place={'Binar Academy'}
            info={
              'This course is a 12-week intensive program that covers the fundamentals of web development, from front-end to back-end. It covers various topics such as HTML, CSS, JavaScript, web frameworks (expressjs and reactjs), server-side programming, and databases.'
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
