"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    src: "https://i0.wp.com/martabge.com/wp-content/uploads/2026/04/fundas-movil-martabge-scaled.jpg?fit=1920%2C960&ssl=1",
    alt: "Fundas de móvil con flores — MARTABGE",
    href: "/collections/fundas-movil",
  },
  {
    src: "https://i0.wp.com/martabge.com/wp-content/uploads/2026/03/IMG_6606.jpeg?fit=1200%2C900&ssl=1",
    alt: "Lámina maternidad — ilustración",
    href: "/collections/laminas",
  },
  {
    src: "https://i0.wp.com/martabge.com/wp-content/uploads/2026/03/comuniones-martabge.jpeg?fit=1200%2C900&ssl=1",
    alt: "Detalles Primera Comunión",
    href: "/collections/ninos-y-mamas",
  },
];

export function HeroCarousel() {
  const [i, setI] = useState(0);

  const next = useCallback(() => setI((v) => (v + 1) % slides.length), []);
  const prev = useCallback(() => setI((v) => (v - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  const slide = slides[i];

  return (
    <section className="relative mx-auto max-w-[1200px] px-0 md:px-[5%]">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-white md:rounded-sm md:shadow-sm">
        <Link href={slide.href} className="relative block h-full w-full">
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
            priority
            unoptimized
          />
        </Link>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center gap-2 pb-4">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Ir a slide ${idx + 1}`}
              className={`pointer-events-auto h-2 w-2 rounded-full transition ${
                idx === i ? "bg-white shadow" : "bg-white/50 hover:bg-white/80"
              }`}
              onClick={() => setI(idx)}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Anterior"
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-rose/40 p-2 text-white backdrop-blur-sm transition hover:bg-rose md:left-4"
          onClick={prev}
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          type="button"
          aria-label="Siguiente"
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-rose/40 p-2 text-white backdrop-blur-sm transition hover:bg-rose md:right-4"
          onClick={next}
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}
