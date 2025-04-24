import { useState } from 'react';

import { EventDetails } from '../components/EventDetails';
import MonthDetails from '../components/MonthDetails';
import YearMonthSelector from '../components/YearMonthSelector';

const Calendar = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  return (
    <div className="mb-16 flex flex-col items-center gap-16 px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
      <div className="flex flex-col items-center md:w-3/5">
        <h3 className="mb-8 text-[26px] capitalize leading-[1.3636] tracking-wider text-[#303030]">
          CALENDRIER ACADEMIQUE
        </h3>
        <p className="w-full text-center text-[14px] font-[350] leading-[25px] tracking-wide text-[#6a6a6a]">
          Nos élèves sont talentueux, travailleurs et pleins d&apos;idées. Nous
          les encourageons et leur donnons les moyens de concrétiser leurs
          idées. Les opportunités pratiques sont notre priorité.
          <a href="#" className="text-[#003a8f] underline">
            Voir le calendrier complet
          </a>
        </p>
      </div>
      <div className="flex w-full flex-wrap border">
        <YearMonthSelector
          selectedYear={selectedYear}
          selectedMonth={selectedMonth}
          setYear={setSelectedYear}
          setMonth={setSelectedMonth}
        />
        <MonthDetails
          selectedYear={selectedYear}
          selectedMonth={selectedMonth}
        />
        <EventDetails
          selectedYear={selectedYear}
          selectedMonth={selectedMonth}
        />
      </div>
    </div>
  );
};

export { Calendar };
