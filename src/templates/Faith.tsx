import React from 'react';

import Cardfaith from '@/components/Cardfaith';
import { Talent } from '@/components/Talent';

const Faith: React.FC = () => {
  return (
    <section className="flex flex-col items-center bg-[#ffffff] py-12  md:px-8 lg:px-16 xl:px-24 2xl:px-32">
      <div className="mb-[70px] w-full px-4 text-center sm:px-0 md:w-[58%]">
        <h2 className="text-[26px] font-normal tracking-wider text-[#303030]">
          NOUS AVONS CONFIANCE EN L&apos;AVENIR DE NOS élèveS
        </h2>
        <p className=" mt-6 w-full text-[14px] font-[350] leading-[25px] tracking-wider text-[#6a6a6a]">
          {`Nos élèves sont talentueux, travailleurs et pleins d'idées. 
          Nous les encourageons et leur donnons les moyens de concrétiser leurs idées. 
          Les opportunités pratiques sont notre priorité.`}
        </p>
      </div>
      <div className=" grid grid-cols-1 gap-6 px-4 sm:px-0 md:grid-cols-2 md:gap-20 lg:grid-cols-4">
        <Cardfaith
          imageSrc="/f1.png"
          title="Motivation"
          description="Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat."
        />
        <Cardfaith
          imageSrc="/f2.png"
          title="Engagement"
          description="Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat."
        />
        <Cardfaith
          imageSrc="/f3.png"
          title="Diplôme"
          description="Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat."
        />
        <Cardfaith
          imageSrc="/f4.png"
          title="Prix"
          description="Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat."
        />
      </div>
      <Talent />
    </section>
  );
};

export default Faith;
