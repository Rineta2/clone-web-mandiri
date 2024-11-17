"use client";
import React, { useState, useRef, useEffect } from "react";

import { gsap } from "gsap";

import { throttle } from "lodash";

import { navLogo, navLinks } from "@/components/ui/data/layout";

import Image from "next/image";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const timeoutRefs = useRef([]);
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef(null);
  const dropdownRefs = useRef([]);

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (window.scrollY > 200) {
        setIsSticky(true);
        gsap.to(headerRef.current, {
          backgroundColor: "#ffffff",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          duration: 1,
          ease: "power3.out",
        });
      } else {
        setIsSticky(false);
        gsap.to(headerRef.current, {
          backgroundColor: "transparent",
          boxShadow: "none",
          duration: 1,
          ease: "power3.out",
        });
      }
    }, 100);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel();
    };
  }, []);

  const handleMouseEnter = (index) => {
    if (timeoutRefs.current[index]) {
      clearTimeout(timeoutRefs.current[index]);
    }
    setActiveDropdown(index);
    gsap.to(dropdownRefs.current[index], {
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
      pointerEvents: "auto",
    });
    navLinks.forEach((_, idx) => {
      if (idx !== index && dropdownRefs.current[idx]) {
        gsap.to(dropdownRefs.current[idx], {
          opacity: 0,
          y: -20,
          duration: 0.3,
          ease: "power2.in",
          pointerEvents: "none",
        });
      }
    });
  };

  const handleMouseLeave = (index) => {
    timeoutRefs.current[index] = setTimeout(() => {
      setActiveDropdown(null);
      gsap.to(dropdownRefs.current[index], {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power2.in",
        pointerEvents: "none",
      });
    }, 200);
  };

  useEffect(() => {
    const currentTimeouts = timeoutRefs.current;

    return () => {
      navLinks.forEach((_, idx) => {
        if (currentTimeouts[idx]) {
          clearTimeout(currentTimeouts[idx]);
        }
      });
    };
  }, []);

  // Handler untuk menutup mobile menu
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null); // Opsional: Tutup dropdown yang terbuka
  };

  // Handler untuk menutup dropdown pada desktop menu
  const handleDesktopLinkClick = (index) => {
    console.log(`Desktop link clicked for dropdown index: ${index}`);
    setActiveDropdown(null);
    gsap.to(dropdownRefs.current[index], {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: "power2.in",
      pointerEvents: "none",
    });
  };

  return (
    <header
      ref={headerRef}
      className={`py-4 w-full transition-all duration-300 transform ${
        isSticky
          ? "sticky top-0 left-0 z-50 bg-background shadow-md"
          : "relative bg-transparent z-50"
      }`}
      style={{ transition: "transform 0.3s ease-in-out" }}
    >
      <nav className="max-w-[1170px] mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          {navLogo.map((logoItem, index) => (
            <Link href={"/"} key={index}>
              <Image
                src={logoItem.img}
                alt="Logo"
                className="object-contain"
                width={150}
                height={150}
              />
            </Link>
          ))}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={`${activeDropdown === index ? "text-primary" : ""}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
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
            aria-label="Toggle Menu"
            aria-expanded={isMobileMenuOpen}
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

      {/* Dropdown Menus */}
      {navLinks.map(
        (link, index) =>
          link.items && (
            <div
              key={index}
              ref={(el) => (dropdownRefs.current[index] = el)}
              className="absolute left-0 top-full w-full bg-background z-20 opacity-0 pointer-events-none"
              style={{ transform: "translateY(-20px)" }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div className="container mx-auto py-6 px-4 flex flex-wrap">
                <div className="w-full md:w-4/5 grid grid-cols-2 gap-10">
                  <div className="col-span-2">
                    <Link
                      href={link.href}
                      className="text-[22px] flex items-center gap-1 text-primary group"
                      onClick={() => handleDesktopLinkClick(index)}
                    >
                      {link.name}
                      <ChevronRight className="w-6 h-6 transition-transform duration-300 transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                  {link.items.map((subItem, subIndex) => (
                    <div key={subIndex} className="mb-4">
                      <div className="flex flex-col gap-2 box w-full rounded">
                        <Link
                          href={subItem.href}
                          className="flex items-center gap-2 text-[20px] font-semibold group hover:text-primary"
                          onClick={() => handleDesktopLinkClick(index)}
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
                          onClick={() => handleDesktopLinkClick(index)}
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden bg-white border-t">
          {navLinks.map((link, index) => (
            <li key={index} className="border-b">
              <Link
                href={link.href}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex justify-between items-center group"
                onClick={handleLinkClick}
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
                        onClick={handleLinkClick}
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
                            onClick={handleLinkClick}
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
