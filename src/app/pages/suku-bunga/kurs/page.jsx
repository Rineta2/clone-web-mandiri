import React from "react";
import CurrencyTable from "@/components/hooks/layout/kalkulator/kurs/CurrencyTable";
import CurrencyCalculator from "@/components/hooks/layout/kalkulator/kurs/CurrencyCalculator";
import Maps from "@/components/hooks/layout/kalkulator/kurs/Maps";
import BoxCall from "@/components/hooks/layout/kalkulator/kurs/boxCall";

export default function Kurs() {
  return (
    <section>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex gap-10">
          <CurrencyTable />
          <CurrencyCalculator />
        </div>
        <Maps />
        <BoxCall />
      </div>
    </section>
  );
}
