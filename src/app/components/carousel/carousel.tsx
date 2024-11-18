"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import data from "../carousel/items.json";

export default function Carousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={10}
      slidesPerView={1}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className="w-full h-carousel"
    >
      {data.items.responsive.map((item: any) => (
        <SwiperSlide key={item.id}>
          <div className="flex flex-col items-center bg-gray-100 rounded-lg shadow h-carousel">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover rounded-lg mb-4 z-0"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
