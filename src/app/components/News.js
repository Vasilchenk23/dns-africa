"use client"

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';

const newsData = [
  {
    id: 1,
    image: "/img/about.png",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi."
  },
  {
    id: 2,
    image: "/img/about.png",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi."
  },
  {
    id: 3,
    image: "/img/about.png",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi."
  },
];

export default function News() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          NEWS
        </h2>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          className="relative"
        >
          {newsData.map((news) => (
            <SwiperSlide key={news.id}>
              <div className="flex items-center gap-6 p-6 bg-gray-100 rounded-lg shadow-md">
                <Image
                  src={news.image}
                  alt="News image"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
                <div>
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
