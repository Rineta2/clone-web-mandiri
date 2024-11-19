import { ChevronRight, ExternalLink } from "lucide-react";

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

//================= Good Corporate Governance =================//

import bgGCG from "@/components/assest/layout/slug/tentang-mandiri/Good Corporate Governance/banner_gcg_gen.png"
import sahamBg from "@/components/assest/layout/slug/tentang-mandiri/Good Corporate Governance/img_background_info_saham.jpg"
import shuter from "@/components/assest/layout/slug/tentang-mandiri/Good Corporate Governance/shutterstock_566857030.jpg"
import box1 from "@/components/assest/layout/slug/tentang-mandiri/Good Corporate Governance/shutterstock_776905117.jpg"
import box2 from "@/components/assest/layout/slug/tentang-mandiri/Good Corporate Governance/shutterstock_144792676.jpg"
import pagesGcg1 from "@/components/assest/layout/slug/tentang-mandiri/Good Corporate Governance/WBS.jpeg"
import pagesGcg2 from "@/components/assest/layout/slug/tentang-mandiri/Good Corporate Governance/Thumbnail_LHKPN-100.jpg"

//================= Mandiri Group =================//

import bgMg from "@/components/assest/layout/slug/tentang-mandiri/Mandiri Group/bg.jpg"
import bsi from "@/components/assest/layout/slug/tentang-mandiri/Mandiri Group/Bsi.jpg"
import taspen from "@/components/assest/layout/slug/tentang-mandiri/Mandiri Group/taspen.png"
import euro from "@/components/assest/layout/slug/tentang-mandiri/Mandiri Group/europe.jpg"
import axa from "@/components/assest/layout/slug/tentang-mandiri/Mandiri Group/axa.jpg"
import sapuritas from "@/components/assest/layout/slug/tentang-mandiri/Mandiri Group/sekuritas.jpg"
import mancap from "@/components/assest/layout/slug/tentang-mandiri/Mandiri Group/mancap.png"
import tunas_finance from "@/components/assest/layout/slug/tentang-mandiri/Mandiri Group/tunas_finance.jpg"
import utama from "@/components/assest/layout/slug/tentang-mandiri/Mandiri Group/utama.jpg"
import remitance from "@/components/assest/layout/slug/tentang-mandiri/Mandiri Group/remmitance.jpg"

