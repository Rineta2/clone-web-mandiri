import React, { Fragment } from "react";

import Home from "@/components/ui/section/Home";

import Article from "@/app/article/page";

import Promotions from "@/app/promotions/page";

import Kurs from "@/components/ui/section/Kurs";

export default function LocalePage() {
  return (
    <main>
      <Fragment>
        <Home />
        <Article />
        <Promotions />
        <Kurs />
      </Fragment>
    </main>
  );
}
