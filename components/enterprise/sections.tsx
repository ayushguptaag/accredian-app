import Image from "next/image";
import {
  BadgeCheck,
  BadgePlus,
  Building2,
  DatabaseZap,
  Landmark,
  Lightbulb,
  Quote,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Waypoints,
} from "lucide-react";

import {
  audience,
  clientLogos,
  courseSegmentation,
  deliverySteps,
  domainExpertise,
  edgeFeatures,
  siteContent,
  stats,
  testimonials,
} from "@/data/site-content";
import type { AudienceItem, DomainIconKey } from "@/types/site";

import { SectionHeading } from "./section-heading";

type ActionProps = {
  onEnquire: () => void;
};

const domainIcons: Record<DomainIconKey, typeof Lightbulb> = {
  lightbulb: Lightbulb,
  sparkles: Sparkles,
  shield: ShieldCheck,
  database: DatabaseZap,
  workflow: Waypoints,
  building: Building2,
  landmark: Landmark,
};

const audienceIcons = [BadgePlus, UsersRound, Sparkles, ShieldCheck];

export function HeroSection({ onEnquire }: ActionProps) {
  return (
    <section
      id={siteContent.hero.id}
      className="section-anchor px-4 pt-28 pb-14 sm:px-6 lg:px-8 lg:pt-32"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="surface-panel brand-spotlight overflow-hidden rounded-[36px] px-6 py-8 sm:px-8 lg:px-12 lg:py-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="relative z-10 max-w-2xl">
              <p className="reveal-up text-sm font-semibold uppercase tracking-[0.22em] text-brand">
                Enterprise Learning Solutions
              </p>

              <h1 className="reveal-up mt-5 font-display text-5xl font-semibold leading-none tracking-tight text-ink sm:text-6xl lg:text-[5.25rem]">
                <span className="block">{siteContent.hero.titlePrimary}</span>
                <span className="mt-2 block text-brand">
                  {siteContent.hero.titleSecondary}
                </span>
              </h1>

              <p className="reveal-up mt-6 max-w-xl text-lg leading-8 text-muted sm:text-2xl">
                {siteContent.hero.subtitle}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {siteContent.hero.badges.map((badge, index) => (
                  <div
                    key={badge}
                    className="reveal-up inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-ink"
                    style={{ animationDelay: `${index * 90}ms` }}
                  >
                    <BadgeCheck className="h-4 w-4 text-success" />
                    {badge}
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={onEnquire}
                className="reveal-up mt-10 inline-flex items-center justify-center rounded-full bg-brand px-7 py-4 text-base font-semibold text-white shadow-[0_18px_34px_rgba(36,115,234,0.24)] hover:-translate-y-0.5 hover:bg-brand-deep"
              >
                {siteContent.hero.ctaLabel}
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-x-8 inset-y-12 rounded-full bg-brand/18 blur-3xl" />
              <Image
                src={siteContent.hero.image.src}
                alt={siteContent.hero.image.alt}
                width={siteContent.hero.image.width}
                height={siteContent.hero.image.height}
                priority
                className="relative ml-auto h-auto w-full max-w-[40rem] drop-shadow-[0_22px_44px_rgba(17,24,39,0.18)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function StatsSection() {
  return (
    <section id={siteContent.stats.id} className="section-anchor px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <SectionHeading
          eyebrow={siteContent.stats.eyebrow}
          title={
            <>
              The Numbers Behind{" "}
              <span className="text-brand">Our Success</span>
            </>
          }
          description="A growing enterprise learning footprint built around measurable outcomes."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat, index) => (
            <article
              key={stat.label}
              className="card-panel reveal-up rounded-[28px] px-6 py-7"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <p className="font-display text-4xl font-semibold text-brand sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-4 max-w-xs text-base leading-7 text-muted">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ClientsSection() {
  return (
    <section id={siteContent.clients.id} className="section-anchor px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <SectionHeading
          eyebrow={siteContent.clients.eyebrow}
          title={
            <>
              Successful Collaborations with{" "}
              <span className="text-brand">the Industry&apos;s Best</span>
            </>
          }
          description={siteContent.clients.description}
        />

        <div className="surface-panel rounded-[32px] px-6 py-8 sm:px-8">
          <div className="grid items-center justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {clientLogos.map((logo, index) => (
              <div
                key={logo.alt}
                className="reveal-up flex h-20 w-full items-center justify-center rounded-3xl border border-line/70 bg-white px-4 grayscale transition duration-300 hover:-translate-y-0.5 hover:grayscale-0"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="h-auto w-auto max-h-10"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function EdgeSection() {
  return (
    <section
      id={siteContent.edge.id}
      className="section-anchor px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div className="surface-panel overflow-hidden rounded-[34px] px-6 py-8 sm:px-8">
          <SectionHeading
            eyebrow={siteContent.edge.eyebrow}
            title={
              <>
                Key Aspects of Our{" "}
                <span className="text-brand">Strategic Training</span>
              </>
            }
            description={siteContent.edge.description}
            align="left"
          />

          <div className="brand-gradient mt-8 overflow-hidden rounded-[28px] p-4 sm:p-6">
            <Image
              src={siteContent.edge.image.src}
              alt={siteContent.edge.image.alt}
              width={siteContent.edge.image.width}
              height={siteContent.edge.image.height}
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {edgeFeatures.map((feature, index) => (
            <article
              key={feature.title}
              className="card-panel reveal-up rounded-[28px] px-6 py-6"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                <BadgeCheck className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
                {feature.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-muted">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DomainSection() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <SectionHeading
          eyebrow="Our Domain Expertise"
          title={
            <>
              Specialized Programs Designed to{" "}
              <span className="text-brand">Fuel Innovation</span>
            </>
          }
          description="Focused pathways across leadership, tech, operations, digital transformation, and fintech."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {domainExpertise.map((domain, index) => {
            const Icon = domainIcons[domain.icon];

            return (
              <article
                key={domain.title}
                className="card-panel reveal-up rounded-[28px] px-6 py-6"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
                  {domain.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-muted">
                  {domain.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CourseSegmentationSection() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <SectionHeading
          eyebrow={siteContent.courseSegmentation.eyebrow}
          title={
            <>
              Explore Custom-Fit Courses for{" "}
              <span className="text-brand">Every Professional Focus</span>
            </>
          }
          description={siteContent.courseSegmentation.description}
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {courseSegmentation.map((segment, index) => (
            <article
              key={segment.title}
              className="card-panel reveal-up overflow-hidden rounded-[30px]"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <div className="grid gap-0 sm:grid-cols-[0.88fr_1.12fr]">
                <div className="relative min-h-56">
                  <Image
                    src={segment.image}
                    alt={segment.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 sm:p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
                    Tailored Tracks
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-ink">
                    {segment.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-muted">
                    {segment.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AudienceCard({ item, index }: { item: AudienceItem; index: number }) {
  const Icon = audienceIcons[index] ?? Sparkles;

  return (
    <article className="rounded-[28px] border border-white/18 bg-white/8 px-5 py-5 backdrop-blur-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/16 text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 font-display text-2xl font-semibold text-white">
        {item.title}
      </h3>
      <p className="mt-3 text-base leading-7 text-white/78">{item.description}</p>
    </article>
  );
}

export function AudienceSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#226be3_0%,#174fb4_100%)] px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
              {siteContent.audience.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {siteContent.audience.title}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/78">
              Program pathways are intentionally shaped for varied experience
              bands, from first-time practitioners to leadership teams.
            </p>

            <div className="mt-8 hidden max-w-sm lg:block">
              <Image
                src={siteContent.audience.image.src}
                alt={siteContent.audience.image.alt}
                width={siteContent.audience.image.width}
                height={siteContent.audience.image.height}
                className="h-auto w-full"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {audience.map((item, index) => (
              <AudienceCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CatSection() {
  return (
    <section id={siteContent.cat.id} className="section-anchor px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <SectionHeading
          eyebrow={siteContent.cat.eyebrow}
          title={
            <>
              Our Proven Approach to{" "}
              <span className="text-brand">Learning Excellence</span>
            </>
          }
          description={siteContent.cat.description}
        />

        <div className="surface-panel brand-gradient overflow-hidden rounded-[34px] px-6 py-6 sm:px-8 sm:py-8">
          <Image
            src={siteContent.cat.image.src}
            alt={siteContent.cat.image.alt}
            width={siteContent.cat.image.width}
            height={siteContent.cat.image.height}
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}

export function HowItWorksSection() {
  return (
    <section
      id={siteContent.howItWorks.id}
      className="section-anchor px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <SectionHeading
          eyebrow={siteContent.howItWorks.eyebrow}
          title={
            <>
              A Structured Three-Step{" "}
              <span className="text-brand">Delivery Approach</span>
            </>
          }
          description={siteContent.howItWorks.description}
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {deliverySteps.map((step, index) => (
            <article
              key={step.step}
              className="card-panel reveal-up rounded-[30px] px-6 py-7"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 font-display text-2xl font-semibold text-brand">
                {step.step}
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-muted">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section
      id={siteContent.testimonials.id}
      className="section-anchor px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <SectionHeading
          eyebrow={siteContent.testimonials.eyebrow}
          title={
            <>
              What Our Clients Are Saying{" "}
              <span className="text-brand">About the Delivery</span>
            </>
          }
          description={siteContent.testimonials.description}
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.company}
              className="card-panel reveal-up flex h-full flex-col justify-between rounded-[30px] px-6 py-6"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                  <Quote className="h-6 w-6" />
                </div>
                <p className="mt-5 text-base leading-8 text-muted">
                  {testimonial.quote}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-4 border-t border-line pt-5">
                <Image
                  src={testimonial.companyLogo}
                  alt={`${testimonial.company} logo`}
                  width={92}
                  height={42}
                  className="h-auto w-auto max-h-8"
                />
                <div>
                  <p className="font-semibold text-ink">{testimonial.company}</p>
                  <p className="text-sm text-muted">Enterprise partner</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ClosingCtaSection({ onEnquire }: ActionProps) {
  return (
    <section className="px-4 py-6 pb-16 sm:px-6 lg:px-8 lg:pb-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#0f172a_0%,#1d4ed8_100%)] px-6 py-10 sm:px-8 lg:px-10 lg:py-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
                Let&apos;s Design the Right Program
              </p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {siteContent.closingCta.title}
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/78">
                {siteContent.closingCta.description}
              </p>
            </div>

            <button
              type="button"
              onClick={onEnquire}
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-base font-semibold text-brand shadow-[0_18px_34px_rgba(15,23,42,0.2)] hover:-translate-y-0.5 hover:bg-slate-100"
            >
              {siteContent.closingCta.label}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FooterSection({ onEnquire }: ActionProps) {
  return (
    <footer className="border-t border-white/10 bg-[#101828] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <div className="flex flex-col gap-6 rounded-[32px] border border-white/10 bg-white/5 px-6 py-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">
              Enterprise Enquiries
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white">
              {siteContent.footer.supportLabel}
            </h2>
          </div>
          <button
            type="button"
            onClick={onEnquire}
            className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-4 text-base font-semibold text-white shadow-[0_18px_34px_rgba(36,115,234,0.24)] hover:-translate-y-0.5 hover:bg-brand-deep"
          >
            {siteContent.footer.ctaLabel}
          </button>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Image
              src={siteContent.brand.logo.src}
              alt={siteContent.brand.logo.alt}
              width={siteContent.brand.logo.width}
              height={siteContent.brand.logo.height}
              className="h-auto w-36 brightness-[1.8] contrast-[1.05]"
            />
            <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
              Enterprise-focused upskilling programs built for modern teams,
              measurable progress, and flexible delivery.
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-white">
              Accredian
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="https://accredian.com/About"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-white/70 hover:text-white"
              >
                About
              </a>
              <a
                href="https://blog.accredian.com/"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-white/70 hover:text-white"
              >
                Blog
              </a>
              <a
                href="https://accredian.com/whyaccredian"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-white/70 hover:text-white"
              >
                Why Accredian
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-white">
              Contact Us
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="mailto:enterprise@accredian.com"
                className="text-sm text-white/70 hover:text-white"
              >
                enterprise@accredian.com
              </a>
              <a
                href="https://maps.google.com/?q=Udyog+Vihar+Sector+18+Gurugram+Haryana"
                target="_blank"
                rel="noreferrer"
                className="max-w-sm text-sm leading-7 text-white/70 hover:text-white"
              >
                4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram,
                Haryana
              </a>
            </div>
          </div>
        </div>

        <p className="border-t border-white/10 pt-6 text-sm text-white/45">
          {siteContent.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
