import React from 'react';

import { Button } from '@/button/Button';

const Video = () => {
  return (
    <div className="mt-12 flex w-full flex-col gap-8 p-6 px-4 md:flex-row md:justify-between md:p-12 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
      <div className="flex w-full flex-col items-start gap-[20px] md:w-1/2 md:gap-[40px]">
        <h4 className="text-[26px] tracking-wide text-[#303030] md:leading-[1.3636]">
          VOIR NOTRE VIDEO
        </h4>
        <p className="text-[14px] font-light leading-[25px] tracking-wider text-[#818181]">
          De l&apos;enseignant, à l&apos;assistant, aux élèves, il existe une
          atmosphère une atmosphère familiale parfaite pour nourrir les
          capacités académiques. Lorem ipsum dolor sit amet, consectetuer
          adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
          dolore magna aliquam erat volutpat. adipiscing elit, sed diam nonummy
          nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
        </p>
        <Button variant="primary" size="medium">
          En savoir plus
        </Button>
      </div>

      <div
        className="relative h-56 w-full bg-cover bg-center shadow-xl md:h-80 md:w-1/2"
        style={{ backgroundImage: "url('/vid.jpg')" }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="flex  size-16 items-center justify-center rounded-full border-[5px] border-white p-3 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-8 text-white md:size-8"
              viewBox="0 0 24 24"
              fill="#fff"
            >
              <path d="M5 3v18l15-9L5 3z" className="c" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Video;
