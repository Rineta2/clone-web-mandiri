import React from "react";

import { box } from "@/components/ui/data/perseorangan/index";

import Image from "next/image";

import Link from "next/link";

export default function BoxContent() {
  return (
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
  );
}
