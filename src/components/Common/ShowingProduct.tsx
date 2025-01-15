"use client";
import { TProduct } from "@/Types";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const ShowingProduct = ({ products }: { products: TProduct[] }) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [imageIndex, setImageIndex] = useState({ index: 0, image: 0 });

  // Create refs for navigation buttons
  const sliderRef = useRef<any>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="relative">
      {/* Prev Button */}
      <div className="absolute hidden xl:block -left-10 top-1/2 transform -translate-y-1/2 z-10">
        <button
          onClick={() => sliderRef.current.swiper.slidePrev()}
          className="text-5xl text-gray-600 hover:text-gray-800"
        >
          <HiOutlineChevronLeft />
        </button>
      </div>

      <Swiper
        speed={500}
        parallax={true}
        ref={sliderRef}
        modules={[Parallax, Pagination, Navigation, Autoplay]}
        grabCursor={true}
        spaceBetween={5}
        slidesPerView="auto"
        className="custom-swiper"
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          340: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-100%"
        ></div>

        {products?.map((product, idx) => (
          <SwiperSlide key={idx} className="w-[250px]">
            <div
              onMouseEnter={() => setImageIndex({ image: 1, index: idx })}
              onMouseLeave={() => setImageIndex({ image: 0, index: idx })}
              className="border border-white hover:border-gray-200 pb-2 xl:pb-5 group"
            >
              <Link
                href={`/product-details/${product?._id}`}
                className="relative"
              >
                <Image
                  src={
                    imageIndex.index === idx
                      ? product?.images[imageIndex.image]
                      : product?.images[0]
                  }
                  alt="image"
                  width={1000}
                  height={1000}
                  className="w-[250px] mx-auto"
                />
                <p className="absolute top-0 right-0 bg-[#105989] px-2 py-0.5 text-white poppins-medium hidden group-hover:block">
                  -{product?.discount}%
                </p>
              </Link>
              <div className="p-3 xl:p-5">
                <h1 className="poppins-light text-center px-0 xl:px-5">
                  {product?.name.substring(0, 22)}...
                </h1>
                <div className="flex items-center justify-center gap-2 pt-1.5">
                  <p className="poppins-bold text-gray-500 text-[17px]">
                    <del>Tk{product?.price}</del>
                  </p>
                  <p className="text-red-600 poppins-bold text-[17px]">
                    TK{product?.offerPrice}
                  </p>
                </div>
                <button className="bg-red-600 text-white w-full mt-3 xl:mt-5 py-2 poppins-medium text-[15px]">
                  SHOP NOW
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Next Button */}
      <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 z-10">
        <button
          onClick={() => sliderRef.current.swiper.slideNext()}
          className="text-5xl text-gray-600 hover:text-gray-800 hidden xl:block"
        >
          <HiOutlineChevronRight />
        </button>
      </div>

      {/* Mobile Prev/Next Buttons */}
      <div className="flex items-start justify-center gap-4">
        <button
          onClick={() => sliderRef.current.swiper.slidePrev()}
          className="p-2 rounded-full text-white bg-[#1669a1] block md:hidden"
        >
          <GrLinkPrevious className="h-8 w-8" />
        </button>
        <button
          onClick={() => sliderRef.current.swiper.slideNext()}
          className="p-2 rounded-full text-white bg-[#1669a1] block md:hidden"
        >
          <GrLinkNext className="h-8 w-8" />
        </button>
      </div>
    </div>
  );
};

export default ShowingProduct;
