"use client";
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
  quantity: number;
  link: string;
};
const slideData = [
  {
    id: 1,
    image: "/city.jpg",
    title: "City",
    quantity: 4,
    link: "http://google.com",
  },
  {
    id: 2,
    image: "/charlottel.jpg",
    title: "Charlottel",
    quantity: 4,
    link: "http://google.com",
  },
  {
    id: 3,
    image: "/clearance.jpg",
    title: "Clearance",
    quantity: 4,
    link: "http://google.com",
  },
  {
    id: 4,
    image: "/composition.jpg",
    title: "Composition",
    quantity: 4,
    link: "http://google.com",
  },
  {
    id: 5,
    image: "/leather.jpg",
    title: "Leather",
    quantity: 4,
    link: "http://google.com",
  },
  {
    id: 6,
    image: "/straps.jpg",
    title: "Starps",
    quantity: 4,
    link: "http://google.com",
  },
];
const ShoulderBag = () => {
  return (
    <div className="carousel">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2rem",
        }}
      >
        <h2
          style={{ fontSize: "27px", color: "#423F3F", fontWeight: "lighter" }}
        >
          Collections list
        </h2>
        <Link href="/" style={{ fontSize: "16px", color: "5E5C5C" }}>
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
        {slideData.map((item: Props) => (
          <SwiperSlide key={item.id} style={{ cursor: "pointer" }}>
            <div>
              <div className="slide-image">
                <Image
                  src={item.image}
                  alt="image"
                  height={400}
                  width={420}
                  style={{
                    maxInlineSize: "100%",
                    display: "block",
                  }}
                />

                <div className="collection-image-overlay">
                  <h3>{item.title}</h3>
                  <div className="button-container">
                    <Link href={item.link}>{item.quantity} Products</Link>
                    <button className="btn">Button</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ShoulderBag;
