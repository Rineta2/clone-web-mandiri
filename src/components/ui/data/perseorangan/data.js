import simpanan from "@/components/assest/perseorangan/simpanan.jpg"
import pinjaman from "@/components/assest/perseorangan/pinjam.jpg"
import debit from "@/components/assest/perseorangan/debit.jpg"
import kk from "@/components/assest/perseorangan/kk.jpg"
import investasi from "@/components/assest/perseorangan/investasi.jpg"
import eBanking from "@/components/assest/perseorangan/e-bangking.jpeg"
import pengirimanUang from "@/components/assest/perseorangan/Pengiriman-Uang.jpg"
import agSmartBranch from "@/components/assest/perseorangan/ag-smart-branch.png"

import { ChevronRight, ExternalLink } from "lucide-react"

import mandiriLoyalti from "@/components/assest/perseorangan/berita/perseorangan_livinpoin.jpeg"
import agenBankMandiri from "@/components/assest/perseorangan/berita/agen_bank_mandiri.jpeg"

export const box = [
  {
    name: "Simpanan",
    icons: <ChevronRight />,
    desc: "Dapatkan keuntungan dan kenyamanan yang lebih baik dengan berbagai solusi simpanan dari Bank Mandiri untuk Anda",
    img: simpanan,
    slug: "/pages/perseorangan/simpanan",
  },

  {
    name: "Pinjaman",
    icons: <ChevronRight />,
    desc: "Solusi pinjaman dengan berbagai pilihan yang dapat disesuaikan dengan kebutuhan Anda",
    img: pinjaman,
    slug: "/pages/perseorangan/pinjaman",
  },

  {
    name: "Kartu Kredit ",
    icons: <ExternalLink />,
    desc: "Nikmati berbagai keunggulan dan kemudahan melalui mandiri kartu kredit sesuai kebutuhan Anda",
    img: kk,
    slug: "/pages/perseorangan/kartu-kredit",
  },

  {
    name: "Kartu Debit",
    icons: <ChevronRight />,
    desc: "Miliki Kartu Mandiri Debit dan dapatkan kemudahan, kenyamanan serta keamanan dalam bertransaksi di dalam maupun luar",
    img: debit,
    slug: "/pages/perseorangan/kartu-debit",
  },

  {
    name: "Investasi & Asuransi",
    icons: <ChevronRight />,
    desc: "Percayakan perlindungan diri Anda dan keluarga serta investasi dengan berbagai produk investasi & asuransi kami",
    img: investasi,
    slug: "/pages/perseorangan/investasi-asuransi",
  },

  {
    name: "E-Banking",
    icons: <ChevronRight />,
    desc: "Mandiri e-banking memungkinkan Anda bertransaksi dengan mudah kapan saja dan dimana saja",
    img: eBanking,
    slug: "/pages/perseorangan/e-banking",
  },

  {
    name: "Pengiriman Uang",
    icons: <ChevronRight />,
    desc: "Layanan pengiriman dan penerimaan uang secara mudah dan aman di seluruh dunia",
    img: pengirimanUang,
    slug: "/pages/perseorangan/pengiriman-uang",
  },

  {
    name: "Smart Branch",
    icons: <ChevronRight />,
    desc: "Sebuah dedikasi Bank Mandiri bagi nasabah tercinta dengan terus meningkatkan kenyamanan dan memberikan pengalaman",
    img: agSmartBranch,
    slug: "/pages/perseorangan/smart-branch",
  },
];

export const kpr = [
  {
    title: "Mudahnya wujudkan hunian idaman dengan Mandiri KPR",
    desc: "Suku bunga 5,55% p.a eff fixed 2 tahun pertama dan 6,55%p.a eff fixed 3 tahun selanjutnya",
    name: "Selengkapnya",
    icons: <ChevronRight />,
    slug: "/pages/perseorangan/kpr",
  }
]

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
