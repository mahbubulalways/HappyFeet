"use client";
import Modal from "@/components/Reused/Modal/Modal";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";
import {
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineXMark,
} from "react-icons/hi2";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
}

const LightBoxModal = ({ isOpen, onClose, images }: ModalProps) => {
  const [zoom, setZoom] = useState(1);
  const handleScroll = (event: any) => {
    event.preventDefault();
    const delta = Math.sign(event.deltaY);
    setZoom((prevZoom) => Math.min(Math.max(prevZoom - delta * 0.1, 0.5), 2));
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black bg-opacity-50"
      ></div>

      {/* Modal Content */}
      <div className="bg-white w-full h-full px-8 pt-5 z-10">
        {/* Modal Header */}
        <div className="flex justify-end">
          <button
            className="text-gray-800 hover:text-gray-900 flex justify-end"
            onClick={onClose}
          >
            <HiOutlineXMark className="h-7 w-7" />
          </button>
        </div>

        <div className="relative container flex items-center justify-center mx-auto h-full">
          {/* Left navigation button */}
          <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 z-10">
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
            slidesPerView={1}
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
                <div className="flex items-center justify-center h-full">
                  <Image
                    onWheel={handleScroll}
                    style={{ transform: `scale(${zoom})` }}
                    src={image}
                    alt="image"
                    width={500}
                    height={500}
                    className="object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Right navigation button */}
          <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 z-10">
            <button className="next-button text-3xl text-gray-600 hover:text-gray-800">
              <HiOutlineChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightBoxModal;
