import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";

import PromotionSlide from "@/components/hooks/section/promotion/PromotionSlide";

import Link from "next/link";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function MainSwiper({ promotions, thumbsSwiper }) {
  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
      loop={true}
      spaceBetween={10}
      navigation={true}
      thumbs={{ swiper: thumbsSwiper }}
      modules={[FreeMode, Navigation, Thumbs, Autoplay]}
      speed={1000}
      effect="fade"
      fadeEffect={{
        crossFade: true,
      }}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      className="top mb-5"
    >
      {promotions.map((promotion) => (
        <SwiperSlide key={promotion.id}>
          <Link
            href={promotion.path}
            target="_blank"
            rel="noreferrer"
            className="w-full h-full"
          >
            <PromotionSlide image={promotion.image} alt="swiper-top" />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
