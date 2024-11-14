import React from "react";

import { kurs, kursBox } from "@/components/ui/data/Kurs";

import Link from "next/link";

import Heading from "@/components/hooks/section/kurs/Heading";

import Card from "@/components/hooks/section/kurs/Card";

import Deskripsi from "@/components/hooks/section/kurs/Deskripsi";

export default function Kurs() {
  return (
    <section className="relative bg-[#f9f9f9]">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8 items-center justify-center">
          <Heading />

          <div className="flex gap-4 mt-12">
            <Card />
          </div>

          <Deskripsi />
        </div>
      </div>
    </section>
  );
}
