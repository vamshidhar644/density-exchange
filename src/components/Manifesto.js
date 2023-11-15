import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Manifesto = () => {
  return (
    <>
      <motion.div className="mx-2 md:mx-6 lg:mx-10 relative bg-[#fef6f0] min-h-[600px] rounded-2xl grid place-content-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mx-4 lg:mx-8 py-10 lg:py-4">
          <div className="flex flex-col items-start lg:items-center">
            <div data-aos="fade-right">
              <span className="text-[#3a3a3a] text-sm md:text-base lg:text-lg pl-1">
                Built out of frustration
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-start">
                Meet the ahead app
              </h1>
            </div>
            <Image
              data-aos="zoom-in"
              className="block my-6 h-36 lg:h-40 w-auto"
              width={150}
              height={150}
              src="/images/10.png"
              alt="playerPink"
            />
          </div>
          <div className="flex flex-col gap-y-4 w-3/4 font-semibold">
            <p className="text-sm md:text-base lg:text-lg">
              A personalized pocket coach that provides bite- sized,
              science-driven tools to boost emotional intelligence.
            </p>
            <p className="text-start text-sm md:text-base lg:text-lg">
              Think of it as a pocket cheerleader towards a better, more
              fulfilling.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Manifesto;
