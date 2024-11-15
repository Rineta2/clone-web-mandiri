import React from "react";

import { contactUs } from "@/components/ui/data/Footer";

import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-[20px] text-primary mb-4">Hubungi Kami</h1>
      {contactUs.map((item) => {
        return (
          <ol key={item.id}>
            <li>
              <Link
                href={item.path}
                className="text-[16px] text-gray-500 flex gap-4 items-center"
              >
                {item.icons}
                {item.name}
              </Link>
            </li>
          </ol>
        );
      })}
    </div>
  );
}
