import React from "react";

import bg from "@/components/assest/layout/perseorangan/bg.jpg";

import Image from "next/image";

import Link from "next/link";

export default function Heading() {
  return (
    <section className="relative min-h-[60vh]">
      <div className="container px-12 mx-auto">
        <div className="absolute top-4 left-[20.8%] flex items-center gap-2">
          <Link href="/" className="text-background text-[18px]">
            Home
          </Link>
          <div className="text-background text-[20px]"> / </div>
          <span className="text-background text-[16px]">Perseorangan</span>
        </div>

        <div className="absolute top-[40%] left-[20.8%] flex flex-col gap-2">
          <h1 className="text-4xl text-background max-w-[60%] mb-4">
            Untuk kehidupan yang lebih baik
          </h1>

          <p className="text-[16px] text-background max-w-[55%]">
            Layanan perbankan terbaik untuk memenuhi kebutuhan dan gaya hidup
            Anda sepanjang masa
          </p>
        </div>

        <div className="absolute inset-0 -z-[1]">
          <Image src={bg} alt="bg" layout="fill" objectFit="cover" />
        </div>
      </div>
    </section>
  );
}
