"use client";

import { useState } from "react";

import Image from "next/image";

type WorkGalleryImageProps = {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
};

export function WorkGalleryImage({
  src,
  alt,
  sizes,
  className,
}: WorkGalleryImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <>
      {!isLoaded && !hasError ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[linear-gradient(180deg,rgba(10,18,13,0.9),rgba(15,25,20,0.96))] px-4 text-center text-slate-300"
        >
          <div className="grid w-full max-w-[12rem] gap-2">
            <div className="h-3 rounded-full bg-white/12" />
            <div className="h-3 rounded-full bg-brand/18" />
            <div className="h-3 w-3/4 justify-self-center rounded-full bg-white/10" />
          </div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand">
            Loading photo
          </p>
        </div>
      ) : null}

      {hasError ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center bg-black/55 px-4 text-center text-sm font-semibold text-slate-300"
        >
          Image unavailable
        </div>
      ) : null}

      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        sizes={sizes}
        className={`${className ?? ""} ${isLoaded && !hasError ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
      />
    </>
  );
}
