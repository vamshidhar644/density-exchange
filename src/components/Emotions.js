import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { MANIFESTO } from '@/constants';

const Emotions = () => {
  return (
    <>
      <div className="mx-2 md:mx-6 lg:mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-6 px-8 py-16 md:py-24 lg:py-48">
        <h1
          data-aos="fade-right"
          className="max-w-[260px] text-2xl sm:text-3xl lg:text-4xl font-bold text-start mb-2 lg:mb-0 lg:mr-2 col-span-1 md:col-span-2 lg:col-span-1"
        >
          EQ beats IQ
        </h1>
        <p
          className="text-sm lg:text-xl text-[#666568] font-semibold py-2"
          data-aos="fade-left"
          data-aos-delay={200}
        >
          People with high emotional intelligence (EQ) live more fulfilled
          lives. They tend to be happier and have healthier relationships.
        </p>
        <p
          className="text-sm lg:text-xl text-[#666568] font-semibold py-2"
          data-aos="fade-left"
          data-aos-delay={400}
        >
          They are more successful in their pursuits and make for inspiring
          leaders. According to science, they earn $29k a year.
        </p>
      </div>

      <div className="mx-2 md:mx-6 lg:mx-10 flex items-center my-auto">
        <h1
          data-aos="fade-right"
          className="text-3xl w-fit sm:text-4xl lg:text-5xl font-bold text-start mr-2 space-x-1"
        >
          Does this sound familiar...
        </h1>
        <Image
          data-aos="zoom-in"
          data-aos-delay={300}
          className="block rotate-12 h-16 lg:h-20 w-auto"
          width={140}
          height={140}
          src="/images/4.jpg"
          alt="player"
        />
      </div>

      <div className="overflow-auto scrollbar-hide mb-36" data-aos="fade-up">
        <div className="relative px-12 flex items-center justify-start  w-full gap-x-16 py-8">
          {MANIFESTO.map((manifesto, i) => (
            <motion.div
              key={i}
              className="flex items-center justify-center w-[300px] h-full min-w-[300px] max-w-[300px]"
              animate={{ rotate: 0 }}
              transition={{
                duration: manifesto.duration,
                ease: 'linear',
              }}
              whileHover={{ rotate: manifesto.rotate }}
            >
              <div className="flex items-center justify-center w-[300px] h-full min-w-[300px] max-w-[300px]">
                <div
                  className={`${manifesto.background} px-4 py-6 rounded-xl w-full grow h-full `}
                >
                  <h1 className="text-3xl lg:text-4xl font-bold text-start mb-4">
                    {manifesto.emoji}
                  </h1>
                  <h2 className="text-sm lg:text-xl font-bold">
                    {manifesto.title}
                  </h2>
                  <p
                    className={`text-xs lg:text-sm ${manifesto.text_color} mt-1`}
                  >
                    {manifesto.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Emotions;
