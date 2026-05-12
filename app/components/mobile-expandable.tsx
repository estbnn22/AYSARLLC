"use client";

import type { ReactNode } from "react";
import { useId, useState } from "react";

type ExpandableTextProps = {
  buttonClassName?: string;
  className?: string;
  lessLabel?: string;
  moreLabel?: string;
  previewWords?: number;
  text: string;
};

type MobileExpandablePanelProps = {
  buttonClassName?: string;
  children: ReactNode;
  className?: string;
  collapsedLabel?: string;
  contentClassName?: string;
  expandedLabel?: string;
};

const getTextParts = (text: string, previewWords: number) => {
  const words = text.trim().split(/\s+/);

  if (words.length <= previewWords) {
    return { preview: text, remainder: "" };
  }

  return {
    preview: words.slice(0, previewWords).join(" "),
    remainder: words.slice(previewWords).join(" "),
  };
};

export function ExpandableText({
  buttonClassName,
  className,
  lessLabel = "View less",
  moreLabel = "View more",
  previewWords = 18,
  text,
}: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentId = useId();
  const { preview, remainder } = getTextParts(text, previewWords);

  if (!remainder) {
    return <p className={className}>{text}</p>;
  }

  return (
    <div>
      <p id={contentId} className={className}>
        <span>{preview}</span>
        <span className={isExpanded ? "inline md:inline" : "hidden md:inline"}>
          {" "}
          {remainder}
        </span>
        {!isExpanded ? <span className="md:hidden">...</span> : null}
      </p>
      <button
        type="button"
        aria-controls={contentId}
        aria-expanded={isExpanded}
        className={
          buttonClassName ??
          "mt-2 inline-flex text-sm font-semibold text-brand md:hidden"
        }
        onClick={() => setIsExpanded((value) => !value)}
      >
        {isExpanded ? lessLabel : moreLabel}
      </button>
    </div>
  );
}

export function MobileExpandablePanel({
  buttonClassName,
  children,
  className,
  collapsedLabel = "View more",
  contentClassName,
  expandedLabel = "View less",
}: MobileExpandablePanelProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentId = useId();

  return (
    <div className={className}>
      <div
        id={contentId}
        className={`${isExpanded ? "block" : "hidden"} md:block ${contentClassName ?? ""}`}
      >
        {children}
      </div>
      <button
        type="button"
        aria-controls={contentId}
        aria-expanded={isExpanded}
        className={
          buttonClassName ??
          "mt-4 inline-flex rounded-full border border-brand/20 px-4 py-2 text-sm font-semibold text-brand md:hidden"
        }
        onClick={() => setIsExpanded((value) => !value)}
      >
        {isExpanded ? expandedLabel : collapsedLabel}
      </button>
    </div>
  );
}
