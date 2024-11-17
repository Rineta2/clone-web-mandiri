import React, { Fragment } from "react";

import Heading from "@/components/hooks/section/pages/perseorang/Heading";

import BoxContent from "@/components/hooks/section/pages/perseorang/BoxContent";

import Kpr from "@/components/hooks/section/pages/perseorang/kpr";

import Berita from "@/components/hooks/section/pages/perseorang/Berita";

export default function Perseorang() {
  return (
    <Fragment>
      <Heading />

      <BoxContent />

      <Kpr />

      <Berita />
    </Fragment>
  );
}
