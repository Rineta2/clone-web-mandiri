import { ChevronRight } from "lucide-react";

import img from "@/components/assest/home/img.jpg";

import livin from "@/components/assest/home/icons/icon.png";

import creditCard from "@/components/assest/home/icons/card.png";

import wallet from "@/components/assest/home/icons/wallet.png";

export const homeImg = [
  {
    img: img,
  },
];

export const homeText = [
  {
    title: "Bank Mandiri Berkomitmen Terapkan ESG",
    desc: "Komitmen untuk mencapai operasional dengan Net Zero Emission (NZE) pada tahun 2030, pembiayaan tahun 2060, dan memberdayakan kewirausahaan",
    name: "Selengkapnya",
    href: "/esg",
    icons: <ChevronRight size={24} />,
  }
]

export const homeCard = [
  {
    img: wallet,
    title: "Jelajahi keunggulan produk mandiri kartu kredit",
    icons: <ChevronRight size={24} />,
    href: "https://www.mandirikartukredit.com/",
  },

  {
    img: creditCard,
    title: "Hubungan Investor",
    icons: <ChevronRight size={24} />,
    href: "/hubungan-investor",
  },

  {
    img: livin,
    title: "Living a lively life with Livin' by Mandiri",
    icons: <ChevronRight size={24} />,
    href: "/",
  }
];
