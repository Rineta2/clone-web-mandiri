import React, { Fragment } from "react";

import { HeaderSection } from "@/components/hooks/layout/kalkulator/kalkulator-bunga-dasar/HeaderSections";
import { PengungkuhanKuantitatif } from "@/components/hooks/layout/kalkulator/kalkulator-bunga-dasar/PengungkuhanKuantitatif";
import { PengungkuhanKualitatif } from "@/components/hooks/layout/kalkulator/kalkulator-bunga-dasar/PengungkuhanKualitatif";
import { KeteranganSections } from "@/components/hooks/layout/kalkulator/kalkulator-bunga-dasar/KeteranganSections";

export default function SukuBungaDasar() {
  return (
    <Fragment>
      <HeaderSection />
      <section className="py-10">
        <div className="max-w-[1200px] mx-auto">
          <PengungkuhanKuantitatif />
          <PengungkuhanKualitatif />
          <KeteranganSections />
        </div>
      </section>
    </Fragment>
  );
}
