import imgSukuBungaDasar from "@/components/assest/navinner/suku-bunga/bg.jpg";
import React, { Fragment } from "react";

export const homeSukuBunga = [
  {
    img: imgSukuBungaDasar,
    title: "Suku Bunga Dasar",
    desc: "Terakhir diperbarui 01 Nov 2022",
  },
];

export const bungaProduk = [
  {
    id: 1,
    nama: "Deposito",
    path: "#deposito",
  },
  {
    id: 2,
    nama: "Tabungan",
    path: "#tabungan",
  },

  {
    id: 3,
    nama: "Giro Reguler",
    path: "#giro-reguler",
  },
];

export const deposito = [
  {
    name: "Deposito Rupiah Bunga Dibayar Bulanan dan Jatuh Tempo",
    path: "#deposito-rupiah-bunga-dibayar-bulanan-dan-jatuh-tempo",
  },

  {
    name: "Deposito Rupiah Bunga Dibayar di Muka",
    path: "#deposito-rupiah-bunga-dibayar-di-muka",
  },

  {
    name: "Deposito USD dengan Bunga Dibayar Bulanan dan Jatuh Tempo",
    path: "#deposito-usd-dengan-bunga-dibayar-bulanan-dan-jatuh-tempo",
  },

  {
    name: "Deposito SGD Dengan Bunga Dibayar Bulanan dan Jatuh Tempo",
    path: "#deposito-sgd-dengan-bunga-dibayar-bulanan-dan-jatuh-tempo",
  },

  {
    name: "Deposito USD dengan Bunga Dibayar di Muka",
    path: "#deposito-usd-dengan-bunga-dibayar-di-muka",
  },
];

export const depositRates = [
  {
    tier: "< Rp 100 Juta",
    tenor: {
      "1": 2.25,
      "3": 2.25,
      "6": 2.50,
      "12": 2.50,
      "24": 2.50,
    },
  },
  {
    tier: "≥ Rp 100 Juta s.d. < 1 M",
    tenor: {
      "1": 2.25,
      "3": 2.25,
      "6": 2.50,
      "12": 2.50,
      "24": 2.50,
    },
  },
  {
    tier: "≥ Rp 1 M s.d. < 2 M",
    tenor: {
      "1": 2.25,
      "3": 2.25,
      "6": 2.50,
      "12": 2.50,
      "24": 2.50,
    },
  },
  {
    tier: "≥ Rp 2 M s.d. < 5 M",
    tenor: {
      "1": 2.25,
      "3": 2.25,
      "6": 2.50,
      "12": 2.50,
      "24": 2.50,
    },
  },
  {
    tier: "≥ Rp 5 M",
    tenor: {
      "1": 2.25,
      "3": 2.25,
      "6": 2.50,
      "12": 2.50,
      "24": 2.50,
    },
  },
];

export const number = [1, 3, 6, 12, 24];

export const depositRatesDibayarDikuka = [
  {
    tier: "< USD 100 Ribu",
    tenor: {
      "1": 0.75,
      "3": 0.75,
      "6": 0.75,
      "12": 0.75,
      "24": 0.75,
    },
  },
  {
    tier: "> USD 100 Ribu - < 1 Juta",
    tenor: {
      "1": 1.00,
      "3": 1.25,
      "6": 1.25,
      "12": 1.25,
      "24": 1.25,
    },
  },
  {
    tier: "> USD 1 Juta - < 10 Juta",
    tenor: {
      "1": 1.00,
      "3": 1.50,
      "6": 1.50,
      "12": 1.50,
      "24": 1.50,
    },
  },
  {
    tier: "> USD 10 Juta",
    tenor: {
      "1": 1.00,
      "3": 1.75,
      "6": 1.75,
      "12": 1.75,
      "24": 1.75,
    },
  },
];

export const depositRatesDibayarDikukaJatuhTempo = [
  {
    tier: "< USD 100 Ribu",
    tenor: {
      "1": 0.75,
      "3": 0.75,
      "6": 0.75,
      "12": 0.75,
      "24": 0.75,
    },
  },
  {
    tier: "> USD 100 Ribu - < 1 Juta",
    tenor: {
      "1": 1.00,
      "3": 1.25,
      "6": 1.25,
      "12": 1.25,
      "24": 1.25,
    },
  },
  {
    tier: "> USD 1 Juta - < 10 Juta",
    tenor: {
      "1": 1.00,
      "3": 1.50,
      "6": 1.50,
      "12": 1.50,
      "24": 1.50,
    },
  },
  {
    tier: "> USD 10 Juta",
    tenor: {
      "1": 1.00,
      "3": 1.75,
      "6": 1.75,
      "12": 1.75,
      "24": 1.75,
    },
  },
];

