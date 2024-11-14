import React, { Fragment } from "react";

import { kurs } from "@/components/ui/data/Kurs";

import Link from "next/link";

export default function Deskripsi() {
  return (
    <Fragment>
      {kurs.map((item) => {
        return (
          <div className="flex flex-col gap-2 items-center mt-12" key={item.id}>
            <p className="text-[16px] text-gray-500 max-w-[98%] text-center mb-8">
              {item.desc}
            </p>

            <Link
              href={item.path}
              className="text-primaryLg font-bold text-capitalize w-[300px] text-[18px] h-[60px] flex items-center justify-center text-center border border-primary rounded-lg p-2 hover:text-primary transition-all duration-300"
            >
              {item.name}
            </Link>
          </div>
        );
      })}
    </Fragment>
  );
}
