import React, { Fragment } from "react";

import { HeaderSection } from "@/components/hooks/layout/kalkulator/kalkulator-bunga-dana/HeaderSection";

import { ProductSelection } from "@/components/hooks/layout/kalkulator/kalkulator-bunga-dana/ProductSelection";

import { DepositoSections } from "@/components/hooks/layout/kalkulator/kalkulator-bunga-dana/DepositoSections";

import { TabunganSections } from "@/components/hooks/layout/kalkulator/kalkulator-bunga-dana/TabunganSections";

import { GiroRegulerSections } from "@/components/hooks/layout/kalkulator/kalkulator-bunga-dana/GiroRegulerSections";

export default function SukuBungaDana() {
  return (
    <Fragment>
      <HeaderSection />
      <ProductSelection />
      <DepositoSections />
      <TabunganSections />
      <GiroRegulerSections />
    </Fragment>
  );
}
