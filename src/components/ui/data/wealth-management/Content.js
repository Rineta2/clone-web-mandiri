import { ChevronRight, ExternalLink } from "lucide-react"

//==================== Prioritas ====================//
import ag1 from "@/components/assest/layout/slug//prioritas/prioritas/ag-prioritas-1.png"
import ag2 from "@/components/assest/layout/slug//prioritas/prioritas/ag-prioritas-2.png"
import ag3 from "@/components/assest/layout/slug//prioritas/prioritas/ag-prioritas-3.png"
import bgprioritas from "@/components/assest/layout/slug/prioritas/prioritas/ag-banner-skew-1.png"
import debitPrioritas from "@/components/assest/layout/slug/prioritas/prioritas/ag-box-card-1.png"
import creditPrioritas from "@/components/assest/layout/slug/prioritas/prioritas/ag-box-card-2.png"
import securityPrioritas from "@/components/assest/layout/slug/prioritas/prioritas/ag-berbagi-1.png"
import keistimewaanPrioritas from "@/components/assest/layout/slug/prioritas/prioritas/ag-berbagi-2.png"
import gayaPrioritas from "@/components/assest/layout/slug/prioritas/prioritas/ag-berbagi-3.png"
import bannerPrioritas from "@/components/assest/layout/slug/prioritas/prioritas/ag-prioritas-bergabung.png"

export const content = [
  {
    id: 1,
    name: "Mandiri Prioritas",
    slug: "prioritas",
    slugDetails: [
      {
        id: 1,
        name: "Layanan Mandiri Prioritas",
        bg: bgprioritas,
        card: [
          {
            id: 1,
            name: "Kartu Debit Private",
            img: debitPrioritas
          },

          {
            id: 2,
            name: "Kartu Kredit World Elite",
            img: creditPrioritas
          },
        ],
        tBoxTitle: "Syarat dan Ketentuan Layanan Mandiri Private",
        tBox: [
          {
            id: 1,
            img: ag1,
            name: "Mengisi Formulir Mitra Utama (FMU)"
          },

          {
            id: 2,
            img: ag2,
            name: "Memiliki total Fund Under Management (FUM) minimal ekuivalen Rp 20 Milyar, terdiri dari: tabungan, giro, dan produk investasi"
          },

          {
            id: 3,
            img: ag3,
            name: "Memiliki rekening tabungan/giro Rupiah"
          }
        ],
        titleTabs: "Berbagai Keistimewaan Untuk Anda",
        tTabs: [
          {
            id: 1,
            title: "Keistimewaan Untuk Keamanan Anda",
            img: securityPrioritas,
            name: "Selengkapnya",
            details: "",
            icons: <ChevronRight />
          },

          {
            id: 2,
            title: "Keistimewaan Untuk Kenyamanan Anda",
            img: keistimewaanPrioritas,
            name: "Selengkapnya",
            details: "",
            icons: <ChevronRight />
          },

          {
            id: 3,
            title: "Keistimewaan Untuk Gaya Hidup Anda",
            img: gayaPrioritas,
            name: "Selengkapnya",
            details: "",
            icons: <ChevronRight />
          },
        ],
        banner: bannerPrioritas,
      }
    ]
  },

  {
    id: 2,
    name: "Mandiri Private",
    slug: "private",
    slugDetails: [
      {
        id: 1,
        name: "Layanan Mandiri Private",
        bg: bgprioritas,
        card: [
          {
            id: 1,
            name: "Kartu Debit Private",
            img: debitPrioritas
          },

          {
            id: 2,
            name: "Kartu Kredit World Elite",
            img: creditPrioritas
          },
        ],
        tBoxTitle: "Syarat dan Ketentuan Layanan Mandiri Private",
        tBox: [
          {
            id: 1,
            img: ag1,
            name: "Mengisi Formulir Mitra Utama (FMU)"
          },

          {
            id: 2,
            img: ag2,
            name: "Memiliki total Fund Under Management (FUM) minimal ekuivalen Rp 20 Milyar, terdiri dari: tabungan, giro, dan produk investasi"
          },

          {
            id: 3,
            img: ag3,
            name: "Memiliki rekening tabungan/giro Rupiah"
          }
        ],

        titleTabs: "Berbagai Keistimewaan Untuk Anda",
        tTabs: [
          {
            id: 1,
            title: "Keistimewaan Untuk Keamanan Anda",
            img: securityPrioritas,
            name: "Selengkapnya",
            details: "",
            icons: <ChevronRight />
          },

          {
            id: 2,
            title: "Keistimewaan Untuk Kenyamanan Anda",
            img: keistimewaanPrioritas,
            name: "Selengkapnya",
            details: "",
            icons: <ChevronRight />
          },

          {
            id: 3,
            title: "Keistimewaan Untuk Gaya Hidup Anda",
            img: gayaPrioritas,
            name: "Selengkapnya",
            details: "",
            icons: <ChevronRight />
          },
        ],
        banner: bannerPrioritas,
      }
    ]
  },
];
