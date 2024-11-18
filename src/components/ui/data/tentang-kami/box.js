import { ChevronRight, ExternalLink, Group } from "lucide-react";

import Info_Korporasi from "@/components/assest/tentang-mandiri/Info_Korporasi.jpg";
import Sustainability from "@/components/assest/tentang-mandiri/Sustainability.jpeg";
import Investor_Relations from "@/components/assest/tentang-mandiri/Investor_Relations.jpg";
import GCG from "@/components/assest/tentang-mandiri/GCG.jpg";
import TJSL from "@/components/assest/tentang-mandiri/TJSL_Bank_Mandiri.jpg";
import Mandiri_Group from "@/components/assest/tentang-mandiri/Mandiri_Group.jpg";
import Karir from "@/components/assest/tentang-mandiri/Karir.jpg";
import Mandiri_University from "@/components/assest/tentang-mandiri/Mandiri_University.jpg";
import Pengadaan from "@/components/assest/tentang-mandiri/Pengadaan.jpg";
import Kebijakan_Privasi from "@/components/assest/tentang-mandiri/Kebijakan_Privasi.jpg";

//================= Info Korporasi =================//

import Info_Korporasi_Home from "@/components/assest/layout/slug/tentang-mandiri/info korporasi/home.jpg";
import Visi_Misi from "@/components/assest/layout/slug/tentang-mandiri/info korporasi/visimisi-min.jpg";
import Bank_Mandiri from "@/components/assest/layout/slug/tentang-mandiri/info korporasi/Pak_Tiko-mini.jpg";
import bgGCG from "@/components/assest/layout/slug/tentang-mandiri/Good Corporate Governance/banner_gcg_gen.png"

export const box = [
  {
    name: "Info Korporasi",
    icons: <ChevronRight />,
    desc: "Melalui perjalanan panjang sejarah yang telah diukir, senantiasa selalu berkomitmen untuk memberikan kontribusi terbaik",
    img: Info_Korporasi,
    slug: "korporasi-info",
    slugDetails: [
      {
        id: 1,
        titleH: "Info Korporasi",
        descH: "Melalui perjalanan panjang sejarah yang telah diukir, senantiasa selalu berkomitmen untuk memberikan kontribusi terbaik",
        bgHome: Info_Korporasi_Home,
        titleA: "Transformasi Bank Mandiri",
        descA: "Bank Mandiri didirikan pada 2 Oktober 1998, sebagai bagian dari program restrukturisasi perbankan yang dilaksanakan oleh pemerintah Indonesia. Pada bulan Juli 1999, empat bank pemerintah -- yaitu Bank Bumi Daya, Bank Dagang Negara, Bank Ekspor Impor Indonesia dan Bank Pembangunan Indonesia -- dilebur menjadi Bank Mandiri, dimana masing-masing bank tersebut memiliki peran yang tak terpisahkan dalam pembangunan perekonomian Indonesia. Sampai dengan hari ini, Bank Mandiri meneruskan tradisi selama lebih dari 140 tahun memberikan kontribusi dalam dunia perbankan dan perekonomian Indonesia.",
        name: "Selengkapnya",
        link: "/pages/tentang-mandiri/korporasi-info",
        icons: <ChevronRight />,
        bgvm: Visi_Misi,
        vm: [
          {
            id: 1,
            title: "Visi",
            desc: "Menjadi partner finansial pilihan utama Anda"
          },
          {
            id: 2,
            title: "Misi",
            desc: "Menyediakan solusi perbankan digital yang handal dan simple yang menjadi bagian hidup nasabah"
          }
        ],
        linkvm: "/",
        quetes: "Mengusung semangat Terdepan, Terpercaya, Tumbuh bersama Anda, Bank Mandiri Group telah mengikrarkan diri untuk menjadi entitas keuangan yang inovatif, responsif, dan solutif agar mampu mengantisipasi tantangan perkembangan ekonomi serta memenuhi seluruh kebutuhan nasabah.",
        author: "Bank Mandiri",
        bgAuthor: Bank_Mandiri,
        manager: [
          {
            id: 1,
            title: "Manajemen",
            desc: "Bank Mandiri di kelola oleh Sumber Daya yang berpengalaman, berintegritas tinggi dan professional",
            name: "Manajemen",
            path: "/pages/tentang-mandiri/korporasi-info/manajemen"
          }
        ],

        organisasi: [
          {
            id: 1,
            title: "Struktur Organisasi",
            desc: "Dengan didukung oleh struktur organisasi yang kuat, Bank Mandiri senantiasa berupaya memberikan kinerja terbaik bagi bangsa",
            name: "Struktur Organisasi",
            path: "/pages/tentang-mandiri/korporasi-info/struktur-organisasi"
          }
        ]
      }
    ]
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
    name: "Good Corporate Governance",
    icons: <ChevronRight />,
    desc: "Implementasi Good Corporate Governance (GCG) merupakan elemen fundamental untuk meningkatkan nilai perusahaan (value",
    img: GCG,
    slug: "good-corporate-governance",
    slugDetails: [
      {
        id: 1,
        titleH: "Good Corporate Governance",
        descH: "Good Corporate Governance merupakan prinsip-prinsip yang diterapkan oleh perusahaan untuk memaksimalkan nilai perusahaan, meningkatkan kinerja dan kontribusi perusahaan, serta menjaga keberlanjutan perusahaan secara jangka panjang.",
        bgHome: bgGCG,
        titleA: null,
        descA: null,
        name: null,
        link: null,
        icons: null,
        bgvm: null,
        vm: [],
        linkvm: null,
        quetes: null,
        author: null,
        bgAuthor: null,
        manager: [],
        organisasi: []
      }
    ]
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