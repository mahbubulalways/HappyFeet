import Footer from "@/components/Shared/Footer/Footer";
import MainNav from "@/components/Shared/Navbar/MainNav/MainNav";
import { TChildren } from "@/Types";
import React from "react";

const CommonLayout = ({ children }: TChildren) => {
  return (
    <div>
      <MainNav />
      {children}
      <Footer />
    </div>
  );
};

export default CommonLayout;
