import React, { Fragment } from "react";

import bg from "@/components/assest/tentang-mandiri/bg.jpg";

import Image from "next/image";

import Link from "next/link";

import { box } from "@/components/ui/data/tentang-kami/data";

export default function TentangMandiri() {
  return (
    <Fragment>
      <section className="relative min-h-[60vh]">
        <div className="container px-12 mx-auto">
          <div className="absolute top-4 left-[20.8%] flex items-center gap-2">
            <Link href="/" className="text-background text-[18px]">
              Home
            </Link>
            <div className="text-background text-[20px]"> / </div>
            <span className="text-background text-[16px]">Tentang Kami</span>
          </div>

          <div className="absolute top-[50%] translate-y-[-50%] left-[20.8%] flex flex-col gap-2">
            <h1
              className="text-5xl text-background max-w-[50%] mb-4"
              style={{
                lineHeight: "1.5",
              }}
            >
              Tumbuh Bersama Anda, itulah komitmen kami
            </h1>

            <p className="text-[20px] text-background max-w-[35%]">
              Dengan dukungan sumber daya manusia yang profesional, Bank Mandiri
              terus berusaha mewujudkan masa depan Indonesia yang lebih baik
            </p>
          </div>

          <div className="absolute inset-0 -z-[1] opacity-90">
            <Image src={bg} alt="bg" layout="fill" objectFit="cover" />
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-[1200px] py-12 px-12 mx-auto">
          <div
            className="grid grid-cols-3 gap-4"
            style={{
              rowGap: "2rem",
            }}
          >
            {box.map((item, index) => (
              <div
                key={index}
                className="relative p-4 border border-gray-200 rounded-lg w-[360px] h-[350px] overflow-hidden"
                style={{
                  background: `linear-gradient(to top, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))`,
                }}
              >
                <div className="flex flex-col gap-4 mb-4">
                  <Link
                    href={item.slug}
                    className="flex items-center gap-2 text-[20px] text-primary"
                  >
                    {item.name}
                    {item.icons}
                  </Link>
                  <p className="text-[16px] text-gray-400 line-clamp-2">
                    {item.desc}
                  </p>
                </div>

                <div className="absolute bottom-0 right-0 w-full h-[200px]">
                  <Image
                    src={item.img}
                    alt={item.name}
                    quality={100}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    style={{
                      zIndex: -1,
                      userSelect: "none",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
}
