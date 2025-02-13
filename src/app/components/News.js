"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const newsData = [
  {
    id: 1,
    image: "/img/news.png",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
  },
  {
    id: 2,
    image: "/img/news.png",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
  },
  {
    id: 3,
    image: "/img/news.png",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
  },
  {
    id: 4,
    image: "/img/news.png",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
  },
];

export default function News() {
  return (
    <section className="py-16 bg-white w-full" id="news">
      <div className="container mx-auto px-4 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          NEWS
        </h2>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 }, 
            1024: { slidesPerView: 3 }, 
          }}
          className="relative"
        >
          {newsData.map((news) => (
            <SwiperSlide key={news.id} className="flex justify-center">
              <div className="w-full max-w-[950px] flex flex-col items-center gap-4 p-4">
                <Image
                  src={news.image}
                  alt="News image"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900">{news.title}</h3>
                  <p className="text-gray-600 mt-2">{news.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
