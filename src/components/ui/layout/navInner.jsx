"use client";

import React, { useState } from "react";

import LanguageSwitcher from "@/components/hooks/layout/LanguageSwitcher";

import SearchBar from "@/components/hooks/layout/SearchBar";

import CalculatorMenu from "@/components/hooks/layout/CalculatorMenu";

import LocationMenu from "@/components/hooks/layout/LocationMenu";

import ContactMenu from "@/components/hooks/layout/ContactMenu";

import LoginMenu from "@/components/hooks/layout/LoginMenu";

export default function NavInner() {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const isMenuOpen = (menu) => activeMenu === menu;

  return (
    <nav className="relative flex justify-between items-center gap-4 px-6 max-w-[1170px] py-2 mx-auto w-full">
      <LanguageSwitcher />
      <SearchBar placeholder="Search" />

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-6">
          <CalculatorMenu
            isOpen={isMenuOpen("calc")}
            onClick={() => handleMenuClick("calc")}
          />
          <LocationMenu
            isOpen={isMenuOpen("location")}
            onClick={() => handleMenuClick("location")}
          />

          <ContactMenu
            isOpen={isMenuOpen("contact")}
            onClick={() => handleMenuClick("contact")}
          />
        </div>

        <LoginMenu
          isOpen={isMenuOpen("login")}
          onClick={() => handleMenuClick("login")}
        />
      </div>
    </nav>
  );
}
