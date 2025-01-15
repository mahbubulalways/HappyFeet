import banner from "@/assets/banner/banner3.webp";
import Image from "next/image";
const ThirdBanner = () => {
  return (
    <div className="container pt-10 xl:pt-20">
      <Image src={banner} alt="banner" />
    </div>
  );
};

export default ThirdBanner;
