import investasiAlaMilenial from "@/components/assest/prioritas/Investasi_Ala_Milenial.jpg";
import investasiPalingCuan from "@/components/assest/prioritas/Investasi_Paling_Cuan.jpg";
import memulaiInvestasiSecaraOptimal from "@/components/assest/prioritas/Memulai_Investasi_Secara_Optimal.jpg";

import mandiriPrivate from "@/components/assest/prioritas/mandiri_private.png"
import mandiriPrioritas from "@/components/assest/prioritas/mandiri_prioritas.png"

import { ChevronRight } from "lucide-react"

import raksada from "@/components/assest/prioritas/ag-produk-stacked-1.png"
import sbnp from "@/components/assest/prioritas/ag-produk-stacked-2.png"
import sbns from "@/components/assest/prioritas/ag-produk-stacked-3.png"
import bancassurance from "@/components/assest/prioritas/ag-produk-stacked-4.png"
import retailBrokerage from "@/components/assest/prioritas/ag-produk-stacked-5.png"
import structuredProduct from "@/components/assest/prioritas/ag-produk-stacked-6.png"
import alternateInvestasi from "@/components/assest/prioritas/ag-produk-stacked-7.png"

import miso from "@/components/assest/prioritas/ag-penawaran-1.png"
import miso2 from "@/components/assest/prioritas/web.jpg"

import yt1 from "@/components/assest/prioritas/ag-liputan-1.png"
import yt2 from "@/components/assest/prioritas/ag-liputan-2.png"
import yt3 from "@/components/assest/prioritas/ag-liputan-3.png"

export const box = [
  {
    id: 1,
    name: "Investasi Ala Milenial",
    img: investasiAlaMilenial,
  },
  {
    id: 2,
    name: "Investasi Paling Cuan",
    img: investasiPalingCuan,
  },
  {
    id: 3,
    name: "Memulai Investasi Secara Optimal",
    img: memulaiInvestasiSecaraOptimal,
  },
];

export const layananBox = [
  {
    id: 1,
    name: "Makna Sebuah Prioritas",
    img: mandiriPrioritas,
    icons: <ChevronRight />,
    slug: "prioritas",
  },
  {
    id: 2,
    name: "Your Path Your Partner",
    img: mandiriPrivate,
    icons: <ChevronRight />,
    slug: "partner",
  },
];

export const Raksada = [
  {
    id: 1,
    name: "Raksada",
    img: raksada,
    slug: "raksada",
    icons: <ChevronRight />,
  },
]

export const productWealth = [
  {
    id: 1,
    name: "Surat Berharga Negara Perdana",
    img: sbnp,
    slug: "sbnp",
    icons: <ChevronRight />,
  },
  {
    id: 2,
    name: "Surat Berharga Negara Sekunder",
    img: sbns,
    slug: "sbns",
    icons: <ChevronRight />,
  },
  {
    id: 3,
    name: "Bancassurance",
    img: bancassurance,
    slug: "bancassurance",
    icons: <ChevronRight />,
  },
  {
    id: 4,
    name: "Layanan retail Brokerage",
    img: retailBrokerage,
    slug: "retail-brokerage",
    icons: <ChevronRight />,
  },
  {
    id: 5,
    name: "Structured Product",
    img: structuredProduct,
    slug: "structured-product",
    icons: <ChevronRight />,
  },
  {
    id: 6,
    name: "Alternate Investasi Lainnya",
    img: alternateInvestasi,
    slug: "alternate-investasi",
    icons: <ChevronRight />,
  },


];

export const penawaran = [
  {
    id: 1,
    name: "Promo Produk & Merchant",
    img: miso,
    slug: "promo-produk-merchant",
    icons: <ChevronRight />,
  }
]

export const menarik = [
  {
    id: 1,
    name: "Achevee E-Meganize",
    img: miso2,
    slug: "achevee-e-meganize",
    icons: <ChevronRight />,
  }
]

export const yt = [
  {
    id: 1,
    name: "Investasi Surat Berharga Negara Mudah di Livin' by Mandiri",
    img: yt1,
    url: "https://www.youtube.com/watch?v=RKd8TcZ1XrQ"
  },

  {
    id: 2,
    name: "Mandiri Beraksi Vol 5: Mengenal Investasi Syariah di Bulan Ramadan",
    img: yt2,
    url: "https://www.youtube.com/watch?v=O2efcShcaw0"
  },

  {
    id: 3,
    img: yt3,
    name: "Mandiri Private Office Medan, Layanan Perbankan Ekslusif",
    url: "https://www.youtube.com/watch?v=9phuxgfqLX0"
  }
]