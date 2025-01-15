"use client";
import image1 from "@/assets/banner/image_1.jpg";
import image2 from "@/assets/banner/image_2.jpg";
import image4 from "@/assets/banner/image_4.png";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import "./banner.css";
const Banners = () => {
  const slides = [
    {
      image: image4,
      title: "Sneakers 2024 Limited Edition",
      text: "For journey with your happy feet",
      descrip:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum perspiciatis eligendi saepe nobis, blanditiis provident.",
    },
    {
      image: image2,
      title: "Sneakers For All",
      text: "Walk the talk with our shoes",
      descrip:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum perspiciatis eligendi saepe nobis, blanditiis provident.",
    },
    {
      image: image1,
      title: "Curated Sneakers",
      text: "Put your best foot forward with us",
      descrip:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum perspiciatis eligendi saepe nobis, blanditiis provident.",
    },
  ];

  const intro = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.8, delayChildren: 1.8 },
    },
  };

  const introChildren = {
    hidden: { opacity: 0, x: -200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, type: "tween", ease: "easeInOut" },
    },
  };

  return (
    <div>
      <Swiper
        speed={2000}
        parallax={true}
        loop={true}
        autoplay={{
          delay: 15000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Parallax, Pagination, Navigation, Autoplay]}
        grabCursor={true}
        spaceBetween={-100}
        slidesPerView={1}
        effect="slide"
        className="custom-swiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-100%"
        ></div>

        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative" data-swiper-parallax="-100">
              <Image
                src={slide.image}
                alt={`Banner ${idx + 1}`}
                className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-full object-cover"
              />

              <div className="absolute inset-0 flex items-center justify-start h-full">
                <div
                  // variants={intro}
                  // initial="hidden"
                  // whileInView="visible"
                  className="grid xl:grid-cols-2 overflow-hidden"
                >
                  <div className="px-8 xl:px-16 flex flex-col gap-2 xl:gap-5">
                    <h1
                      // variants={introChildren}
                      className="poppins-light text-sm xl:text-xl"
                    >
                      {slide.title}
                    </h1>
                    <h1
                      // variants={introChildren}
                      className="text-3xl xl:text-6xl uppercase poppins-bold xl:leading-tight"
                    >
                      {slide.text}
                    </h1>
                    <p
                      // variants={introChildren}
                      className="text-[14px] poppins-light xl:text-[16px] xl:leading-tight"
                    >
                      {slide.descrip}
                    </p>
                    <button
                      // variants={introChildren}
                      className="bg-[#E7660B] w-max px-5 xl:px-10 py-2 xl:py-3 text-white poppins-medium rounded-full text-[14px] xl:text-[16px]"
                    >
                      Shop Special Edition
                    </button>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banners;
