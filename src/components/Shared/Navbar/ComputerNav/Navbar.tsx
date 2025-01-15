import { navItems } from "@/utils/navItems";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [openNav, setOpenNav] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setOpenNav(index);
  };

  const handleMouseLeave = () => {
    setOpenNav(null);
  };

  const renderSubNav = (subNav: any[], index: number) => {
    return (
      <>
        {subNav.length > 0 && (
          <div
            className={`absolute text-black bg-white shadow-lg w-[700px] z-50 max-w-max transition-max-height duration-300 ease-linear ${
              openNav === index ? "max-h-80" : "max-h-0"
            } overflow-hidden`}
          >
            <div className="flex gap-16 py-2 px-8 pb-5">
              {subNav.map((navs, idx) => (
                <div key={idx}>
                  <h1 className="block text-[16px] poppins-bold  pt-2">
                    {navs.title}
                  </h1>
                  <div className="flex flex-col pt-1">
                    {navs?.subNav.map((nav: any, index: number) => (
                      <Link
                        key={index}
                        href={nav?.path}
                        className="text-[15px] poppins-light pt-2"
                      >
                        {nav?.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <nav className=" text-white pt-3 ">
      <div>
        <div className="relative">
          <ul className="flex gap-x-5">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Link href={item.path} className="flex  items-center gap-1">
                  {item.title} {item?.icon && <IoIosArrowDown />}{" "}
                </Link>

                {renderSubNav(item.subNav, index)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
