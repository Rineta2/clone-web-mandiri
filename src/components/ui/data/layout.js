import logo from "@/components/assest/logo/logo.png";

import { Banknote, ChevronRight, ExternalLink, QrCode } from "lucide-react";

export const navLogo = [
  {
    img: logo,
  },
];

export const navLinks = [
  {
    title: "Perseorangan",
    href: "/Perseorangan",
    items: [
      {
        title: "Simpanan",
        icons: <ChevronRight className="w-6 h-6" />,
        description:
          "Dapatkan keuntungan dan kenyamanan yang lebih baik dengan berbagai solusi simpanan dari Bank Mandiri untuk Anda",
        href: "/Perseorangan/Simpanan",
        animateIcon: true,
      },

      {
        title: "Pinjaman",
        icons: <ExternalLink className="w-6 h-6" />,
        description:
          "Solusi pinjaman dengan berbagai pilihan yang dapat disesuaikan dengan kebutuhan Anda",
        href: "/Perseorangan/Pinjaman",
        animateIcon: false,
      },

      {
        title: "Investasi & Asuransi",
        icons: <ChevronRight className="w-6 h-6" />,
        description:
          "Percayakan perlindungan diri Anda dan keluarga serta investasi dengan berbagai produk investasi & asuransi kami",
        href: "/Perseorangan/Investasi-Asuransi",
        animateIcon: true,
      },

      {
        title: "Pengiriman Uang",
        icons: <ExternalLink className="w-6 h-6" />,
        description: "Layanan pengiriman dan penerimaan uang secara mudah dan",
        href: "/Perseorangan/Pengiriman-Uang",
        animateIcon: false,
      },

      {
        title: "Pinjaman",
        icons: <ChevronRight className="w-6 h-6" />,
        description:
          "Solusi pinjaman dengan berbagai pilihan yang dapat disesuaikan dengan kebutuhan Anda",
        href: "/Perseorangan/Pinjaman",
        animateIcon: true,
      },

      {
        title: "Kartu Debit",
        icons: <ChevronRight className="w-6 h-6" />,
        description:
          "Miliki Kartu Mandiri Debit dan dapatkan kemudahan, kenyamanan serta keamanan dalam bertransaksi di dalam",
        href: "/Perseorangan/Kartu-Debit",
        animateIcon: true,
      },

      {
        title: "E-Banking",
        icons: <ChevronRight className="w-6 h-6" />,
        description:
          "Mandiri e-banking memungkinkan Anda bertransaksi dengan mudah kapan saja dan dimana saja",
        href: "/Perseorangan/E-Banking",
        animateIcon: true,
      },

      {
        title: "Smart Branch",
        icons: <ChevronRight className="w-6 h-6" />,
        description:
          "Sebuah dedikasi Bank Mandiri bagi nasabah tercinta dengan",
        href: "/Perseorangan/Smart-Branch",
        animateIcon: true,
      },
    ],
    quickActions: [
      {
        title: "Tarif Layanan",
        href: "/Perseorangan/Tarif-Layanan",
        icons: (
          <Banknote className="w-12 h-12 p-2 rounded-full bg-primary text-white" />
        ),
      },
      {
        title: "Tabungan Now",
        icons: (
          <QrCode className="w-12 h-12 p-2 rounded-full bg-primary text-white" />
        ),
        href: "/Perseorangan/Tabungan-Now",
      },
    ],
  },
  {
    title: "Bisnis",
    href: "/Bisnis",
    items: [
      {
        title: "Simpanan",
        description:
          "Jadikan bisnis Anda lebih berkembang, karena kami siap membantu dalam memberikan berbagai solusi untuk Anda",
        icons: <ChevronRight className="w-6 h-6" />,
        href: "/Bisnis/Simpanan",
        animateIcon: true,
      },
      {
        title: "Corporate Card",
        icons: <ExternalLink className="w-6 h-6" />,
        description:
          "Nikmati berbagai kemudahan Kartu Kredit Mandiri yang hadir dengan memenuhi segala kebutuhan bisnis Anda",
        href: "/Bisnis/Corporate-Card",
        animateIcon: false,
      },
      {
        title: "Trade Finance",
        icons: <ChevronRight className="w-6 h-6" />,
        description:
          "Nikmati berbagai fasilitas serta kemudahan transaksi perbankan dari kami yang dapat mendukung bisnis Anda",
        href: "/Bisnis/Trade-Finance",
        animateIcon: true,
      },
      {
        title: "E-Banking ",
        icons: <ChevronRight className="w-6 h-6" />,
        description:
          "Nikmati sebuah layanan 24 jam yang hadir dan siap untuk selalu membantu bisnis Anda dalam memberikan segala",
        href: "/Bisnis/E-Banking",
        animateIcon: true,
      },
      {
        title: "Pinjaman",
        icons: <ChevronRight className="w-6 h-6" />,
        description:
          "Kami siap membantu mengembangkan bisnis Anda dalam memberikan fasilitas pinjaman yang bisa disesuaikan dengan",
        href: "/Bisnis/Pinjaman",
        animateIcon: true,
      },
      {
        title: "Cash Management & Transaction",
        icons: <ChevronRight className="w-6 h-6" />,
        description:
          "Kelola dana Anda dengan berbagai fasilitas yang memudahkan Anda",
        href: "/Bisnis/Cash-Management-Transaction",
        animateIcon: true,
      },
      {
        title: "Treasury & International Banking",
        icons: <ChevronRight className="w-6 h-6" />,
        description:
          "Nikmati kemudahan bertransaksi treasury dengan harga yang bersaing sesuai dengan kebutuhan dan bisnis Anda",
        href: "/Bisnis/Treasury-International-Banking",
        animateIcon: true,
      },
      {
        title: "Mandiri API",
        icons: <ChevronRight className="w-6 h-6" />,
        description:
          "Integrasikan bisnis Anda dengan layanan perbankan terbaik dari Bank Mandiri.",
        href: "/Bisnis/Mandiri-API",
        animateIcon: true,
      },
    ],
    quickActions: [
      {
        title: "Tarif Layanan",
        href: "/Perseorangan/Tarif-Layanan",
        icons: (
          <Banknote className="w-12 h-12 p-2 rounded-full bg-primary text-white" />
        ),
      },
      {
        title: "Tabungan Now",
        icons: (
          <QrCode className="w-12 h-12 p-2 rounded-full bg-primary text-white" />
        ),
        href: "/Perseorangan/Tabungan-Now",
      },
    ],
  },
  {
    title: "Prioritas",
    href: "/Prioritas",
    items: [
      {
        title: "Prioritas",
        icons: <ChevronRight className="w-6 h-6" />,
        description:
          "Nikmati berbagai layanan prioritas perbankan dimanapun Anda berada.",
        href: "/Wealth-Management/Prioritas",
        animateIcon: true,
      },
      {
        title: "Produk",
        icons: <ExternalLink className="w-6 h-6" />,
        description:
          "Temukan berbagai layanan unggulan yang sesuai dengan kebutuhan finansial Anda.",
        href: "/Wealth-Management/Produk",
        animateIcon: false,
      },
      {
        title: "Private",
        icons: <ChevronRight className="w-6 h-6" />,
        description:
          "Mandiri private akan senantiasa menjaga aset Anda, memastikannya bertumbuh dan meneruskannya ke generasi",
        href: "/Wealth-Management/Private",
        animateIcon: true,
      },
      {
        title: "e-Magz",
        icons: <ExternalLink className="w-6 h-6" />,
        description:
          "Informasi seputar peluang investasi, special event, penjelasan produk, dan berbagai informasi menarik lainnya yang terbit secara berkala.",
        href: "/Wealth-Management/e-Magz",
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
    href: "/Tentang-Mandiri",
    items: [
      {
        title: "Korporasi Info",
        icons: <ChevronRight className="w-6 h-6" />,
        description:
          "Melalui perjalanan panjang sejarah yang telah diukir, senantiasa selalu berkomitmen untuk memberikan kontribusi terbaik",
        href: "/Tentang-Mandiri/Korporasi-Info",
        animateIcon: true,
      },
      {
        title: "Sustainability",
        icons: <ChevronRight className="w-6 h-6" />,
        description:
          "Implementing sustainability principles that support business, operation and communities by ESG aspects alignment",
        href: "/Tentang-Mandiri/Sustainability",
        animateIcon: true,
      },
      {
        title: "Good Corporate Governance",
        icons: <ExternalLink className="w-6 h-6" />,
        description:
          "Implementasi Good Corporate Governance (GCG) merupakan elemen fundamental untuk meningkatkan nilai perusahaan (value creation)",
        href: "/Tentang-Mandiri/Good-Corporate-Governance",
        animateIcon: false,
      },
      {
        title: "Mandiri Group",
        icons: <ChevronRight className="w-6 h-6" />,
        description:
          "Mendorong budaya cross-sell serta mengoptimalkan pengintegrasian bisnis disemua segmen termasuk dengan Perusahaan Anak",
        href: "/Tentang-Mandiri/Mandiri-Group",
        animateIcon: true,
      },
      {
        title: "TJSL Mandiri",
        icons: <ChevronRight className="w-6 h-6" />,
        description:
          "Membangun masyarakat Indonesia Mandiri melalui program TJSL guna menjadi lembaga keuangan Indonesia yang progresif",
        href: "/Tentang-Mandiri/TJSL-Mandiri",
        animateIcon: true,
      },
      {
        title: "Investor Relations",
        icons: <ChevronRight className="w-6 h-6" />,
        description:
          "Informasi keuangan, berita dan saham Bank Mandiri Bagi Pemegang Saham dan Investor secara efektif, efisien dan transparan",
        href: "/Tentang-Mandiri/Investor-Relations",
        animateIcon: true,
      },
      {
        title: "Karir",
        icons: <ChevronRight className="w-6 h-6" />,
        description:
          "Miliki pengalaman kerja di dunia perbankan dengan kompetensi kelas dunia, lingkungan kerja yang ramah dan menghargai setiap ide positif",
        href: "/Tentang-Mandiri/Karir",
        animateIcon: true,
      },
      {
        title: "PPID",
        icons: <ChevronRight className="w-6 h-6" />,
        description:
          "Keterbukaan Informasi Bank Mandiri dalam perannya sebagai Pejabat Pengelola Informasi dan Dokumentasi",
        href: "/Tentang-Mandiri/PPID",
        animateIcon: true,
      },
    ],
    quickActions: [
      {
        title: "Tarif Layanan",
        href: "/Perseorangan/Tarif-Layanan",
        icons: (
          <Banknote className="w-12 h-12 p-2 rounded-full bg-primary text-white" />
        ),
      },
    ],
  },
  {
    title: "Bantuan",
    href: "/Bantuan",
  },
];
