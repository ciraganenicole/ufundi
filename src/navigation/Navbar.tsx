'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isAcademicMenuOpen, setIsAcademicMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path ? 'border-b-2 border-yellow-500' : '';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transition-colors duration-300 ${
        isScrolled
          ? 'bg-[rgba(15,78,163,0.9)] text-white shadow-lg'
          : 'bg-transparent text-white'
      }`}
    >
      <div className="flex items-center justify-between  p-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
        <Link href="/" className="flex items-center text-xl font-bold">
          <h1 className="text-[18px] font-bold text-white md:text-[24px]">
            COLLEGE UFUNDI
          </h1>
        </Link>
        <div className=" flex w-1/2 justify-end gap-6">
          <div className="hidden items-center space-x-6 md:flex">
            <ul className="flex gap-8">
              <li>
                <Link
                  href="/about"
                  className={`${isActive('/about')} uppercase  hover:underline`}
                >
                  A PROPOS
                </Link>
              </li>
              <li
                onMouseEnter={() => setIsAcademicMenuOpen(true)}
                onMouseLeave={() => setIsAcademicMenuOpen(false)}
                className="relative"
              >
                <button className="uppercase hover:underline">Academics</button>
                {isAcademicMenuOpen && (
                  <ul className="absolute left-0 top-full mt-1 bg-white py-2 text-gray-700 shadow-lg">
                    <li>
                      <Link
                        href="/news"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        ACTUALITES
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/calendar"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        CALENDRIER
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/excursions"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        EXCURSIONS
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/dashboard"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        DASHBOARD
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/academic-calendar"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        CALENDRIER ACADEMIQUE
                      </Link>
                    </li>
                    {/* <li>
                      <Link
                        href="/contact-teacher"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        
                      </Link>
                    </li> */}
                    <li>
                      <Link
                        href="/school-administration"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        ADMINISTRATION DE L&apos;ECOLE
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link
                  href="/events"
                  className={`${isActive('/events')} uppercase hover:underline`}
                >
                  EVENEMENTS
                </Link>
              </li>
              <li>
                <Link
                  href="/timetable"
                  className={`${isActive('/timetable')} uppercase hover:underline`}
                >
                  HORAIRES
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className={`${isActive('/gallery')} uppercase hover:underline`}
                >
                  GALERIE
                </Link>
              </li>
              <li>
                <Link
                  href="/teachers"
                  className={`${isActive('/teachers')} uppercase hover:underline`}
                >
                  ENSEIGNANTS
                </Link>
              </li>
            </ul>
          </div>

          {/* <button className="rounded-full p-2 transition hover:bg-blue-300">
            <FaSearch className="size-5 text-gray-100" />
          </button> */}

          <button
            className="block rounded border border-white p-2 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {!isMobileMenuOpen && <FaBars className="size-5 text-white" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="z-100 absolute right-0 top-0 h-screen w-4/5 bg-[#e8edf5] text-[#003a8f] shadow-lg">
          <button
            className="ml-6 mt-6 block md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen && <FaTimes className="size-6 text-[#003a8f]" />}
          </button>

          <ul className="mt-16 flex flex-col items-center space-y-8 py-4 text-[20px] font-semibold uppercase">
            <li>
              <Link href="/about" className="hover:underline">
                A PROPOS DE NOUS
              </Link>
            </li>
            <li>
              <Link href="/news" className="hover:underline">
                ACTUALITES
              </Link>
            </li>
            <li>
              <Link href="/calendar" className="hover:underline">
                CALENDRIER
              </Link>
            </li>
            <li>
              <Link href="/events" className="hover:underline">
                EVENEMENTS
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:underline">
                GALERIE
              </Link>
            </li>
            <li>
              <Link href="/teachers" className="hover:underline">
                ENSEIGNANTS
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
