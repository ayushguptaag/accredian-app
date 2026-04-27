"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { siteContent } from "@/data/site-content";
import type { NavItem, SectionId } from "@/types/site";

type HeaderProps = {
  activeSection: SectionId;
  navItems: NavItem[];
  onEnquire: () => void;
};

export function Header({ activeSection, navItems, onEnquire }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line/70 bg-white/88 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="flex items-center gap-3"
          aria-label="Accredian home"
        >
          <Image
            src={siteContent.brand.logo.src}
            alt={siteContent.brand.logo.alt}
            width={siteContent.brand.logo.width}
            height={siteContent.brand.logo.height}
            priority
            className="h-auto w-32 min-w-32 object-contain sm:w-36 sm:min-w-36"
          />
          <span className="font-display text-sm font-semibold tracking-wide text-brand lg:hidden">
            Accredian
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative pb-1 text-sm font-semibold ${
                  isActive ? "text-brand" : "text-ink hover:text-brand"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-brand transition-opacity ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={onEnquire}
            className="rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(36,115,234,0.24)] hover:-translate-y-0.5 hover:bg-brand-deep"
          >
            Enquire Now
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="rounded-full border border-brand/25 bg-white p-3 text-brand shadow-sm lg:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div
          id="mobile-navigation"
          className="border-t border-line bg-white px-4 py-4 shadow-[0_18px_40px_rgba(17,24,39,0.08)] lg:hidden"
        >
          <nav className="flex flex-col gap-2" aria-label="Mobile primary">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm font-semibold ${
                    isActive
                      ? "bg-brand/10 text-brand"
                      : "text-ink hover:bg-surface-soft"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={() => {
              setIsOpen(false);
              onEnquire();
            }}
            className="mt-4 w-full rounded-2xl bg-brand px-5 py-3 text-sm font-semibold text-white"
          >
            Enquire Now
          </button>
        </div>
      ) : null}
    </header>
  );
}
