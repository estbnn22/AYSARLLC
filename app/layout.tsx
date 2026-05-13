import type { Metadata } from "next";
import { Manrope, Oswald } from "next/font/google";
import Image from "next/image";
import logoImage from "@/public/LOGO.png";
import "./globals.css";
import {
  businessDescription,
  businessName,
  contactPhoneDisplay,
  contactPhoneHref,
  defaultKeywords,
  logoPath,
  primaryImagePath,
  siteUrl,
  socialLinks,
} from "./lib/site";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: businessName,
    template: `%s | ${businessName}`,
  },
  description: businessDescription,
  applicationName: businessName,
  keywords: [...defaultKeywords],
  authors: [{ name: businessName, url: siteUrl }],
  creator: businessName,
  publisher: businessName,
  category: "home services",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: businessName,
    title: businessName,
    description: businessDescription,
    images: [
      {
        url: primaryImagePath,
        alt: "At Your Service Appliance Repair promotional flyer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: businessName,
    description: businessDescription,
    images: [primaryImagePath],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: logoPath,
    apple: logoPath,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();

  return (
    <html
      lang="en"
      className={`${manrope.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <footer className="border-t border-border/70 bg-transparent px-4 py-8 sm:px-10 lg:px-14">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 text-sm text-slate-200 sm:gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <Image
                src={logoImage}
                alt="At Your Service Appliance Repair logo"
                sizes="72px"
                className="h-16 w-16 rounded-full border border-brand/20 object-cover shadow-[0_12px_28px_rgba(0,0,0,0.24)]"
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                  At Your Service
                </p>
                <p className="mt-1 font-serif text-2xl leading-none text-white">
                  Appliance Repair
                </p>
                <a
                  href={contactPhoneHref}
                  className="mt-2 inline-flex font-semibold text-slate-200"
                >
                  {contactPhoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:items-start lg:items-end">
              <div className="flex flex-wrap items-center gap-3 gap-y-2">
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-brand"
                >
                  Facebook
                </a>
                <a
                  href={socialLinks.google}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-brand"
                >
                  Google
                </a>
                <a
                  href={socialLinks.nextdoor}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-brand"
                >
                  Nextdoor
                </a>
              </div>
              <p className="text-slate-400">&copy; {currentYear} AYSARLLC</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
