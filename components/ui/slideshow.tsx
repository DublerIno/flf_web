"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";

import adelka from "@/app/photos/adelka.jpg";
import fmly from "@/app/photos/fmly.jpg";
import nik from "@/app/photos/nik.jpg";
import sofia from "@/app/photos/sofia.jpg";
import unnamed from "@/app/photos/unnamed.jpg";

const slides: Array<{
  img: StaticImageData;
  text: [string, string];
}> = [
  {
    img: adelka,
    text: ["BETWEEN SHADOW", "AND LIGHT"],
  },
  {
    img: fmly,
    text: ["SILENCE SPEAKS", "THROUGH FORM"],
  },
  {
    img: nik,
    text: ["ESSENCE BEYOND", "PERCEPTION"],
  },
  {
    img: sofia,
    text: ["TRUTH IN", "EMPTINESS"],
  },
  {
    img: unnamed,
    text: ["SURRENDER TO", "THE VOID"],
  },
];

export default function Slideshow() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative min-h-screen snap-start overflow-hidden bg-black">
      <div className="relative h-screen w-full">
        {slides.map((slide, i) => (
          <div
            key={slide.text.join("-")}
            className={`absolute inset-0 transition-all duration-500 ${
              i === current
                ? "z-10 scale-100 opacity-100"
                : "pointer-events-none z-0 scale-[1.04] opacity-0"
            }`}
          >
            <Image
              src={slide.img}
              alt={slide.text.join(" ")}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/65" />
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_0.7px,transparent_0.8px)] bg-[length:7px_7px] opacity-20 mix-blend-screen" />

            <div className="absolute inset-x-0 bottom-0 z-20 p-6 sm:p-10 lg:p-14">
              <div className="max-w-5xl">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-stone-200/80">
                  Fullscreen Slideshow
                </p>
                <div className="flex flex-col text-4xl font-semibold leading-none tracking-[-0.05em] text-white sm:text-6xl lg:text-8xl">
                  {slide.text.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute inset-x-0 top-0 z-30 flex items-center justify-between p-6 sm:p-8 lg:p-10">
          <div className="rounded-full border border-white/15 bg-black/25 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-stone-100 backdrop-blur-sm">
            Local Photos
          </div>
          <div className="rounded-full border border-white/15 bg-black/25 px-4 py-2 text-sm font-medium text-stone-100 backdrop-blur-sm">
            0{current + 1} / 0{slides.length}
          </div>
        </div>

        <button
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-2xl text-white backdrop-blur-sm transition hover:bg-black/45 sm:left-8"
          onClick={prevSlide}
          type="button"
        >
          ←
        </button>
        <button
          aria-label="Next slide"
          className="absolute right-4 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/30 text-2xl text-white backdrop-blur-sm transition hover:bg-black/45 sm:right-8"
          onClick={nextSlide}
          type="button"
        >
          →
        </button>
      </div>
    </section>
  );
}
