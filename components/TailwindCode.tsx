"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import {
  CarouselArray,
  CarouselProps,
  iconComponent,
} from "@/lib/carouselComponentArray";

const Carousel = ({ data, link, title }: CarouselArray) => {
  return (
    <div className="bg-[#f4f4f4] overflow-hidden p-11">
      <div className="flex justify-between items-center mb-7">
        <h2 className="text-2xl">{title}</h2>
        <Link
          href={`${link}`}
          className="relative after:content-[' '] after:absolute after:-bottom-[2px] after:left-0 after:w-0 after:bg-[#5e5c5c] after:transition-all hover:after:w-full"
        >
          View All
        </Link>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        scrollbar={{ draggable: true }}
        breakpoints={{
          340: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        style={{ overflow: "visible" }}
      >
        {data?.map((item: CarouselProps) => (
          <SwiperSlide key={item.id} className="cursor-pointer">
            <div className="bg-[#f4f4f4] shadow-lg">
              <div className="relative overflow-hidden">
                <Image
                  src={item.image}
                  alt="image"
                  height={400}
                  width={415}
                  className="max-w-[130%]"
                />

                <span className="absolute left-8 top-8 bg-[rgba(255,0,0,0.5)] p-3 text-[#5e5c5c]">
                  Sale 70%
                </span>
                <Image
                  src="/5.webp"
                  alt="image"
                  height={400}
                  width={405}
                  className="absolute top-0 left-0 opacity-0 transition-all duration-300 overflow-hidden carousel-card-image hover:scale-[1.1] hover:opacity-100"
                />
              </div>

              <div className="flex flex-col gap-1 mt-4 ml-4 pb-3 text-[#5e5c5c]">
                <h2 className="text-base font-normal">{item.title}</h2>
                <p className="flex gap-5 text-sm">
                  <span className="text-[#A70000]">${item.price}</span>
                  <del>${item.disPrice}</del>
                </p>
                <p className="flex items-center gap-2">
                  {item.icon?.map((iconName: string, ind: number) => {
                    const IconObj = iconComponent[iconName];
                    if (!IconObj) {
                      return null;
                    }
                    return (
                      <IconObj
                        key={ind}
                        className="fill-[#A70000] opacity-50"
                      />
                    );
                  })}
                  {item.review} review
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