export const depositRatesDibayarDiMuka = [
  {
    tier: "< USD 100 Ribu",
    tenor: {
      "1": 0.70,
      "3": 0.69,
      "6": 0.69,
      "12": 0.68,
      "24": 0.66,
    },
  },
  {
    tier: "> USD 100 Ribu - < 1 Juta",
    tenor: {
      "1": 0.95,
      "3": 1.19,
      "6": 1.18,
      "12": 1.17,
      "24": 1.14,
    },
  },
  {
    tier: "> USD 1 Juta - < 10 Juta",
    tenor: {
      "1": 0.95,
      "3": 1.44,
      "6": 1.43,
      "12": 1.41,
      "24": 1.38,
    },
  },
  {
    tier: "> USD 10 Juta",
    tenor: {
      "1": 0.95,
      "3": 1.69,
      "6": 1.67,
      "12": 1.65,
      "24": 1.61,
    },
  },
];

export const depositRatesDibayarBulananJatuhTempo = [
  {
    tier: "SGD 1.000 - < 10 Ribu",
    tenor: {
      "1": 0.25,
      "3": 0.25,
      "6": 0.25,
      "12": 0.50,
      "24": 0.50,
    },
  },
  {
    tier: "> SGD 10 Ribu - < 50 Ribu",
    tenor: {
      "1": 0.50,
      "3": 0.50,
      "6": 0.50,
      "12": 0.75,
      "24": 0.75,
    },
  },
  {
    tier: "> SGD 50 Ribu - < 100 Ribu",
    tenor: {
      "1": 0.75,
      "3": 0.75,
      "6": 0.75,
      "12": 1.00,
      "24": 1.00,
    },
  },
  {
    tier: "> SGD 100 Ribu",
    tenor: {
      "1": 0.75,
      "3": 0.75,
      "6": 0.75,
      "12": 1.00,
      "24": 1.00,
    },
  },
];

export const depositRatesDibayarDiMukaSGD = [
  {
    tier: "SGD 1.000 - < 10 Ribu",
    tenor: {
      "1": 0.20,
      "3": 0.20,
      "6": 0.20,
      "12": 0.45,
      "24": 0.45,
    },
  },
  {
    tier: "> SGD 10 Ribu - < 50 Ribu",
    tenor: {
      "1": 0.45,
      "3": 0.45,
      "6": 0.45,
      "12": 0.70,
      "24": 0.70,
    },
  },
  {
    tier: "> SGD 50 Ribu - < 100 Ribu",
    tenor: {
      "1": 0.70,
      "3": 0.70,
      "6": 0.70,
      "12": 0.95,
      "24": 0.95,
    },
  },
  {
    tier: "> SGD 100 Ribu",
    tenor: {
      "1": 0.70,
      "3": 0.70,
      "6": 0.70,
      "12": 0.95,
      "24": 0.95,
    },
  },
];

export const depositRatesValasNonUSD = [
  {
    tier: "AUD",
    tenor: {
      "1": 0.50,
      "3": 0.50,
      "6": 0.50,
      "12": 0.50,
      "24": 0.50,
    },
  },
  {
    tier: "CHF",
    tenor: {
      "1": 0.00,
      "3": 0.00,
      "6": 0.00,
      "12": 0.00,
      "24": 0.00,
    },
  },
  {
    tier: "EUR",
    tenor: {
      "1": 0.00,
      "3": 0.00,
      "6": 0.00,
      "12": 0.00,
      "24": 0.00,
    },
  },
  {
    tier: "GBP",
    tenor: {
      "1": 0.10,
      "3": 0.10,
      "6": 0.10,
      "12": 0.10,
      "24": 0.10,
    },
  },
  {
    tier: "HKD",
    tenor: {
      "1": 0.00,
      "3": 0.00,
      "6": 0.00,
      "12": 0.00,
      "24": 0.00,
    },
  },
  {
    tier: "JPY",
    tenor: {
      "1": 0.00,
      "3": 0.00,
      "6": 0.00,
      "12": 0.00,
      "24": 0.00,
    },
  },
  {
    tier: "CNY",
    tenor: {
      "1": 0.50,
      "3": 0.50,
      "6": 0.75,
      "12": 1.00,
      "24": 1.00,
    },
  },
];

