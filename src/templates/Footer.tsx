import React from 'react';
import { FaCloud, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
  const footerData = [
    { title: 'A PROPOS', links: ['TEACHERS', 'CONTACT'] },
    { title: 'ÉVÉNEMENTS', links: ['EXCURSIONS', 'GALLERY'] },
    { title: 'ACADEMICS', links: ['TIMETABLE', 'NEWS'] },
  ];
  return (
    <footer className="bg-[#054499] text-gray-400 md:px-0">
      <div className="flex flex-col md:flex-row ">
        <div className="flex w-full items-center justify-center bg-[#003a8f] py-[50px] md:ml-14  md:w-1/4  md:px-12">
          {/* <img src="/logo.svg" alt="Logo" className="max-h-[58px]" /> */}
          <h1 className="text-[24px] font-bold text-white">COLLEGE UFUNDI</h1>
        </div>

        <div className="flex w-full flex-col items-center gap-8 bg-[#054499] px-6 py-8 md:flex-row md:gap-16 ">
          <div className="grid w-full grid-cols-2 justify-around gap-y-6 border-b border-[#a6b5d4] pb-8 md:ml-12 md:grid-cols-4 md:border-none md:py-12 md:pb-0">
            {footerData.map((section, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 text-gray-500"
              >
                <h3 className="text-[15px] font-normal tracking-widest text-gray-300">
                  {section.title}
                </h3>
                {section.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href="#"
                    className="text-[15px] font-light tracking-widest hover:underline"
                  >
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 md:mt-8 md:p-4">
            <div className="flex size-7 items-center justify-center rounded-full bg-[#9db2d1]">
              <FaFacebookF className="text-sm text-[#003f8a]" />
            </div>
            <div className="flex size-7 items-center justify-center rounded-full bg-[#9db2d1]">
              <FaLinkedinIn className="text-sm text-[#003f8a]" />
            </div>
            <div className="flex size-7 items-center justify-center rounded-full bg-[#9db2d1]">
              <FaCloud className="text-sm text-[#003f8a]" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#003085] py-4">
        <div className="mx-auto max-w-7xl px-4 py-3 text-center text-[12.5px] font-thin tracking-wider text-gray-500">
          Copyright 2023-2024 | ALL RIGHTS RESERVED ©
        </div>
      </div>
    </footer>
  );
};

export default Footer;
