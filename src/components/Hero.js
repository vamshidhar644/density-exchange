import Image from 'next/image';
import React from 'react';
import AppStoreButtons from './AppStoreButtons';

const Hero = () => {
  return (
    <>
      <div className="relative bg-[#efecff] min-h-[600px] rounded-2xl grid place-content-center mx-2 md:mx-6 lg:mx-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-8 py-10 lg:py-4">
          <div data-aos="zoom-in">
            <span className="text-[#3a3a3a] text-sm md:text-base lg:text-lg pl-1">
              Ahead app
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-start">
              Master your life by mastering emotions
            </h1>

            <AppStoreButtons />
          </div>
          <div className="flex items-center justify-center">
            <Image
              data-aos="fade-left"
              className="block h-64 lg:h-96 w-auto"
              width={512}
              height={512}
              src="/images/appImage.png"
              alt="app"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
