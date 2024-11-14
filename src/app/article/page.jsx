import React from "react";

import { articleData } from "@/components/ui/data/Article";

import Image from "next/image";

import Link from "next/link";

import { ChevronRight } from "lucide-react";

export default function Article() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articleData.map((item) => {
            return (
              <div
                className="flex flex-col gap-6 w-[100%] h-[500px]"
                key={item.id}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={500}
                  height={500}
                  quality={100}
                  className="object-cover"
                  style={{ width: "100%", height: "300px" }}
                />

                <div className="flex gap-4 items-center">
                  <p className="text-secondary text-[16px] font-bold">
                    {item.type}
                  </p>
                  <p className="text-gray-500 text-[16px]">{item.date}</p>
                </div>

                <h1 className="text-primary text-[22px] font-medium">
                  {item.title}
                </h1>

                <p className="text-gray-500 text-[18px]">{item.desc}</p>

                <Link
                  href={`/article/${item.slug}`}
                  className="flex items-center gap-2"
                >
                  {item.name}
                  <ChevronRight size={24} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
