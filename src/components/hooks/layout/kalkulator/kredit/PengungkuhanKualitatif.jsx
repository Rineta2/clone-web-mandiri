import React from "react";

import { pengungkapanKualitatifData } from "@/components/ui/data/kalkulator/suku-bunga-dasar/data";

export function PengungkuhanKualitatif() {
  return (
    <div className="mt-10 flex flex-col gap-4">
      <h3 className="text-lg font-bold text-primary">
        2. Pengungkuhan Kualitatif
      </h3>

      <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Kategori</th>
            <th className="border border-gray-300 px-4 py-2">
              Definisi Kategori Kredit
            </th>
            <th className="border border-gray-300 px-4 py-2">
              Indikator / Kriteria dari Kategori Kredit
            </th>
          </tr>
        </thead>
        <tbody>
          {pengungkapanKualitatifData.map((item) => (
            <tr key={item.id}>
              <td className="border border-gray-300 px-4 py-2 font-bold text-center">
                {item.kategori}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {item.definisi || "-"}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {item.indikator}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
