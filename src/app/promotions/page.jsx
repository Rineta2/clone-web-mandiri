"use client";

import React, { useState } from "react";

import dynamic from "next/dynamic";

import { useScrollOffset } from "@/components/hooks/animation/parallax/useScrollOffset";

import Parallax from "@/components/hooks/section/promotion/Parallax";

const MainSwiper = dynamic(
  () => import("@/components/hooks/section/promotion/MainSwiper"),
  { ssr: false }
);

const ThumbnailSwiper = dynamic(
  () => import("@/components/hooks/section/promotion/ThumbnailSwiper"),
  { ssr: false }
);

import { promotions } from "@/components/ui/data/Promotions";

export default function Promotions() {
  const { offsetY, promotionsRef } = useScrollOffset();

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section
      ref={promotionsRef}
      className="relative min-h-screen overflow-hidden"
    >
      <div className="container mx-auto z-10 relative">
        <h1 className="text-background text-center text-4xl font-bold mb-20 mt-10">
          Promotions
        </h1>

        <div className="w-[70%] h-[100%] mx-auto">
          <MainSwiper promotions={promotions} thumbsSwiper={thumbsSwiper} />

          <ThumbnailSwiper
            promotions={promotions}
            setThumbsSwiper={setThumbsSwiper}
          />
        </div>
      </div>

      <Parallax offsetY={offsetY} />
    </section>
  );
}
