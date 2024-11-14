import { LockKeyhole, ChevronDown } from "lucide-react";

export default function LoginMenu({ isOpen, onClick }) {
  return (
    <div className="relative">
      <div
        onClick={onClick}
        className="flex items-center gap-2 cursor-pointer text-foreground ml-5 h-20 fixed top-0 right-64 bg-secondary px-4 rounded-b-lg hover:bg-secondary/90 transition-colors"
      >
        <LockKeyhole aria-hidden="true" />
        <span>Login</span>
        <ChevronDown
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </div>

      {isOpen && (
        <div className="absolute top-10 left-[-30px] bg-background border-b border-secondary shadow-lg rounded-lg py-4 px-6 w-[250px] z-10 overflow-hidden origin-bottom animate-scale-up">
          <div className="flex flex-col gap-3">
            <button className="text-left text-foreground hover:text-primary transition-colors py-2">
              Livin
            </button>
            <button className="text-left text-foreground hover:text-primary transition-colors py-2">
              Business
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
