import React from 'react';

interface NewsCardProps {
  image: string;
  title: string;
  description: string;
  author: string;
  date: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  image,
  title,
  description,
  author,
  date,
}) => {
  return (
    <div className="overflow-hidden rounded border bg-white transition-all hover:scale-105 hover:shadow-sm">
      <img src={image} alt={title} className="h-56 w-full object-cover" />
      <div className="p-5">
        <div className="mb-2 flex items-center justify-between text-[12px] text-[#6a6a6a]">
          <span>{author}</span>
          <span>{date}</span>
        </div>
        <h3 className="text-md font-semibold text-[#303030]">{title}</h3>
        <p className="mt-4 text-[13px] font-light leading-[22px] text-[#818181]">
          {description}
        </p>
        <a
          href="#"
          className="mt-4 inline-block text-sm font-medium text-orange-400 hover:text-orange-600 hover:underline"
        >
          En savoir plus
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
