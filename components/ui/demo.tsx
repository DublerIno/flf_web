"use client";

import { GooeyFilter } from "@/components/ui/gooey-filter";
import { PixelTrail } from "@/components/ui/pixel-trail";
import { useScreenSize } from "@/hooks/use-screen-size";

function GooeyDemo() {
  const screenSize = useScreenSize();

  return (
    <section className="relative flex min-h-screen w-full snap-start flex-col items-center justify-center gap-8 overflow-hidden bg-black text-center text-pretty">
      <div
        className="absolute inset-0 opacity-95"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(255, 196, 120, 0.24), transparent 28%), radial-gradient(circle at 80% 30%, rgba(255, 120, 120, 0.2), transparent 24%), radial-gradient(circle at 50% 75%, rgba(120, 180, 255, 0.22), transparent 32%), linear-gradient(135deg, #070707 0%, #141414 35%, #0b0b0f 65%, #030303 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-25 mix-blend-screen"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.18) 0.7px, transparent 0.8px)",
          backgroundSize: "7px 7px",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/70" />

      <GooeyFilter id="gooey-filter-pixel-trail" strength={5} />

      <div
        className="absolute inset-0 z-0"
        style={{ filter: "url(#gooey-filter-pixel-trail)" }}
      >
        <PixelTrail
          pixelSize={screenSize.lessThan("md") ? 24 : 32}
          fadeDuration={0}
          delay={500}
          pixelClassName="bg-white"
        />
      </div>

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-6 px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-200/80">
          Interactive Hero
        </p>
        <p className="w-full max-w-4xl text-5xl font-bold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
          FLF
        </p>
        <p className="max-w-2xl text-base leading-8 text-stone-200 sm:text-lg">
          A gooey pixel trail sits over a cinematic background and reacts to
          pointer movement, giving the homepage a stronger visual entry point.
        </p>
      </div>
    </section>
  );
}

export { GooeyDemo };
