import type { Metadata } from "next";
import { Manrope, Oswald } from "next/font/google";
import Image from "next/image";
import logoImage from "@/public/LOGO.png";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "At Your Service Appliance Repair LLC | Grand Prairie & DFW",
  description:
    "Appliance repair for Grand Prairie and the DFW area. Fast, honest, affordable service for washers, dryers, stoves, ovens, dishwashers, microwaves, and more.",
  icons: {
    icon: "/LOGO.png",
    apple: "/LOGO.png",
  },
};

const businessLinks = {
  facebook:
    "https://www.facebook.com/p/At-Your-Service-Appliance-Repair-Llc-61576208290452/",
  google:
    "https://www.google.com/maps/place/At+Your+Service+Appliance+Repairs,+LLC/@32.7430719,-96.963595,9z/data=!3m1!4b1!4m6!3m5!1s0x689c4dcb113f7c7f:0x568c2629db5b42b1!8m2!3d32.7430719!4d-96.963595!16s%2Fg%2F11md7r9s1c?entry=ttu",
  nextdoor:
    "https://nextdoor.com/pages/at-your-service-appliance-repair-llc-grand-prairie-tx/",
  phone: "+1 (972) 670-5309",
  phoneHref: "tel:+19726705309",
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
                  href={businessLinks.phoneHref}
                  className="mt-2 inline-flex font-semibold text-slate-200"
                >
                  {businessLinks.phone}
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:items-start lg:items-end">
              <div className="flex flex-wrap items-center gap-3 gap-y-2">
                <a
                  href={businessLinks.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-brand"
                >
                  Facebook
                </a>
                <a
                  href={businessLinks.google}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-brand"
                >
                  Google
                </a>
                <a
                  href={businessLinks.nextdoor}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-brand"
                >
                  Nextdoor
                </a>
              </div>
              <p className="text-slate-400">
                &copy; {currentYear} At Your Service Appliance Repair LLC
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
