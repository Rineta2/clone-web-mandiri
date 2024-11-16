import React from "react";

import bg from "@/components/assest/bantuan/bg.jpg";

import Image from "next/image";

export default function Background() {
  return (
    <div className="absolute inset-0 -z-[1] opacity-90 brightness-[0.8]">
      <Image src={bg} alt="bg" layout="fill" objectFit="cover" />
    </div>
  );
}
