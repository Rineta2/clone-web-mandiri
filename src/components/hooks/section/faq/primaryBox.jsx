import React, { Fragment } from "react";

import { faqPrimary } from "@/components/ui/data/Faq";

import Link from "next/link";

export default function PrimaryBox() {
  return (
    <Fragment>
      {faqPrimary.map((item) => {
        return (
          <div
            className="relative flex flex-col text-background gap-12 w-[310px] bg-primaryLg py-10 px-8 rounded-lg h-[250px]"
            key={item.id}
          >
            <h1 className="text-text text-3xl">{item.title}</h1>

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
