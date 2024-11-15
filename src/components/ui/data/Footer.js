import { CiMail } from "react-icons/ci";

import { FaFacebookF, FaPhoneAlt, FaTwitter, FaWhatsapp } from "react-icons/fa";

import { LuContact } from "react-icons/lu";

export const footer = [
  {
    list: "Jl. Jenderal Gatot Subroto Kav. 36-38"
  },

  {
    list: "Jakarta 12190 Indonesia"
  },

  {
    list: "Telp: 14000, +62-21-52997777"
  },

  {
    list: "Email: mandiricare@bankmandiri.co.id"
  },

  {
    list: "SWIFT Code: BMRIIDJA"
  },

  {
    list: "Bank Mandiri Berizin dan Diawasi oleh Otoritas Jasa Keuangan dan Bank Indonesia, Serta Merupakan Peserta Penjaminan LPS"
  }
]

export const contactUs = [
  {
    name: "email",
    icons: <CiMail size={20} />,
    path: "mailto:mandiricare@bankmandiri.co.id"
  },
  {
    name: "Facebook",
    icons: <FaFacebookF size={20} />,
    path: "https://www.facebook.com/mandiricare"
  },

  {
    name: "Twitter",
    icons: <FaTwitter size={20} />,
    path: "https://twitter.com/mandiricare"
  },

  {
    name: "Whatsapp MITA",
    icons: <FaWhatsapp size={20} />,
    path: "https://api.whatsapp.com/message/U2O4MD7G7CRMP1?autoload=1&app_absent=0"
  },

  {
    name: "hubungi kami",
    icons: <LuContact size={20} />,
    path: "/contact"
  },

  {
    name: "mandiri call 14000",
    icons: <FaPhoneAlt size={20} />,
    path: "tel:14000"
  }
]