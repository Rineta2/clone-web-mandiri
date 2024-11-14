import { Calculator, ChevronRight } from "lucide-react";

export default function CalculatorMenu({ isOpen, onClick }) {
  return (
    <div className="relative group">
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
        <div className="absolute top-[40px] left-0  bg-primaryLg shadow-lg rounded-lg py-11 px-10 w-[400px] z-10 overflow-hidden animate-slide-up">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-3 col-span-1 mb-2">
              <button className="text-left text-background font-bold text-[20px] mb-1">
                Suku Bunga
              </button>

              <button className="flex items-center text-left text-background text-[14px] mb-1">
                Suku Bunga Dana <ChevronRight size={16} />
              </button>

              <button className="text-left text-background text-[14px]">
                Suku Bunga Dasar
              </button>

              <button className="flex items-center text-left text-background text-[14px]">
                Kredit <ChevronRight size={16} />
              </button>

              <button className="flex items-center text-left text-background text-[14px]">
                Kurs <ChevronRight size={16} />
              </button>
            </div>

            <div className="flex flex-col gap-3 col-span-1 mb-2">
              <button className="text-left text-background font-bold text-[20px] mb-1">
                Kalkulator
              </button>

              <button className="flex items-center text-left text-background text-[14px] mb-1">
                Kalkulator Finansial <ChevronRight size={16} />
              </button>

              <button className="flex items-center text-left text-background text-[14px]">
                Kalkulator KPR <ChevronRight size={16} />
              </button>

              <button className="flex items-center text-left text-background text-[14px]">
                Kalkulator KTA <ChevronRight size={16} />
              </button>
            </div>

            <div className="flex flex-col gap-3 col-span-1 mb-2">
              <button className="text-left text-background font-bold text-[20px] mb-1">
                Tarif
              </button>

              <button className="flex items-center text-left text-background text-[14px]">
                Tarif Layanan <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
