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

type Props = {
  id: number;
  image: string;
  title: string;
  price: number;
  disPrice: number;
  icon?: React.ComponentType[];
  review?: number;
};
type CarouselProps = {
  data: Props[];
  link: string;
  title: string;
};
const Carousel = ({ data, title, link }: CarouselProps) => {
  return (
    <div className="carousel">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <h2>{title}</h2>
        <Link href={link}>View All</Link>
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
        {data?.map((item: Props) => (
          <SwiperSlide key={item.id} style={{ cursor: "pointer" }}>
            <div>
              <div style={{ position: "relative", overflow: "hidden" }}>
                <Image
                  src={item.image}
                  alt="image"
                  height={400}
                  width={405}
                  style={{
                    maxInlineSize: "100%",
                    display: "block",
                  }}
                />

                <span
                  style={{
                    position: "absolute",
                    left: "30px",
                    top: "30px",
                    backgroundColor: "rgba(255,0,0,0.5)",
                    padding: "10px",
                    color: "white",
                  }}
                >
                  Sale 70%
                </span>
                <Image
                  src="/5.webp"
                  alt="image"
                  height={400}
                  width={405}
                  className="image-overlay"
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                  marginTop: "1rem",
                }}
              >
                <h2>{item.title}</h2>
                <p>
                  ${item.price} <del>${item.disPrice}</del>
                </p>
                <p
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  {item.icon?.map((Icon, ind) => (
                    <Icon
                      key={ind}
                      // @ts-ignore
                      style={{ fill: "orange", opacity: "0.5" }}
                    />
                  ))}
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
