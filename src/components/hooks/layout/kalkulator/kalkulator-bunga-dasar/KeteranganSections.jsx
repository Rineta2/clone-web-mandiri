import React from "react";

import { keteranganData } from "@/components/ui/data/kalkulator/suku-bunga-dasar/data";

export function KeteranganSections() {
  return (
    <div className="flex flex-col gap-4 mt-10">
      <h1 className="text-[1.3rem] font-bold text-primary mb-6">Keterangan</h1>

      {keteranganData.map((item) => {
        return (
          <div key={item.id} className="flex gap-4 mb-6">
            <span>{item.id}</span>
            <h3>{item.desc}</h3>
          </div>
        );
      })}
    </div>
  );
}
