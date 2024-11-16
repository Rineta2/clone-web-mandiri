import simpanan from "@/components/assest/bisnis/Simpanan.jpeg"
import pinjaman from "@/components/assest/bisnis/Pinjaman.jpg"
import corporateCard from "@/components/assest/bisnis/Corporate_Card.jpg"
import cashManagement from "@/components/assest/bisnis/Cash_Management.jpg"
import eBanking from "@/components/assest/bisnis/E-Banking.jpg"
import mandiriAPI from "@/components/assest/bisnis/Mandiri_API.jpg"
import tradeFinance from "@/components/assest/bisnis/Trade_Finance.jpg"
import treasury from "@/components/assest/bisnis/Treasury.jpg"

import { ChevronRight, ExternalLink } from "lucide-react"

export const box = [
  {
    name: "Simpanan",
    icons: <ChevronRight />,
    desc: "Wujudkan bisnis yang lebih berkembang dengan berbagai solusi simpanan untuk Bisnis Anda",
    img: simpanan,
    slug: "/pages/bisnis/simpanan",
  },

  {
    name: "Pinjaman",
    icons: <ChevronRight />,
    desc: "Berbagai solusi pembiayaan yang memberikan kemudahan dan flexibilitas dalam bertransaksi untuk kemajuan Bisnis",
    img: pinjaman,
    slug: "/pages/bisnis/pinjaman",
  },

  {
    name: "Corporate Card",
    icons: <ExternalLink />,
    desc: "Kemudahan Kartu Kredit Mandiri hadir dengan memenuhi segala kebutuhan yang disesuaikan untuk bisnis Anda",
    img: corporateCard,
    slug: "/pages/bisnis/corporate-card",
  },

  {
    name: "Cash Management",
    icons: <ChevronRight />,
    desc: "Kelola keuangan bisnis Anda dengan berbagai fasilitas dari kami, agar bisnis Anda semakin baik.",
    img: cashManagement,
    slug: "/pages/bisnis/cash-management",
  },

  {
    name: "Trade Finance",
    icons: <ChevronRight />,
    desc: "Nikmati berbagai fasilitas serta kemudahan transaksi perbankan untuk mendukung bisnis dan usaha Anda sampai ke mancanegara",
    img: tradeFinance,
    slug: "/pages/bisnis/trade-finance",
  },

  {
    name: "Treasury",
    icons: <ChevronRight />,
    desc: "Nikmati kemudahan bertransaksi treasury dengan harga yang bersaing sesuai dengan kebutuhan dan bisnis Anda",
    img: treasury,
    slug: "/pages/bisnis/treasury",
  },

  {
    name: "E-Banking",
    icons: <ChevronRight />,
    desc: "Nikmati layanan e-banking untuk transaksi finansial dan non finansial bisnis Anda dengan aplikasi internet banking yang memudahkan",
    img: eBanking,
    slug: "/pages/bisnis/e-banking",
  },

  {
    name: "Mandiri API",
    icons: <ChevronRight />,
    desc: "Integrasikan bisnis Anda dengan layanan perbankan terbaik dari Bank Mandiri.",
    img: mandiriAPI,
    slug: "/pages/bisnis/mandiri-api",
  },
];

export const investasi = [
  {
    title: "Selamat Datang di Dunia Investasi Serba Mudah",
    desc: "Wujudkan investasi cepat, mudah, dan menguntungkan dengan Mandiri Tabungan Investor",
    name: "Selengkapnya",
    slug: "/pages/bisnis/investasi",
    icons: <ChevronRight />,
  }
]