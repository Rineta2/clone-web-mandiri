import React from "react";
import {
  number,
  depositRates,
  depositRatesDibayarDikuka,
  depositRatesDibayarDikukaJatuhTempo,
  depositRatesDibayarDiMuka,
  depositRatesDibayarBulananJatuhTempo,
  depositRatesDibayarDiMukaSGD,
  depositRatesValasNonUSD,
} from "@/components/ui/data/suku-bunga/data";

export function DepositoSections() {
  const renderTable = (title, data) => (
    <div className="mb-5">
      <h3 className="text-3xl text-secondary mt-[5%]">{title}</h3>

      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden mt-[4%]">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-3 text-left text-2xl text-gray-700">Tier</th>
            <th
              className="px-4 py-3 text-center text-2xl text-gray-700"
              colSpan={5}
            >
              Tenor (bulan)*
            </th>
          </tr>

          <tr className="bg-gray-200">
            <th className="px-4 py-3 text-left"></th>
            {number.map((item) => (
              <th
                key={item}
                className="px-4 py-3 text-center text-2xl text-gray-700"
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((rate) => (
            <tr className="border-t" key={rate.tier}>
              <td className="px-4 py-3">{rate.tier}</td>
              {number.map((item) => (
                <td key={item} className="px-4 py-3 text-center">
                  {rate.tenor[item]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <section className="py-10" id="deposito">
      <div className="max-w-[1000px] mx-auto">
        {renderTable(
          "Deposito Rupiah dengan Bunga Dibayar Bulanan dan saat Jatuh Tempo",
          depositRates
        )}
        {renderTable(
          "Deposito Rupiah dengan Bunga Dibayar di Muka",
          depositRatesDibayarDikuka
        )}
        {renderTable(
          "Deposito USD dengan Bunga Dibayar Bulanan dan Jatuh Tempo",
          depositRatesDibayarDikukaJatuhTempo
        )}
        {renderTable(
          "Deposito SGD dengan Bunga Dibayar Bulanan dan Jatuh Tempo",
          depositRatesDibayarBulananJatuhTempo
        )}
        {renderTable(
          "Deposito SGD dengan Bunga Dibayar di Muka",
          depositRatesDibayarDiMukaSGD
        )}
        {renderTable("Deposito Valas Non USD & SGD**", depositRatesValasNonUSD)}

        <p className="text-gray-500 mt-5">
          **) Berlaku untuk bunga dibayar bulanan & jatuh tempo saja
        </p>
      </div>
    </section>
  );
}
