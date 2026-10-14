"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Monitor,
  ShieldCheck,
  X,
  Maximize2,
} from "lucide-react";
import { Eyebrow, PillLink, Script } from "./primitives";

const IMAGES = [
  {
    src: "/images/office1.jpeg",
    alt: "Sunlit therapy room with exposed brick, tall windows, sheer curtains, a gray sofa, and a comfortable armchair",
    title: "A space to slow down",
  },
  {
    src: "/images/office2.jpeg",
    alt: "Bright counseling room with a gray sofa, round coffee table, indoor tree, armchair, and bookshelves",
    title: "Comfort in every detail",
  },
];

const DETAILS = [
  {
    label: "Location",
    value: "123th Street 45 W, Santa Monica, CA 90401",
    icon: MapPin,
  },
  {
    label: "Sessions",
    value:
      "In-person in Santa Monica and secure telehealth for clients in California",
    icon: Monitor,
  },
  {
    label: "Your comfort",
    value: "A quiet, private environment designed to help you feel at ease",
    icon: ShieldCheck,
  },
];

export function Office() {
  const [activeImage, setActiveImage] = useState<number | null>(null);

  const closeModal = useCallback(() => {
    setActiveImage(null);
  }, []);

  const showNext = useCallback(() => {
    setActiveImage((current) =>
      current === null ? null : (current + 1) % IMAGES.length,
    );
  }, []);

  const showPrevious = useCallback(() => {
    setActiveImage((current) =>
      current === null ? null : (current - 1 + IMAGES.length) % IMAGES.length,
    );
  }, []);

  useEffect(() => {
    if (activeImage === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
      if (event.key === "ArrowRight") showNext();
      if (event.key === "ArrowLeft") showPrevious();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage, closeModal, showNext, showPrevious]);

  return (
    <>
      <section
        id="office"
        aria-labelledby="office-heading"
        className="relative overflow-hidden bg-secondary py-20 md:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-16">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.85fr] lg:gap-20 xl:gap-28">
            {/* Office image gallery */}
            <div className="relative mx-auto flex w-full flex-col gap-6 px-6 md:px-[6%] lg:px-0 lg:pl-[4%]">
              {/* First image — keep its existing size and position */}
              <button
                type="button"
                onClick={() => setActiveImage(0)}
                aria-label="View the sunlit therapy room in full size"
                className="group relative block aspect-[4/3] w-full overflow-hidden text-left"
              >
                <Image
                  src="/images/office1.jpeg"
                  alt="Sunlit therapy room with exposed brick, tall windows with sheer curtains, a gray sofa, and a soft swivel armchair"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </button>

              {/* Second image — overlaps the first at the bottom-right */}
              <button
                type="button"
                onClick={() => setActiveImage(1)}
                aria-label="View the counseling lounge in full size"
                className="group absolute bottom-0 right-0 z-10 mr-6 aspect-[4/3] w-[52%] translate-y-1/4 overflow-hidden border-4 border-secondary text-left shadow-xl md:mr-[6%] lg:mr-0 lg:right-0"
              >
                <Image
                  src="/images/office2.jpeg"
                  alt="Bright counseling room with a gray sofa, round glass coffee table, olive tree, leather armchair, and bookshelves"
                  fill
                  sizes="(min-width: 1024px) 25vw, 62vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </button>
            </div>

            {/* Office content */}
            <div className="flex flex-col items-start">
              <Eyebrow className="text-[0.72rem] md:text-[0.78rem]">
                A PLACE TO FEEL AT EASE
              </Eyebrow>

              <h2
                id="office-heading"
                className="mt-5 max-w-lg font-serif text-4xl leading-[1.15] font-light tracking-tight text-balance sm:text-5xl lg:text-[3.5rem]"
              >
                A calm space to <Script className="ml-1">land.</Script>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-foreground/75">
                Natural light, soft textures, and room to breathe. My Santa
                Monica office is designed to feel quiet, comfortable, and
                grounding, with an uncluttered environment where you can slow
                down and focus on yourself.
              </p>

              <p className="mt-4 max-w-xl text-base leading-8 text-foreground/75">
                Whether we meet in person or through secure telehealth, our work
                begins with understanding your experiences and finding an
                approach that feels supportive to you.
              </p>

              <div className="mt-8 w-full border-y border-foreground/15">
                {DETAILS.map(({ label, value, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex gap-4 border-b border-foreground/10 py-5 last:border-b-0"
                  >
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Icon size={18} strokeWidth={1.6} aria-hidden="true" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-foreground/55">
                        {label}
                      </p>
                      <p className="mt-1.5 text-sm leading-6 text-foreground">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <PillLink
                href="#contact"
                className="mt-8 inline-flex h-12 w-full items-center justify-center sm:w-auto sm:min-w-[190px]"
              >
                Get in Touch
                <ArrowRight size={16} className="ml-2" aria-hidden="true" />
              </PillLink>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive image lightbox */}
      {activeImage !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-3 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Office photo gallery"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={closeModal}
            aria-label="Close image gallery"
            className="absolute right-3 top-3 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-6 sm:top-6"
          >
            <X size={22} />
          </button>

          {/* Previous image */}
          <button
            type="button"
            onClick={showPrevious}
            aria-label="View previous office image"
            className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-6 sm:h-12 sm:w-12"
          >
            <ArrowLeft size={21} />
          </button>

          {/* Full-size image */}
          <div className="relative flex h-[78dvh] max-h-[850px] w-full max-w-6xl flex-col items-center justify-center sm:h-[82dvh]">
            <div className="relative min-h-0 w-full flex-1">
              <Image
                key={IMAGES[activeImage].src}
                src={IMAGES[activeImage].src}
                alt={IMAGES[activeImage].alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            <div className="flex w-full shrink-0 items-center justify-between gap-4 px-10 pt-4 text-white sm:px-4">
              <div className="min-w-0">
                <p className="truncate text-sm font-medium sm:text-base">
                  {IMAGES[activeImage].title}
                </p>
                <p className="mt-1 text-xs text-white/60">
                  Santa Monica Therapy Office
                </p>
              </div>

              <span
                className="shrink-0 text-sm tabular-nums text-white/75"
                aria-live="polite"
              >
                {activeImage + 1} / {IMAGES.length}
              </span>
            </div>
          </div>

          {/* Next image */}
          <button
            type="button"
            onClick={showNext}
            aria-label="View next office image"
            className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-6 sm:h-12 sm:w-12"
          >
            <ArrowRight size={21} />
          </button>

          <p className="absolute bottom-2 left-0 right-0 text-center text-[10px] text-white/45 sm:bottom-3 sm:text-xs">
            Use the arrow keys to navigate · Esc to close
          </p>
        </div>
      )}
    </>
  );
}
