"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import { useState } from "react";
import LightBoxModal from "./LightBoxModal";

const MaintainImage = ({ images }: { images: string[] }) => {
  const [isActiveImage, setIsActiveImage] = useState(images[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleMouseMove = (e: any) => {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;
    const img = document.getElementById("img") as HTMLBodyElement;
    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = "scale(1.6)";
    img.style.overflow = "hidden";
  };
  const handleMouseLeave = (e: any) => {
    const img = document.getElementById("img") as HTMLBodyElement;
    img.style.transformOrigin = "center";
    img.style.transform = "scale(1)";
  };
  return (
    <div>
      {/* Display the first image above the slider */}
      <div className=" overflow-hidden ">
        <Image
          src={isActiveImage && isActiveImage}
          alt="image"
          id="img"
          onClick={openModal}
          onMouseMove={(e) => handleMouseMove(e)}
          onMouseLeave={(e) => handleMouseLeave(e)}
          width={1000}
          height={1000}
          className="w-full h-full xl:h-[500px] object-cover cursor-crosshair"
        />
      </div>

      <div className="relative">
        {/* Left navigation button */}
        <div className="absolute hidden xl:block -left-10 top-1/2 transform -translate-y-1/2 z-10">
          <button className="prev-button text-3xl text-gray-600 hover:text-gray-800">
            <HiOutlineChevronLeft />
          </button>
        </div>

        {/* Swiper component */}
        <Swiper
          speed={500}
          parallax={true}
          navigation={{
            nextEl: ".next-button",
            prevEl: ".prev-button",
          }}
          modules={[Parallax, Pagination, Navigation, Autoplay]}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            340: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="custom-swiper"
        >
          <div
            slot="container-start"
            className="parallax-bg"
            data-swiper-parallax="-100%"
          ></div>

          {/* Loop through images and create slides */}
          {images?.map((image, idx) => (
            <SwiperSlide key={idx}>
              <Image
                onClick={() => setIsActiveImage(image)}
                src={image}
                alt="image"
                width={500}
                height={500}
                className={`cursor-pointer h-[100px]  object-cover border border-white ${
                  isActiveImage === image ? "border-gray-300" : ""
                }`}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Right navigation button */}
        <div className="absolute -right-10 hidden xl:block top-1/2 transform -translate-y-1/2 z-10">
          <button className="next-button text-3xl text-gray-600 hover:text-gray-800">
            <HiOutlineChevronRight />
          </button>
        </div>
      </div>
      {isModalOpen && (
        <LightBoxModal
          isOpen={isModalOpen}
          onClose={closeModal}
          images={images}
        />
      )}
    </div>
  );
};

export default MaintainImage;
