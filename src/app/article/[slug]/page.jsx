import React from "react";

import { articleData } from "@/components/ui/data/Article";

import Link from "next/link";

import Image from "next/image";

export default function ArticleDetails({ params }) {
  const { slug } = params;

  const article = articleData.find((item) => item.slug === slug);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <section className="py-20">
      <div className="max-w-[900px] mx-auto">
        <div className="heading flex items-center gap-2 mb-10 mt-[-1rem]">
          <Link href="/" className="text-[16px] text-primary">
            Home
          </Link>
          <div>/</div>
          <Link href={`/article/${article.slug}`} className="text-[16px]">
            Berita
          </Link>
        </div>

        {article.slugDetails.map((item) => {
          return (
            <div className="flex flex-col gap-10" key={item.id}>
              <h1 className="text-[24px] text-center font-bold">
                {item.title}
              </h1>

              {item.img.map((item) => {
                return (
                  <Image
                    key={item.id}
                    src={item.img}
                    alt={item.title}
                    width={1000}
                    height={1000}
                    className="w-full h-auto"
                    quality={100}
                  />
                );
              })}

              <h3 className="text-[24px] font-bold text-secondary">
                {item.hightlight}
              </h3>

              {item.text.map((item) => {
                return <h3 key={item.id}>{item.title}</h3>;
              })}

              {item.content.map((item) => {
                return (
                  <div className="flex flex-col gap-10" key={item.id}>
                    <h6 className="text-[20px] text-gray-600">{item.title}</h6>
                    <p className="text-[14px]">{item.desc}</p>
                  </div>
                );
              })}

              {item.download.map((item) => {
                return (
                  <div className="" key={item.id}>
                    <Link href={item.path} className="text-[18px] text-primary">
                      {item.name}
                    </Link>
                  </div>
                );
              })}

              <p className="text-[16px]">{item.desc}</p>

              {item.link.map((item) => {
                return (
                  <ol className="flex flex-col gap-2" key={item.id}>
                    <li className="list-disc text-[14px] ">
                      <Link href={item.path} className="text-primary">
                        {item.title}
                      </Link>
                    </li>
                  </ol>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
}
