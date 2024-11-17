import simpanan from "@/components/assest/bisnis/Simpanan.jpeg"
import pinjaman from "@/components/assest/bisnis/Pinjaman.jpg"
import corporateCard from "@/components/assest/bisnis/Corporate_Card.jpg"
import cashManagement from "@/components/assest/bisnis/Cash_Management.jpg"
import eBanking from "@/components/assest/bisnis/E-Banking.jpg"
import mandiriAPI from "@/components/assest/bisnis/Mandiri_API.jpg"
import tradeFinance from "@/components/assest/bisnis/Trade_Finance.jpg"
import treasury from "@/components/assest/bisnis/Treasury.jpg"

import { ChevronRight, ExternalLink } from "lucide-react"

//============= Simpanan =============//
import TabunganBisnis from "@/components/assest/layout/slug/bisnis/simpanan/tab_bisnis.jpg"
import depositRupiah from "@/components/assest/layout/slug/bisnis/simpanan/deposito_rupiah.jpg"
import depositValas from "@/components/assest/layout/slug/bisnis/simpanan/deposito_valas.jpg"
import tabunganPayroll from "@/components/assest/layout/slug/bisnis/simpanan/Perusahaan-01.jpg"
import giroRupiah from "@/components/assest/layout/slug/bisnis/simpanan/bisnis_simpanan_giro.jpg"
import giroValas from "@/components/assest/layout/slug/bisnis/simpanan/giro_valas.jpg"

import tTab1 from "@/components/assest/layout/slug/perseorangan/simpanan/tab/tab-1.png"
import tTab2 from "@/components/assest/layout/slug/perseorangan/simpanan/tab/tab-2.png"
import tTab3 from "@/components/assest/layout/slug/perseorangan/simpanan/tab/tab-3.png"
import tTab4 from "@/components/assest/layout/slug/perseorangan/simpanan/tab/tab-4.png"
import tBox1 from "@/components/assest/layout/slug/perseorangan/simpanan/tBox/benefit-1.png"
import tBox2 from "@/components/assest/layout/slug/perseorangan/simpanan/tBox/benefit-2.png"
import tBox3 from "@/components/assest/layout/slug/perseorangan/simpanan/tBox/benefit-3.png"

//============= Pinjaman =============//
import mikro from "@/components/assest/layout/slug/bisnis/pinjaman/mikro.jpg"
import Corporate from "@/components/assest/layout/slug/bisnis/pinjaman/Corporate.jpg"
import usaha_kecil_menengah from "@/components/assest/layout/slug/bisnis/pinjaman/usaha_kecil_menengah.jpg"
import bgPinjaman from "@/components/assest/layout/slug/bisnis/pinjaman/bg.jpg"

//============= Cash Management =============//
import Bl from "@/components/assest/layout/slug/bisnis/Cash Management & Transaction/bill_collection.jpg"
import Mab from "@/components/assest/layout/slug/bisnis/Cash Management & Transaction/mandiri_auto_debit.jpeg"
import S from "@/components/assest/layout/slug/bisnis/Cash Management & Transaction/shutterstock_553465726.jpg"
import T from "@/components/assest/layout/slug/bisnis/Cash Management & Transaction/Treasury2.jpg"
import bgCashManagement from "@/components/assest/layout/slug/bisnis/Cash Management & Transaction/cash-mgmt.jpg"

//============= Trade Finance =============//
import bgTradeFinance from "@/components/assest/layout/slug/bisnis/Trade Finance/bisnis_tradefinance_bannerutama.jpg"
import impor from "@/components/assest/layout/slug/bisnis/Trade Finance/impor.jpg"
import eksor from "@/components/assest/layout/slug/bisnis/Trade Finance/ekspor.jpg"
import Vc from "@/components/assest/layout/slug/bisnis/Trade Finance/value_chain.jpg"
import Garansi from "@/components/assest/layout/slug/bisnis/Trade Finance/Bank_garansi.jpg"
import Pl from "@/components/assest/layout/slug/bisnis/Trade Finance/SKBDN.jpg"

