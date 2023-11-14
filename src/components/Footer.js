import Image from 'next/image';
import React from 'react';
import { FaLocationArrow, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="border-t-4 border-gray-200 grid place-content-center pt-20 pb-10 text-center mx-0">
      <div className="flex flex-col items-center justify-center">
        <Image src="/images/logo.png" alt="logo" width={64} height={64} />
        <h1 className="text-lg text-[#80be1f] md:text-xl lg:text-2xl font-semibold text-start">
          ahead
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-10 my-4">
          <div className="flex items-center justify-center gap-2">
            <FaLocationArrow className="w-8 h-8 p-2 inline-block bg-[#80be1f] rounded-full" />
            <p className="text-sm md:text-base lg:text-xl font-semibold text-start">
              Berlin, Germany
            </p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <FaPhoneAlt className="w-8 h-8 p-2 inline-block bg-[#80be1f] rounded-full" />
            <p className="text-sm md:text-base lg:text-xl font-semibold text-start">
              +49 123 456 789
            </p>
          </div>
        </div>
        <button className="flex items-center bg-black text-white rounded-lg px-2 lg:px-3 pr-3 lg:pr-4 py-1 space-x-1 hover:opacity-80 transition ease-in-out duration-200">
          <div className="flex-shrink-0">
            <Image
              src="/images/apple.png"
              className="w-6 h-6"
              alt="App Store Icon"
              width={64}
              height={64}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[12px]">Download on the</span>
            <span className="text-sm font-semibold">App Store</span>
          </div>
        </button>
        <p className="text-xs lg:text-sm text-start mt-4">
          © {new Date().getFullYear()} ahead All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
