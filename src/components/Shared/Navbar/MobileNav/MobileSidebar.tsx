"use client";
import Link from "next/link";
import { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { navItems } from "@/utils/navItems";

const MobileSidebar = () => {
  const [isOpenSideNav, setIsOpenSideNav] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);

  const toggleSubMenu = (index: number) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  return (
    <div>
      {/* Toggle Sidebar Button */}
      <button
        onClick={() => setIsOpenSideNav(true)}
        className="text-white pt-5"
      >
        <RiMenu2Fill className="h-7 w-7" />
      </button>

      {/* Sidebar Overlay */}
      {isOpenSideNav && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setIsOpenSideNav(false)}
        ></div>
      )}

      {/* Sidebar Navigation */}
      <div
        className={`fixed w-[80%] z-30 top-0 h-screen duration-700 bg-white ${
          isOpenSideNav ? "left-0" : "-left-full"
        }`}
      >
        <div className="flex flex-col gap-1 h-full text-gray-800">
          {/* Close Sidebar Button */}
          <button className="pt-2 pr-2 flex justify-end cursor-default">
            <p className="border p-1.5">
              <RxCross2
                className="h-7 w-7 cursor-pointer"
                onClick={() => setIsOpenSideNav(false)}
              />
            </p>
          </button>

          {/* Navigation Links */}
          <div className="flex px-8 py-3  flex-col w-full h-full gap-3 pt-5 overflow-auto">
            <ul className="flex flex-col gap-y-5">
              {navItems.map((item, index) => (
                <li key={index} className="relative flex flex-col">
                  <div className="flex justify-between">
                    <Link href={item.path} className="flex items-center gap-1">
                      {item.title}
                    </Link>

                    {/* Toggle Submenu on Icon Click */}
                    {item?.subNav?.length > 0 && (
                      <button onClick={() => toggleSubMenu(index)}>
                        <IoIosArrowDown
                          className={`transform transition-transform duration-300 ${
                            openSubMenu === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Sub Navigation */}
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      openSubMenu === index
                        ? "max-h-[500px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {item?.subNav?.length > 0 && (
                      <div className="bg-gray-100 shadow-lg p-4 grid grid-cols-2 gap-5 z-50 w-full">
                        {item?.subNav.map((subNavItem: any, idx) => (
                          <div key={idx}>
                            <h1 className="text-[16px] poppins-medium pt-2">
                              {subNavItem.title}
                            </h1>
                            <div className="flex flex-col pt-1">
                              {subNavItem?.subNav.map(
                                (nav: any, navIndex: number) => (
                                  <Link
                                    key={navIndex}
                                    href={nav.path}
                                    className="text-[15px] poppins-light pt-2"
                                  >
                                    {nav.title}
                                  </Link>
                                )
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
