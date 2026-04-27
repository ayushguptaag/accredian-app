import type {
  AudienceItem,
  DeliveryMode,
  DomainItem,
  EdgeFeature,
  FaqCategory,
  LogoItem,
  NavItem,
  SectionId,
  SegmentationItem,
  SelectOption,
  StatItem,
  StepItem,
  Testimonial,
} from "@/types/site";

const brandLogo = "/accredian-logo.webp";

const heroImage =
  "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/corporate-big-hero-v4.webp";

const edgeGraphicDesktop =
  "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/accredian-edge-usp-v3.svg";

const catGraphic =
  "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/catV2.svg";

const audienceGraphic =
  "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/imagehuman.png";

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "stats", label: "Stats" },
  { id: "clients", label: "Clients" },
  { id: "accredian-edge", label: "Accredian Edge" },
  { id: "cat", label: "CAT" },
  { id: "how-it-works", label: "How It Works" },
  { id: "faqs", label: "FAQs" },
  { id: "testimonials", label: "Testimonials" },
];

export const stats: StatItem[] = [
  {
    value: "10K+",
    label: "Professionals trained for exceptional career success",
  },
  {
    value: "200+",
    label: "Sessions delivered with unmatched learning excellence",
  },
  {
    value: "5K+",
    label: "Active learners engaged in dynamic courses",
  },
];

export const clientLogos: LogoItem[] = [
  {
    src: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/rel.png",
    alt: "Reliance logo",
    width: 160,
    height: 64,
  },
  {
    src: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/hcl.png",
    alt: "HCL logo",
    width: 140,
    height: 64,
  },
  {
    src: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/ibm.png",
    alt: "IBM logo",
    width: 136,
    height: 56,
  },
  {
    src: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/crif.png",
    alt: "CRIF logo",
    width: 120,
    height: 60,
  },
  {
    src: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/adp.svg",
    alt: "ADP logo",
    width: 124,
    height: 56,
  },
  {
    src: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/bayer.svg",
    alt: "Bayer logo",
    width: 120,
    height: 56,
  },
];

export const edgeFeatures: EdgeFeature[] = [
  {
    title: "Tailored Program Design",
    description:
      "Learning journeys are aligned to business outcomes, capability gaps, and team maturity.",
  },
  {
    title: "Expert-Led Delivery",
    description:
      "Every module is shaped by mentors and practitioners who bring live industry context into the room.",
  },
  {
    title: "Flexible Enterprise Formats",
    description:
      "Programs can be delivered online, offline, or in blended cohorts without losing continuity.",
  },
  {
    title: "Measurable Skill Progress",
    description:
      "Structured checkpoints and reporting keep stakeholders aligned on adoption and outcomes.",
  },
];

export const domainExpertise: DomainItem[] = [
  {
    title: "Product & Innovation Hub",
    description:
      "Driving creativity, product excellence, and innovation strategies.",
    icon: "lightbulb",
  },
  {
    title: "Gen-AI Mastery",
    description:
      "Comprehensive training on harnessing Generative AI for business transformation.",
    icon: "sparkles",
  },
  {
    title: "Leadership Elevation",
    description:
      "Programs designed to build strong, visionary, and impactful leaders.",
    icon: "shield",
  },
  {
    title: "Tech & Data Insights",
    description:
      "Training in cutting-edge technologies, data analytics, and digital tools.",
    icon: "database",
  },
  {
    title: "Operations Excellence",
    description:
      "Enhancing efficiency, process optimization, and operational leadership.",
    icon: "workflow",
  },
  {
    title: "Digital Enterprise",
    description:
      "Empowering professionals in a fast-paced digital business environment.",
    icon: "building",
  },
  {
    title: "Fintech Innovation Lab",
    description:
      "Specializing in emerging trends and technologies in the financial sector.",
    icon: "landmark",
  },
];

export const courseSegmentation: SegmentationItem[] = [
  {
    title: "Program Specific",
    description: "Certificate, Executive, Post Graduate Certificate",
    image:
      "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/project-management-v2.webp",
  },
  {
    title: "Industry Specific",
    description: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
    image:
      "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/digital-transformation-v2.webp",
  },
  {
    title: "Topic Specific",
    description: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
    image:
      "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/data-science-v2.webp",
  },
  {
    title: "Level Specific",
    description: "Senior Leadership, Mid-Career Professionals, Freshers",
    image:
      "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/senior-management-v2.webp",
  },
];

export const audience: AudienceItem[] = [
  {
    title: "Tech Professionals",
    description: "Enhance expertise, embrace tech, drive innovation.",
  },
  {
    title: "Non-Tech Professionals",
    description: "Adapt digitally, collaborate in tech environments.",
  },
  {
    title: "Emerging Professionals",
    description: "Develop powerful skills for rapid career growth.",
  },
  {
    title: "Senior Professionals",
    description: "Strengthen leadership, enhance strategic decisions.",
  },
];

export const deliverySteps: StepItem[] = [
  {
    step: "1",
    title: "Skill Gap Analysis",
    description: "Assess team skill gaps and developmental needs.",
  },
  {
    step: "2",
    title: "Customized Training Plan",
    description:
      "Create a tailored roadmap addressing organizational goals.",
  },
  {
    step: "3",
    title: "Flexible Program Delivery",
    description:
      "Deliver adaptable programs aligned with industry and organizational needs.",
  },
];

