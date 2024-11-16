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

// Simpanan
import Tabungan from "@/components/assest/perseorangan/slug/simpanan/p.jpg";
import TabunganNow from "@/components/assest/perseorangan/slug/simpanan/Tabungan.jpg";
import TabunganValas from "@/components/assest/perseorangan/slug/simpanan/perseorangan_simpanan_tabunganvalas.jpg";
import TabunganMulticurrency from "@/components/assest/perseorangan/slug/simpanan/tabungan-multicurrency.png";
import TabunganKu from "@/components/assest/perseorangan/slug/simpanan/perseorangan_simpanan_tabunganrencana.jpg";
import DepositoRupiah from "@/components/assest/perseorangan/slug/simpanan/Tabungan_Payroll_Individu-01.jpg";
import DepositoValas from "@/components/assest/perseorangan/slug/simpanan/perseorangan_simpanan_depositovalas.jpg";
import TabunganTKI from "@/components/assest/perseorangan/slug/simpanan/Tabungan_TKI_Thumbnail-100.jpg";
import TabunganPelajar from "@/components/assest/perseorangan/slug/simpanan/Tabungan_Simpanan_Pelajar_Thumbnail-100.jpg";
import TabunganSimakmur from "@/components/assest/perseorangan/slug/simpanan/Tabungan_SiMakmur_Thumbnail-100.jpg";
import TabunganInvestor from "@/components/assest/perseorangan/slug/simpanan/Tabungan_Investor_Thumbnail-100.jpg";
import TabunganMu from "@/components/assest/perseorangan/slug/simpanan/Tabungan_Mitra_Usaha_Thumbnail-100.jpg";
import bgSimpanan from "@/components/assest/perseorangan/slug/simpanan/bg.jpeg";
import tBox1 from "@/components/assest/perseorangan/slug/simpanan/tBox/benefit-1.png";
import tBox2 from "@/components/assest/perseorangan/slug/simpanan/tBox/benefit-2.png";
import tBox3 from "@/components/assest/perseorangan/slug/simpanan/tBox/benefit-3.png";
import tTab1 from "@/components/assest/perseorangan/slug/simpanan/tab/tab-1.png";
import tTab2 from "@/components/assest/perseorangan/slug/simpanan/tab/tab-2.png";
import tTab3 from "@/components/assest/perseorangan/slug/simpanan/tab/tab-3.png";
import tTab4 from "@/components/assest/perseorangan/slug/simpanan/tab/tab-4.png";

