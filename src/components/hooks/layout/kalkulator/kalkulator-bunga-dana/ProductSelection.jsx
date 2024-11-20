import React from "react";
import Link from "next/link";
import {
  bungaProduk,
  deposito,
} from "@/components/ui/data/kalkulator/suku-bunga/data";

export function ProductSelection() {
  return (
    <section>
      <div className="max-w-[1000px] mx-auto">
        <h3 className="text-2xl font-bold mb-5">Pilih suku bunga produk:</h3>

        <div className="flex flex-wrap gap-4">
          {bungaProduk.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              className="bg-[#18406e] text-white px-4 py-2 text-2xl rounded-md"
            >
              {item.nama}
            </Link>
          ))}
        </div>

        <div className="mb-5 mt-14">
          <h3 className="text-4xl font-bold mb-4">Deposito</h3>
          <p className="text-lg text-gray-500">
            Pilih suku bunga produk deposito :
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          {deposito.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              className="bg-[#18406e] text-white px-4 py-2 text-[1.2rem] rounded-md"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
