"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { ExpandableText } from "./mobile-expandable";

type Review = {
  quote: string;
  author: string;
  context: string;
  source: string;
};

type ReviewsCarouselProps = {
  googleReviewsUrl: string;
  reviews: Review[];
};

export function ReviewsCarousel({
  googleReviewsUrl,
  reviews,
}: ReviewsCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalReviews = reviews.length;

  const reviewIds = useMemo(
    () => reviews.map((review, index) => `${review.author}-${index}`),
    [reviews],
  );

  const syncActiveIndex = useCallback(() => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    const cards = Array.from(
      scroller.querySelectorAll<HTMLElement>("[data-review-card]"),
    );

    if (cards.length === 0) {
      return;
    }

    const focusPoint = scroller.scrollLeft + scroller.clientWidth / 2;
    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(cardCenter - focusPoint);

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    setActiveIndex(nearestIndex);
  }, []);

  const scrollToIndex = useCallback(
    (index: number, behavior: ScrollBehavior = "smooth") => {
      const scroller = scrollerRef.current;

      if (!scroller) {
        return;
      }

      const cards = Array.from(
        scroller.querySelectorAll<HTMLElement>("[data-review-card]"),
      );

      if (cards.length === 0) {
        return;
      }

      const safeIndex = ((index % cards.length) + cards.length) % cards.length;
      const target = cards[safeIndex];

      scroller.scrollTo({
        left: target.offsetLeft,
        behavior,
      });
      setActiveIndex(safeIndex);
    },
    [],
  );

  useEffect(() => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    let frame = 0;

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(syncActiveIndex);
    };

    scroller.addEventListener("scroll", onScroll, { passive: true });
    syncActiveIndex();

    return () => {
      cancelAnimationFrame(frame);
      scroller.removeEventListener("scroll", onScroll);
    };
  }, [syncActiveIndex]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const intervalId = window.setInterval(() => {
      if (isPaused) {
        return;
      }

      scrollToIndex(activeIndex + 1);
    }, 4600);

    return () => window.clearInterval(intervalId);
  }, [activeIndex, isPaused, scrollToIndex]);

  return (
    <div
      className="motion-panel mt-8 rounded-[1.75rem] border border-brand/12 bg-black/18 p-4 sm:p-5"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onPointerDown={() => setIsPaused(true)}
      onPointerUp={() => setIsPaused(false)}
      onPointerCancel={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">
            Swipeable reviews
          </p>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-300">
            Swipe on mobile, drag the track, or let it move on its own.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous review"
            className="cta-button rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-semibold text-white"
            onClick={() => scrollToIndex(activeIndex - 1)}
          >
            Prev
          </button>
          <button
            type="button"
            aria-label="Next review"
            className="cta-button rounded-full border border-brand/20 bg-brand px-4 py-2 text-sm font-semibold text-black"
            onClick={() => scrollToIndex(activeIndex + 1)}
          >
            Next
          </button>
        </div>
      </div>

      <div className="reviews-viewport relative mt-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#0d1510] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#0d1510] to-transparent" />

        <div
          ref={scrollerRef}
          className="reviews-scroller flex gap-4 overflow-x-auto px-1 pb-4"
        >
          {reviews.map((review, index) => (
            <article
              key={reviewIds[index]}
              data-review-card
              data-active={activeIndex === index ? "true" : "false"}
              className="review-card review-snap min-w-[min(20rem,calc(100vw-4.5rem))] max-w-[min(20rem,calc(100vw-4.5rem))] rounded-[1.5rem] border border-brand/10 bg-black/28 p-5 text-white backdrop-blur-sm sm:min-w-[23rem] sm:max-w-[23rem]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">
                {review.source}
              </p>
              <ExpandableText
                text={`“${review.quote}”`}
                previewWords={26}
                moreLabel="Read more"
                lessLabel="Show less"
                className="mt-4 text-base leading-7 text-slate-100 [overflow-wrap:anywhere] sm:text-lg sm:leading-8"
                buttonClassName="mt-3 inline-flex text-sm font-semibold text-brand md:hidden"
              />
              <p className="mt-5 text-sm font-semibold text-white">{review.author}</p>
              <p className="mt-1 text-sm text-slate-400">{review.context}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {reviews.map((_, index) => (
            <button
              key={reviewIds[index]}
              type="button"
              aria-label={`Go to review ${index + 1}`}
              aria-pressed={activeIndex === index}
              className={`h-2.5 rounded-full transition-all ${
                activeIndex === index
                  ? "w-8 bg-brand"
                  : "w-2.5 bg-white/25 hover:bg-white/45"
              }`}
              onClick={() => scrollToIndex(index)}
            />
          ))}
        </div>

        <a
          href={googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button inline-flex rounded-full border border-brand/20 px-4 py-2 text-sm font-semibold text-brand"
        >
          Open Google profile
        </a>
      </div>

      <p className="mt-3 text-xs uppercase tracking-[0.24em] text-slate-500">
        Showing {activeIndex + 1} of {totalReviews}
      </p>
    </div>
  );
}
