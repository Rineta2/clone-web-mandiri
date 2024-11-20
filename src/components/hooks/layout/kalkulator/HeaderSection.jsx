import React from "react";
import Image from "next/image";
import { homeSukuBunga } from "@/components/ui/data/suku-bunga/data";

export function HeaderSection() {
  return (
    <section className="relative min-h-[30vh]">
      <div className="container mx-auto">
        <div className="img">
          {homeSukuBunga.map((item) => (
            <div className="absolute inset-0 -z-10" key={item.id}>
              <Image src={item.img} alt={item.title} quality={100} />

              <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-4 flex flex-col gap-4">
                <h1 className="text-white text-4xl font-bold">{item.title}</h1>
                <p className="text-white text-lg text-center">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
