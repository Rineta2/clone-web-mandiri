import Image from "next/image";

import Link from "next/link";

import { berita } from "@/components/ui/data/perseorangan/index";

export default function Berita() {
  return (
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
  );
}
