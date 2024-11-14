import React, { Fragment } from "react";

import Home from "@/components/ui/section/Home";

import Article from "@/app/article/page";

export default function LocalePage() {
  return (
    <main>
      <Fragment>
        <Home />
        <Article />
      </Fragment>
    </main>
  );
}
