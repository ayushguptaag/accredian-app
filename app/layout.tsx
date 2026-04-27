import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Accredian Enterprise",
  description:
    "A responsive Next.js rebuild of the Accredian Enterprise landing page with a mock enquiry flow.",
  metadataBase: new URL("https://accredian-enterprise-page-two.vercel.app"),
  openGraph: {
    title: "Accredian Enterprise",
    description:
      "Enterprise learning landing page clone built with Next.js, reusable components, and mock enquiry API.",
    url: "https://accredian-enterprise-page-two.vercel.app",
    siteName: "Accredian Enterprise Clone",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accredian Enterprise",
    description:
      "Responsive enterprise learning landing page built with Next.js App Router.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
