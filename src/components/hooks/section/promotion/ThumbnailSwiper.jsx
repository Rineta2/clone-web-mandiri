import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";

import PromotionSlide from "@/components/hooks/section/promotion/PromotionSlide";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function ThumbnailSwiper({ promotions, setThumbsSwiper }) {
  return (
    <Swiper
      onSwiper={setThumbsSwiper}
      loop={true}
      spaceBetween={10}
      slidesPerView={4}
      freeMode={true}
      watchSlidesProgress={true}
      speed={1000}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      modules={[FreeMode, Navigation, Thumbs, Autoplay]}
      className="bottom"
    >
      {promotions.map((promotion) => (
        <SwiperSlide key={promotion.id}>
          <PromotionSlide image={promotion.image} alt="swiper-bottom" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
