import React from 'react';

const Test = () => {
  return (
    <>
      <div className="mx-2 md:mx-6 lg:mx-10 min-h-screen grid place-content-center">
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="text-[#3a3a3a] text-sm md:text-base">
            We take privacy seriously
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
            Before you get started
          </h1>
          <p className="text-center text-base md:text-lg lg:text-xl mt-4">
            "We won't share your answers with anyone (and won't ever tell you
            which friends said what about you)"
            <br></br>
            with love,
            <span className="text-[#3a3a3a] text-sm md:text-base lg:text-lg pl-1">
              Team akuod
            </span>
          </p>
          <button className="bg-black text-white text-sm md:text-base lg:text-lg rounded-[24px] px-6 py-3">
            Start a test
          </button>
          <span className="text-[#3a3a3a] text-xs md:text-sm">
            Take only 5 minutes
          </span>
        </div>
      </div>
    </>
  );
};

export default Test;
