'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import data from '../carousel/items.json';
import Image from 'next/image';
import GradientBox from './gradientBox';
import WhiteBox from './whiteBox';
import BlackBox from './blackBox';

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      speed={1000}
      pagination={{ clickable: true }}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 10000, disableOnInteraction: true }}
      loop={true}
      className='h-carousel w-full'
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
    >
      {data.items.responsive.map(
        (item: {
          id: number;
          imageUrl: string;
          title: string;
          text: string;
        }) => (
          <SwiperSlide key={item.id}>
            <div className='flex h-carousel flex-col items-center rounded-lg bg-gray-100 shadow'>
              <Image
                src={item.imageUrl}
                alt={item.title}
                layout='fill'
                objectFit='cover'
                className='z-0 mb-4 h-full w-full object-cover'
              />
            </div>
            {item.id === 1 ? (
              <>
                <GradientBox
                  content='welcome to'
                  key={'gradient' + activeIndex}
                />
                <WhiteBox content='marisha coco' key={'white' + activeIndex} />
                <BlackBox
                  content='the choice of the experts'
                  key={'black' + activeIndex}
                />
              </>
            ) : item.id === 2 ? (
              <>
                <GradientBox content='slide 2' key={'gradient' + activeIndex} />
                <WhiteBox content='slide 2 white' key={'white' + activeIndex} />
                <BlackBox
                  content='the choice of the experts'
                  key={'black' + activeIndex}
                />
              </>
            ) : (
              <>
                <GradientBox content='slide 3' key={'gradient' + activeIndex} />
                <WhiteBox content='slide 3 white' key={'white' + activeIndex} />
                <BlackBox
                  content='the choice of the experts'
                  key={'black' + activeIndex}
                />
              </>
            )}
          </SwiperSlide>
        ),
      )}
    </Swiper>
  );
}
