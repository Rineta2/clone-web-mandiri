"use client";

import React, { Fragment } from "react";

import Link from "next/link";

import Background from "@/components/hooks/section/pages/bantuan/Background";

import Toolbar from "@/components/hooks/section/pages/bantuan/Toolbar";

import Text from "@/components/hooks/section/pages/bantuan/Text";

import Accordion from "@/components/hooks/section/pages/bantuan/Accordion";

import { debitHilang, kreditHilang } from "@/components/ui/data/bantuan/data";

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

      <section></section>
    </Fragment>
  );
}
