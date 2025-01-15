import Image from "next/image";
import React from "react";

const SecondBanner = () => {
  return (
    <div className="w-full pt-10 xl:pt-20 container">
      <Image
        src={
          "https://cdn.shopify.com/s/files/1/2287/9679/files/Batabd-GV-7-web-banner1_210a1c89-6433-4b52-9d68-f6b8f9f09fbc.jpg?v=1720078040"
        }
        alt="banner"
        width={1000}
        height={1000}
        className="w-full "
      />
    </div>
  );
};

export default SecondBanner;
