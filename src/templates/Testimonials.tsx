import { useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

import { testimonials } from '../utils/testimonies';

export default function Testimonials() {
  const [selectedId, setSelectedId] = useState<number>(3);

  const selectedTestimonial = testimonials.find(
    (testimonial) => testimonial.id === selectedId,
  );

  return (
    <section className="flex flex-col items-center gap-16 bg-[#fafafa] px-4 pt-16 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
      <div className="size-[37px] text-[37px] text-[#cbcbcb]">
        <FaQuoteLeft />
      </div>
      <p className="px-[30px] text-center text-[18px] font-light leading-[28px] tracking-wider text-[#303030] md:px-[125px]">
        &quot;{selectedTestimonial?.message}&quot;
      </p>
      <div className="flex w-full flex-col gap-2 md:flex-row md:items-end">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            onClick={() => setSelectedId(testimonial.id)}
            className={`relative flex w-full cursor-pointer flex-col items-center justify-between px-3 py-8 transition-all duration-300 md:rounded-t-xl
              ${
                selectedId === testimonial.id
                  ? 'bg-[#003a8f] text-white'
                  : 'bg-white opacity-70 hover:bg-[#003a8f] hover:text-white hover:opacity-100'
              } `}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className={`mb-5 rounded-full border-2 object-cover transition-all duration-300
                ${selectedId === testimonial.id ? 'size-[111px]' : 'size-[73px]'}
              `}
            />
            <h3
              className={`mb-2 tracking-[.1rem] transition-all duration-300 ${
                selectedId === testimonial.id ? 'text-[22px]' : 'text-[16px] '
              } group-hover:text-white`}
            >
              {testimonial.name}
            </h3>
            <p
              className={`font-light transition-all duration-300 ${
                selectedId === testimonial.id ? 'text-[18px]' : 'text-[14px] '
              } group-hover:text-white`}
            >
              {testimonial.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
