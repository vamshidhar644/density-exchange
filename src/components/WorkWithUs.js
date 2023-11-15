import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { WORK_WITH_US } from '@/constants';

const WorkWithUs = () => {
  return (
    <>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mx-2 md:mx-6 lg:mx-10 relative bg-[#f3f1ff] min-h-[600px] rounded-2xl grid place-content-center"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-4 lg:mx-8 py-10 lg:py-16">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-start">
              Work with us
            </h1>
            <div
              data-aos="fade-up"
              className="bg-white px-8 py-6 rounded-2xl mt-4 pb-10"
            >
              <Image
                className="block h-10 lg:h-16 rounded-full w-fit"
                width={128}
                height={128}
                src="/images/playerBlueFace.png"
                alt="playerBlueFace"
              />
              <h2 className="mt-2 text-sm md:text-base lg:text-xl font-bold text-start">
                About
              </h2>
              <p className="text-xs md:text-sm lg:text-base text-start mt-2">
                {
                  "At ahead our goal is to make self- improvement fun and lasting. We know there's a way how to make it work. And that's what aHead is all about!"
                }
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay={200}
              className="bg-[#fef6f0] px-8 py-6 rounded-2xl -mt-6"
            >
              <h2 className="mt-2 text-sm md:text-base lg:text-xl font-bold text-start">
                Product
              </h2>
              <p className="text-xs md:text-sm lg:text-base text-start mt-2">
                Sure, you could spend ages reading books or sitting in seminars
                on how to become a better spouse, parent, or manager - like we
                did...
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-end mr-12 text-[#80be1f]">
              ahead
            </h1>
            <div className="grid grid-flow-row items-center justify-center overflow-y-auto px-2 sm:px-10 gap-y-4 max-h-[500px] py-4">
              {WORK_WITH_US.map((content, i) => (
                <div
                  className="flex flex-col p-6 items-center justify-center gap-4 bg-white rounded-xl"
                  key={i}
                >
                  <h1 className="text-sm md:text-base lg:text-xl font-bold text-start">
                    {content.title}
                  </h1>
                  <p className="text-start text-base md:text-lg lg:text-xl">
                    {content.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default WorkWithUs;
