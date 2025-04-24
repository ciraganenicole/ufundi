import React, { useState } from 'react';

import NewsCard from '../components/NewsCard';
import { NewsData } from '../utils/NewsData';

const newsData = NewsData;
const ITEMS_PER_PAGE = 4;

const NewsSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(newsData.length / ITEMS_PER_PAGE);

  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return newsData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pages: JSX.Element[] = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pages.push(
          <button
            key={i}
            className={`mx-1 rounded-sm px-3 py-1 text-sm font-medium ${
              i === currentPage
                ? 'bg-orange-500 px-6 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>,
        );
      } else if (
        (i === currentPage - 2 || i === currentPage + 2) &&
        i !== 1 &&
        i !== totalPages
      ) {
        pages.push(
          <span key={i} className="text-md mx-1 px-3 py-1 text-gray-400">
            ...
          </span>,
        );
      }
    }
    return pages;
  };

  return (
    <section className=" px-4 py-12 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-semiBold mb-12 text-center text-2xl uppercase text-gray-800">
          Nos dernières nouvelles
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {getCurrentPageData().map((news, index) => (
            <NewsCard
              key={index}
              image={news.image}
              title={news.title}
              description={news.description}
              author={news.author}
              date={news.date}
            />
          ))}
        </div>
        <div className="mt-8 flex justify-center">{renderPagination()}</div>
      </div>
    </section>
  );
};

export default NewsSection;