export const tabungan = [
  {
    id: 1,
    nama: "Tabungan Rupiah",
    path: "#tabungan-rupiah",
  },
  {
    id: 2,
    nama: "Tabungan Bisnis / Investor Rupiah",
    path: "#tabungan-bisnis-investor-rupiah",
  },
  {
    id: 3,
    nama: "Tabungan NOW",
    path: "#tabungan-now",
  },
  {
    id: 4,
    nama: "Tabungan Rencana Rupiah",
    path: "#tabungan-rencana-rupiah",
  },
  {
    id: 5,
    nama: "Tabungan Mitra Usaha",
    path: "#tabungan-mitra-usaha",
  },
  {
    id: 6,
    nama: "Tabungan TKI",
    path: "#tabungan-tki",
  },
  {
    id: 7,
    nama: "Tabungan Valas",
    path: "#tabungan-valas",
  },
  {
    id: 8,
    nama: "Tabungan Multicurrency",
    path: "#tabungan-multicurrency",
  },
  {
    id: 9,
    nama: "Tabungan Bisnis / Tabungan Investor",
    path: "#tabungan-bisnis-tabungan-investor",
  },
  {
    id: 10,
    nama: "Tabungan Rencana USD",
    path: "#tabungan-rencana-usd",
  },
  {
    id: 11,
    nama: "TabunganKu",
    path: "#tabunganku",
  },
  {
    id: 12,
    nama: "Tabungan SiMakmur - Laku Pandai",
    path: "#tabungan-simakmur-laku-pandai",
  },
  {
    id: 13,
    nama: "Tabungan Simpanan Pelajar",
    path: "#tabungan-simpanan-pelajar",
  },
  {
    id: 14,
    nama: "Tabungan Payroll",
    path: "#tabungan-payroll",
  },
  {
    id: 15,
    nama: "Tabungan Rencana Simuda Rumahku",
    path: "#tabungan-rencana-simuda-rumahku",
  },
];


export const TabunganRupiah = [
  { range: "0 - < Rp 1 Juta", interestRate: "0.00" },
  { range: "Rp 1 Juta - < Rp 50 Juta", interestRate: "0.00" },
  { range: "Rp 50 Juta - < 500 Juta", interestRate: "0.10" },
  { range: "Rp 500 Juta - < Rp 1 Miliar", interestRate: "0.60" },
  { range: "≥ Rp 1 Miliar", interestRate: "0.60" },
];

export const MandiriTabunganBisnis = [
  { range: "0 - < Rp 1 juta", interestRate: "0.00" },
  { range: "Rp 1 juta - < Rp 50 juta", interestRate: "0.40" },
  { range: "Rp 50 juta - < Rp 500 juta", interestRate: "0.60" },
  { range: "Rp 500 juta - < Rp 1 milyar", interestRate: "0.80" },
  { range: "> Rp 1 milyar", interestRate: "1.00" },
];

export const MandiriTabunganInvestorRupiah = [
  { range: "0 - < Rp 1 juta", interestRate: "0.00" },
  { range: "Rp 1 juta - < Rp 50 juta", interestRate: "0.00" },
  { range: "Rp 50 juta - < Rp 500 juta", interestRate: "0.10" },
  { range: "Rp 500 juta - < Rp 1 milyar", interestRate: "0.60" },
  { range: "> Rp 1 milyar", interestRate: "0.60" },
];

export const MandiriTabunganNOW = [
  { range: "0 - < Rp 1 Juta", interestRate: "0.00" },
  { range: "Rp 1 Juta - < Rp 50 Juta", interestRate: "0.00" },
  { range: "Rp 50 Juta - < Rp 500 Juta", interestRate: "0.05" },
  { range: "Rp 500 Juta - < Rp 1 Miliar", interestRate: "0.35" },
  { range: "≥ Rp 1 Miliar", interestRate: "0.40" },
];

export const MandiriTabunganRencanaRupiah = [
  { range: "Jangka Waktu 1-3 Tahun", interestRate: "1.10" },
  { range: "Jangka Waktu 4-9 Tahun", interestRate: "1.35" },
  { range: "Jangka Waktu 10-14 Tahun", interestRate: "1.60" },
  { range: "Jangka Waktu ≥ 15 Tahun", interestRate: "1.85" },
];

export const MandiriTabunganSimudaRumahku = [
  { range: "0 - < Rp 1 Juta", interestRate: "0.00" },
  { range: "Rp 1 Juta - < Rp 50 Juta", interestRate: "0.00" },
  { range: "Rp 50 Juta - < Rp 500 Juta", interestRate: "0.05" },
  { range: "Rp 500 Juta - < Rp 1 Miliar", interestRate: "0.35" },
  { range: "≥ Rp 1 Miliar", interestRate: "0.40" },
];

