import React, { Fragment } from "react";

import { faq } from "@/components/ui/data/Faq";

export default function Heading() {
  return (
    <Fragment>
      {faq.map((item) => {
        return (
          <div className="flex flex-col gap-4 items-center" key={item.id}>
            <h1 className="text-primary text-4xl font-medium mb-4">
              {item.name}
            </h1>
            <p className="text-center text-gray-500 text-[18px]">{item.desc}</p>
          </div>
        );
      })}
    </Fragment>
  );
}
