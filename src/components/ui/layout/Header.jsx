"use client";
import React, { useState, useRef } from "react";

import { navLogo, navLinks } from "@/components/ui/data/layout";

import Image from "next/image";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (index) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200); // Delay of 200ms
  };

  return (
    <header className="py-4 relative z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          {navLogo.map((logoItem, index) => (
            <Image
              key={index}
              src={logoItem.img}
              alt="Logo"
              className="h-8"
              width={100}
              height={100}
            />
          ))}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={link.href}
                className="text-text hover:text-primary text-[18px] group flex items-center"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-text hover:text-primary text-[18px] focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Submenu Dropdown */}
      {navLinks.map(
        (link, index) =>
          link.items && (
            <div
              key={index}
              className={`absolute left-0 top-full w-full bg-background z-20 transition-opacity duration-300 ${
                activeDropdown === index
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="container mx-auto py-6 px-4 flex flex-wrap">
                <div className="w-full md:w-4/5 grid grid-cols-2 gap-10">
                  <div className="col-span-2">
                    <Link
                      href={link.href}
                      className="text-[22px] flex items-center gap-1 text-primary group"
                    >
                      {link.title}
                      <ChevronRight className="w-6 h-6 transition-transform duration-300 transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                  {link.items.map((subItem, subIndex) => (
                    <div key={subIndex} className="mb-4">
                      <div className="flex flex-col gap-2 box w-full rounded">
                        <Link
                          href={subItem.href}
                          className="flex items-center gap-2 text-[20px] font-semibold group hover:text-primary"
                        >
                          {subItem.title}
                          <div
                            className={`text-primary transition-transform duration-300 transform ${
                              subItem.animateIcon
                                ? "group-hover:translate-x-1"
                                : ""
                            }`}
                          >
                            {subItem.icons}
                          </div>
                        </Link>

                        <p className="text-[14px] text-gray-400">
                          {subItem.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {link.quickActions && link.quickActions.length > 0 && (
                  <div className="w-full md:w-1/5 flex flex-col gap-2 mt-6 md:mt-0">
                    <h4 className="text-primary text-[22px] font-semibold mb-2">
                      Quick Actions
                    </h4>
                    <div className="flex mt-4 flex-col gap-10">
                      {link.quickActions.map((action, actionIndex) => (
                        <Link
                          key={actionIndex}
                          href={action.href}
                          className="flex items-center gap-2 text-text text-[20px] hover:underline"
                        >
                          {action.icons}
                          {action.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )
      )}

      {isMobileMenuOpen && (
        <ul className="md:hidden bg-white border-t">
          {navLinks.map((link, index) => (
            <li key={index} className="border-b">
              <Link
                href={link.href}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex justify-between items-center group"
              >
                {link.title}
                {link.items && (
                  <ChevronRight className="w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1" />
                )}
              </Link>
              {link.items && link.items.length > 0 && (
                <ul className="pl-6">
                  {link.items.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        href={subItem.href}
                        className="px-4 py-2 text-gray-600 hover:bg-gray-100 text-sm group flex items-center justify-between"
                      >
                        {subItem.title}
                        <ChevronRight className="w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1" />
                      </Link>
                    </li>
                  ))}

                  {link.quickActions && link.quickActions.length > 0 && (
                    <li className="px-4 py-2 border-t">
                      <div className="flex flex-col gap-2">
                        {link.quickActions.map((action, actionIndex) => (
                          <Link
                            key={actionIndex}
                            href={action.href}
                            className="flex items-center gap-2 text-blue-500 hover:underline text-sm"
                          >
                            {action.icons}
                            {action.title}
                          </Link>
                        ))}
                      </div>
                    </li>
                  )}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
