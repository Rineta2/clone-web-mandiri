import React from "react";

import Image from "next/image";

import { homeImg, homeText, homeCard } from "@/components/ui/data/Home";

import Link from "next/link";

export default function Home() {
  return (
    <section className="relative min-h-[80vh]">
      <div className="container px-10">
        <div className="absolute top-0 left-0 w-full h-full z-[-1] filter brightness-[0.8]">
          {homeImg.map((item) => {
            return (
              <Image
                src={item.img}
                alt="home-page"
                quality={100}
                key={item.id}
                className="w-[100%] h-[100%] object-cover"
              />
            );
          })}
        </div>

        <div className="absolute top-[30%] left-[15%] flex flex-col justify-center items-start">
          {homeText.map((item) => {
            return (
              <div key={item.id} className="flex flex-col gap-7">
                <h1 className="text-4xl font-medium max-w-[500px] text-primary leading-[1.5]">
                  {item.title}
                </h1>

                <p className="text-[1.3rem] max-w-[380px] text-primary">
                  {item.desc}
                </p>

                <div className="flex items-center gap-2 w-[20%]">
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-primary"
                  >
                    <span className="text-[1.3rem]">{item.name}</span>
                    {item.icons}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="absolute bottom-[0] left-[0] w-full h-[140px] flex items-center justify-center gap-10 bg-primary py-10">
          {homeCard.map((item) => {
            return (
              <Link
                key={item.id}
                href={item.href}
                className="flex items-center gap-5 w-[400px] h-[100px] rounded-lg p-5"
              >
                <Image src={item.img} alt="home-card" width={50} height={50} />

                <span className="text-white text-[1.3rem] max-w-[200px]">
                  {item.title}
                </span>
              </Link>
            );
          })}

          <div className="absolute bottom-[45px] left-[35%] opacity-50 w-[1px] h-[50px] bg-background rounded-lg"></div>

          <div className="absolute bottom-[45px] left-[58%] opacity-50 w-[1px] h-[50px] bg-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
}
