import { Calculator, ChevronRight } from "lucide-react";

import Link from "next/link";

export default function CalculatorMenu({ isOpen, onClick }) {
  return (
    <div className="relative group z-100">
      <div
        className="flex items-center cursor-pointer active:scale-95 transition-all w-10 h-10"
        onClick={onClick}
      >
        <div
          className={`p-5 py-10 ${
            isOpen ? "text-background bg-primaryLg" : "text-primary"
          }`}
        >
          <Calculator size={20} />
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-[40px] left-0 bg-primaryLg shadow-lg rounded-lg py-11 px-10 w-[400px] z-[999] overflow-hidden animate-slide-up">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-3 col-span-1 mb-2">
              <button className="text-left text-background font-bold text-[20px] mb-1">
                Suku Bunga
              </button>

              <Link
                href="/pages/suku-bunga/suku-bunga-dana"
                className="flex items-center text-left text-background text-[14px] mb-1"
              >
                Suku Bunga Dana <ChevronRight size={16} />
              </Link>

              <Link
                href="/pages/suku-bunga/suku-bunga-dasar"
                className="flex items-center text-left text-background text-[14px]"
              >
                Suku Bunga Dasar <ChevronRight size={16} />
              </Link>

              <Link
                href="/pages/suku-bunga/kredit"
                className="flex items-center text-left text-background text-[14px]"
              >
                Kredit <ChevronRight size={16} />
              </Link>

              <Link
                href="/pages/suku-bunga/kurs"
                className="flex items-center text-left text-background text-[14px]"
              >
                Kurs <ChevronRight size={16} />
              </Link>
            </div>

            <div className="flex flex-col gap-3 col-span-1 mb-2">
              <button className="text-left text-background font-bold text-[20px] mb-1">
                Kalkulator
              </button>

              <Link
                href="/pages/kalkulator/kalkulator-financial"
                className="flex items-center text-left text-background text-[14px] mb-1"
              >
                Kalkulator Finansial <ChevronRight size={16} />
              </Link>

              <Link
                href="https://www.bankmandiri.co.id/web/guest/kalkulator-kpr"
                className="flex items-center text-left text-background text-[14px]"
              >
                Kalkulator KPR <ChevronRight size={16} />
              </Link>

              <Link
                href="#"
                className="flex items-center text-left text-background text-[14px]"
              >
                Kalkulator KTA <ChevronRight size={16} />
              </Link>
            </div>

            <div className="flex flex-col gap-3 col-span-1 mb-2">
              <button className="text-left text-background font-bold text-[20px] mb-1">
                Tarif
              </button>

              <Link
                href="https://www.bankmandiri.co.id/web/guest/tarif-layanan"
                className="flex items-center text-left text-background text-[14px]"
              >
                Tarif Layanan <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
