import type { CSSProperties } from "react";

import { ContactEmailForm } from "./components/contact-email-form";
import {
  ExpandableText,
  MobileExpandablePanel,
} from "./components/mobile-expandable";
import { ReviewsCarousel } from "./components/reviews-carousel";
import { ScrollAnimator } from "./components/scroll-animator";

const services = [
  {
    name: "Washers",
    details:
      "Repair for leaks, draining problems, off-balance cycles, and washers that stop spinning the way they should.",
  },
  {
    name: "Dryers",
    details:
      "Service for no-heat calls, long dry times, unusual noises, and dryers that shut off before the job is done.",
  },
  {
    name: "Stoves and ovens",
    details:
      "Help with burner problems, uneven heating, temperature issues, and common cooking appliance breakdowns.",
  },
  {
    name: "Dishwashers",
    details:
      "Support for poor cleaning, drainage issues, leaks, stuck cycles, and dishwashers that get louder than normal.",
  },
  {
    name: "Trash compactors",
    details:
      "Repair help for compactors that jam, stop cycling, or no longer compress the way they should.",
  },
  {
    name: "Microwaves",
    details:
      "Diagnosis for heating issues, keypad or door concerns, unusual sounds, and other everyday performance problems.",
  },
];

const promiseCards = [
  "Fast response when a home appliance suddenly stops working",
  "Honest service and straightforward communication",
  "Affordable help for everyday appliance problems",
  "Insured service with same-day availability highlighted in the client materials",
];

const heroStats = [
  { value: "15", label: "Neighbor faves" },
  { value: "DFW", label: "Service area" },
  { value: "Same-day", label: "Availability" },
];

const reviews = [
  {
    quote:
      "James was very helpful I had contacted him late on a Sunday and he had an appointment for me next day. Came by quoted me an amazing price. And everything is working now! Extremely happy with the work and the pricing. Quick as well. If you have any issues definitely give him a call.",
    author: "Marc Herrera",
    context: "Google Review",
    source: "Google",
  },
  {
    quote:
      "Amazing work. Came out and fixed my mom’s washer. Absolutely thorough. Good communication and on time. He made sure we understood everything and what he was doing. Definitely recommend his services. A++++",
    author: "Elase Williams",
    context: "Google Review",
    source: "Google",
  },
  {
    quote:
      "Without James our old dryer would’ve been replaced with something that isn’t worth the price! He broke down in detail, the why’s and how of the problem. As well as time efficient, thorough and professional! We have already talked about having him look at family member of mine dryer, HIGHLY RECOMMEND his services.",
    author: "Kayla Goffner",
    context: "Google Review",
    source: "Google",
  },
  {
    quote:
      "Omg James saved me hundreds of dollars I was literally going to just say screw it and get a new washer before I called.. when I spoke to James he was very respectful and super honest all around good guy!! He knew my problem before even looking at my washer 10/10 recommend thank you James",
    author: "Tiana Goldine",
    context: "Google Review",
    source: "Google",
  },
  {
    quote:
      "I highly recommend James and this company. He came and checked out my washing machine the same day I called him and had an answer very quickly. Super kind guy and very reasonable. I would recommend him to anyone who needs help with an appliance and can definitely say we found a new go to person.",
    author: "Carrie Donnely",
    context: "Google Review",
    source: "Google",
  },
  {
    quote:
      "James is the most honest young man. He was a lifesaver. He fixed our stove and washing machine and explains and shows you everything that needs to be done. Saved us a lot of money from having to buy new appliances.",
    author: "Carolyn Benn",
    context: "Google",
    source: "Google",
  },
];

const serviceAreas = [
  "Grand Prairie",
  "Dallas",
  "Arlington",
  "Irving",
  "Mansfield",
  "Fort Worth",
  "DFW Area",
];

const googleReviewsUrl =
  "https://www.google.com/maps/place/At+Your+Service+Appliance+Repairs,+LLC/@32.7430719,-96.963595,9z/data=!3m1!4b1!4m6!3m5!1s0x689c4dcb113f7c7f:0x568c2629db5b42b1!8m2!3d32.7430719!4d-96.963595!16s%2Fg%2F11md7r9s1c?entry=ttu";

