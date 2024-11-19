import logo from "@/components/assest/logo/logo.png";

import { Banknote, ChevronRight, ExternalLink, QrCode } from "lucide-react";

export const navLogo = [
  {
    img: logo,
  },
];

export const navLinks = [
  {
    name: "Perseorangan",
    title: "Perseorangan",
    href: "/pages/perseorangan",
    items: [
      {
        title: "Simpanan",
        icons: <ChevronRight className="w-6 h-6" />,
        description:
          "Dapatkan keuntungan dan kenyamanan yang lebih baik dengan berbagai solusi simpanan dari Bank Mandiri untuk Anda",
        href: "/pages/perseorangan/simpanan",
        animateIcon: true,
      },

      {
        title: "Pinjaman",
        icons: <ChevronRight className="w-6 h-6" />,
        description:
          "Solusi pinjaman dengan berbagai pilihan yang dapat disesuaikan dengan kebutuhan Anda",
        href: "/pages/perseorangan/pinjaman",
        animateIcon: true,
      },

      {
        title: "Kartu Kredit",
        icons: <ExternalLink className="w-6 h-6" />,
        description:
          "Nikmati berbagai keunggulan dan kemudahan melalui mandiri kartu kredit sesuai kebutuhan Anda",
        href: "https://www.mandirikartukredit.com",
        animateIcon: false,
      },

      {
        title: "Kartu Debit",
        icons: <ChevronRight className="w-6 h-6" />,
        description: "Miliki Kartu Mandiri Debit dan dapatkan kemudahan, kenyamanan serta keamanan dalam bertransaksi di dalam",
        href: "/pages/perseorangan/kartu-debit",
        animateIcon: true,
      },

      {
        title: "Investasi & Asuransi",
        icons: <ChevronRight className="w-6 h-6" />,
        description:
          "Percayakan perlindungan diri Anda dan keluarga serta investasi dengan berbagai produk investasi & asuransi kami",
        href: "/pages/perseorangan/investasi-asuransi",
        animateIcon: true,
      },

      {
        title: "E-Banking",
        icons: <ChevronRight className="w-6 h-6" />,
        description:
          "Mandiri e-banking memungkinkan Anda bertransaksi dengan mudah kapan saja dan dimana saja",
        href: "/pages/perseorangan/e-banking",
        animateIcon: true,
      },

      {
        title: "Pengiriman Uang",
        icons: <ChevronRight className="w-6 h-6" />,
        description:
          "Layanan pengiriman dan penerimaan uang secara mudah dan aman di seluruh dunia",
        href: "/pages/perseorangan/e-banking",
        animateIcon: true,
      },

      {
        title: "Smart Branch",
        icons: <ChevronRight className="w-6 h-6" />,
        description:
          "Sebuah dedikasi Bank Mandiri bagi nasabah tercinta dengan",
        href: "/pages/perseorangan/smart-branch",
        animateIcon: true,
      },
    ],
    quickActions: [
      {
        title: "Tarif Layanan",
        href: "/pages/tarif-layanan",
        icons: (
          <Banknote className="w-12 h-12 p-2 rounded-full bg-primary text-white" />
        ),
      },
      {
        title: "Tabungan Now",
        icons: (
          <QrCode className="w-12 h-12 p-2 rounded-full bg-primary text-white" />
        ),
        href: "https://join.bankmandiri.co.id/app/",
      },
    ],
  },

  {
    name: "Bisnis",
    title: "Bisnis",
    href: "/pages/bisnis",
    items: [
      {
        title: "Simpanan",
        description:
          "Jadikan bisnis Anda lebih berkembang, karena kami siap membantu dalam memberikan berbagai solusi untuk Anda",
        icons: <ChevronRight className="w-6 h-6" />,
        href: "/pages/bisnis/simpanan",
        animateIcon: true,
      },

      {
        title: "Pinjaman",
        icons: <ChevronRight className="w-6 h-6" />,
        description:
          "Kami siap membantu mengembangkan bisnis Anda dalam memberikan fasilitas pinjaman yang bisa disesuaikan dengan",
        href: "/pages/bisnis/pinjaman",
        animateIcon: true,
      },

      {
        title: "Corporate Card",
        icons: <ExternalLink className="w-6 h-6" />,
        description:
          "Nikmati berbagai kemudahan Kartu Kredit Mandiri yang hadir dengan memenuhi segala kebutuhan bisnis Anda",
        href: "https://www.mandirikartukredit.com/produk/corporate",
        animateIcon: false,
      },

      {
        title: "Cash Management & Transaction",
        icons: <ChevronRight className="w-6 h-6" />,
        description:
          "Kelola dana Anda dengan berbagai fasilitas yang memudahkan Anda",
        href: "/pages/bisnis/cash-management-transaction",
        animateIcon: true,
      },

      {
        title: "Trade Finance",
        icons: <ChevronRight className="w-6 h-6" />,
        description:
          "Nikmati berbagai fasilitas serta kemudahan transaksi perbankan dari kami yang dapat mendukung bisnis Anda",
        href: "/pages/bisnis/trade-finance",
        animateIcon: true,
      },

      {
        title: "Treasury & International Banking",
        icons: <ChevronRight className="w-6 h-6" />,
        description:
          "Nikmati kemudahan bertransaksi treasury dengan harga yang bersaing sesuai dengan kebutuhan dan bisnis Anda",
        href: "/pages/bisnis/treasury",
        animateIcon: true,
      },

      {
        title: "E-Banking ",
        icons: <ChevronRight className="w-6 h-6" />,
        description:
          "Nikmati sebuah layanan 24 jam yang hadir dan siap untuk selalu membantu bisnis Anda dalam memberikan segala",
        href: "/pages/bisnis/e-banking",
        animateIcon: true,
      },

      {
        title: "Mandiri API",
        icons: <ChevronRight className="w-6 h-6" />,
        description:
          "Integrasikan bisnis Anda dengan layanan perbankan terbaik dari Bank Mandiri.",
        href: "/pages/bisnis/mandiri-api",
        animateIcon: true,
      },
    ],
    quickActions: [
      {
        title: "Tarif Layanan",
        href: "/pages/tarif-layanan",
        icons: (
          <Banknote className="w-12 h-12 p-2 rounded-full bg-primary text-white" />
        ),
      },
      {
        title: "Tabungan Now",
        icons: (
          <QrCode className="w-12 h-12 p-2 rounded-full bg-primary text-white" />
        ),
        href: "https://join.bankmandiri.co.id/app/",
      },
    ],
  },

  {
    name: "Wealth Management",
    title: "Prioritas",
    href: "/pages/wealth-management",
    items: [
      {
        title: "Prioritas",
        icons: <ChevronRight className="w-6 h-6" />,
        description:
          "Nikmati berbagai layanan prioritas perbankan dimanapun Anda berada.",
        href: "/pages/wealth-management/prioritas",
        animateIcon: true,
      },
      {
        title: "Produk",
        icons: <ExternalLink className="w-6 h-6" />,
        description:
          "Temukan berbagai layanan unggulan yang sesuai dengan kebutuhan finansial Anda.",
        href: "/pages/wealth-management",
        animateIcon: false,
      },
      {
        title: "Private",
        icons: <ChevronRight className="w-6 h-6" />,
        description:
          "Mandiri private akan senantiasa menjaga aset Anda, memastikannya bertumbuh dan meneruskannya ke generasi",
        href: "/pages/wealth-management/private",
        animateIcon: true,
      },
      {
        title: "e-Magz",
        icons: <ExternalLink className="w-6 h-6" />,
        description:
          "Informasi seputar peluang investasi, special event, penjelasan produk, dan berbagai informasi menarik lainnya yang terbit secara berkala.",
        href: "/pages/wealth-management/e-magz",
        animateIcon: false,
      },
    ],
    quickActions: [
      {
        title: "",
        href: "",
        icons: "",
      },
    ],
  },

  {
    title: "Tentang Mandiri",
    name: "Tentang Mandiri",
    href: "/pages/tentang-mandiri",
    items: [
      {
        title: "Korporasi Info",
        icons: <ChevronRight className="w-6 h-6" />,
        description:
          "Melalui perjalanan panjang sejarah yang telah diukir, senantiasa selalu berkomitmen untuk memberikan kontribusi terbaik",
        href: "/pages/tentang-mandiri/korporasi-info",
        animateIcon: true,
      },
      {
        title: "Sustainability",
        icons: <ChevronRight className="w-6 h-6" />,
        description:
          "Implementing sustainability principles that support business, operation and communities by ESG aspects alignment",
        href: "https://www.bankmandiri.co.id/esg",
        animateIcon: true,
      },
      {
        title: "Good Corporate Governance",
        icons: <ExternalLink className="w-6 h-6" />,
        description:
          "Implementasi Good Corporate Governance (GCG) merupakan elemen fundamental untuk meningkatkan nilai perusahaan (value creation)",
        href: "/pages/tentang-mandiri/good-corporate-governance",
        animateIcon: false,
      },
      {
        title: "Mandiri Group",
        icons: <ChevronRight className="w-6 h-6" />,
        description:
          "Mendorong budaya cross-sell serta mengoptimalkan pengintegrasian bisnis disemua segmen termasuk dengan Perusahaan Anak",
        href: "/pages/tentang-mandiri/mandiri-group",
        animateIcon: true,
      },
      {
        title: "TJSL Mandiri",
        icons: <ChevronRight className="w-6 h-6" />,
        description:
          "Membangun masyarakat Indonesia Mandiri melalui program TJSL guna menjadi lembaga keuangan Indonesia yang progresif",
        href: "/pages/tentang-mandiri/tjsl-bank-mandiri",
        animateIcon: true,
      },
      {
        title: "Investor Relations",
        icons: <ChevronRight className="w-6 h-6" />,
        description:
          "Informasi keuangan, berita dan saham Bank Mandiri Bagi Pemegang Saham dan Investor secara efektif, efisien dan transparan",
        href: "https://www.bankmandiri.co.id/web/ir",
        animateIcon: true,
      },
      {
        title: "Karir",
        icons: <ChevronRight className="w-6 h-6" />,
        description:
          "Miliki pengalaman kerja di dunia perbankan dengan kompetensi kelas dunia, lingkungan kerja yang ramah dan menghargai setiap ide positif",
        href: "https://www.bankmandiri.co.id/web/guest/mandiri-career",
        animateIcon: true,
      },
      {
        title: "PPID",
        icons: <ChevronRight className="w-6 h-6" />,
        description:
          "Keterbukaan Informasi Bank Mandiri dalam perannya sebagai Pejabat Pengelola Informasi dan Dokumentasi",
        href: "https://www.bankmandiri.co.id/web/guest/ppid",
        animateIcon: true,
      },
    ],
    quickActions: [
      {
        title: "Tarif Layanan",
        href: "/pages/perseorangan/tarif-layanan",
        icons: (
          <Banknote className="w-12 h-12 p-2 rounded-full bg-primary text-white" />
        ),
      },
    ],
  },

  {
    title: "Bantuan",
    name: "Bantuan",
    href: "/pages/bantuan",
  },
];
