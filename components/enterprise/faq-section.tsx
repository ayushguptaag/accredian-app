"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { siteContent } from "@/data/site-content";
import type { FaqCategory } from "@/types/site";

import { SectionHeading } from "./section-heading";

type FaqSectionProps = {
  categories: FaqCategory[];
  onEnquire: () => void;
};

export function FaqSection({ categories, onEnquire }: FaqSectionProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.title ?? "");
  const currentCategory =
    categories.find((category) => category.title === activeCategory) ?? categories[0];
  const [openQuestion, setOpenQuestion] = useState(
    currentCategory?.items[0]?.question ?? "",
  );

  if (!currentCategory) {
    return null;
  }

  return (
    <section
      id={siteContent.faqs.id}
      className="section-anchor px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow={siteContent.faqs.eyebrow}
            title={
              <>
                Answers for Every{" "}
                <span className="text-brand">Enterprise Decision</span>
              </>
            }
            description="Browse course, delivery, and onboarding questions before scheduling a consultation."
            align="left"
          />

          <button
            type="button"
            onClick={onEnquire}
            className="inline-flex w-full items-center justify-center rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(36,115,234,0.24)] hover:-translate-y-0.5 hover:bg-brand-deep sm:w-auto"
          >
            {siteContent.faqs.ctaLabel}
          </button>
        </div>

        <div className="surface-panel overflow-hidden rounded-[32px] p-4 sm:p-6">
          <div className="grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)]">
            <div className="grid gap-3">
              {categories.map((category) => {
                const isActive = category.title === currentCategory.title;

                return (
                  <button
                    key={category.title}
                    type="button"
                    onClick={() => {
                      setActiveCategory(category.title);
                      setOpenQuestion(category.items[0]?.question ?? "");
                    }}
                    className={`rounded-3xl border px-5 py-4 text-left ${
                      isActive
                        ? "border-brand/20 bg-brand/8 text-brand"
                        : "border-line bg-white text-ink hover:border-brand/25 hover:bg-surface-soft"
                    }`}
                  >
                    <p className="font-semibold">{category.title}</p>
                    <p className="mt-1 text-sm text-muted">
                      {category.items.length} common questions
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="grid gap-4">
              {currentCategory.items.map((item) => {
                const isOpen = openQuestion === item.question;

                return (
                  <article
                    key={item.question}
                    className="rounded-[28px] border border-line bg-white px-5 py-4 shadow-[0_12px_32px_rgba(17,24,39,0.04)]"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenQuestion((current) =>
                          current === item.question ? "" : item.question,
                        )
                      }
                      className="flex w-full items-start justify-between gap-4 text-left"
                    >
                      <span className="font-semibold text-ink">{item.question}</span>
                      <ChevronDown
                        className={`mt-0.5 h-5 w-5 shrink-0 text-brand transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isOpen ? (
                      <p className="mt-4 max-w-3xl text-sm leading-7 text-muted sm:text-base">
                        {item.answer}
                      </p>
                    ) : null}
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
