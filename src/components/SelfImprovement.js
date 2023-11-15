import { SELF_IMPROVEMENT } from '@/constants';
import Image from 'next/image';
import React from 'react';

const SelfImprovement = () => {
  return (
    <>
      <div className="mx-4 md:mx-8 lg:mx-16 py-20">
        <span
          data-aos="fade-up"
          className="text-[#3a3a3a] text-sm md:text-base lg:text-lg sm:text-xs"
        >
          {"Wrong with self-improvement & how we're fixing it."}
        </span>
        <div data-aos="fade-left" className="flex items-center mt-4">
          <h1 className="text-3xl w-fit sm:text-4xl lg:text-5xl font-bold text-start mr-2">
            Self-improvement. Ugh.
          </h1>
          <Image
            data-aos="zoom-in"
            data-aos-delay={200}
            className="block -rotate-12 h-24 lg:h-20 w-auto"
            width={128}
            height={128}
            src="/images/11.png"
            alt="playerBeige"
          />
        </div>
        <div className="flex flex-col mx-4 md:mx-16 lg:mx-32 gap-y-8 mt-8">
          {SELF_IMPROVEMENT.map((self, i) => (
            <div
              key={i}
              data-aos="fade-left"
              data-aos-delay={100}
              className="flex flex-col gap-y-2"
            >
              <h2 className="text-sm md:text-base lg:text-lg font-bold text-start">
                {self.title}
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-[#7c7a88] font-semibold">
                {self.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-2 md:mx-6 lg:mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-6 px-8 py-48 md:py-64 lg:py-72">
        <h1
          data-aos="fade-right"
          className="max-w-[260px] text-2xl sm:text-3xl lg:text-4xl font-bold text-start mb-4 lg:mb-0 lg:mr-2 col-span-1 md:col-span-2 lg:col-span-1"
        >
          Be the best you with EQ
        </h1>
        <p
          className="text-sm lg:text-xl text-[#666568] font-semibold py-2"
          data-aos="fade-left"
          data-aos-delay={200}
        >
          Not having your own emotions under control might be holding you back.
        </p>
        <p
          className="text-sm lg:text-xl text-[#666568] font-semibold py-2"
          data-aos="fade-left"
          data-aos-delay={400}
        >
          Additionally, not understanding those of others stops you from being
          parent, friend you can be.
        </p>
      </div>
    </>
  );
};

export default SelfImprovement;
