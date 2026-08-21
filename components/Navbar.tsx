"use client";

import { useState } from "react";
import { Container } from "./ui/Container";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "О нас", href: "#about" },
    { label: "Услуги", href: "#services" },
    { label: "Галерея", href: "#gallery" },
    { label: "Контакты", href: "#contacts" },
  ];

  return (
    <header className="py-6 bg-[#F7F5F1]">
      <Container>
        <nav className="flex items-center justify-between">
          {/* Логотип */}
          <a href="#" className="flex flex-col leading-none">
            <span className="text-lg font-semibold tracking-wide text-[#1C1C1C]">
              GRACE
            </span>
            <span className="text-[10px] tracking-[0.3em] text-[#6D6D6D] uppercase">
              Art Place
            </span>
          </a>

          {/* Десктоп навигация */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#6D6D6D] hover:text-[#1C1C1C] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Бургер */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Меню"
          >
            <span
              className={`block w-6 h-0.5 bg-[#1C1C1C] transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#1C1C1C] transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#1C1C1C] transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </nav>

        {/* Мобильное меню */}
        {isOpen && (
          <div className="md:hidden mt-6 pb-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base text-[#6D6D6D] hover:text-[#1C1C1C] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </Container>
    </header>
  );
}