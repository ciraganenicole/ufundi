import React from 'react';

import { schoolData } from '../utils/schoolData';

interface MonthDetailsProps {
  selectedYear: number;
  selectedMonth: number;
}

const colors = {
  exam: '#39b54a',
  tour: '#ed145b',
  osis: '#733d96',
  report: '#4ad9d9',
};

const MonthDetails: React.FC<MonthDetailsProps> = ({
  selectedYear,
  selectedMonth,
}) => {
  const firstDayOfMonth =
    (new Date(selectedYear, selectedMonth, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
  const daysInPrevMonth = new Date(selectedYear, selectedMonth, 0).getDate();

  const events = schoolData[selectedYear]?.[selectedMonth] || [];

  const days = [
    ...[...Array(firstDayOfMonth)].map((_, i) => ({
      day: daysInPrevMonth - firstDayOfMonth + i + 1,
      isCurrentMonth: false,
    })),
    ...[...Array(daysInMonth)].map((_, i) => ({
      day: i + 1,
      isCurrentMonth: true,
    })),
    ...[...Array(42 - daysInMonth - firstDayOfMonth)].map((_, i) => ({
      day: i + 1,
      isCurrentMonth: false,
    })),
  ];

  return (
    <div className=" flex w-full flex-col bg-[#fbfbfb] p-8 sm:w-full md:w-1/2 lg:w-auto">
      {/* Calendar Header */}
      <div className="grid grid-cols-7 border-b py-2 text-center font-semibold text-gray-700">
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
          <div
            key={index}
            className="py-2 text-[12px] font-bold uppercase text-[#303030]"
          >
            {day}
          </div>
        ))}
      </div>
      {/* Calendar Grid */}
      <div className="grid grid-cols-7">
        {days.map(({ day, isCurrentMonth }, index) => {
          const dayEvents = events.filter(
            (event) => day >= event.start && day <= event.end,
          );

          const isStart = dayEvents.some((event) => event.start === day);
          const isEnd = dayEvents.some((event) => event.end === day);
          const eventColor = dayEvents[0]?.color ?? '';

          return (
            <div
              key={index}
              className={`-mr-[5px] mb-[12px] flex items-center justify-center px-4 py-[5px] text-[14px] font-light leading-[14px] transition-all duration-200 ${
                isCurrentMonth ? 'bg-white' : 'bg-gray-100 text-gray-400'
              } ${
                dayEvents.length > 0 ? 'text-white' : 'text-black'
              } ${isStart ? 'rounded-l-full' : ''} ${isEnd ? 'rounded-r-full' : ''}`}
              style={{
                backgroundColor:
                  isCurrentMonth && dayEvents.length > 0
                    ? eventColor
                    : 'transparent',
              }}
            >
              {day}
            </div>
          );
        })}
      </div>
      {/* Legend */}
      <div className="mt-4 flex justify-center gap-4">
        {Object.entries(colors).map(([key, value]) => (
          <div key={key} className="flex items-center gap-2">
            <span
              className="block size-3 rounded-full"
              style={{ backgroundColor: value }}
            ></span>
            <span className="text-[12px] font-light capitalize text-[#909090]">
              {key}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthDetails;
