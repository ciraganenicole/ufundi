// components/StatsSection.tsx
import React from 'react';

import { Button } from '@/button/Button';

const Talent: React.FC = () => {
  return (
    <section
      className="relative mt-[70px] w-full bg-cover bg-center px-[45px] py-[25px] text-white "
      style={{
        backgroundImage: 'url("/f6.png")',
        // backgroundBlendMode: 'overlay',
      }}
    >
      {/* Background Image with Blue Overlay */}
      <div className="absolute inset-0 bg-[rgba(15,78,163,0.9)]"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col  items-center justify-between gap-6 text-center md:flex-row">
        <div className="flex flex-col items-center gap-6 md:flex-row md:gap-8">
          <img src="/f5.png" alt="Description " />
          <div className="flex flex-col items-start">
            <h2 className="justify-start text-[24px] font-bold uppercase tracking-widest">
              Nos élèves sont talentueux,
            </h2>
            <p className="text-start text-[24px] font-light leading-[34px] tracking-[1px]">
              passionnés, travailleurs et pleins d&apos;idées.
            </p>
          </div>
        </div>
        <Button variant="primary" size="medium">
          En savoir plus
        </Button>
      </div>
    </section>
  );
};

export { Talent };