//============= Treasury & International Banking =============//
import bgTreasure from "@/components/assest/layout/slug/bisnis/Treasury & Internasional Bangking/treasury.jpg"
import TransaksiC from "@/components/assest/layout/slug/bisnis/Treasury & Internasional Bangking/Transaksi_Cas.jpg"
import articleT from "@/components/assest/layout/slug/bisnis/Treasury & Internasional Bangking/article-0-compressor.jpg"

export const box = [
  {
    name: "Simpanan",
    icons: <ChevronRight />,
    desc: "Wujudkan bisnis yang lebih berkembang dengan berbagai solusi simpanan untuk Bisnis Anda",
    img: simpanan,
    slug: "simpanan",
    slugDetails: [
      {
        id: 1,
        name: "Simpanan",
        desc: "Dapatkan keuntungan dan kenyamanan yang lebih baik dengan berbagai solusi simpanan dari Bank Mandiri untuk Anda",
        bg: simpanan,
        box: [
          {
            id: 1,
            title: "Tabungan Bisnis",
            desc: "Hadirkan layanan yang cepat, mudah dan jaringan yang luas tersebar di Indonesia guna kalancaran transaksi bisnis Anda.",
            icons: <ChevronRight />,
            img: TabunganBisnis,
            details: "/pages/perseorangan/simpanan/tabungan-rupiah"
          },

          {
            id: 2,
            title: "Deposito Rupiah",
            desc: "Pastikan memilih investasi yang memberi keuntungan, rasa aman, terpercaya dan dapat diandalkan.",
            icons: <ExternalLink />,
            img: depositRupiah,
            details: "/pages/perseorangan/simpanan/tabungan-now"
          },

          {
            id: 3,
            title: "Deposito Valas",
            desc: "Nikmati berbagai pilihan jenis mata uang serta pembayaran bunga yang fleksibel untuk keperluan investasi valas Anda.",
            icons: <ChevronRight />,
            img: depositValas,
            details: "/pages/perseorangan/simpanan/tabungan-valas"
          },

          {
            id: 4,
            title: "Tabungan Payroll - Perusahaan",
            desc: "Rasakan kemudahan menggunakan fasilitas pengajian di Bank Mandiri, serta dapatkan fasilitas keuangan yang bernilai lebih khusus untuk karyawan Anda.",
            icons: <ChevronRight />,
            img: tabunganPayroll,
            details: "/pages/perseorangan/simpanan/tabungan-multicurrency"
          },

          {
            id: 5,
            title: "Giro Rupiah",
            desc: "Hadirkan sarana pendukung yang terpercaya untuk mengembangkan usaha Anda.",
            icons: <ChevronRight />,
            img: giroRupiah,
            details: "/pages/perseorangan/simpanan/tabunganku"
          },

          {
            id: 6,
            title: "Giro Valas",
            desc: "Nikmati berbagai keuntungan untuk simpanan valuta asing Anda, dengan bertransasksi sesuai yang Anda inginkan",
            icons: <ChevronRight />,
            img: giroValas,
            details: "/pages/perseorangan/simpanan/deposito-rupiah"
          }
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
        tTabsTitle: null,
        tTabs: [],
        jangka: null,
        descJ: null,
        jBox: [],
        pages: []
      }
    ]
  },

  {
    name: "Pinjaman",
    icons: <ChevronRight />,
    desc: "Berbagai solusi pembiayaan yang memberikan kemudahan dan flexibilitas dalam bertransaksi untuk kemajuan Bisnis",
    img: pinjaman,
    slug: "pinjaman",
    slugDetails: [
      {
        id: 1,
        name: "Pinjaman",
        desc: "Kami siap membantu mengembangkan bisnis Anda dalam memberikan fasilitas pinjaman yang bisa disesuaikan dengan bisnis Anda",
        bg: bgPinjaman,
        box: [
          {
            id: 1,
            title: "Mikro",
            desc: "Nikmati kemudahan pembiayaan untuk kebutuhan untuk usaha produktif atau konsumtif bagi pengusaha mikro",
            icons: <ChevronRight />,
            img: mikro,
            details: "/pages/perseorangan/simpanan/tabungan-rupiah"
          },

          {
            id: 2,
            title: "Usaha Kecil dan Menengah",
            desc: "Hadirkan kemudahan pembiayaan untuk kebutuhan modal kerja dan investasi usaha anda",
            icons: <ExternalLink />,
            img: usaha_kecil_menengah,
            details: "/pages/perseorangan/simpanan/tabungan-now"
          },

          {
            id: 3,
            title: "Corporate",
            desc: "Berbagai solusi pembiayaan yang memberikan kemudahan dan flexibilitas dalam bertransaksi untuk kemajuan Bisnis Anda",
            icons: <ChevronRight />,
            img: Corporate,
            details: "/pages/perseorangan/simpanan/tabungan-valas"
          },
        ],
        tBoxTitle: null,
        tBox: [],
        tTabsTitle: null,
        tTabs: [],
        jangka: null,
        descJ: null,
        jBox: [],
        pages: []
      }
    ]
  },

  {
    name: "Corporate Card",
    icons: <ExternalLink />,
    desc: "Kemudahan Kartu Kredit Mandiri hadir dengan memenuhi segala kebutuhan yang disesuaikan untuk bisnis Anda",
    img: corporateCard,
    slug: "https://www.mandirikartukredit.com/produk/corporate",
  },

  {
    name: "Cash Management",
    icons: <ChevronRight />,
    desc: "Kelola keuangan bisnis Anda dengan berbagai fasilitas dari kami, agar bisnis Anda semakin baik.",
    img: cashManagement,
    slug: "cash-management-transaction",
    slugDetails: [
      {
        id: 1,
        name: "Cash Management & Transaction",
        desc: "Kelola keuangan bisnis Anda dengan berbagai fasilitas dari kami, agar bisnis Anda semakin baik",
        bg: bgCashManagement,
        box: [
          {
            id: 1,
            title: "Kopra Cash Management",
            desc: "Nikmati kemudahan dalam bertransaksi untuk perusahaan Anda",
            icons: <ChevronRight />,
            img: T,
            details: "/pages/perseorangan/simpanan/tabungan-rupiah"
          },

          {
            id: 2,
            title: "Mandiri Bill Collection",
            desc: "Mandiri Bill Collection adalah layanan untuk membantu proses rekonsiliasi penerimaan perusahaan. Prinsip layanan adalah dengan menggunakan nomor virtual",
            icons: <ExternalLink />,
            img: Bl,
            details: "/pages/perseorangan/simpanan/tabungan-now"
          },

          {
            id: 3,
            title: "Mandiri H2H Payment",
            desc: "Mandiri Host to Host Payment (H2H Payment) adalah layanan pengiriman instruksi pemindahan dana/ pembayaran yang terintegrasi langsung dari sistem nasabah (ERP) ke Bank",
            icons: <ChevronRight />,
            img: S,
            details: "/pages/perseorangan/simpanan/tabungan-valas"
          },

          {
            id: 4,
            title: "Mandiri Auto Debit",
            desc: "Nikmati kemudahan layanan perbankan Anda",
            icons: <ChevronRight />,
            img: Mab,
            details: "/pages/perseorangan/simpanan/tabungan-valas"
          },
        ],
        tBoxTitle: null,
        tBox: [],
        tTabsTitle: null,
        tTabs: [],
        jangka: null,
        descJ: null,
        jBox: [],
        pages: []
      }
    ]
  },

  {
    name: "Trade Finance",
    icons: <ChevronRight />,
    desc: "Nikmati berbagai fasilitas serta kemudahan transaksi perbankan untuk mendukung bisnis dan usaha Anda sampai ke mancanegara",
    img: tradeFinance,
    slug: "trade-finance",
    slugDetails: [
      {
        id: 1,
        name: "Trade Finance",
        desc: "Nikmati berbagai fasilitas serta kemudahan transaksi perbankan untuk mendukung bisnis dan usaha Anda sampai ke mancanegara. Mandiri Call 14000 atau +6221 52997777 (Luar Negeri), pilih bahasa, tekan 4.",
        bg: bgTradeFinance,
        box: [
          {
            id: 1,
            title: "Ekspor",
            desc: "Nikmati kemudahan dan kenyamanan transaksi ekspor dengan Bank Mandiri",
            icons: <ChevronRight />,
            img: eksor,
            details: "/pages/perseorangan/simpanan/tabungan-rupiah"
          },

          {
            id: 2,
            title: "Impor",
            desc: "Nikmati kemudahan dan kenyamanan transaksi impor dengan Bank Mandiri",
            icons: <ExternalLink />,
            img: impor,
            details: "/pages/perseorangan/simpanan/tabungan-now"
          },

          {
            id: 3,
            title: "Value Chain",
            desc: "Memfasilitasi Anda dalam mengatasi cash flow gap",
            icons: <ChevronRight />,
            img: Vc,
            details: "/pages/perseorangan/simpanan/tabungan-valas"
          },

          {
            id: 4,
            title: "Garansi",
            desc: "Hadirkan kenyamanan dan keamanan bagi transaksi perdagangan Anda",
            icons: <ChevronRight />,
            img: Garansi,
            details: "/pages/perseorangan/simpanan/tabungan-valas"
          },

          {
            id: 5,
            title: "Perdagangan Lokal",
            desc: "Kembangkan usaha perdagangan Anda dengan kemudahan dari Bank Mandiri",
            icons: <ChevronRight />,
            img: Pl,
            details: "/pages/perseorangan/simpanan/tabungan-valas"
          },
        ],
        tBoxTitle: null,
        tBox: [],
        tTabsTitle: null,
        tTabs: [],
        jangka: null,
        descJ: null,
        jBox: [],
        pages: []
      }
    ]
  },

  {
    name: "Treasury",
    icons: <ChevronRight />,
    desc: "Nikmati kemudahan bertransaksi treasury dengan harga yang bersaing sesuai dengan kebutuhan dan bisnis Anda",
    img: treasury,
    slug: "treasury",
    slugDetails: [
      {
        id: 1,
        name: "Treasury & International Banking",
        desc: "Nikmati kemudahan bertransaksi treasury dengan harga yang bersaing sesuai dengan kebutuhan dan bisnis Anda",
        bg: bgTreasure,
        box: [
          {
            id: 1,
            title: "Treasury",
            desc: "Komitmen kami untuk memberikan solusi treasury yang inovatif dan komprehensif",
            icons: <ChevronRight />,
            img: TransaksiC,
            details: "/pages/perseorangan/simpanan/tabungan-rupiah"
          },

          {
            id: 2,
            title: "International Banking ",
            desc: "Merupakan layanan transaksi pengiriman uang dari Bank Mandiri ke bank koresponden lokal di Indonesia atau sebaliknya dalam valuta USD tanpa melalui",
            icons: <ChevronRight />,
            img: articleT,
            details: "/pages/perseorangan/simpanan/tabungan-now"
          }
        ],
        tBoxTitle: null,
        tBox: [],
        tTabsTitle: null,
        tTabs: [],
        jangka: null,
        descJ: null,
        jBox: [],
        pages: []
      }
    ]
  },

  {
    name: "E-Banking",
    icons: <ChevronRight />,
    desc: "Nikmati layanan e-banking untuk transaksi finansial dan non finansial bisnis Anda dengan aplikasi internet banking yang memudahkan",
    img: eBanking,
    slug: "e-banking",
  },

  {
    name: "Mandiri API",
    icons: <ChevronRight />,
    desc: "Integrasikan bisnis Anda dengan layanan perbankan terbaik dari Bank Mandiri.",
    img: mandiriAPI,
    slug: "mandiri-api",
  },
];