import React from 'react';

import { schoolData } from '../utils/schoolData';

interface EventDetailsProps {
  selectedYear: number;
  selectedMonth: number;
}

const EventDetails: React.FC<EventDetailsProps> = ({
  selectedYear,
  selectedMonth,
}) => {
  const events = schoolData[selectedYear]?.[selectedMonth] || [];

  return (
    <div className="lg:auto flex w-full flex-col gap-2 p-8 sm:w-full md:w-1/2">
      <div className="border-b py-3 ">
        <h3 className="text-[22px] font-normal leading-[1.33333] text-[#555]">
          Explications
        </h3>
      </div>
      {events.map((event, index) => (
        <div key={index} className="flex flex-col gap-2 md:flex-row">
          <p className="font-bold text-[#555]">
            {event.start} - {event.end} :
          </p>
          <p className="font-light text-[#555]">{event.description}</p>
        </div>
      ))}
    </div>
  );
};

export { EventDetails };
