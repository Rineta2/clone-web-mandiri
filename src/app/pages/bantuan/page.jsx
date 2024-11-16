"use client";

import React, { Fragment } from "react";

import Link from "next/link";

import Background from "@/components/hooks/section/pages/bantuan/Background";

import Toolbar from "@/components/hooks/section/pages/bantuan/Toolbar";

import Text from "@/components/hooks/section/pages/bantuan/Text";

import Accordion from "@/components/hooks/section/pages/bantuan/Accordion";

import {
  debitHilang,
  kreditHilang,
  blog,
} from "@/components/ui/data/bantuan/data";

import Image from "next/image";

export default function Bantuan() {
  return (
    <Fragment>
      <section className="relative min-h-[60vh]">
        <div className="container px-12 mx-auto">
          <Toolbar />
          <Text />
          <Background />
        </div>
      </section>

      <section>
        <div className="max-w-[1000px] mx-auto">
          <div className="mb-10">
            <Link
              href={"#"}
              className="bg-[#04006e] text-background py-10 px-20 rounded-lg text-[20px] font-semibold"
              style={{
                boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
              }}
            >
              Kartu Debit Hilang?
            </Link>

            <Accordion items={debitHilang} />
          </div>

          <div className="mt-32">
            <Link
              href={"#"}
              className="bg-[#04006e] text-background py-10 px-20 rounded-lg text-[20px] font-semibold"
              style={{
                boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
              }}
            >
              Kartu Kredit Hilang?
            </Link>

            <Accordion items={kreditHilang} prefix="kredit" />
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-[1200px] px-12 mx-auto">
          <div className="flex flex-col gap-10">
            {blog.map((item) => {
              return (
                <div key={item.id} className="flex gap-20 items-center">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={500}
                    height={500}
                  />

                  <div className="flex flex-col gap-10">
                    <h3 className="text-[24px] font-semibold text-primary">
                      {item.title}
                    </h3>

                    <p className="text-[16px] text-gray-500">{item.desc}</p>

                    <Link
                      href={item.slug}
                      className="text-[16px] flex items-center gap-2"
                    >
                      {item.name}
                      <span>{item.icons}</span>
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
