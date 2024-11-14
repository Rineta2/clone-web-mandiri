import { MapPin, ChevronRight } from "lucide-react";

export default function LocationMenu({ isOpen, onClick }) {
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
          <MapPin />
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-[40px] left-0 bg-primaryLg shadow-lg rounded-lg py-6 px-8 w-[250px] z-10 overflow-hidden animate-slide-up">
          <div className="flex flex-col gap-3">
            <button className="flex items-center text-left text-background text-[14px] hover:opacity-80">
              ATM <ChevronRight size={16} />
            </button>
            <button className="flex items-center text-left text-background text-[14px] hover:opacity-80">
              Branch <ChevronRight size={16} />
            </button>
            <button className="flex items-center text-left text-background text-[14px] hover:opacity-80">
              Merchant <ChevronRight size={16} />
            </button>
            <button className="flex items-center text-left text-background text-[14px] hover:opacity-80">
              Micro <ChevronRight size={16} />
            </button>
            <button className="flex items-center text-left text-background text-[14px] hover:opacity-80">
              Weekend <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}