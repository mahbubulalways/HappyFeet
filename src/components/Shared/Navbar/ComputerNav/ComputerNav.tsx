"use client";
import Image from "next/image";
import logo from "@/assets/logo/logo.svg";
import Navbar from "./Navbar";
import dynamic from "next/dynamic";
import SearchOption from "../Common/SearchOption";
import ShoppingCart from "../Common/ShoppingCart";
const ComputerNav = () => {
  const ShowAuth = dynamic(() => import("./ShowAuth"), { ssr: false });
  return (
    <div>
      <div className="bg-[#4A6D97] h-10 flex flex-col">
        <div className="container flex justify-end">
          <ShowAuth />
        </div>
      </div>
      <div className="bg-black py-3">
        <div className=" flex items-center justify-between container">
          <div className=" flex items-center gap-10">
            <Image src={logo} alt="logo" className="w-[200px] " />
            <Navbar />
          </div>
          <div className="flex items-center gap-3">
            <SearchOption />
            <ShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComputerNav;
