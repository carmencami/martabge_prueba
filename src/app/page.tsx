import { Suspense } from "react";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import {
  IntroLead,
  ColeccionesGrid,
  FeaturedMaternidad,
  FeaturedComunion,
  CategoriaPills,
  NewsletterBlock,
} from "@/components/home/HomeSections";
import { ShopifyProductStrip } from "@/components/home/ShopifyProductStrip";

function ProductStripFallback() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-8 md:px-[5%]">
      <p className="text-center text-sm text-muted">Cargando productos de Shopify…</p>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <IntroLead />
      <Suspense fallback={<ProductStripFallback />}>
        <ShopifyProductStrip />
      </Suspense>
      <ColeccionesGrid />
      <FeaturedMaternidad />
      <FeaturedComunion />
      <CategoriaPills />
      <NewsletterBlock />
    </>
  );
}
