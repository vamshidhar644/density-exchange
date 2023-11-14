import { NAV_LINKS } from '@/constants/index';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-white shadow-xl lg:shadow-none">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-12">
        <div className="flex justify-between h-16 md:h-20 lg:h-24">
          <div className="flex px-2 lg:px-0">
            <div className="flex-shrink-0 flex items-center justify-start">
              <Image
                className="block h-10 sm:h-12 w-auto"
                width={64}
                height={64}
                src="/images/logo.png"
                alt="Logo"
              />
            </div>
          </div>
          <div className="hidden lg:block my-auto">
            <div className="ml-2 flex items-center gap-6 md:ml-6 text-base font-semibold">
              {NAV_LINKS.map((link) => (
                <Link
                  href={link.href}
                  key={link.key}
                  className="ml-3 text-[#3a3a3a] hover:text-[#151515]"
                >
                  {link.label}
                </Link>
              ))}
              <button
                href="#"
                className="ml-3 font-bold bg-black text-white px-6 py-3 rounded-[30px]"
              >
                Download App
              </button>
            </div>
          </div>
          <div className="-mr-2 flex lg:hidden">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex h-fit my-auto mr-2 items-center justify-center p-2 rounded-md text-gray-400 hover:text-[#3a3a3a] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? <GiHamburgerMenu /> : <IoClose />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      {isOpen && (
        <div
          className="absolute bg-white w-full shadow-xl lg:hidden z-50"
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 text-sm">
            <a
              href="#"
              className="text-[#3a3a3a] ml-2 hover:text-[#151515] hover:bg-gray-100 block px-2 py-2 rounded-md"
            >
              Emotions
            </a>
            <a
              href="#"
              className="text-[#3a3a3a] ml-2 hover:text-[#151515] hover:bg-gray-100 block px-2 py-2 rounded-md"
            >
              Manifesto
            </a>
            <a
              href="#"
              className="text-[#3a3a3a] ml-2 hover:text-[#151515] hover:bg-gray-100 block px-2 py-2 rounded-md"
            >
              Self-awarness Test
            </a>
            <a
              href="#"
              className="text-[#3a3a3a] ml-2 hover:text-[#151515] hover:bg-gray-100 block px-2 py-2 rounded-md"
            >
              Work With Us
            </a>
            <a
              href="#"
              className="block w-fit ml-2 bg-black text-white px-5 py-3 rounded-[26px]"
            >
              Download App
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
