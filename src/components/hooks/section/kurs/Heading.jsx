import React, { Fragment } from "react";

import { kurs } from "@/components/ui/data/Kurs";

export default function Heading() {
  return (
    <Fragment>
      {kurs.map((item) => {
        return (
          <div className="flex flex-col gap-4 items-center" key={item.id}>
            <h1 className="text-4xl font-medium text-primary">{item.title}</h1>
            <span className="text-[16px] text-gray-500 mt-4">{item.date}</span>
          </div>
        );
      })}
    </Fragment>
  );
}
