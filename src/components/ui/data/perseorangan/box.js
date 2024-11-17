import simpanan from "@/components/assest/layout/perseorangan/simpanan.jpg"
import pinjaman from "@/components/assest/layout/perseorangan/pinjam.jpg"
import debit from "@/components/assest/layout/perseorangan/debit.jpg"
import kk from "@/components/assest/layout/perseorangan/kk.jpg"
import investasi from "@/components/assest/layout/perseorangan/investasi.jpg"
import eBanking from "@/components/assest/layout/perseorangan/e-bangking.jpeg"
import pengirimanUang from "@/components/assest/layout/perseorangan/Pengiriman-Uang.jpg"
import agSmartBranch from "@/components/assest/layout/perseorangan/ag-smart-branch.png"

//============= Simpanan =============//
import Tabungan from "@/components/assest/layout/slug/perseorangan/simpanan/p.jpg";
import TabunganNow from "@/components/assest/layout/slug/perseorangan/simpanan/Tabungan.jpg";
import TabunganValas from "@/components/assest/layout/slug/perseorangan/simpanan/perseorangan_simpanan_tabunganvalas.jpg";
import TabunganMulticurrency from "@/components/assest/layout/slug/perseorangan/simpanan/tabungan-multicurrency.png";
import TabunganKu from "@/components/assest/layout/slug/perseorangan/simpanan/perseorangan_simpanan_tabunganrencana.jpg";
import DepositoRupiah from "@/components/assest/layout/slug/perseorangan/simpanan/Tabungan_Payroll_Individu-01.jpg";
import DepositoValas from "@/components/assest/layout/slug/perseorangan/simpanan/perseorangan_simpanan_depositovalas.jpg";
import TabunganTKI from "@/components/assest/layout/slug/perseorangan/simpanan/Tabungan_TKI_Thumbnail-100.jpg";
import TabunganPelajar from "@/components/assest/layout/slug/perseorangan/simpanan/Tabungan_Simpanan_Pelajar_Thumbnail-100.jpg";
import TabunganSimakmur from "@/components/assest/layout/slug/perseorangan/simpanan/Tabungan_SiMakmur_Thumbnail-100.jpg";
import TabunganInvestor from "@/components/assest/layout/slug/perseorangan/simpanan/Tabungan_Investor_Thumbnail-100.jpg";
import TabunganMu from "@/components/assest/layout/slug/perseorangan/simpanan/Tabungan_Mitra_Usaha_Thumbnail-100.jpg";
import bgSimpanan from "@/components/assest/layout/slug/perseorangan/simpanan/bg.jpeg";
import tBox1 from "@/components/assest/layout/slug/perseorangan/simpanan/tBox/benefit-1.png";
import tBox2 from "@/components/assest/layout/slug/perseorangan/simpanan/tBox/benefit-2.png";
import tBox3 from "@/components/assest/layout/slug/perseorangan/simpanan/tBox/benefit-3.png";
import tTab1 from "@/components/assest/layout/slug/perseorangan/simpanan/tab/tab-1.png";
import tTab2 from "@/components/assest/layout/slug/perseorangan/simpanan/tab/tab-2.png";
import tTab3 from "@/components/assest/layout/slug/perseorangan/simpanan/tab/tab-3.png";
import tTab4 from "@/components/assest/layout/slug/perseorangan/simpanan/tab/tab-4.png";

//============= Pinjaman =============//
import bgPinjaman from "@/components/assest/layout/slug/perseorangan/pinjaman/bg.jpg"
import KreditSerbaguna from "@/components/assest/layout/slug/perseorangan/pinjaman/KTA.jpg"
import KreditKendaraan from "@/components/assest/layout/slug/perseorangan/pinjaman/KKB.jpg"
import KreditKepemilikanRumah from "@/components/assest/layout/slug/perseorangan/pinjaman/KPR_bersubsidi.jpg"
import KreditPemilikanRumahBersubsidi from "@/components/assest/layout/slug/perseorangan/pinjaman/KPR.JPG"
import KreditMultiguna from "@/components/assest/layout/slug/perseorangan/pinjaman/multiguna.jpg"
import TopUpKPR from "@/components/assest/layout/slug/perseorangan/pinjaman/Mandiri_Mobile.jpg"

//============= Invenstasi & Asuransi =============//
import bgInvestasi from "@/components/assest/layout/slug/perseorangan/investasi/bg.jpg"
import Asuransi from "@/components/assest/layout/slug/perseorangan/investasi/axa_mandiri_no.37-2.jpg"

//============= E-Banking =============//
import bgE_bangking from "@/components/assest/layout/slug/perseorangan/e-banking/bgE-bangking.jpg"
import Livine_by_Mandiri from "@/components/assest/layout/slug/perseorangan/e-banking/Livin-01.jpg"
import E_money from "@/components/assest/layout/slug/perseorangan/e-banking/e-moneyy.jpg"
import Link_aja from "@/components/assest/layout/slug/perseorangan/e-banking/linkaja-digital-banking-1.jpg"
import livin_usaha from "@/components/assest/layout/slug/perseorangan/e-banking/livin-usaha.png"
import madiri_pages from "@/components/assest/layout/slug/perseorangan/e-banking/Mandiri_Digital_Baru-01.png"

