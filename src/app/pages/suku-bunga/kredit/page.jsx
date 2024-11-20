import React, { Fragment } from "react";

import { HeaderSection } from "@/components/hooks/layout/kalkulator/kredit/HeaderSections";
import { PengungkuhanKuantitatif } from "@/components/hooks/layout/kalkulator/kredit/PengungkuhanKuantitatif";
import { PengungkuhanKualitatif } from "@/components/hooks/layout/kalkulator/kredit/PengungkuhanKualitatif";
import { KeteranganSections } from "@/components/hooks/layout/kalkulator/kredit/KeteranganSections";

export default function Kredit() {
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
