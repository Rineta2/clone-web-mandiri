import React from "react";

import Link from "next/link";

export default function Toolbar() {
  return (
    <div className="absolute top-4 left-[20.8%] flex items-center gap-2">
      <Link href="/" className="text-background text-[18px]">
        Home
      </Link>
      <div className="text-background text-[20px]"> / </div>
      <span className="text-background text-[16px]">Bantuan</span>
    </div>
  );
}