import { ChevronRight, ExternalLink } from "lucide-react"

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
        ],
        pages: []
      }
    ]
  },

  {
    name: "Pinjaman",
    icons: <ChevronRight />,
    desc: "Solusi pinjaman dengan berbagai pilihan yang dapat disesuaikan dengan kebutuhan Anda",
    img: pinjaman,
    slug: "pinjaman",
    slugDetails: [
      {
        id: 1,
        name: "Pinjaman",
        desc: "Solusi pinjaman dengan berbagai pilihan yang dapat disesuaikan dengan kebutuhan Anda",
        bg: bgPinjaman,
        box: [
          {
            id: 1,
            title: "Kredit Serbaguna Mandiri",
            desc: "Kemudahan menabung untuk kenyamanan hidup",
            icons: <ChevronRight />,
            img: KreditSerbaguna,
            details: "/pages/perseorangan/pinjaman/kredit-serbaguna-mandiri"
          },

          {
            id: 2,
            title: "Kredit Kendaraan Bermotor",
            desc: "Kemudahan menabung untuk kenyamanan hidup",
            icons: <ExternalLink />,
            img: KreditKendaraan,
            details: "/pages/perseorangan/pinjaman/kredit-kendaraan-bermotor"
          },

          {
            id: 3,
            title: "Kredit Kepemilikan Rumah",
            desc: "Kemudahan menabung untuk kenyamanan hidup",
            icons: <ChevronRight />,
            img: KreditKepemilikanRumah,
            details: "/pages/perseorangan/pinjaman/kredit-kepemilikan-rumah"
          },

          {
            id: 4,
            title: "Kredit Pemilikan Rumah Bersubsidi",
            desc: "Kemudahan dan benefit transaksi dengan berbagai pilihan valuta asing",
            icons: <ChevronRight />,
            img: KreditPemilikanRumahBersubsidi,
            details: "/pages/perseorangan/pinjaman/kredit-pemilikan-rumah-bersubsidi"
          },

          {
            id: 5,
            title: "Kredit Multiguna",
            desc: "Kemudahan dan benefit transaksi dengan berbagai pilihan valuta asing",
            icons: <ChevronRight />,
            img: KreditMultiguna,
            details: "/pages/perseorangan/pinjaman/kredit-multiguna"
          },

          {
            id: 6,
            title: "Top Up KPR",
            desc: "Kemudahan dan benefit transaksi dengan berbagai pilihan valuta asing",
            icons: <ChevronRight />,
            img: TopUpKPR,
            details: "/pages/perseorangan/pinjaman/top-up-kpr"
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
    slugDetails: [
      {
        id: 1,
        name: "Investasi & Asuransi",
        desc: "Percayakan perlindungan diri Anda dan keluarga serta investasi dengan berbagai produk investasi & asuransi kami",
        bg: bgInvestasi,
        box: [
          {
            id: 1,
            title: "Asuransi - AXA Mandiri ",
            desc: "Nikmati berbagai pilihan asuransi dari Axa Mandiri sesuai dengan kebutuhan Anda",
            icons: <ChevronRight />,
            img: Asuransi,
            details: "/pages/perseorangan/investasi-asuransi/asuransi-axa-mandiri"
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
        ],
        pages: []
      }
    ]
  },

  {
    name: "E-Banking",
    icons: <ChevronRight />,
    desc: "Mandiri e-banking memungkinkan Anda bertransaksi dengan mudah kapan saja dan dimana saja",
    img: eBanking,
    slug: "e-banking",
    slugDetails: [
      {
        id: 1,
        name: "Layanan E-Channel / E-Banking",
        desc: "Mandiri e-banking memungkinkan Anda bertransaksi dengan mudah kapan saja dan dimana saja",
        bg: bgE_bangking,
        box: [
          {
            id: 1,
            title: "Livin' by Mandiri",
            desc: "Sahabat finansial yang menemani kapan pun dan di mana pun kamu berada. Living a lively life with Livin' by Mandiri",
            icons: <ChevronRight />,
            img: Livine_by_Mandiri,
            details: "/pages/perseorangan/simpanan/tabungan-rupiah"
          },

          {
            id: 2,
            title: "Mandiri e-money",
            desc: "Nikmati kemudahan dan kenyamanan hidup dengan satu kartu untuk berbagai transaksi harian Anda",
            icons: <ChevronRight />,
            img: E_money,
            details: "/pages/perseorangan/simpanan/tabungan-now"
          },

          {
            id: 3,
            title: "Link Aja",
            desc: "Nikmati layanan fitur pembayaran yang lengkap dari aplikasi buah karya sinergi perusahaan kebanggaan bangsa Indonesia",
            icons: <ChevronRight />,
            img: Link_aja,
            details: "/pages/perseorangan/simpanan/tabungan-valas"
          },

          {
            id: 4,
            title: "Livin' Usaha",
            desc: "Enjoy the benefits and conveniences with QRIS Bank Mandiri.",
            icons: <ChevronRight />,
            img: livin_usaha,
            details: "/pages/perseorangan/simpanan/tabungan-multicurrency"
          },

          {
            id: 5,
            title: "TabunganKu",
            desc: "Hidup lebih sejahtera bersama TabunganKu",
            icons: <ChevronRight />,
            img: TabunganKu,
            details: "/pages/perseorangan/simpanan/tabunganku"
          }
        ],
        tBoxTitle: null,
        tBox: [],
        tTabsTitle: null,
        tTabs: [],
        jangka: null,
        descJ: null,
        jBox: [],
        pages: [
          {
            id: 1,
            title: "Mandiri Jadi Digital",
            desc: "Terus memantapkan diri menjadi yang terdepan dalam arus perkembangan teknologi dan informasi. Bank Mandiri tak hentinya berbenah untuk maju melalui transformasi, inovasi, keamanan data, dan sumber daya manusia yang unggul. Memberikan makna bagi kehidupan yang lebih baik.",
            img: madiri_pages,
            name: "Selengkapnya",
            icons: <ChevronRight />,
            path: "#"
          }
        ]
      }
    ]
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