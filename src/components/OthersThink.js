import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { OTHERS_THINK, PATH } from '@/constants';
import { content } from '../../tailwind.config';

const OthersThink = () => {
  return (
    <>
      <div
        className="mx-2 md:mx-6 lg:mx-10 relative bg-[#eef8fe] min-h-[600px] rounded-2xl grid place-content-center"
        data-aos="fade-up"
      >
        <div className="flex flex-col mx-4 lg:mx-8 py-10 lg:py-16">
          <span className="text-[#3a3a3a] text-sm md:text-base lg:text-lg pl-1 text-center">
            Let your friends, family, and co-workers (anonymously) rate your
            social skills.
          </span>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center"
            data-aos="fade-up"
          >
            Ever wondered what others think of you?
          </h1>
          <motion.div
            transition={{ duration: 0.5 }}
            animate={{ scale: [1, 1.2, 1] }}
            data-aos="fade-up"
            className="relative grid grid-cols-1 sm:grid-cols-3 gap-4 mt-20 mb-4 mx-4"
          >
            <div className="absolute border-l-4 sm:border-l-0 w-2 h-4/6 sm:h-0 sm:rotate-0 sm:w-4/6 left-6 top-[50%] translate-y-[-50%] sm:translate-y-0 sm:top-12 sm:left-[50%] sm:translate-x-[-50%] sm:border-b-4 border-dashed border-[#bbcbcc]"></div>
            {OTHERS_THINK.map((conntent, i) => (
              <div
                key={i}
                data-aos="fade-left"
                data-aos-delay={conntent.data_aos_delay}
                className="z-10 flex items-center sm:flex-col gap-2 col-span-1"
              >
                <div className="flex items-center justify-center relative shrink-0">
                  <Image
                    className="block my-6 h-12 lg:h-16 w-12 lg:w-16"
                    width={128}
                    height={128}
                    src="/images/spinner.png"
                    alt="spinner"
                  />
                  <span className="absolute text-[#bbcbcc] text-xl lg:text-2xl text-center">
                    {i + 1}
                  </span>
                </div>
                <p
                  data-aos={conntent.data_aos_fade}
                  className="text-start sm:text-center text-sm font-semibold"
                >
                  {conntent.text}
                </p>
              </div>
            ))}
          </motion.div>

          <div className="relative grid grid-cols-1 items-center md:grid-cols-4 h-[400px] md:h-[200px] gap-4 mt-10 mb-10 shadow-xl bg-white md:mx-20 rounded-2xl p-2 md:p-4">
            <div className="absolute border-l-4 md:border-l-0 w-2 h-[80%] md:h-0 md:w-9/12 left-[50.2%] md:left-[50%] top-[50%] translate-y-[-50%] md:translate-y-0 md:top-24 translate-x-[-50%] md:border-b-4 border-[#bbcbcc]"></div>

            {PATH.map((path, i) => (
              <div
                key={i}
                className="relative z-10 flex items-center flex-col gap-2 col-span-1"
              >
                <div className={`${path.bg_color} w-6 h-6 rounded-full`}></div>
                <p
                  data-aos={path.data_aos_fade}
                  className={`absolute top-2 ${path.anim_direction}-[54%] mt-4 ml-1 md:-top-${path.top} md:left-${path.left} text-center text-white text-xs ${path.bg_color} rounded-xl px-4 py-2 whitespace-nowrap w-fit`}
                >
                  {path.text}
                </p>
              </div>
            ))}
            {/* <div className="relative z-10 flex items-center flex-col gap-2 col-span-1">
              <div className="bg-blue-500 w-6 h-6 rounded-full"></div>
              <p
                data-aos="fade-up"
                className="absolute top-2 left-[54%] md:-top-10 md:left-16 text-center text-white text-xs bg-blue-500 rounded-xl px-4 py-2"
              >
                You
              </p>
            </div>

            <div className="relative z-10 flex items-center flex-col gap-2 col-span-1">
              <div className="bg-yellow-400 w-6 h-6 rounded-full"></div>
              <p
                data-aos="fade-left"
                className="absolute w-fit top-2 right-[54%] md:top-8 md:-left-0 text-center text-white text-xs bg-yellow-400 rounded-xl px-4 py-2"
              >
                Anonymonos 1
              </p>
            </div>

            <div className="relative z-10 flex items-center flex-col gap-2 col-span-1">
              <div className="bg-pink-400 w-6 h-6 rounded-full"></div>
              <p
                data-aos="fade-right"
                className="absolute w-fit top-2 left-[54%] md:-top-12 md:left-20 text-center text-white text-xs bg-pink-400 rounded-xl px-4 py-2"
              >
                Anonymonos 2
              </p>
            </div>

            <div className="relative z-10 flex items-center flex-col gap-2 col-span-1">
              <div className="bg-green-400 w-6 h-6 rounded-full"></div>
              <p
                data-aos="fade-up"
                className="absolute w-fit top-2 right-[54%] md:top-8 md:left-20 text-center text-white text-xs bg-green-400 rounded-xl px-4 py-2"
              >
                Anonymonos 3
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default OthersThink;
