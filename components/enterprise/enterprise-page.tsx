"use client";

import { useEffect, useState } from "react";

import {
  domainOptions,
  faqCategories,
  modeOptions,
  navItems,
  observedNavSections,
} from "@/data/site-content";
import type { SectionId } from "@/types/site";

import { EnquiryModal } from "./enquiry-modal";
import { FaqSection } from "./faq-section";
import { Header } from "./header";
import {
  AudienceSection,
  CatSection,
  ClientsSection,
  ClosingCtaSection,
  CourseSegmentationSection,
  DomainSection,
  EdgeSection,
  FooterSection,
  HeroSection,
  HowItWorksSection,
  StatsSection,
  TestimonialsSection,
} from "./sections";

function useActiveSection(sectionIds: readonly SectionId[]) {
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio);

        const topEntry = visibleEntries[0];

        if (topEntry?.target.id) {
          setActiveSection(topEntry.target.id as SectionId);
        }
      },
      {
        threshold: [0.2, 0.45, 0.7],
        rootMargin: "-35% 0px -45% 0px",
      },
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds]);

  return activeSection;
}

export function EnterprisePage() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const activeSection = useActiveSection(observedNavSections);

  return (
    <>
      <Header
        activeSection={activeSection}
        navItems={navItems}
        onEnquire={() => setIsEnquiryOpen(true)}
      />

      <main className="flex-1 pb-4">
        <HeroSection onEnquire={() => setIsEnquiryOpen(true)} />
        <StatsSection />
        <ClientsSection />
        <EdgeSection />
        <DomainSection />
        <CourseSegmentationSection />
        <AudienceSection />
        <CatSection />
        <HowItWorksSection />
        <FaqSection
          categories={faqCategories}
          onEnquire={() => setIsEnquiryOpen(true)}
        />
        <TestimonialsSection />
        <ClosingCtaSection onEnquire={() => setIsEnquiryOpen(true)} />
      </main>

      <FooterSection onEnquire={() => setIsEnquiryOpen(true)} />

      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        domainOptions={domainOptions}
        modeOptions={modeOptions}
      />
    </>
  );
}