//================= TJSL =================//
import bgTjsl from "@/components/assest/layout/slug/tentang-mandiri/tjls/Banner-Utama-CSR.jpg"
import mbm from "@/components/assest/layout/slug/tentang-mandiri/tjls/Cover_MBM-01.jpg"
import bbm from "@/components/assest/layout/slug/tentang-mandiri/tjls/Cover_SMN-01.jpg"

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
        home: [
          {
            id: 1,
            title: "Info Korporasi",
            desc: "Melalui perjalanan panjang sejarah yang telah diukir, senantiasa selalu berkomitmen untuk memberikan kontribusi terbaik",
            bgHome: Info_Korporasi_Home,
            name: "Selengkapnya",
            link: "/pages/tentang-mandiri/korporasi-info",
            icons: <ChevronRight />,
          }
        ],
        about: [
          {
            id: 1,
            title: "Transformasi Bank Mandiri",
            desc: "Bank Mandiri didirikan pada 2 Oktober 1998, sebagai bagian dari program restrukturisasi perbankan yang dilaksanakan oleh pemerintah Indonesia. Pada bulan Juli 1999, empat bank pemerintah -- yaitu Bank Bumi Daya, Bank Dagang Negara, Bank Ekspor Impor Indonesia dan Bank Pembangunan Indonesia -- dilebur menjadi Bank Mandiri, dimana masing-masing bank tersebut memiliki peran yang tak terpisahkan dalam pembangunan perekonomian Indonesia. Sampai dengan hari ini, Bank Mandiri meneruskan tradisi selama lebih dari 140 tahun memberikan kontribusi dalam dunia perbankan dan perekonomian Indonesia.",
            name: "Selengkapnya",
            link: "/pages/tentang-mandiri/korporasi-info",
            icons: <ChevronRight />,
          }
        ],
        img: [
          {
            img: Visi_Misi,
            title: "picture"
          }
        ],
        visi: [
          {
            id: 1,
            title: "Visi",
            desc: "Menjadi partner finansial pilihan utama Anda",
          },

          {
            id: 2,
            title: "Misi",
            desc: "Menyediakan solusi perbankan digital yang handal dan simple yang menjadi bagian hidup nasabah",
          }
        ],
        quete: [
          {
            id: 1,
            author: "Bank Mandiri",
            bgAuthor: Bank_Mandiri,
            quetes: "Mengusung semangat Terdepan, Terpercaya, Tumbuh bersama Anda, Bank Mandiri Group telah mengikrarkan diri untuk menjadi entitas keuangan yang inovatif, responsif, dan solutif agar mampu mengantisipasi tantangan perkembangan ekonomi serta memenuhi seluruh kebutuhan nasabah.",
          }
        ],
        linkvm: "/pages/tentang-mandiri/korporasi-info/visi-misi",
        manager: [
          {
            id: 1,
            title: "Manajemen",
            desc: "Bank Mandiri di kelola oleh Sumber Daya yang berpengalaman, berintegritas tinggi dan professional",
            name: "Manajemen",
            path: "/pages/tentang-mandiri/korporasi-info/manajemen"
          }
        ],
        name: null,
        icons: <ChevronRight />,
        organisasi: [
          {
            id: 1,
            title: "Struktur Organisasi",
            desc: "Dengan didukung oleh struktur organisasi yang kuat, Bank Mandiri senantiasa berupaya memberikan kinerja terbaik bagi bangsa",
            name: "Struktur Organisasi",
            path: "/pages/tentang-mandiri/korporasi-info/struktur-organisasi"
          }
        ],
        saham: [],
        sahamBox: [],
        inform: [],
        informBox: [],
        pages: [],
        box: []
      }
    ]
  },

  {
    name: "Sustainability ",
    icons: <ChevronRight />,
    desc: "Implementing sustainability principles that support business, operation and communities by ESG aspects alignment",
    img: Sustainability,
    slug: "https://www.bankmandiri.co.id/esg",
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
        home: [
          {
            id: 1,
            title: "Good Corporate Governance",
            desc: "Good Corporate Governance merupakan prinsip-prinsip yang diterapkan oleh perusahaan untuk memaksimalkan nilai perusahaan, meningkatkan kinerja dan kontribusi perusahaan, serta menjaga keberlanjutan perusahaan secara jangka panjang.",
            bgHome: bgGCG,
            name: "Selengkapnya",
            link: "/pages/tentang-mandiri/korporasi-info",
            icons: <ChevronRight />,
          }
        ],
        about: [],
        img: [],
        visi: [],
        quete: [],
        linkvm: null,
        manager: [],
        name: null,
        icons: null,
        organisasi: [],
        saham: [
          {
            id: 1,
            img: sahamBg,
            title: "Aspek Governance"
          }
        ],
        sahamBox: [
          {
            id: 1,
            title: "Governance Structure",
            desc: "Struktur dan infrastruktur GCG yang terdiri dari Struktur Organisasi, Komposisi Direksi dan Dewan Komisaris, dan lainnya.",
            name: "Selengkapnya",
            link: "/pages/tentang-mandiri/good-corporate-governance/governance-structure",
          },

          {
            id: 2,
            title: "Governance Process",
            desc: "Proses penerapan prinsip GCG melalui penerapan praktek GCG dan Keterbukaan Informasi.",
            name: "Selengkapnya",
            link: "/pages/tentang-mandiri/good-corporate-governance/governance-structure",
          },

          {
            id: 3,
            title: "Governance Outcome",
            desc: "Hasil penerapan prinsip GCG yang dituangkan dalam laporan dan penilaian GCG, serta penghargaan yang diterima.",
            name: "Selengkapnya",
            link: "/pages/tentang-mandiri/good-corporate-governance/governance-structure",
          },
        ],
        inform: [
          {
            id: 1,
            title: "Informasi Lainnya",
            img: shuter
          }
        ],
        informBox: [
          {
            id: 1,
            title: "ASEAN Corporate Governance Scorecard",
            desc: "Penerapan praktek GCG dengan mengacu kepada penilaian ASEAN CG Scorecard",
            img: box1,
            icons: <ChevronRight />,
            path: "/"
          },

          {
            id: 2,
            title: "Penerapan Praktek GCG Perusahaan Terbuka",
            desc: "Penerapan praktek GCG dengan mengacu kepada Pedoman GCG Perusahaan Terbuka",
            img: box2,
            icons: <ChevronRight />,
            path: "/"
          }
        ],
        pages: [
          {
            id: 1,
            img: pagesGcg1,
            title: "Mandiri Whistleblowing System - Letter to CEO",
            desc: "Sarana untuk menyampaikan laporan pengaduan pelanggaran disiplin, yaitu perbuatan atau indikasi fraud dan/ atau non fraud yang dapat merugikan Nasabah maupun Bank Mandiri kepada CEO Bank Mandiri",
            name: "Selengkapnya",
            icons: <ChevronRight />,
            path: "/"
          },

          {
            id: 2,
            img: pagesGcg2,
            title: "e-Announcement LHKPN",
            desc: "Bank Mandiri sebagai Wajib LHKPN berkewajiban untuk melaporkan dan mengumumkan harta kekayaannya sebelum dan setelah menjabat. Pengumuman sebagaimana dimaksud dapat diakses pada pranala berikut.",
            name: "Selengkapnya",
            icons: <ChevronRight />,
            path: "/"
          },
        ],
        box: []
      }
    ]
  },

  {
    name: "Mandiri Group",
    icons: <ChevronRight />,
    desc: "Mandiri e-banking memungkinkan Anda bertransaksi dengan mudah kapan saja dan dimana saja",
    img: Mandiri_Group,
    slug: "mandiri-group",
    slugDetails: [
      {
        id: 1,
        home: [
          {
            id: 1,
            title: "Mandiri Group",
            desc: "Mendorong budaya cross-sell serta mengoptimalkan pengintegrasian bisnis disemua segmen termasuk dengan Perusahaan Anak",
            bgHome: bgMg,
            name: null,
            link: "",
            icons: null,
          }
        ],
        about: [],
        img: [],
        visi: [],
        quete: [],
        linkvm: null,
        manager: [],
        name: null,
        icons: null,
        organisasi: [],
        saham: [],
        sahamBox: [],
        inform: [],
        informBox: [],
        pages: [],
        box: [
          {
            id: 1,
            title: "Bank Syariah Indonesia",
            desc: "Bank Syariah Indonesia adalah wujud sinergi untuk menjadikan keuangan dan ekonomi Syariah sebagai pilar kekuatan baru ekonomi nasional",
            img: bsi,
            path: "/pages/tentang-mandiri/mandiri-group/bank-syariah-indonesia",
            icons: <ChevronRight />
          },

          {
            id: 2,
            title: "PT. Bank Mandiri Taspen",
            desc: "PT Bank Mandiri Taspen (MANTAP) berkedudukan Kantor Pusat di Jalan Melati No.65 Denpasar - Bali. Bank umum yang dimiliki oleh 2 BUMN yaitu PT Bank Mandiri (Persero) Tbk. dan PT Taspen (Persero) fokus bisnis pada segmen pensiunan dan UMKM",
            img: taspen,
            path: "/pages/tentang-mandiri/mandiri-group/bank-mandiri-taspen",
            icons: <ChevronRight />
          },

          {
            id: 3,
            title: "Bank Mandiri (Europe) Ltd",
            desc: "Bank Mandiri (Europe) Limited (BMEL) didirikan di London, Inggris pada tanggal 22 Juni 1999 berdasarkan The Companies A ct 1985 of the United Kingdom. BMEL",
            img: euro,
            path: "/pages/tentang-mandiri/mandiri-group/bank-mandiri-europe",
            icons: <ChevronRight />
          },

          {
            id: 4,
            title: "AXA Mandiri Financial Services",
            desc: "PT AXA Mandiri Financial Services (AXA Mandiri) adalah perusahaan patungan (joint venture) antara PT Bank Mandiri (Persero) Tbk dan AXA yang melakukan kegiatan pemasaran produk asuransi melalui kerjasama dengan Bank (bancassurance)",
            img: axa,
            path: "/pages/tentang-mandiri/mandiri-group/axa-mandiri-financial-services",
            icons: <ChevronRight />
          },

          {
            id: 5,
            title: "Mandiri Sekuritas",
            desc: "PT Mandiri Sekuritas merupakan perusahaan efek hasil merger beberapa perusahaan sekuritas di lingkungan Bank Mandiri, yaitu Bumi Daya Sekuritas, Exim Securities",
            img: sapuritas,
            path: "/pages/tentang-mandiri/mandiri-group/mandiri-sekuritas",
            icons: <ChevronRight />
          },

          {
            id: 6,
            title: "Mandiri Capital Indonesia",
            desc: "PT Mandiri Capital Indonesia (MCI) adalah perusahaan yang bergerak di bidang modal ventura, didirikan tanggal 26 Juni 2015. Untuk menjalankan kegiatan usahanya di bidang modal ventura, MCI telah memperoleh izin untuk melaksanakan kegiatan usaha di bidang modal ventura",
            img: mancap,
            path: "/pages/tentang-mandiri/mandiri-group/mandiri-capital-indonesia",
            icons: <ChevronRight />
          },

          {
            id: 7,
            title: "Mandiri Tunas Finance ",
            desc: "PT Mandiri Tunas Finance (MTF) merupakan lembaga pembiayaan yang fokus pada pembiayaan Investasi, Modal Kerja, Multiguna dan kegiatan pembiayaan lain.",
            img: tunas_finance,
            path: "/pages/tentang-mandiri/mandiri-group/mandiri-tunas-finance",
            icons: <ChevronRight />
          },

          {
            id: 8,
            title: "Mandiri Utama Finance",
            desc: "PT Mandiri Utama Finance (MUF) merupakan lembaga pembiayaan yang fokus pada pembiayaan konsumen khususnya pembiayaan kendaraan bermotor. TAHUN",
            img: utama,
            path: "/pages/tentang-mandiri/mandiri-group/mandiri-utama-finance",
            icons: <ChevronRight />
          },

          {
            id: 9,
            title: "Mandiri International Remittance",
            desc: "Sebagai anak perusahaan yang sepenuhnya dimiliki oleh PT Bank Mandiri (Persero) Tbk., Mandiri International Remittance Sdn. Bhd. (MIR) telah menyediakan Layanan Pengiriman Uang (Remittance Service Provide) yang memiliki lisensi resmi dari Bank Negara Malaysia sejak tanggal 17 Maret 2009.",
            img: remitance,
            path: "/pages/tentang-mandiri/mandiri-group/mandiri-international-remittance",
            icons: <ChevronRight />
          },
        ]
      }
    ]
  },

  {
    name: "TJSL Bank Mandiri",
    icons: <ChevronRight />,
    desc: "Membangun masyarakat Indonesia Mandiri melalui program TJSL guna menjadi lembaga keuangan Indonesia yang progresif",
    img: TJSL,
    slug: "tjsl-bank-mandiri",
    slugDetails: [
      {
        id: 1,
        home: [
          {
            id: 1,
            title: "Tanggung Jawab Sosial dan Lingkungan (TJSL)",
            desc: "Program TJSL Bank Mandiri diselaraskan dengan corporate objective dan dilaksanakan dengan menerapkan prinsip terintegrasi, terarah, terukur dampaknya dan akuntabilitas serta mampu meningkatkan corporate image.",
            bgHome: bgTjsl,
            name: "Selengkapnya",
            link: "/",
            icons: <ChevronRight />,
          }
        ],
        about: [],
        img: [],
        visi: [],
        quete: [],
        linkvm: null,
        manager: [],
        name: null,
        icons: null,
        organisasi: [],
        saham: [],
        sahamBox: [],
        inform: [],
        informBox: [],
        pages: [],
        box: [
          {
            id: 1,
            title: "Mandiri Bersama Mandiri",
            desc: "Bank Mandiri mendukung program pemerintah untuk meningkatkan kesejahteraan dan kemandirian masyarakat Indonesia",
            img: mbm,
            path: "/pages/tentang-mandiri/tjsl-bank-mandiri/mandiri-bersama-mandiri",
            icons: <ChevronRight />
          },

          {
            id: 2,
            title: "Bangkit Bersama Mandiri",
            desc: "Memberikan solusi untuk permasalahan sosial, pendidikan, dan lingkungan dengan Spirit Memakmurkan Negeri",
            img: bbm,
            path: "/pages/tentang-mandiri/mandiri-group/bank-mandiri-taspen",
            icons: <ChevronRight />
          }
        ]
      }
    ]
  },

  {
    name: "Investor Relations ",
    icons: <ExternalLink />,
    desc: "Informasi keuangan, berita dan saham Bank Mandiri Bagi Pemegang Saham dan Investor secara efektif, efisien dan transparan",
    img: Investor_Relations,
    slug: "https://www.bankmandiri.co.id/web/ir",

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