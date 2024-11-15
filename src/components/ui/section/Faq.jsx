import React from "react";

import Heading from "@/components/hooks/section/faq/Heading";

import FaqBox from "@/components/hooks/section/faq/faqBox";

import PrimaryBox from "@/components/hooks/section/faq/primaryBox";

export default function Faq() {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 justify-center items-center">
          <Heading />

          <div className="flex gap-8 mt-20">
            <FaqBox />

            <PrimaryBox />
          </div>
        </div>
      </div>
    </section>
  );
}
