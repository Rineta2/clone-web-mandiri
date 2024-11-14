import React from "react";

import Image from "next/image";

export default function PromotionSlide({ image, alt }) {
  return (
    <Image
      src={image}
      alt={alt}
      width={500}
      height={500}
      className="w-full h-full object-cover"
    />
  );
}
