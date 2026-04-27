export const sectionIds = [
  "home",
  "stats",
  "clients",
  "accredian-edge",
  "cat",
  "how-it-works",
  "faqs",
  "testimonials",
] as const;

export type SectionId = (typeof sectionIds)[number];

export const deliveryModes = ["Online", "Offline"] as const;

export type DeliveryMode = (typeof deliveryModes)[number];

export interface NavItem {
  id: SectionId;
  label: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface LogoItem {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface EdgeFeature {
  title: string;
  description: string;
}

export type DomainIconKey =
  | "lightbulb"
  | "sparkles"
  | "shield"
  | "database"
  | "workflow"
  | "building"
  | "landmark";

export interface DomainItem {
  title: string;
  description: string;
  icon: DomainIconKey;
}

export interface SegmentationItem {
  title: string;
  description: string;
  image: string;
}

export interface AudienceItem {
  title: string;
  description: string;
}

export interface StepItem {
  step: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  title: string;
  items: FaqItem[];
}

export interface Testimonial {
  quote: string;
  company: string;
  companyLogo: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface SelectOption<T extends string = string> {
  label: string;
  value: T;
}

export interface EnquiryPayload {
  name: string;
  email: string;
  phone: string;
  company: string;
  courseDomain: string;
  candidates: number;
  mode: DeliveryMode;
  location: string;
}

export interface EnquiryFormValues
  extends Omit<EnquiryPayload, "mode"> {
  mode: DeliveryMode | "";
}

export type EnquiryField = keyof EnquiryPayload;

export type EnquiryResponse =
  | {
      ok: true;
      id: string;
      message: string;
    }
  | {
      ok: false;
      message: string;
      fieldErrors?: Partial<Record<EnquiryField, string>>;
    };
