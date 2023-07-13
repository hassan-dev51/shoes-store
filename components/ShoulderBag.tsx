"use client";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { BsStarFill } from "react-icons/bs";

type Props = {
  id: number;
  image: string;
  title: string;
  price: number;
  disPrice: number;
  icon?: React.ComponentType[];
  review?: number;
};
const slideData = [
  {
    id: 1,
    image: "/1.webp",
    title: "City - All Black",
    price: 89,
    disPrice: 99,
    icon: [BsStarFill, BsStarFill, BsStarFill, BsStarFill],
    review: 2,
  },
  {
    id: 2,
    image: "/2.webp",
    title: "City - All Black",
    price: 89,
    disPrice: 99,
    icon: [BsStarFill, BsStarFill, BsStarFill, BsStarFill],
    review: 2,
  },
  {
    id: 3,
    image: "/3.webp",
    title: "City - All Black",
    price: 89,
    disPrice: 99,
    icon: [BsStarFill, BsStarFill, BsStarFill, BsStarFill],
    review: 2,
  },
  {
    id: 4,
    image: "/4.webp",
    title: "City - All Black",
    price: 89,
    disPrice: 99,
    icon: [BsStarFill, BsStarFill, BsStarFill, BsStarFill],
    review: 2,
  },
  {
    id: 5,
    image: "/5.webp",
    title: "City - All Black",
    price: 89,
    disPrice: 99,
    icon: [BsStarFill, BsStarFill, BsStarFill, BsStarFill],
    review: 2,
  },
  {
    id: 6,
    image: "/6.webp",
    title: "City - All Black",
    price: 89,
    disPrice: 99,
    icon: [BsStarFill, BsStarFill, BsStarFill, BsStarFill],
    review: 2,
  },
  {
    id: 7,
    image: "/7.webp",
    title: "City - All Black",
    price: 89,
    disPrice: 99,
    icon: [BsStarFill, BsStarFill, BsStarFill, BsStarFill],
    review: 2,
  },
  {
    id: 8,
    image: "/8.webp",
    title: "City - All Black",
    price: 89,
    disPrice: 99,
    icon: [BsStarFill, BsStarFill, BsStarFill, BsStarFill],
    review: 2,
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
          marginBottom: "1rem",
        }}
      >
        <h2>Shoulder Bags</h2>
        <Link href="/">View All</Link>
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
      >
        {slideData.map((item: Props) => (
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

export default ShoulderBag;
