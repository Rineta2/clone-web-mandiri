import React, { Fragment } from "react";

import bg from "@/components/assest/perseorangan/bg.jpg";

import Image from "next/image";

import Link from "next/link";

import { box, kpr, berita } from "@/components/ui/data/perseorangan/data";

import bg2 from "@/components/assest/perseorangan/bg2.jpg";

export default function Perseorang() {
  return (
    <Fragment>
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

                  <p className="text-[16px] text-gray-400">{item.desc}</p>
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

      <section className="relative min-h-[60vh]">
        <div className="container px-12 mx-auto">
          <div className="absolute inset-0 -z-[1] brightness-[0.9] overflow-hidden">
            <Image src={bg2} alt="bg2" layout="fill" objectFit="cover" />
          </div>

          <div className="absolute left-[15%] top-[50%] translate-y-[-50%] flex flex-col gap-10">
            {kpr.map((item) => {
              return (
                <div key={item.id} className="flex flex-col gap-6">
                  <h1
                    className="text-background text-4xl max-w-[60%] capitalize"
                    style={{
                      lineHeight: "1.5",
                    }}
                  >
                    {item.title}
                  </h1>
                  <p className="text-gray-300 max-w-[50%] text-[18px]">
                    {item.desc}
                  </p>

                  <Link
                    href={item.slug}
                    className="flex items-center text-background text-[18px]"
                  >
                    {item.name}
                    {item.icons}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="container px-20 mx-auto">
          <div
            className="flex flex-col gap-10"
            style={{
              rowGap: "5rem",
            }}
          >
            {berita.map((item) => {
              return (
                <div key={item.id} className="flex items-center gap-10">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={500}
                    height={500}
                    quality={100}
                    objectFit="cover"
                    objectPosition="center"
                  />

                  <div className="flex flex-col gap-4">
                    <h1 className="text-4xl text-primary">{item.title}</h1>
                    <p className="text-[18px] text-gray-500 max-w-[90%]">
                      {item.desc}
                    </p>
                    <Link
                      href={item.slug}
                      className="flex items-center text-primary text-[18px]"
                    >
                      {item.name}
                      {item.icons}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Fragment>
  );
}
