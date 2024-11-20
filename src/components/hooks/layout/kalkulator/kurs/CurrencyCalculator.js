"use client";

import { useState } from "react";
import { currencyRates } from "@/components/ui/data/kalkulator/kurs/data";

export default function CurrencyCalculator() {
  const [fromCurrency, setFromCurrency] = useState("AUD");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(null);
  const [type, setType] = useState("Beli"); // "Beli" atau "Jual"

  // Fungsi untuk membersihkan format angka
  const parseRate = (value) => {
    if (typeof value === "string") {
      return parseFloat(value.replace(/\./g, "").replace(",", "."));
    }
    return value;
  };

  const calculateRate = () => {
    const fromRate = currencyRates.find((rate) => rate.currency === fromCurrency);
    const toRate = currencyRates.find((rate) => rate.currency === toCurrency);

    if (!fromRate || !toRate) {
      setResult("Kurs tidak ditemukan");
      return;
    }

    if (amount <= 0) {
      setResult("Jumlah harus lebih dari 0");
      return;
    }

    const rateType = type === "Beli" ? "ttBuy" : "ttSell";
    const fromRateValue = parseRate(fromRate[rateType]);
    const toRateValue = parseRate(toRate[rateType]);

    if (!fromRateValue || !toRateValue) {
      setResult("Kurs tidak valid");
      return;
    }

    const convertedAmount = (amount / fromRateValue) * toRateValue;
    setResult(convertedAmount.toFixed(2));
  };

  return (
    <div className="p-4 border border-gray-300 rounded-md w-[500px] h-[450px]">
      <h2 className="text-lg font-bold mb-4">Kalkulator Kurs</h2>
      <div className="mb-4">
        <label className="block mb-2">Pilih Jenis:</label>
        <select
          className="w-full border border-gray-300 rounded p-2"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="Beli">Beli</option>
          <option value="Jual">Jual</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Dari:</label>
        <select
          className="w-full border border-gray-300 rounded p-2"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {currencyRates.map((rate) => (
            <option key={rate.currency} value={rate.currency}>
              {rate.currency}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Ke:</label>
        <select
          className="w-full border border-gray-300 rounded p-2"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {currencyRates.map((rate) => (
            <option key={rate.currency} value={rate.currency}>
              {rate.currency}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Jumlah:</label>
        <input
          type="number"
          className="w-full border border-gray-300 rounded p-2"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </div>
      <button
        onClick={calculateRate}
        className="w-full bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
      >
        Kalkulasi
      </button>
      {result && (
        <div className="mt-4 p-2 bg-gray-100 rounded border border-gray-300">
          <strong>Hasil: </strong>
          {result} {toCurrency}
        </div>
      )}
    </div>
  );
}
