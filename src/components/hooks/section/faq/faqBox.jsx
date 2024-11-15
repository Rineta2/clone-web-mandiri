import React, { Fragment } from "react";

import { faqBox } from "@/components/ui/data/Faq";

import Link from "next/link";

export default function FaqBox() {
  return (
    <Fragment>
      {faqBox.map((item) => {
        return (
          <div
            className="relative flex flex-col gap-12 w-[310px] border border-gray-200 py-10 px-8 rounded-lg h-[250px]"
            key={item.id}
          >
            <h1 className="text-text text-2xl font-medium">{item.title}</h1>

            <p className="text-gray-400 text-[16px]">{item.desc}</p>

            <div className="absolute bottom-6">
              <Link
                href={item.path}
                className="flex gap-2 items-center text-[16px]"
              >
                {item.name}
                {item.icons}
              </Link>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
}
