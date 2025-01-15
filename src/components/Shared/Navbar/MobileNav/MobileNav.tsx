import Image from "next/image";
import logo from "@/assets/logo/logo.svg";
import SearchOption from "../Common/SearchOption";
import ShoppingCart from "../Common/ShoppingCart";
import MobileSidebar from "./MobileSidebar";
const MobileNav = () => {
  return (
    <div className="bg-black py-5">
      <div className="container">
        <div className="flex items-center justify-center  gap-10">
          <MobileSidebar />
          <Image src={logo} alt="logo" className=" max-w-[220px] w-max " />
        </div>
        <div className="flex items-center justify-center gap-3 pt-3">
          <SearchOption />
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