export const box = [
  {
    name: "Simpanan",
    icons: <ChevronRight />,
    desc: "Dapatkan keuntungan dan kenyamanan yang lebih baik dengan berbagai solusi simpanan dari Bank Mandiri untuk Anda",
    img: simpanan,
    slug: "simpanan",
    slugDetails: [
      {
        id: 1,
        name: "Simpanan",
        desc: "Dapatkan keuntungan dan kenyamanan yang lebih baik dengan berbagai solusi simpanan dari Bank Mandiri untuk Anda",
        bg: bgSimpanan,
        box: [
          {
            id: 1,
            title: "Tabungan Rupiah",
            desc: "Kemudahan menabung untuk kenyamanan hidup",
            icons: <ChevronRight />,
            img: Tabungan,
            details: "/pages/perseorangan/simpanan/tabungan-rupiah"
          },

          {
            id: 2,
            title: "Tabungan Now",
            desc: "Bebas Buka Rekening, Transaksi Kapan dan Dimana Saja",
            icons: <ExternalLink />,
            img: TabunganNow,
            details: "/pages/perseorangan/simpanan/tabungan-now"
          },

          {
            id: 3,
            title: "Tabungan Valas",
            desc: "Keuntungan lebih untuk simpanan valuta asing",
            icons: <ChevronRight />,
            img: TabunganValas,
            details: "/pages/perseorangan/simpanan/tabungan-valas"
          },

          {
            id: 4,
            title: "Tabungan Multicurrency",
            desc: "Kemudahan dan benefit transaksi dengan berbagai pilihan valuta asing",
            icons: <ChevronRight />,
            img: TabunganMulticurrency,
            details: "/pages/perseorangan/simpanan/tabungan-multicurrency"
          },

          {
            id: 5,
            title: "TabunganKu",
            desc: "Hidup lebih sejahtera bersama TabunganKu",
            icons: <ChevronRight />,
            img: TabunganKu,
            details: "/pages/perseorangan/simpanan/tabunganku"
          },

          {
            id: 6,
            title: "Deposito Rupiah",
            desc: "Pilihan investasi yang memberi keuntungan dan rasa aman",
            icons: <ChevronRight />,
            img: DepositoRupiah,
            details: "/pages/perseorangan/simpanan/deposito-rupiah"
          },

          {
            id: 7,
            title: "Deposito Valas",
            desc: "Pilihan investasi untuk ragam pilihan mata uang",
            icons: <ChevronRight />,
            img: DepositoValas,
            details: "/pages/perseorangan/simpanan/deposito-valas"
          },

          {
            id: 8,
            title: "Tabungan TKI",
            desc: "Mandiri Tabungan TKI adalah tabungan dalam mata uang rupiah bagi Tenaga Kerja Indonesia atau Calon Tenaga Kerja Indonesia dan keluarganya, dengan syarat",
            icons: <ChevronRight />,
            img: TabunganTKI,
            details: "/pages/perseorangan/simpanan/tabungan-tki"
          },
          {
            id: 9,
            title: "Tabungan Simpanan Pelajar",
            desc: "Tabungan Simpanan Pelajar (SimPel) ditujukan khusus bagi pelajar Indonesia yang diterbitkan secara nasional dalam rangka edukasi dan inklusi keuangan untuk",
            icons: <ChevronRight />,
            img: TabunganPelajar,
            details: "/pages/perseorangan/simpanan/tabungan-pelajar"
          },
          {
            id: 10,
            title: "Tabungan SiMakmur - Laku Pandai",
            desc: "Rekening simpanan perseorangan dalam mata uang rupiah yang memanfaatkan sarana teknologi dan informasi dari agen branchless banking (Mandiri Agen)",
            icons: <ChevronRight />,
            img: TabunganSimakmur,
            details: "/pages/perseorangan/simpanan/tabungan-simakmur"
          },
          {
            id: 11,
            title: "TabunganMu",
            desc: "TabunganMu merupakan rekening simpanan dalam mata uang rupiah yang melayani kebutuhan transaksi perbankan dengan biaya terjangkau",
            icons: <ChevronRight />,
            img: TabunganMu,
            details: "/pages/perseorangan/simpanan/tabungan-simakmur"
          },
          {
            id: 12,
            title: "Tabungan Investor",
            desc: "Jika Anda atau perusahaan Anda membutuhkan solusi simpanan untuk penyelesaian transaksi pasar modal maka Mandiri Tabungan Investor adalah jawabannya. Pembukaan dan pengelolaan rekening dilakukan oleh Perusahaan Efek atas dasar Surat Kuasa.",
            icons: <ChevronRight />,
            img: TabunganInvestor,
            details: "/pages/perseorangan/simpanan/tabungan-investor"
          },
        ],
        tBoxTitle: "Nikmati keuntungan berikut dengan menabung di mandiri",
        tBox: [
          {
            id: 1,
            img: tBox1,
            name: "Jaringan ATM dan cabang yang tersebar luas di seluruh Indonesia"
          },

          {
            id: 2,
            img: tBox2,
            name: "Tabungan aman karena dijamin Lembaga Penjamin Simpanan (LPS)"
          },

          {
            id: 3,
            img: tBox3,
            name: "Transaksi praktis dengan mandiri online"
          }
        ],
        tTabsTitle: "Tidak tahu harus memilih yang mana? Biarkan Kami membantu Anda.",
        tTabs: [
          {
            id: 1,
            title: "Tabungan Rupiah",
            img: tTab1,
            desc: "Nikmati Kemudahan dan Kenyamanan Layanan",
            setor: "Setoran Awal",
            nominal: "Rp 500,000",
            syarat: "Persyaratan",
            listS: "KTP dan NPWP untuk WNI, Paspor & KIMS/KITAS/KITAP/VISA Dinas dan Ijin Kerja Tenaga Asing terkait untuk WNA",
            fasilitas: "Fasilitas",
            listF: "buku tabungan, kartu debit, layanan e-banking, e-statement",
            name: "Selengkapnya",
            details: "",
            icons: <ChevronRight />
          },

          {
            id: 2,
            title: "Tabungan Valas",
            img: tTab2,
            desc: "Keuntungan lebih untuk simpanan valuta asing Anda",
            setor: "Setoran Awal",
            nominal: "$ 100.00",
            syarat: "Persyaratan",
            listS: "KTP dan NPWP untuk WNI, Paspor & KIMS/KITAS/KITAP/VISA Dinas dan Ijin Kerja Tenaga Asing terkait untuk WNA",
            fasilitas: "Fasilitas",
            listF: "layanan e-banking, bisa ditautkan dengan kartu mandiri debit*",
            name: "Selengkapnya",
            details: "",
            icons: <ChevronRight />
          },

          {
            id: 3,
            title: "Tabungan Rencana",
            img: tTab3,
            desc: "Mewujudkan setiap rencana hidup anda",
            setor: "Setoran Awal",
            nominal: "Mulai dari Rp100.000,00",
            syarat: "Persyaratan",
            listS: "tabungan atau mandiri giro, KTP",
            fasilitas: "Fasilitas",
            listF: "autodebet, gratis biaya admin, bebas menentukan setoran bulanan, perlindungan asuransi",
            name: "Selengkapnya",
            details: "",
            icons: <ChevronRight />
          },

          {
            id: 4,
            title: "Tabungan Ku",
            img: tTab4,
            desc: "Nikmati Kemudahan dan Kenyamanan Layanan",
            setor: "Setoran Awal",
            nominal: "Rp20.000,00",
            syarat: "Persyaratan",
            listS: "KTP",
            fasilitas: "Fasilitas",
            listF: "buku tabungan, kartu tabunganKu",
            name: "Selengkapnya",
            details: "",
            icons: <ChevronRight />
          },
        ],
        jangka: "Ingin Menabung Jangka Panjang",
        descJ: "Temukan produk deposito terbaik untuk Anda",
        jBox: [
          {
            id: 1,
            img: tTab1,
            title: "Deposito Rupiah",
            desc: "Pilihan Investasi yang Memberi Keuntungan dan Rasa Aman",
            setor: "Setoran Awal",
            nominal: "Rp1.000.000,00*",
            syarat: "Persyaratan",
            listS: "KTP/SIM/Paspor dan KIMS/KITAS (untuk warga negara asing)",
            fasilitas: "Fasilitas",
            listF: "Automatic roll over (ARO), mandiri online, mandiri call, mandiri kredit agunan deposito",
            name: "Selengkapnya",
            details: "",
            icons: <ChevronRight />
          },

          {
            id: 2,
            img: tTab2,
            title: "Deposito Valas",
            desc: "Pilihan Investasi yang Memberi Keuntungan dan Rasa Aman",
            setor: "Setoran Awal",
            nominal: "$ 1.000",
            syarat: "Persyaratan",
            listS: "KTP/SIM/Paspor dan KIMS/KITAS (untuk warga negara asing)",
            fasilitas: "Fasilitas",
            listF: "Ragam pilihan mata uang, automatic roll over (ARO), mandiri online, mandiri call, mandiri kredit agunan deposito",
            name: "Selengkapnya",
            details: "",
            icons: <ChevronRight />
          },
        ]
      }
    ]
  },

  {
    name: "Pinjaman",
    icons: <ChevronRight />,
    desc: "Solusi pinjaman dengan berbagai pilihan yang dapat disesuaikan dengan kebutuhan Anda",
    img: pinjaman,
    slug: "https://www.mandirikartukredit.com",
  },

  {
    name: "Kartu Kredit ",
    icons: <ExternalLink />,
    desc: "Nikmati berbagai keunggulan dan kemudahan melalui mandiri kartu kredit sesuai kebutuhan Anda",
    img: kk,
    slug: "kartu-kredit",
  },

  {
    name: "Kartu Debit",
    icons: <ChevronRight />,
    desc: "Miliki Kartu Mandiri Debit dan dapatkan kemudahan, kenyamanan serta keamanan dalam bertransaksi di dalam maupun luar",
    img: debit,
    slug: "kartu-debit",
  },

  {
    name: "Investasi & Asuransi",
    icons: <ChevronRight />,
    desc: "Percayakan perlindungan diri Anda dan keluarga serta investasi dengan berbagai produk investasi & asuransi kami",
    img: investasi,
    slug: "investasi-asuransi",
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