import { VACANCIES } from '@/constants';
import React from 'react';

const Vacancies = () => {
  return (
    <>
      <div className="mx-2 md:mx-6 lg:mx-10 px-8 py-16 md:py-24 lg:py-48">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-start mb-2 lg:mb-0 lg:mr-2 col-span-1 md:col-span-2 lg:col-span-1">
          Open vacancies
        </h1>
        <div className="grid grid-flow-row sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4 mt-6">
          {VACANCIES.map((vacancies, i) => (
            <div
              key={i}
              data-aos="fade-right"
              className="bg-[#fefbec] p-4 rounded-xl flex flex-col"
            >
              <h2 className="text-sm md:text-base lg:text-xl font-semibold text-start">
                {vacancies.title}
              </h2>
              <ul className="list-disc list-inside mt-2">
                {vacancies.subtitle.map((subtitle, i) => (
                  <li key={i}>{subtitle}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Vacancies;
