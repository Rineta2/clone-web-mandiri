import React, { Fragment } from "react";

import bg from "@/components/assest/bantuan/bg.jpg";

import Image from "next/image";

import Link from "next/link";

export default function Bantuan() {
  return (
    <Fragment>
      <section className="relative min-h-[60vh]">
        <div className="container px-12 mx-auto">
          <div className="absolute top-4 left-[20.8%] flex items-center gap-2">
            <Link href="/" className="text-background text-[18px]">
              Home
            </Link>
            <div className="text-background text-[20px]"> / </div>
            <span className="text-background text-[16px]">Bantuan</span>
          </div>

          <div className="absolute top-[50%] translate-y-[-50%] left-[20.8%] flex flex-col gap-2">
            <h1
              className="text-5xl text-background mb-4"
              style={{
                lineHeight: "1.5",
              }}
            >
              Bantuan & FAQ
            </h1>

            <p className="text-[20px] text-background max-w-[70%]">
              Kami siap untuk melayani dan menjawab pertanyaan Anda.
            </p>
          </div>

          <div className="absolute inset-0 -z-[1] opacity-90 brightness-[0.8]">
            <Image src={bg} alt="bg" layout="fill" objectFit="cover" />
          </div>
        </div>
      </section>
    </Fragment>
  );
}
