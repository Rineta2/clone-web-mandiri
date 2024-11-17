import React from "react";

import Image from "next/image";

import Link from "next/link";

import bg2 from "@/components/assest/layout/perseorangan/bg2.jpg";

import { kpr } from "@/components/ui/data/perseorangan/index";

export default function Kpr() {
  return (
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
  );
}
