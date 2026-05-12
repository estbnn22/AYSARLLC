"use client";

import type { FormEvent } from "react";
import { useId, useState } from "react";

type ContactEmailFormProps = {
  emailAddress: string;
};

type FormValues = {
  appliance: string;
  customerEmail: string;
  customerName: string;
  message: string;
  phone: string;
  serviceArea: string;
};

const formatEmailBody = ({
  appliance,
  customerEmail,
  customerName,
  message,
  phone,
  serviceArea,
}: FormValues) =>
  [
    "Hello, I need appliance repair service.",
    "",
    `Name: ${customerName}`,
    `Phone: ${phone || "Not provided"}`,
    `Email: ${customerEmail || "Not provided"}`,
    `Appliance: ${appliance}`,
    `City / Area: ${serviceArea || "Not provided"}`,
    "",
    "Problem details:",
    message,
  ].join("\n");

export function ContactEmailForm({ emailAddress }: ContactEmailFormProps) {
  const [statusMessage, setStatusMessage] = useState(
    "This opens your email app with everything filled in.",
  );

  const nameId = useId();
  const phoneId = useId();
  const emailId = useId();
  const applianceId = useId();
  const serviceAreaId = useId();
  const messageId = useId();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const customerName = formData.get("customerName")?.toString().trim() ?? "";
    const phone = formData.get("phone")?.toString().trim() ?? "";
    const customerEmail =
      formData.get("customerEmail")?.toString().trim() ?? "";
    const appliance = formData.get("appliance")?.toString().trim() ?? "";
    const serviceArea = formData.get("serviceArea")?.toString().trim() ?? "";
    const message = formData.get("message")?.toString().trim() ?? "";

    if (!customerName || !appliance || !message) {
      setStatusMessage(
        "Please fill in your name, appliance, and problem details first.",
      );
      return;
    }

    const subject = encodeURIComponent(
      `Service request from ${customerName} - ${appliance}`,
    );
    const body = encodeURIComponent(
      formatEmailBody({
        appliance,
        customerEmail,
        customerName,
        message,
        phone,
        serviceArea,
      }),
    );

    setStatusMessage(
      "Your email app should open with a ready-to-send service request.",
    );
    form.reset();
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <form
      className="rounded-[1.75rem] border border-border bg-surface p-6 shadow-[0_14px_35px_rgba(0,0,0,0.18)]"
      onSubmit={handleSubmit}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">
            Email form
          </p>
          <h3 className="mt-3 font-serif text-2xl leading-tight text-white">
            Share the appliance issue here.
          </h3>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-slate-200">Name</span>
          <input
            id={nameId}
            name="customerName"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-base text-white outline-none placeholder:text-slate-500 focus:border-brand"
          />
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-slate-200">Phone</span>
          <input
            id={phoneId}
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Best number to reach you"
            className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-base text-white outline-none placeholder:text-slate-500 focus:border-brand"
          />
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-slate-200">Email</span>
          <input
            id={emailId}
            name="customerEmail"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-base text-white outline-none placeholder:text-slate-500 focus:border-brand"
          />
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-slate-200">
            Appliance
          </span>
          <input
            id={applianceId}
            name="appliance"
            type="text"
            required
            placeholder="Washer, dryer, oven..."
            className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-base text-white outline-none placeholder:text-slate-500 focus:border-brand"
          />
        </label>

        <label className="block sm:col-span-2">
          <span className="text-sm font-semibold text-slate-200">
            City / Area
          </span>
          <input
            id={serviceAreaId}
            name="serviceArea"
            type="text"
            autoComplete="address-level2"
            placeholder="Grand Prairie, Arlington, Dallas..."
            className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-base text-white outline-none placeholder:text-slate-500 focus:border-brand"
          />
        </label>

        <label className="block sm:col-span-2">
          <span className="text-sm font-semibold text-slate-200">
            What is happening?
          </span>
          <textarea
            id={messageId}
            name="message"
            required
            rows={6}
            placeholder="Tell us what the appliance is doing, when the issue started, and anything else that would help."
            className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-base text-white outline-none placeholder:text-slate-500 focus:border-brand"
          />
        </label>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-sm leading-6 text-slate-300">
          {statusMessage}
        </p>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-brand px-5 py-3 text-sm font-semibold text-black shadow-[0_12px_30px_rgba(153,211,93,0.28)]"
        >
          Open email draft
        </button>
      </div>
    </form>
  );
}
