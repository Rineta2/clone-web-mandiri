import { ChevronRight } from "lucide-react"

import sbnp from "@/components/assest/prioritas/ag-produk-stacked-2.png"
import sbns from "@/components/assest/prioritas/ag-produk-stacked-3.png"
import bancassurance from "@/components/assest/prioritas/ag-produk-stacked-4.png"
import retailBrokerage from "@/components/assest/prioritas/ag-produk-stacked-5.png"
import structuredProduct from "@/components/assest/prioritas/ag-produk-stacked-6.png"
import alternateInvestasi from "@/components/assest/prioritas/ag-produk-stacked-7.png"

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
  }
];