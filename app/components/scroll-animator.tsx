"use client";

import { useEffect } from "react";

export function ScrollAnimator() {
  useEffect(() => {
    document.documentElement.dataset.motion = "enabled";

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (elements.length === 0) {
      return () => {
        delete document.documentElement.dataset.motion;
      };
    }

    const revealAll = () => {
      elements.forEach((element) => {
        element.dataset.revealed = "true";
      });
    };

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      revealAll();
      return () => {
        delete document.documentElement.dataset.motion;
      };
    }

    if (typeof window.IntersectionObserver === "undefined") {
      revealAll();
      return () => {
        delete document.documentElement.dataset.motion;
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const target = entry.target as HTMLElement;
          target.dataset.revealed = "true";
          observer.unobserve(target);
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    const revealThreshold = window.innerHeight * 0.92;

    elements.forEach((element) => {
      if (element.getBoundingClientRect().top <= revealThreshold) {
        element.dataset.revealed = "true";
        return;
      }

      observer.observe(element);
    });

    return () => {
      observer.disconnect();
      delete document.documentElement.dataset.motion;
    };
  }, []);

  return null;
}
