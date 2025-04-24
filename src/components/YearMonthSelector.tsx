import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface YearMonthSelectorProps {
  selectedYear: number;
  selectedMonth: number;
  setYear: (year: number) => void;
  setMonth: (month: number) => void;
}

const YearMonthSelector: React.FC<YearMonthSelectorProps> = ({
  selectedYear,
  selectedMonth,
  setYear,
  setMonth,
}) => {
  const months = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ];

  return (
    <div className="flex w-full flex-col gap-1 sm:w-full md:w-full lg:w-auto">
      {/* Year Selector */}
      <div className="flex items-center justify-center gap-4 bg-[#efefef] p-4">
        <button
          onClick={() => setYear(selectedYear - 1)}
          className="p-2 text-lg text-[#0f4ea3]"
        >
          <FaChevronLeft />
        </button>
        <h3 className="text-xl font-bold text-[#0f4ea3]">{selectedYear}</h3>
        <button
          onClick={() => setYear(selectedYear + 1)}
          className="p-2 text-lg text-[#0f4ea3]"
        >
          <FaChevronRight />
        </button>
      </div>
      {/* Month Selector */}
      <div className="bg-red flex flex-col overflow-y-scroll bg-[#efefef] md:h-64">
        {months.map((month, index) => (
          <button
            key={month}
            onClick={() => setMonth(index)}
            className={`${
              selectedMonth === index
                ? 'bg-[#0f4ea3] text-white'
                : 'text-[#0f4ea3] '
            } px-[30px] py-[20px] text-left text-[14px] font-light`}
          >
            {month}
          </button>
        ))}
      </div>
    </div>
  );
};

export default YearMonthSelector;