export const MandiriTabunganPayroll = [
  { range: "0 - < Rp 1 juta", interestRate: "0.00" },
  { range: "Rp 1 juta - < Rp 50 juta", interestRate: "0.00" },
  { range: "Rp 50 juta - < Rp 500 juta", interestRate: "0.05" },
  { range: "Rp 500 juta - < Rp 1 milyar", interestRate: "0.35" },
  { range: "> Rp 1 milyar", interestRate: "0.40" },
];

export const MandiriTabunganMitraUsaha = [
  { range: "0 - < Rp 1 juta", interestRate: 0.00 },
  { range: "Rp 1 juta - < Rp 50 juta", interestRate: 0.00 },
  { range: "Rp 50 juta - < Rp 500 juta", interestRate: 0.05 },
  { range: "Rp 500 juta - < Rp 1 milyar", interestRate: 0.35 },
  { range: "> Rp 1 milyar", interestRate: 0.40 },
];

export const MandiriTabunganTKI = [
  { range: "< USD 100", interestRate: 0.00 },
  { range: "≥ USD 100 - < USD 10,000", interestRate: 0.10 },
  { range: "≥ USD 10,000 - < USD 200,000", interestRate: 0.20 },
  { range: "≥ USD 200,000", interestRate: 0.20 },
];

export const MandiriTabunganValasSGD = [
  { range: "< SGD 200", interestRate: 0.00 },
  { range: "≥ SGD 200 - < SGD 10.000", interestRate: 0.10 },
  { range: "≥ SGD 10.000 - < SGD 100.000", interestRate: 0.25 },
  { range: "≥ SGD 100.000", interestRate: 0.50 },
];

export const MandiriTabunganValasUSD = [
  { range: "< EUR 1.000", interestRate: 0.00 },
  { range: "> EUR 1.000", interestRate: 0.10 },
  { range: "≤ GBP 1.000", interestRate: 0.00 },
  { range: "> GBP 1.000", interestRate: 0.05 },
  { range: "≤ AUD 1.000", interestRate: 0.00 },
  { range: "> AUD 1.000", interestRate: 0.10 },
  { range: "CHF", interestRate: 0.00 },
  { range: "HKD", interestRate: 0.00 },
  { range: "JPY", interestRate: 0.00 },
];

export const MandiriTabunganValasNonUSD = [
  // USD
  { range: "< USD 100", interestRate: "0.00%" },
  { range: "≥ USD 100 - < USD 10,000", interestRate: "0.10%" },
  { range: "≥ USD 10,000 - < USD 200,000", interestRate: "0.20%" },
  { range: "≥ USD 200,000", interestRate: "0.20%" },

  // SGD
  { range: "< SGD 200", interestRate: "0.00%" },
  { range: "≥ SGD 200 - < SGD 10,000", interestRate: "0.10%" },
  { range: "≥ SGD 10,000 - < SGD 100,000", interestRate: "0.25%" },
  { range: "≥ SGD 100,000", interestRate: "0.50%" },

  // EUR
  { range: "≤ EUR 1,000", interestRate: "0.00%" },
  { range: "> EUR 1,000", interestRate: "0.10%" },

  // GBP
  { range: "GBP 0-1,000", interestRate: "0.00%" },
  { range: "GBP >1,000", interestRate: "0.05%" },

  // AUD
  { range: "AUD 0-1,000", interestRate: "0.00%" },
  { range: "AUD >1,000", interestRate: "0.10%" },

  // CHF, HKD, JPY, MYR, THB, SAR, CNY, CAD, NZD
  { range: "CHF, HKD, JPY, MYR, THB, SAR, CNY, CAD, NZD - All Tier", interestRate: "0.00%" },
];

export const MandiriRencanaUSD = [
  { range: "< USD 100", interestRate: 0.20 },
  { range: "�� USD 100", interestRate: 0.20 },
];

export const MandiriTabunganRupiah = [
  { range: "Rp 0 - Rp 500.000", interestRate: "0.00%" },
  { range: "Rp 500.001 - Rp 1.000.000", interestRate: "0.10%" },
  { range: "> Rp 1.000.000", interestRate: "0.10%" },
];

export const MandiriTabunganMulticurrency = [
  { range: "Semua Tier", interestRate: "0.10%" },
];

export const MandiriTabunganSimpananPelajar = [
  { range: "Semua Tier", interestRate: "0%" },
];
