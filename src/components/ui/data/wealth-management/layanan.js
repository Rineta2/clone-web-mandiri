import { ChevronRight } from "lucide-react"

import mandiriPrivate from "@/components/assest/prioritas/mandiri_private.png"
import mandiriPrioritas from "@/components/assest/prioritas/mandiri_prioritas.png"
import raksada from "@/components/assest/prioritas/ag-produk-stacked-1.png"

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