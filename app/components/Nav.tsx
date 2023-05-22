"use client";

import { Menu } from "@headlessui/react";
import clsx from "clsx";
import Image from "next/image";

interface navItemsProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const Nav: React.FC<navItemsProps> = ({ isOpen, setIsOpen }) => {
  const navItems = ["Home", "New", "Popular", "Trending", "Categories"];

  return (
    <nav className="z-50">
      <div className="absolute sm:mr-20 right-0 sm:top-[100px] top-[80px]">
        <div
          className={clsx(
            "flex flex-col bg-[#FFFDFA] pt-16 sm:px-8 px-20 -mr-4 -mt-20",
            isOpen && "shadow-2xl h-screen"
          )}
        >
          <div className="hidden sm:flex md:gap-8 gap-4 text-sm md:text-[15px] transition-all">
            {navItems.map((item) => (
              <p key={item} className={`text-15px text-[#00001A] hover:text-[#F15E50] cursor-pointer`}>
                {item}
              </p>
            ))}
          </div>

          <div>
            <div className="flex justify-end sm:hidden cursor-pointer -mr-12">
              {isOpen ? (
                <Image
                  src="/images/icon-menu-close.svg"
                  alt="menu"
                  height={30}
                  width={30}
                  onClick={() => setIsOpen(false)}
                  className="w-auto h-auto"
                />
              ) : (
                <Image
                  src="/images/icon-menu.svg"
                  alt="menu"
                  height={30}
                  width={30}
                  onClick={() => setIsOpen(true)}
                  className="w-auto h-auto"
                />
              )}
            </div>

            <div className="flex">
              <div className="flex">
                {isOpen && (
                  <div className="sm:hidden flex flex-col gap-4 pr-14 z-50 justify-start">
                    {navItems.map((item) => (
                      <p
                        key={item}
                        className={`text-15px text-[#00001A] hover:text-[#F15E50] cursor-pointer -ml-10 pr-5`}
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
