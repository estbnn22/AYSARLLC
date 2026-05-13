import Link from "next/link";
import type { Metadata } from "next";

import {
  businessDisplayName,
  contactPhone,
  contactPhoneDisplay,
  defaultKeywords,
  primaryImagePath,
  workPageDescription,
  workPageTitle,
} from "../lib/site";
import { getGalleryCategories } from "../lib/work-gallery";
import { WorkGalleryImage } from "./work-gallery-image";

export const metadata: Metadata = {
  title: workPageTitle,
  description: workPageDescription,
  keywords: [...defaultKeywords, "appliance repair photos", "dryer repair photos"],
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    url: "/work",
    title: `${workPageTitle} | ${businessDisplayName}`,
    description: workPageDescription,
    images: [
      {
        url: primaryImagePath,
        alt: "At Your Service Appliance Repair work gallery",
      },
    ],
  },
  twitter: {
    title: `${workPageTitle} | ${businessDisplayName}`,
    description: workPageDescription,
    images: [primaryImagePath],
  },
};

export default async function WorkPage() {
  const categories = await getGalleryCategories();
  const totalPhotos = categories.reduce(
    (photoCount, category) => photoCount + category.images.length,
    0,
  );
  const featuredImages = categories
    .flatMap((category) =>
      category.images.map((image) => ({
        src: image.versionedSrc,
        alt: `${category.title} example completed by ${businessDisplayName} in the DFW area`,
      })),
    )
    .slice(0, 3);

  return (
    <main className="work-page-static flex flex-1 flex-col px-4 pb-16 pt-4 sm:px-10 sm:pb-20 sm:pt-6 lg:px-14">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col overflow-hidden rounded-[2.25rem] bg-transparent">
        <section className="relative isolate overflow-hidden px-5 pb-12 pt-5 sm:px-8 sm:pb-16 sm:pt-6 lg:px-10 lg:py-8">
          <div>
            <header className="flex flex-col gap-5 border-b border-border pb-6 sm:pb-7 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p className="mb-3 text-center text-xs uppercase tracking-[0.32em] text-brand lg:text-start">
                  Real repair examples
                </p>
                <h1 className="text-center font-serif text-4xl leading-[0.92] font-bold text-white sm:text-5xl lg:text-start lg:text-6xl">
                  My Work
                </h1>
                <p className="mt-4 text-center text-base leading-7 text-slate-200 sm:text-lg sm:leading-8 lg:text-start">
                  A look at real appliance repair work across dryers, washers,
                  ovens, stoves, and microwaves. More photos can be added here
                  over time as new jobs are completed.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:flex sm:flex-row sm:flex-wrap">
                <Link
                  href="/"
                  className="rounded-full border border-brand/30 bg-white/6 px-4 py-3 text-center text-sm font-semibold text-white sm:px-6"
                >
                  Back home
                </Link>
                <a
                  href={`tel:${contactPhone}`}
                  className="rounded-full bg-brand px-4 py-3 text-center text-sm font-semibold text-black shadow-[0_12px_30px_rgba(153,211,93,0.28)] sm:px-6"
                >
                  Call {contactPhoneDisplay}
                </a>
              </div>
            </header>

            <div className="grid gap-6 py-6 sm:gap-8 sm:py-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-10 lg:py-10">
              <div className="space-y-5">
                <div className="rounded-[1.75rem] border border-brand/18 bg-black/25 p-5 text-white shadow-[0_18px_50px_rgba(0,0,0,0.25)] sm:p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.26em] text-brand">
                    What you are seeing
                  </p>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-slate-200">
                    These photos highlight real repair visits and hands-on work.
                    The goal is to give homeowners a clearer feel for the kind
                    of appliance problems handled every day across the DFW area.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
                  {[
                    { label: "Photo examples", value: `${totalPhotos}+` },
                    { label: "Appliance types", value: `${categories.length}` },
                    { label: "Service area", value: "DFW" },
                  ].map((stat, index) => (
                    <div
                      key={stat.label}
                      className={`rounded-3xl border border-border bg-white/6 p-4 backdrop-blur-sm sm:p-5 ${
                        index === 2 ? "col-span-2 sm:col-span-1" : ""
                      }`}
                    >
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
                        {stat.label}
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {featuredImages.map((image, index) => (
                  <div
                    key={image.src}
                    className={`overflow-hidden rounded-[1.75rem] border border-brand/18 bg-black/35 p-2 shadow-[0_18px_50px_rgba(0,0,0,0.25)] ${
                      index === 0 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div
                      className={`relative overflow-hidden rounded-[1.2rem] border border-white/10 bg-black/30 ${
                        index === 0 ? "aspect-[16/10]" : "aspect-[4/5]"
                      }`}
                    >
                      <WorkGalleryImage
                        src={image.src}
                        alt={image.alt}
                        sizes={
                          index === 0
                            ? "(max-width: 640px) 100vw, 50vw"
                            : "(max-width: 640px) 100vw, 25vw"
                        }
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
          <div>
            <div className="mb-8 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-brand">
                Gallery
              </p>
              <h2 className="mt-3 font-serif text-4xl text-white sm:text-5xl">
                Real appliance repair photos organized by job type.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300">
                Each section below shows a few examples from completed repair
                work. The layout is built to grow as more project photos are
                added later.
              </p>
            </div>

            {categories.length > 0 ? (
              <div className="space-y-8 sm:space-y-10">
                {categories.map((category) => (
                  <article
                    key={category.slug}
                    className="rounded-[2rem] border border-border bg-surface p-4 shadow-[0_14px_35px_rgba(0,0,0,0.18)] sm:p-6"
                  >
                    <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
                      <div className="max-w-2xl">
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand">
                          {category.badge}
                        </p>
                        <h3 className="mt-2 font-serif text-3xl leading-tight text-white sm:text-4xl">
                          {category.title}
                        </h3>
                        <p className="mt-3 text-base leading-7 text-slate-300">
                          {category.summary}
                        </p>
                      </div>

                      <div className="rounded-full border border-brand/20 bg-white/6 px-4 py-2 text-sm font-semibold text-white">
                        {category.images.length} photo
                        {category.images.length === 1 ? "" : "s"}
                      </div>
                    </div>

                    <div className="mt-5 grid gap-4 sm:mt-6 sm:grid-cols-2 xl:grid-cols-3">
                      {category.images.map((image, imageIndex) => (
                        <div
                          key={image.versionedSrc}
                          className={`overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/30 p-2 ${
                            imageIndex === 0
                              ? "sm:col-span-2 xl:col-span-2"
                              : ""
                          }`}
                        >
                          <div
                            className={`relative overflow-hidden rounded-[1.1rem] bg-black/40 ${
                              imageIndex === 0
                                ? "aspect-[16/10]"
                                : "aspect-[4/5] sm:aspect-[5/6]"
                            }`}
                          >
                            <WorkGalleryImage
                              src={image.versionedSrc}
                              alt={`${category.title} repair photo from ${businessDisplayName}`}
                              sizes={
                                imageIndex === 0
                                  ? "(max-width: 640px) 100vw, (max-width: 1280px) 66vw, 50vw"
                                  : "(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                              }
                              className="object-cover"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-[2rem] border border-border bg-surface p-8 text-center shadow-[0_14px_35px_rgba(0,0,0,0.18)]">
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-brand">
                  Gallery coming soon
                </p>
                <p className="mt-4 text-base leading-8 text-slate-300">
                  This page is ready for work photos and will fill out as more
                  repair examples are added to the site.
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="px-5 pb-12 pt-8 sm:px-8 sm:pb-16 sm:pt-10 lg:px-10">
          <div className="rounded-[2rem] border border-brand/18 bg-black/25 p-6 text-white shadow-[0_18px_50px_rgba(0,0,0,0.24)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-brand">
              Need help now?
            </p>
            <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="font-serif text-4xl sm:text-5xl">
                  Call or text to get your appliance checked.
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-200">
                  If your washer, dryer, stove, oven, or microwave is giving
                  you trouble, reach out directly and describe what it is doing.
                  That makes it easier to get service moving quickly.
                </p>
              </div>

              <div className="grid gap-3 sm:flex sm:flex-row">
                <a
                  href={`tel:${contactPhone}`}
                  className="rounded-full bg-brand px-5 py-3 text-center text-sm font-semibold text-black shadow-[0_12px_30px_rgba(153,211,93,0.28)]"
                >
                  Call {contactPhoneDisplay}
                </a>
                <Link
                  href="/#contact"
                  className="rounded-full border border-white/15 px-5 py-3 text-center text-sm font-semibold text-white"
                >
                  Contact page
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
