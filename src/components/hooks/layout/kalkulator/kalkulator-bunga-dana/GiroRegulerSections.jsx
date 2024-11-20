import React from "react";
import Link from "next/link";
import {
  giroReguler,
  GiroRegulerRupiah,
  GiroRegulerValutaUSD,
  GiroRegulerValutaSGD,
  GiroRegulerValutaCNY,
  GiroRegulerValutaNonUSD,
} from "@/components/ui/data/kalkulator/suku-bunga/data";

export function GiroRegulerSections() {
  const renderTable = (title, headers, data) => (
    <div className="mt-14">
      <h3 className="text-3xl text-secondary mt-[5%] mb-[2%]">{title}</h3>

      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-blue-100">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left font-semibold text-gray-700"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((tier, index) => (
            <tr key={index} className="border-b border-gray-300">
              <td className="px-6 py-3 text-gray-700">
                {tier.range || tier.currency}
              </td>
              <td className="px-6 py-3 text-gray-700">{tier.interestRate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <section id="giro-reguler" className="py-10">
      <div className="max-w-[1000px] mx-auto">
        <div className="mb-5 mt-14">
          <h3 className="text-4xl font-bold mb-4">Giro Reguler</h3>
          <p className="text-lg text-gray-500">
            Pilih suku bunga produk Giro Reguler :
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          {giroReguler.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              className="bg-[#18406e] text-white px-4 py-2 text-[1.2rem] rounded-md"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {renderTable(
          "Giro Reguler Rupiah",
          ["Tier", "Suku Bunga*"],
          GiroRegulerRupiah
        )}
        {renderTable(
          "Giro Reguler Valuta USD",
          ["Tier", "Suku Bunga*"],
          GiroRegulerValutaUSD
        )}
        {renderTable(
          "Giro Reguler Valuta SGD",
          ["Tier", "Suku Bunga*"],
          GiroRegulerValutaSGD
        )}
        {renderTable(
          "Giro Reguler Valuta CNY",
          ["Tier", "Suku Bunga*"],
          GiroRegulerValutaCNY
        )}
        {renderTable(
          "Giro Reguler Valuta Non USD, SGD, dan CNY",
          ["Valuta", "Suku Bunga*"],
          GiroRegulerValutaNonUSD
        )}
      </div>
    </section>
  );
}
