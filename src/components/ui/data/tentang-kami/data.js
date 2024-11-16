import { ChevronRight, ExternalLink } from "lucide-react";

import Info_Korporasi from "@/components/assest/tentang-mandiri/Info_Korporasi.jpg";
import Sustainability from "@/components/assest/tentang-mandiri/Sustainability.jpeg";
import Investor_Relations from "@/components/assest/tentang-mandiri/Investor_Relations.jpg";
import GCG from "@/components/assest/tentang-mandiri/GCG.jpg";
import TJSL from "@/components/assest/tentang-mandiri/TJSL_Bank_Mandiri.jpg";
import Mandiri_Group from "@/components/assest/tentang-mandiri/Mandiri_Group.jpg";
import Karir from "@/components/assest/tentang-mandiri/karir.jpg";
import Mandiri_University from "@/components/assest/tentang-mandiri/Mandiri_University.jpg";
import Pengadaan from "@/components/assest/tentang-mandiri/Pengadaan.jpg";
import Kebijakan_Privasi from "@/components/assest/tentang-mandiri/Kebijakan_Privasi.jpg";

export const box = [
  {
    name: "Info Korporasi",
    icons: <ChevronRight />,
    desc: "Melalui perjalanan panjang sejarah yang telah diukir, senantiasa selalu berkomitmen untuk memberikan kontribusi terbaik",
    img: Info_Korporasi,
    slug: "info-korporasi",
  },

  {
    name: "Sustainability ",
    icons: <ChevronRight />,
    desc: "Implementing sustainability principles that support business, operation and communities by ESG aspects alignment",
    img: Sustainability,
    slug: "sustainability",
  },

  {
    name: "Investor Relations ",
    icons: <ExternalLink />,
    desc: "Informasi keuangan, berita dan saham Bank Mandiri Bagi Pemegang Saham dan Investor secara efektif, efisien dan transparan",
    img: Investor_Relations,
    slug: "investor-relations",
  },

  {
    name: "GCG",
    icons: <ChevronRight />,
    desc: "Implementasi Good Corporate Governance (GCG) merupakan elemen fundamental untuk meningkatkan nilai perusahaan (value",
    img: GCG,
    slug: "gCG",
  },

  {
    name: "TJSL Bank Mandiri",
    icons: <ChevronRight />,
    desc: "Membangun masyarakat Indonesia Mandiri melalui program TJSL guna menjadi lembaga keuangan Indonesia yang progresif",
    img: TJSL,
    slug: "tjsl-bank-mandiri",
  },

  {
    name: "Mandiri Group",
    icons: <ChevronRight />,
    desc: "Mandiri e-banking memungkinkan Anda bertransaksi dengan mudah kapan saja dan dimana saja",
    img: Mandiri_Group,
    slug: "/pages/perseorangan/e-banking",
  },

  {
    name: "Karir",
    icons: <ChevronRight />,
    desc: "Miliki pengalaman kerja di dunia perbankan dengan kompetensi kelas dunia, lingkungan kerja yang ramah dan menghargai setiap ide",
    img: Karir,
    slug: "karir",
  },

  {
    name: "Mandiri University",
    icons: <ChevronRight />,
    desc: "Mandiri Corporate University adalah unit kerja di Bank Mandiri yang berperan penting dalam pengembangan skills and competencies pegawai melalui berbagai program learning and development untuk mendukung keberhasilan Bank Mandiri mencapai 3 sasaran utama di periode 2020-2024, yaitu di segmen wholesale banking, SME & micro banking, serta digital retail banking.",
    img: Mandiri_University,
    slug: "mandiri-university",
  },
  {
    name: "Pengadaan",
    icons: <ChevronRight />,
    desc: "Pendaftaran rekanan dan pengumuman tender umum pengadaan barang/jasa melalui Portal Procurement Bank Mandiri",
    img: Pengadaan,
    slug: "pengadaan",
  },
  {
    name: "Kebijakan Privasi",
    icons: <ChevronRight />,
    desc: "Selamat datang di Kebijakan Privasi kami. Kami ingin memberikan kejelasan dan keyakinan kepada Anda tentang bagaimana",
    img: Kebijakan_Privasi,
    slug: "kebijakan-privasi",
  },
];