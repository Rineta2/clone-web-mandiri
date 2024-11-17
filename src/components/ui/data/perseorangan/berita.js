import mandiriLoyalti from "@/components/assest/layout/perseorangan/berita/perseorangan_livinpoin.jpeg"

import agenBankMandiri from "@/components/assest/layout/perseorangan/berita/agen_bank_mandiri.jpeg"

import { ChevronRight } from "lucide-react"

export const berita = [
  {
    img: mandiriLoyalti,
    title: "Mandiri Loyalti",
    desc: "Nikmati layanan bertransaksi di Bank Mandiri dan dapatkan keuntungan dengan Livin'poin.",
    name: "Selengkapnya",
    icons: <ChevronRight />,
    slug: "/pages/perseorangan/mandiri-loyalti",
  },
  {
    img: agenBankMandiri,
    title: "Agen Bank Mandiri",
    desc: "Manfaatkan kemudahan layanan perbankan melalui Agen Bank Mandiri Lebih mudah, dekat dan bersahabat",
    name: "Selengkapnya",
    icons: <ChevronRight />,
    slug: "/pages/perseorangan/agen-bank-mandiri",
  },
];
