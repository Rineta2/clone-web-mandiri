import React, { Fragment } from "react";

import { kursBox } from "@/components/ui/data/Kurs";

export default function Card() {
  return (
    <Fragment>
      {kursBox.map((item) => {
        return (
          <div
            className="flex flex-col gap-2 p-6 w-[210px] border border-gray-200 rounded-lg"
            key={item.id}
          >
            <h1 className="text-2xl font-medium text-primary mb-4">
              {item.title}
            </h1>

            <span className="text-[16px] text-primaryLg">{item.beli}</span>

            <span className="text-[24px] mb-4">{item.value}</span>

            <span className="text-[16px] text-primaryLg">{item.jual}</span>

            <span className="text-[24px]">{item.value2}</span>
          </div>
        );
      })}
    </Fragment>
  );
}
