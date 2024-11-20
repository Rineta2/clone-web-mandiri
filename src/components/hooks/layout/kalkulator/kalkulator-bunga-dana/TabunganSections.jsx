import React from "react";
import Link from "next/link";
import {
  tabungan,
  TabunganRupiah,
  MandiriTabunganBisnis,
  MandiriTabunganNOW,
  MandiriTabunganRencanaRupiah,
  MandiriTabunganSimudaRumahku,
  MandiriTabunganPayroll,
  MandiriTabunganMitraUsaha,
  MandiriTabunganTKI,
  MandiriTabunganValasSGD,
  MandiriTabunganValasUSD,
  MandiriTabunganValasNonUSD,
  MandiriRencanaUSD,
  MandiriTabunganRupiah,
  MandiriTabunganMulticurrency,
  MandiriTabunganSimpananPelajar,
} from "@/components/ui/data/kalkulator/suku-bunga/data";

export function TabunganSections() {
  const renderTable = (title, data) => (
    <div className="mt-14">
      <h3 className="text-3xl text-secondary mt-[5%] mb-[2%]">{title}</h3>

      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-blue-100">
          <tr>
            <th className="px-6 py-3 text-left font-semibold text-gray-700">
              Tier
            </th>
            <th className="px-6 py-3 text-left font-semibold text-gray-700">
              Suku Bunga*
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((tier, index) => (
            <tr key={index} className="border-b border-gray-300">
              <td className="px-6 py-3 text-gray-700">
                {tier.range || tier.range}
              </td>
              <td className="px-6 py-3 text-gray-700">
                {tier.interestRate || tier.interestRate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <section id="tabungan" className="py-10">
      <div className="max-w-[1000px] mx-auto">
        <div className="mb-5 mt-14">
          <h3 className="text-4xl font-bold mb-4">Tabungan</h3>
          <p className="text-lg text-gray-500">
            Pilih suku bunga produk tabungan :
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          {tabungan.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              className="bg-[#18406e] text-white px-4 py-2 text-[1.2rem] rounded-md"
            >
              {item.nama}
            </Link>
          ))}
        </div>

        {renderTable("Tabungan Rupiah", TabunganRupiah)}
        {renderTable("Mandiri Tabungan Bisnis", MandiriTabunganBisnis)}
        {renderTable("Tabungan NOW", MandiriTabunganNOW)}
        {renderTable(
          "Tabungan Rencana Rupiah / Tabungan Rencana SiMuda Rumahku",
          MandiriTabunganRencanaRupiah
        )}
        {renderTable("Tabungan Payroll", MandiriTabunganPayroll)}
        {renderTable("Tabungan Mitra Usaha", MandiriTabunganMitraUsaha)}
        {renderTable("Tabungan TKI", MandiriTabunganTKI)}
        {renderTable("Tabungan Valuta Asing USD", MandiriTabunganValasSGD)}
        {renderTable("Tabungan Valuta Asing SGD", MandiriTabunganValasUSD)}
        {renderTable("Tabungan Valuta Asing", MandiriTabunganValasNonUSD)}
        {renderTable("Tabungan Multicurrency", MandiriTabunganMulticurrency)}
        {renderTable("Tabungan Rencana USD", MandiriRencanaUSD)}
        {renderTable("TabunganKu", MandiriTabunganRupiah)}
        {renderTable(
          "Tabungan Simpanan Pelajar",
          MandiriTabunganSimpananPelajar
        )}
        {renderTable(
          "Tabungan SiMakmur - Laku Pandai",
          MandiriTabunganMulticurrency
        )}
      </div>
    </section>
  );
}