const viewMyWorkUrl =
  "https://www.google.com/maps/place/At+Your+Service+Appliance+Repairs,+LLC/@32.7451109,-96.9640798,16.64z/data=!4m15!1m8!3m7!1s0x689c4dcb113f7c7f:0x568c2629db5b42b1!2sAt+Your+Service+Appliance+Repairs,+LLC!8m2!3d32.7430719!4d-96.963595!10e5!16s%2Fg%2F11md7r9s1c!3m5!1s0x689c4dcb113f7c7f:0x568c2629db5b42b1!8m2!3d32.7430719!4d-96.963595!16s%2Fg%2F11md7r9s1c?entry=ttu&g_ep=EgoyMDI2MDUxMC4wIKXMDSoASAFQAw%3D%3D";

const contactPhone = "+1-972-670-5309";
const contactPhoneDisplay = "(972) 670-5309";
const contactEmail = "atyourservicea.r2025@gmail.com";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "At Your Service Appliance Repair",
  description:
    "Appliance repair company serving Grand Prairie and the DFW area with kitchen and laundry appliance service.",
  telephone: contactPhone,
  email: contactEmail,
  areaServed: serviceAreas,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Grand Prairie",
    addressRegion: "TX",
    postalCode: "75051",
    addressCountry: "US",
  },
};

const revealDelay = (delay: number): CSSProperties =>
  ({
    "--reveal-delay": `${delay}ms`,
  }) as CSSProperties;

