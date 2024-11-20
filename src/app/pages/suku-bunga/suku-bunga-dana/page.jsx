import React, { Fragment } from "react";
import { HeaderSection } from "@/components/hooks/layout/kalkulator/HeaderSection";
import { ProductSelection } from "@/components/hooks/layout/kalkulator/ProductSelection";
import { DepositoSections } from "@/components/hooks/layout/kalkulator/DepositoSections";
import { TabunganSections } from "@/components/hooks/layout/kalkulator/TabunganSections";
import { GiroRegulerSections } from "@/components/hooks/layout/kalkulator/GiroRegulerSections";

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
