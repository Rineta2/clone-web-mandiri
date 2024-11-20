"use client";

import Link from "next/link";

export default function LanguageSwitcher() {
  return (
    <div className="flex gap-3 relative">
      <button
        className={`text-primary hover:text-primary/80 transition-colors`}
      >
        ID
      </button>
      <div className="absolute top-1 left-8 w-[1px] h-4 bg-foreground opacity-80"></div>
      <button
        className={`text-primary hover:text-primary/80 transition-colors`}
      >
        EN
      </button>
    </div>
  );
}
