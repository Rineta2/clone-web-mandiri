import React, { Fragment } from "react";

import {
  homeSukuBunga,
  bungaProduk,
  deposito,
  depositRates,
  number,
  depositRatesDibayarDikuka,
  depositRatesDibayarDikukaJatuhTempo,
  depositRatesDibayarDiMuka,
  depositRatesDibayarBulananJatuhTempo,
  depositRatesDibayarDiMukaSGD,
  depositRatesValasNonUSD,
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
} from "@/components/ui/data/suku-bunga/data";

import Image from "next/image";

import Link from "next/link";

export default function SukuBungaDana() {
  return (
    <Fragment>
      <section className="relative min-h-[30vh]">
        <div className="container mx-auto">
          <div className="img">
            {homeSukuBunga.map((item) => {
              return (
                <div className="absolute inset-0 -z-10" key={item.id}>
                  <Image src={item.img} alt={item.title} quality={100} />

                  <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-4 flex flex-col gap-4">
                    <h1 className="text-white text-4xl font-bold">
                      {item.title}
                    </h1>
                    <p className="text-white text-lg text-center">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-[1000px] mx-auto">
          <h3 className="text-2xl font-bold mb-5">Pilih suku bunga produk:</h3>

          <div className="flex flex-wrap gap-4">
            {bungaProduk.map((item) => {
              return (
                <Link
                  key={item.id}
                  href={item.path}
                  className="bg-[#18406e] text-white px-4 py-2 text-2xl rounded-md"
                >
                  {item.nama}
                </Link>
              );
            })}
          </div>

          <div className="mb-5 mt-14">
            <h3 className="text-4xl font-bold mb-4">Deposito</h3>
            <p className="text-lg text-gray-500">
              Pilih suku bunga produk deposito :
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {deposito.map((item) => {
              return (
                <Link
                  key={item.id}
                  href={item.path}
                  className="bg-[#18406e] text-white px-4 py-2 text-[1.2rem] rounded-md"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-10" id="deposito">
        <div className="max-w-[1000px] mx-auto">
          <div className="mb-5">
            <h3 className="text-3xl text-secondary">
              Deposito Rupiah dengan Bunga Dibayar Bulanan dan saat Jatuh Tempo
            </h3>

            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden mt-[4%]">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-2xl text-gray-700">
                    Tier
                  </th>

                  <th
                    className="px-4 py-3 text-center text-2xl text-gray-700"
                    colSpan={5}
                  >
                    Tenor (bulan)*
                  </th>
                </tr>

                <tr className="bg-gray-200">
                  <th className="px-4 py-3 text-left"></th>
                  {number.map((item) => {
                    return (
                      <th
                        key={item}
                        className="px-4 py-3 text-center text-2xl text-gray-700"
                      >
                        {item}
                      </th>
                    );
                  })}
                </tr>
              </thead>

              <tbody>
                {depositRates.map((rate) => (
                  <tr className="border-t" key={rate.tier}>
                    <td className="px-4 py-3">{rate.tier}</td>
                    {number.map((item) => {
                      return (
                        <td key={item} className="px-4 py-3 text-center">
                          {rate.tenor[item]}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mb-5">
            <h3 className="text-3xl text-secondary mt-[5%]">
              Deposito Rupiah dengan Bunga Dibayar di Muka
            </h3>

            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden mt-[4%]">
              <thead className="bg-gray-200 ">
                <tr>
                  <th className="px-4 py-3 text-2xl text-left text-gray-700">
                    Tier
                  </th>

                  <th
                    className="px-4 py-3 text-center text-2xl text-gray-700"
                    colSpan={5}
                  >
                    Tenor (bulan)*
                  </th>
                </tr>

                <tr className="bg-gray-200">
                  <th className="px-4 py-3 text-left"></th>
                  {number.map((item) => {
                    return (
                      <th
                        key={item}
                        className="px-4 py-3 text-center text-2xl text-gray-700"
                      >
                        {item}
                      </th>
                    );
                  })}
                </tr>
              </thead>

              <tbody>
                {depositRatesDibayarDikuka.map((rate) => (
                  <tr className="border-t" key={rate.tier}>
                    <td className="px-4 py-3">{rate.tier}</td>
                    {number.map((item) => {
                      return (
                        <td key={item} className="px-4 py-3 text-center">
                          {rate.tenor[item]}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mb-5">
            <h3 className="text-3xl text-secondary mt-[5%]">
              Deposito USD dengan Bunga Dibayar Bulanan dan Jatuh Tempo
            </h3>

            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden mt-[4%]">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-2xl text-gray-700">
                    Tier
                  </th>

                  <th
                    className="px-4 py-3 text-center text-2xl text-gray-700"
                    colSpan={5}
                  >
                    Tenor (bulan)*
                  </th>
                </tr>

                <tr className="bg-gray-200">
                  <th className="px-4 py-3 text-left"></th>
                  {number.map((item) => {
                    return (
                      <th
                        key={item}
                        className="px-4 py-3 text-center text-2xl text-gray-700"
                      >
                        {item}
                      </th>
                    );
                  })}
                </tr>
              </thead>

              <tbody>
                {depositRatesDibayarDikukaJatuhTempo.map((rate) => (
                  <tr className="border-t" key={rate.tier}>
                    <td className="px-4 py-3">{rate.tier}</td>
                    {number.map((item) => {
                      return (
                        <td key={item} className="px-4 py-3 text-center">
                          {rate.tenor[item]}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mb-5">
            <h3 className="text-3xl text-secondary mt-[5%]">
              Deposito USD dengan Bunga Dibayar di Muka
            </h3>

            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden mt-[4%]">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-2xl text-gray-700">
                    Tier
                  </th>

                  <th
                    className="px-4 py-3 text-center text-2xl text-gray-700"
                    colSpan={5}
                  >
                    Tenor (bulan)*
                  </th>
                </tr>

                <tr className="bg-gray-200">
                  <th className="px-4 py-3 text-left"></th>
                  {number.map((item) => {
                    return (
                      <th
                        key={item}
                        className="px-4 py-3 text-center text-2xl text-gray-700"
                      >
                        {item}
                      </th>
                    );
                  })}
                </tr>
              </thead>

              <tbody>
                {depositRatesDibayarDiMuka.map((rate) => (
                  <tr className="border-t" key={rate.tier}>
                    <td className="px-4 py-3">{rate.tier}</td>
                    {number.map((item) => {
                      return (
                        <td key={item} className="px-4 py-3 text-center">
                          {rate.tenor[item]}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mb-5">
            <h3 className="text-3xl text-secondary mt-[5%]">
              Deposito SGD dengan Bunga Dibayar Bulanan dan Jatuh Tempo
            </h3>

            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden mt-[4%]">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-2xl text-gray-700">
                    Tier
                  </th>

                  <th
                    className="px-4 py-3 text-center text-2xl text-gray-700"
                    colSpan={5}
                  >
                    Tenor (bulan)*
                  </th>
                </tr>

                <tr className="bg-gray-200">
                  <th className="px-4 py-3 text-left"></th>
                  {number.map((item) => {
                    return (
                      <th
                        key={item}
                        className="px-4 py-3 text-center text-2xl text-gray-700"
                      >
                        {item}
                      </th>
                    );
                  })}
                </tr>
              </thead>

              <tbody>
                {depositRatesDibayarBulananJatuhTempo.map((rate) => (
                  <tr className="border-t" key={rate.tier}>
                    <td className="px-4 py-3">{rate.tier}</td>
                    {number.map((item) => {
                      return (
                        <td key={item} className="px-4 py-3 text-center">
                          {rate.tenor[item]}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mb-5">
            <h3 className="text-3xl text-secondary mt-[5%]">
              Deposito SGD dengan Bunga Dibayar di Muka
            </h3>

            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden mt-[4%]">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-2xl text-gray-700">
                    Tier
                  </th>

                  <th
                    className="px-4 py-3 text-center text-2xl text-gray-700"
                    colSpan={5}
                  >
                    Tenor (bulan)*
                  </th>
                </tr>

                <tr className="bg-gray-200">
                  <th className="px-4 py-3 text-left"></th>
                  {number.map((item) => {
                    return (
                      <th
                        key={item}
                        className="px-4 py-3 text-center text-2xl text-gray-700"
                      >
                        {item}
                      </th>
                    );
                  })}
                </tr>
              </thead>

              <tbody>
                {depositRatesDibayarDiMukaSGD.map((rate) => (
                  <tr className="border-t" key={rate.tier}>
                    <td className="px-4 py-3">{rate.tier}</td>
                    {number.map((item) => {
                      return (
                        <td key={item} className="px-4 py-3 text-center">
                          {rate.tenor[item]}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mb-5">
            <h3 className="text-3xl text-secondary mt-[5%]">
              Deposito Valas Non USD & SGD**
            </h3>

            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden mt-[4%]">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-2xl text-gray-700">
                    Tier
                  </th>

                  <th
                    className="px-4 py-3 text-center text-2xl text-gray-700"
                    colSpan={5}
                  >
                    Tenor (bulan)*
                  </th>
                </tr>

                <tr className="bg-gray-200">
                  <th className="px-4 py-3 text-left"></th>
                  {number.map((item) => {
                    return (
                      <th
                        key={item}
                        className="px-4 py-3 text-center text-2xl text-gray-700"
                      >
                        {item}
                      </th>
                    );
                  })}
                </tr>
              </thead>

              <tbody>
                {depositRatesValasNonUSD.map((rate) => (
                  <tr className="border-t" key={rate.tier}>
                    <td className="px-4 py-3">{rate.tier}</td>
                    {number.map((item) => {
                      return (
                        <td key={item} className="px-4 py-3 text-center">
                          {rate.tenor[item]}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-500 mt-5">
            **) Berlaku untuk bunga dibayar bulanan & jatuh tempo saja
          </p>
        </div>
      </section>

      <section id="tabungan" className="py-10">
        <div className="max-w-[1000px] mx-auto">
          <div className="mb-5 mt-14">
            <h3 className="text-4xl font-bold mb-4">Tabungan</h3>
            <p className="text-lg text-gray-500">
              Pilih suku bunga produk tabungan :
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {tabungan.map((item) => {
              return (
                <Link
                  key={item.id}
                  href={item.path}
                  className="bg-[#18406e] text-white px-4 py-2 text-[1.2rem] rounded-md"
                >
                  {item.nama}
                </Link>
              );
            })}
          </div>

          <div className="mt-14">
            <h3 className="text-3xl text-secondary mt-[5%] mb-[2%]">
              Tabungan Rupiah
            </h3>

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
                {TabunganRupiah.map((tier, index) => (
                  <tr key={index} className="border-b border-gray-300">
                    <td className="px-6 py-3 text-gray-700">{tier.range}</td>
                    <td className="px-6 py-3 text-gray-700">
                      {tier.interestRate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-14">
            <h3 className="text-3xl text-secondary mt-[5%] mb-[2%]">
              Mandiri Tabungan Bisnis
            </h3>

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
                {MandiriTabunganBisnis.map((tier, index) => (
                  <tr key={index} className="border-b border-gray-300">
                    <td className="px-6 py-3 text-gray-700">{tier.range}</td>
                    <td className="px-6 py-3 text-gray-700">
                      {tier.interestRate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-14">
            <h3 className="text-3xl text-secondary mt-[5%] mb-[2%]">
              Tabungan NOW
            </h3>

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
                {MandiriTabunganNOW.map((tier, index) => (
                  <tr key={index} className="border-b border-gray-300">
                    <td className="px-6 py-3 text-gray-700">{tier.range}</td>
                    <td className="px-6 py-3 text-gray-700">
                      {tier.interestRate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-14">
            <h3 className="text-3xl text-secondary mt-[5%] mb-[2%]">
              Tabungan Rencana Rupiah / Tabungan Rencana SiMuda Rumahku
            </h3>

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
                {MandiriTabunganRencanaRupiah.map((tier, index) => (
                  <tr key={index} className="border-b border-gray-300">
                    <td className="px-6 py-3 text-gray-700">{tier.range}</td>
                    <td className="px-6 py-3 text-gray-700">
                      {tier.interestRate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-14">
            <h3 className="text-3xl text-secondary mt-[5%] mb-[2%]">
              Tabungan Payroll
            </h3>

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
                {MandiriTabunganSimudaRumahku.map((tier, index) => (
                  <tr key={index} className="border-b border-gray-300">
                    <td className="px-6 py-3 text-gray-700">{tier.range}</td>
                    <td className="px-6 py-3 text-gray-700">
                      {tier.interestRate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-14">
            <h3 className="text-3xl text-secondary mt-[5%] mb-[2%]">
              Tabungan Mitra Usaha
            </h3>

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
                {MandiriTabunganPayroll.map((tier, index) => (
                  <tr key={index} className="border-b border-gray-300">
                    <td className="px-6 py-3 text-gray-700">{tier.range}</td>
                    <td className="px-6 py-3 text-gray-700">
                      {tier.interestRate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-14">
            <h3 className="text-3xl text-secondary mt-[5%] mb-[2%]">
              Tabungan TKI
            </h3>

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
                {MandiriTabunganMitraUsaha.map((tier, index) => (
                  <tr key={index} className="border-b border-gray-300">
                    <td className="px-6 py-3 text-gray-700">{tier.range}</td>
                    <td className="px-6 py-3 text-gray-700">
                      {tier.interestRate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-14">
            <h3 className="text-3xl text-secondary mt-[5%] mb-[2%]">
              Tabungan Valuta Asing USD
            </h3>

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
                {MandiriTabunganTKI.map((tier, index) => (
                  <tr key={index} className="border-b border-gray-300">
                    <td className="px-6 py-3 text-gray-700">{tier.range}</td>
                    <td className="px-6 py-3 text-gray-700">
                      {tier.interestRate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-14">
            <h3 className="text-3xl text-secondary mt-[5%] mb-[2%]">
              Tabungan Valuta Asing SGD
            </h3>

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
                {MandiriTabunganValasSGD.map((tier, index) => (
                  <tr key={index} className="border-b border-gray-300">
                    <td className="px-6 py-3 text-gray-700">{tier.range}</td>
                    <td className="px-6 py-3 text-gray-700">
                      {tier.interestRate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-14">
            <h3 className="text-3xl text-secondary mt-[5%] mb-[2%]">
              Tabungan Valuta Asing
            </h3>

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
                {MandiriTabunganValasUSD.map((tier, index) => (
                  <tr key={index} className="border-b border-gray-300">
                    <td className="px-6 py-3 text-gray-700">{tier.range}</td>
                    <td className="px-6 py-3 text-gray-700">
                      {tier.interestRate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-14">
            <h3 className="text-3xl text-secondary mt-[5%] mb-[2%]">
              Tabungan Multicurrency
            </h3>

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
                {MandiriTabunganValasNonUSD.map((tier, index) => (
                  <tr key={index} className="border-b border-gray-300">
                    <td className="px-6 py-3 text-gray-700">{tier.range}</td>
                    <td className="px-6 py-3 text-gray-700">
                      {tier.interestRate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-14">
            <h3 className="text-3xl text-secondary mt-[5%] mb-[2%]">
              Tabungan Rencana USD
            </h3>

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
                {MandiriRencanaUSD.map((tier, index) => (
                  <tr key={index} className="border-b border-gray-300">
                    <td className="px-6 py-3 text-gray-700">{tier.range}</td>
                    <td className="px-6 py-3 text-gray-700">
                      {tier.interestRate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-14">
            <h3 className="text-3xl text-secondary mt-[5%] mb-[2%]">
              TabunganKu
            </h3>

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
                {MandiriTabunganRupiah.map((tier, index) => (
                  <tr key={index} className="border-b border-gray-300">
                    <td className="px-6 py-3 text-gray-700">{tier.range}</td>
                    <td className="px-6 py-3 text-gray-700">
                      {tier.interestRate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-14">
            <h3 className="text-3xl text-secondary mt-[5%] mb-[2%]">
              Tabungan SiMakmur - Laku Pandai
            </h3>

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
                {MandiriTabunganMulticurrency.map((tier, index) => (
                  <tr key={index} className="border-b border-gray-300">
                    <td className="px-6 py-3 text-gray-700">{tier.range}</td>
                    <td className="px-6 py-3 text-gray-700">
                      {tier.interestRate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-14">
            <h3 className="text-3xl text-secondary mt-[5%] mb-[2%]">
              Tabungan Simpanan Pelajar
            </h3>

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
                {MandiriTabunganSimpananPelajar.map((tier, index) => (
                  <tr key={index} className="border-b border-gray-300">
                    <td className="px-6 py-3 text-gray-700">{tier.range}</td>
                    <td className="px-6 py-3 text-gray-700">
                      {tier.interestRate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
