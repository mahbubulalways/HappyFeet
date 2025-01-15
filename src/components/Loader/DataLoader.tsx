import Image from "next/image";
import loader from "@/assets/logo/loader.gif";

const DataLoader = () => {
  return (
    <div className="h-[50vh] flex flex-col items-center justify-center pt-10 xl:pt-20">
      <Image src={loader} alt="loading" className="w-16" />
    </div>
  );
};

export default DataLoader;
