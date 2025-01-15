import loader from "@/assets/logo/loader.gif";
import Image from "next/image";

const MainLoader = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center ">
      <Image src={loader} alt="loading" className="w-16" />
    </div>
  );
};

export default MainLoader;