export default function Home() {
  return (
    <>
      <ScrollAnimator />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <main className="page-shell flex flex-1 flex-col px-4 pb-16 pt-4 sm:px-10 sm:pb-20 sm:pt-6 lg:px-14">
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col overflow-hidden rounded-[2.25rem] bg-transparent">
          <section className="relative isolate overflow-hidden px-5 pb-12 pt-5 sm:px-8 sm:pb-16 sm:pt-6 lg:px-10 lg:py-8">
            <div aria-hidden="true" className="ambient-orb ambient-orb-primary" />
            <div aria-hidden="true" className="ambient-orb ambient-orb-secondary" />
            <div data-reveal style={revealDelay(0)}>
              <header className="flex flex-col gap-4 border-b border-border pb-5 sm:pb-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="mb-3 text-center text-xs uppercase tracking-[0.32em] text-brand lg:text-start">
                    DFW appliance repair
                  </p>
                  <h1 className="mb-3 text-center font-serif text-4xl leading-[0.92] font-bold text-white sm:text-5xl lg:text-start lg:text-6xl">
                    At Your Service Appliance Repair
                  </h1>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:flex sm:flex-row sm:flex-wrap">
                  <a
                    href={`tel:${contactPhone}`}
                    className="cta-button rounded-full bg-brand px-4 py-3 text-center text-sm font-semibold text-black shadow-[0_12px_30px_rgba(153,211,93,0.28)] sm:px-6"
                  >
                    Call now
                  </a>
                  <a
                    href={viewMyWorkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-button rounded-full border border-brand/30 bg-white/6 px-4 py-3 text-center text-sm font-semibold text-white sm:px-6"
                  >
                    View my work
                  </a>
                  <a
                    href="#contact"
                    className="cta-button rounded-full border border-white/15 px-4 py-3 text-center text-sm font-semibold text-white sm:px-6"
                  >
                    Contact
                  </a>
                </div>
              </header>

              <div className="grid gap-6 py-6 sm:gap-8 sm:py-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-10 lg:py-10">
                <div data-reveal style={revealDelay(100)} className="max-w-3xl">
                  <p className="mb-4 inline-flex rounded-full border border-brand/25 bg-brand/10 px-4 py-2 text-sm text-brand sm:mb-5">
                    Fast • Honest • Affordable • Insured
                  </p>
                  <h2 className="font-serif text-[2.85rem] leading-[0.9] text-white sm:text-6xl lg:text-7xl">
                    Appliance repair for Grand Prairie homes and the wider DFW
                    area.
                  </h2>
                  <ExpandableText
                    text="Fast help for washers, dryers, stoves, ovens, dishwashers, microwaves, and more. If something breaks at home, the goal is simple: make it easy to call, explain the problem, and get dependable service moving quickly."
                    previewWords={16}
                    className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:mt-6 sm:text-lg sm:leading-8"
                    buttonClassName="mt-2 inline-flex text-sm font-semibold text-brand md:hidden"
                  />

                  <div
                    data-reveal
                    style={revealDelay(150)}
                    className="motion-panel mt-6 inline-flex rounded-[1.5rem] border border-brand/20 bg-black/25 px-4 py-3 text-white shadow-[0_14px_35px_rgba(0,0,0,0.22)] sm:mt-8 sm:px-5 sm:py-4"
                  >
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
                        Google rating
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-3">
                        <div
                          className="flex items-center gap-1"
                          aria-label="5 star Google rating"
                        >
                          {Array.from({ length: 5 }).map((_, index) => (
                            <span
                              key={index}
                              aria-hidden="true"
                              className="text-xl text-accent"
                            >
                              ★
                            </span>
                          ))}
                        </div>
                        <p className="text-base font-semibold text-white">
                          5 stars
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-6 sm:gap-4 sm:grid-cols-3">
                    {heroStats.map((stat, index) => (
                      <div
                        key={stat.label}
                        data-reveal
                        data-float={index === 1 ? "slow" : "fast"}
                        style={revealDelay(180 + index * 70)}
                        className={`motion-panel rounded-3xl border border-border bg-white/6 p-4 backdrop-blur-sm sm:p-5 ${
                          index === heroStats.length - 1
                            ? "col-span-2 sm:col-span-1"
                            : ""
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

                <div
                  data-reveal
                  data-float="slow"
                  style={revealDelay(200)}
                  className="motion-panel rounded-[2rem] border border-brand/20 bg-black/35 p-5 text-white shadow-[0_18px_50px_rgba(0,0,0,0.28)] sm:p-7"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand">
                    What the brand promises
                  </p>
                  <MobileExpandablePanel
                    collapsedLabel="View promise highlights"
                    expandedLabel="Hide promise highlights"
                    contentClassName="mt-4 sm:mt-5"
                  >
                    <ul className="space-y-4 text-sm leading-7 text-white/90">
                      {promiseCards.map((item) => (
                        <li
                          key={item}
                          className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </MobileExpandablePanel>
                </div>
              </div>
            </div>
          </section>

          <section
            id="services"
            className="px-5 py-8 sm:px-8 sm:py-10 lg:px-10"
          >
            <div data-reveal style={revealDelay(0)}>
              <div className="mb-6 flex flex-col gap-4 sm:mb-8 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.26em] text-brand">
                    Services
                  </p>
                  <h2 className="mt-2 font-serif text-4xl text-white sm:text-5xl">
                    Repair help for the appliances your home depends on every
                    day.
                  </h2>
                </div>
                <ExpandableText
                  text="From laundry room breakdowns to kitchen appliance issues, service is focused on practical repairs, clear communication, and getting everyday routines back on track as quickly as possible."
                  previewWords={15}
                  className="max-w-xl text-base leading-7 text-slate-300"
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {services.map((service, index) => (
                  <article
                    key={service.name}
                    data-reveal
                    style={revealDelay(60 + index * 70)}
                    className="motion-panel group rounded-[1.75rem] border border-border bg-surface p-6 shadow-[0_14px_35px_rgba(0,0,0,0.18)]"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand">
                      0{index + 1}
                    </p>
                    <h3 className="mt-3 font-serif text-3xl leading-tight text-white">
                      {service.name}
                    </h3>
                    <ExpandableText
                      text={service.details}
                      previewWords={11}
                      className="mt-4 text-base leading-7 text-slate-300"
                    />
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
            <div data-reveal style={revealDelay(0)} className="py-1">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div data-reveal style={revealDelay(80)} className="max-w-2xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.26em] text-brand">
                    Reviews
                  </p>
                  <h2 className="mt-3 font-serif text-4xl text-white sm:text-5xl">
                    Local homeowners continue to recommend the service.
                  </h2>
                  <ExpandableText
                    text="Customer feedback highlights professional service, fair pricing, and dependable help when an appliance stops working. Browse a few local recommendations here, then open the Google business profile to see the latest review activity."
                    previewWords={16}
                    className="mt-4 text-base leading-8 text-slate-300"
                  />
                </div>

                <div
                  data-reveal
                  style={revealDelay(150)}
                  className="motion-panel rounded-[1.5rem] border border-brand/15 bg-black/20 px-5 py-4"
                >
                  <div className="flex items-center gap-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span
                        key={index}
                        aria-hidden="true"
                        className="text-2xl text-accent"
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 text-3xl font-semibold text-white">
                    15 local faves
                  </p>
                  <p className="mt-1 text-sm uppercase tracking-[0.22em] text-brand">
                    Grand Prairie neighborhood recommendations
                  </p>
                </div>
              </div>

              <div data-reveal style={revealDelay(220)}>
                <ReviewsCarousel
                  googleReviewsUrl={googleReviewsUrl}
                  reviews={reviews}
                />
              </div>
            </div>
          </section>

          <section className="px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
            <div data-reveal style={revealDelay(0)} className="py-1 text-white">
              <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                <div data-reveal style={revealDelay(80)}>
                  <p className="text-sm font-semibold uppercase tracking-[0.26em] text-brand">
                    Service area
                  </p>
                  <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
                    Serving Grand Prairie and nearby DFW communities.
                  </h2>
                  <ExpandableText
                    text="Service is centered in Grand Prairie, with coverage that extends across nearby Dallas-Fort Worth neighborhoods. If you are in the area, call or text to confirm availability and scheduling."
                    previewWords={15}
                    className="mt-4 max-w-xl text-base leading-8 text-white/80"
                  />
                </div>

                <MobileExpandablePanel
                  collapsedLabel="View service cities"
                  expandedLabel="Hide service cities"
                  contentClassName="mt-2 md:mt-0"
                >
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {serviceAreas.map((area, index) => (
                      <div
                        key={area}
                        data-reveal
                        style={revealDelay(140 + index * 55)}
                        className="motion-panel rounded-[1.5rem] border border-white/10 bg-white/10 px-4 py-5 text-center text-base font-semibold"
                      >
                        {area}
                      </div>
                    ))}
                  </div>
                </MobileExpandablePanel>
              </div>
            </div>
          </section>

          <section
            id="contact"
            className="px-5 pb-12 pt-8 sm:px-8 sm:pb-16 sm:pt-10 lg:px-10"
          >
            <div data-reveal style={revealDelay(0)} className="py-1">
              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="space-y-4">
                  <div data-reveal style={revealDelay(80)}>
                    <p className="text-sm font-semibold uppercase tracking-[0.26em] text-brand">
                      Contact
                    </p>
                    <h2 className="mt-3 font-serif text-4xl text-white sm:text-5xl">
                      Call, text, or email to get service started.
                    </h2>
                    <ExpandableText
                      text="Reach out with the appliance type, the problem you are seeing, and your area. That keeps the first conversation quick and makes it easier to get the service process moving."
                      previewWords={16}
                      className="mt-5 max-w-xl text-base leading-8 text-slate-300"
                    />
                  </div>

                  <a
                    href={`tel:${contactPhone}`}
                    data-reveal
                    style={revealDelay(140)}
                    className="motion-panel block rounded-[1.6rem] border border-border bg-surface p-5"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">
                      Phone
                    </p>
                    <p className="mt-3 text-2xl font-semibold text-white">
                      {contactPhoneDisplay}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Direct line for homeowners who want to call or text about
                      a repair.
                    </p>
                  </a>

                  <a
                    href={`mailto:${contactEmail}`}
                    data-reveal
                    style={revealDelay(210)}
                    className="motion-panel block rounded-[1.6rem] border border-border bg-surface p-5"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">
                      Email
                    </p>
                    <p className="mt-3 break-all text-2xl font-semibold text-white">
                      {contactEmail}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Email option for service questions, scheduling details,
                      and follow-up.
                    </p>
                  </a>

                  <div
                    data-reveal
                    style={revealDelay(280)}
                    className="motion-panel rounded-[1.6rem] border border-border bg-surface p-5"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">
                      Coverage
                    </p>
                    <p className="mt-3 text-2xl font-semibold text-white">
                      Grand Prairie / DFW Area
                    </p>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
                      Service-area focused contact details keep the homepage
                      simple and work well for a mobile repair business serving
                      nearby cities.
                    </p>
                  </div>
                </div>

                <div data-reveal style={revealDelay(160)}>
                  <ContactEmailForm emailAddress={contactEmail} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
