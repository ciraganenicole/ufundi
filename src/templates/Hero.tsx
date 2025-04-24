import React from 'react';

import { Button } from '@/button/Button';
import Navbar from '@/navigation/Navbar';

const Hero: React.FC = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center text-white "
      style={{
        backgroundImage: 'url("/bib.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-[rgba(15,78,163,0.9)]"></div>
      <div className="relative flex flex-col px-4 text-center sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 ">
        <Navbar />
        <div className="z-0 mb-16 flex w-full gap-4 pt-[150px] md:mb-0 md:pt-[180px]">
          <div className="hidden w-[41%] md:block">
            <img
              src="/teacher-2.png"
              alt="Background"
              className=" -z-30 w-full"
            />
          </div>
          <div className="flex w-full flex-col items-center gap-4 pt-[100px] text-center md:w-[59%] md:items-start md:text-left">
            <h2 className="break-words text-[32px] font-bold tracking-wider text-white md:text-[52px]">
              COLLEGE <span className="text-[#f5ab35]">UFUNDI</span>
            </h2>
            <p className="text-center text-[15px] font-[300] leading-[24px] md:text-start md:text-[16px]">
              Considérons l&apos;éducation comme le moyen de développer nos plus
              grandes capacités, car chacun de nous porte en lui un espoir et un
              rêve qui, une fois réalisés, peuvent se traduire par un bénéfice
              pour tous et une plus grande force pour notre nation. (John F.
              Kennedy)
            </p>
            <Button variant="secondary" size="medium">
              VISITER
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
