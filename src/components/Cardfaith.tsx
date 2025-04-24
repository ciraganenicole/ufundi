import React from 'react';

interface CardfaithCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const Cardfaith: React.FC<CardfaithCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <div className="mt-4 gap-12 text-center">
      <img src={imageSrc} alt={title} className="size-18 mx-auto" />
      <h4 className="my-[25px] text-[22px] font-[380] tracking-widest text-[#303030]">
        {title}
      </h4>
      <p className="text-center text-[14px] font-light leading-[20px] tracking-wider text-[#6a6a6a]">
        {description}
      </p>
    </div>
  );
};

export default Cardfaith;
