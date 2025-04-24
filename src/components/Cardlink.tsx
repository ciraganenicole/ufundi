import Link from 'next/link';
import React, { useState } from 'react';

interface DetailSection {
  title: string;
  items: string[];
}

interface CardLinkProps {
  image: string;
  bgColor: string;
  title: string;
  subtitle: string;
  link: string;
  details?: DetailSection[];
}

const CardLink: React.FC<CardLinkProps> = ({
  image,
  bgColor,
  title,
  subtitle,
  link,
  details,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Link href={link}>
      <div
        className="relative cursor-pointer bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
        onMouseEnter={() => setShowDetails(true)}
        onMouseLeave={() => setShowDetails(false)}
      >
        <div
          className={`absolute inset-0 h-full ${bgColor} transition duration-300 hover:opacity-90`}
        ></div>

        {details && showDetails && (
          <div className="absolute inset-x-0 bottom-full z-20 max-h-[400px] overflow-y-auto bg-[rgba(74,217,217,0.9)] p-6 text-white">
            {details.map((section, index) => (
              <div key={index} className="mb-3">
                <h3 className="text-[18px] font-semibold">{section.title}</h3>
                <ul className="ml-10 list-disc text-[14px]">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        <div className="relative z-10 flex h-full flex-col px-6 pb-6 pt-[125px] tracking-[2px] text-white">
          <h2 className="text-[30px] font-bold leading-none tracking-wider">
            {title}
          </h2>
          <span className="block text-[30px] font-thin leading-none tracking-wider">
            {subtitle}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CardLink;