export const faqCategories: FaqCategory[] = [
  {
    title: "About the Course",
    items: [
      {
        question: "What types of corporate training programs does Accredian offer?",
        answer:
          "Accredian provides industry-specific, customizable training programs tailored to meet your organization's unique needs, covering domains like leadership, tech, data, and fintech.",
      },
      {
        question: "What domain specializations are available?",
        answer:
          "We offer expertise in various domains, including Leadership Development, Tech & Data, Fintech, Digital Business, Product Innovation, Operations Management, and Generative AI.",
      },
    ],
  },
  {
    title: "About the Delivery",
    items: [
      {
        question:
          "Can the courses be customized for specific industries or teams?",
        answer:
          "Absolutely. Programs can be customized across content, format, timing, and industry-specific focus to align with your organization's goals.",
      },
      {
        question: "Who are the instructors for these programs?",
        answer:
          "Courses are delivered by industry leaders, experienced mentors, and domain experts with real-world insights.",
      },
      {
        question: "What formats are the programs delivered in?",
        answer:
          "Programs can be delivered in online, offline, hybrid, and on-demand formats based on your team's preferences and requirements.",
      },
    ],
  },
  {
    title: "Miscellaneous",
    items: [
      {
        question: "What is the ideal team size for corporate training?",
        answer:
          "Programs are flexible and can cater to teams of any size, from small groups to large organizational cohorts.",
      },
      {
        question: "How do we get started with Accredian?",
        answer:
          "Get started by reaching out for a consultation or quote. The team guides you from skill gap analysis through to a custom program proposal.",
      },
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
    company: "ADP",
    companyLogo:
      "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/adp.svg",
  },
  {
    quote:
      "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
    company: "Bayer",
    companyLogo:
      "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/bayer.svg",
  },
  {
    quote:
      "Choosing Accredian for the learning and development of our employees was a beneficial decision. The value derived from the course is immense, and their support team is always there to help our employees.",
    company: "Reliance",
    companyLogo:
      "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/rel.png",
  },
];

export const domainOptions: SelectOption[] = [
  { value: "product management", label: "Product Management" },
  { value: "CFO", label: "CFO" },
  { value: "data science", label: "Data Science" },
  { value: "artificial intelligence", label: "Artificial Intelligence" },
  { value: "Human Resource", label: "Human Resource" },
  { value: "strategy & leadership", label: "Strategy & Leadership" },
  { value: "General Management", label: "General Management" },
  { value: "digital Transformation", label: "Digital Transformation" },
  { value: "business management", label: "Business Management" },
  { value: "finance", label: "Finance" },
  { value: "project management", label: "Project Management" },
  { value: "senior management", label: "Senior Management" },
  { value: "cybersecurity", label: "Cybersecurity" },
];

export const modeOptions: SelectOption<DeliveryMode>[] = [
  { value: "Online", label: "Online" },
  { value: "Offline", label: "Offline" },
];

export const siteContent = {
  brand: {
    name: "Accredian",
    tagline: "credentials that matter",
    logo: {
      src: brandLogo,
      alt: "Accredian logo",
      width: 164,
      height: 52,
    },
  },
  hero: {
    id: "home" as const,
    titlePrimary: "Next-Gen Expertise",
    titleSecondary: "For Your Enterprise",
    subtitle:
      "Cultivate high-performance teams through expert learning.",
    badges: ["Tailored Solutions", "Industry Insights", "Expert Guidance"],
    ctaLabel: "Enquire Now",
    image: {
      src: heroImage,
      alt: "Two corporate professionals representing Accredian enterprise learning",
      width: 860,
      height: 720,
    },
  },
  stats: {
    id: "stats" as const,
    eyebrow: "Our Track Record",
    description: "The numbers behind our success",
  },
  clients: {
    id: "clients" as const,
    eyebrow: "Our Proven Partnerships",
    description: "Successful collaborations with the industry's best",
  },
  edge: {
    id: "accredian-edge" as const,
    eyebrow: "The Accredian Edge",
    description: "Key aspects of our strategic training approach",
    image: {
      src: edgeGraphicDesktop,
      alt: "Illustration of Accredian's enterprise training advantages",
      width: 720,
      height: 500,
    },
  },
  courseSegmentation: {
    eyebrow: "Tailored Course Segmentation",
    description:
      "Explore custom-fit courses designed to address every professional focus",
  },
  audience: {
    eyebrow: "Who Should Join?",
    title: "Strategic Skill Enhancement",
    image: {
      src: audienceGraphic,
      alt: "Illustrated mentor representing Accredian enterprise learners",
      width: 420,
      height: 420,
    },
  },
  cat: {
    id: "cat" as const,
    eyebrow: "The CAT Framework",
    description: "Our proven approach to learning excellence",
    image: {
      src: catGraphic,
      alt: "CAT framework diagram",
      width: 1100,
      height: 540,
    },
  },
  howItWorks: {
    id: "how-it-works" as const,
    eyebrow: "How We Deliver Results That Matter",
    description: "A structured three-step approach to skill development",
  },
  faqs: {
    id: "faqs" as const,
    eyebrow: "Frequently Asked Questions",
    ctaLabel: "Enquire Now",
  },
  testimonials: {
    id: "testimonials" as const,
    eyebrow: "Testimonials from Our Partners",
    description: "What our clients are saying",
  },
  closingCta: {
    title: "Want to Learn More About Our Training Solutions?",
    description: "Get expert guidance for your team's success.",
    label: "Contact Us",
  },
  footer: {
    ctaLabel: "Enquire Now",
    supportLabel: "Speak with our Advisor",
    copyright:
      "(c) 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved",
  },
};

export const observedNavSections: SectionId[] = navItems.map((item) => item.id);
