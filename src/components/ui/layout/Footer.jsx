import React, { Fragment } from "react";

import Pusat from "@/components/hooks/layout/footer/Pusat";

import Contact from "@/components/hooks/layout/footer/Contact";

export default function Footer() {
  return (
    <Fragment>
      <footer className="p-12 mt-20">
        <div className="container px-12 mx-auto">
          <div className="flex gap-20">
            <Pusat />

            <Contact />
          </div>
        </div>
      </footer>

      <div className="bg-primary px-4 text-center py-4">
        <p className="mt-2 text-[16px] text-background">
          © 2024 PT Bank Mandiri (Persero) Tbk.
        </p>
      </div>
    </Fragment>
  );
}
