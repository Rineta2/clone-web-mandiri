import React from "react";

import { sukubungaTableData } from "@/components/ui/data/kalkulator/suku-bunga-dasar/data";

export function PengungkuhanKuantitatif() {
  return (
    <div className="mt-10 flex flex-col gap-4">
      <h3 className="text-lg font-bold text-primary">
        1. Pengungkuhan Kuantitatif
      </h3>

      <span className="text-sm text-gray-500">efektif % per tahun</span>

      <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2" rowSpan="2">
              Periode Data
            </th>
            <th className="border border-gray-300 px-4 py-2" colSpan="2">
              Kredit Non UMKM
            </th>
            <th className="border border-gray-300 px-4 py-2" colSpan="3">
              Kredit UMKM
            </th>
            <th className="border border-gray-300 px-4 py-2" colSpan="2">
              KPR/KPA
            </th>
          </tr>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Korporasi</th>
            <th className="border border-gray-300 px-4 py-2">Ritel</th>
            <th className="border border-gray-300 px-4 py-2">Menengah</th>
            <th className="border border-gray-300 px-4 py-2">Kecil</th>
            <th className="border border-gray-300 px-4 py-2">Mikro</th>
            <th className="border border-gray-300 px-4 py-2">Non KPR/KPA</th>
            <th className="border border-gray-300 px-4 py-2">KPR/KPA</th>
          </tr>
        </thead>
        <tbody>
          {sukubungaTableData.map((item) => (
            <tr key={item.id}>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {item.periodeData}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {item.kreditNonUMKM.korporasi}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {item.kreditNonUMKM.ritel}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {item.kreditUMKM.menengah}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {item.kreditUMKM.kecil}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {item.kreditUMKM.mikro}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {item.KPR_KPA.nonKPR_KPA}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {item.KPR_KPA.KPR_KPA}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
