import Link from "next/link";
import { Search } from "lucide-react";

export function TopShippingBar() {
  return (
    <div className="bg-rose text-white">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-2 px-4 py-2.5 text-[13px] leading-snug md:flex-row md:items-center md:justify-between md:px-[5%]">
        <p className="text-center font-sans md:text-left">
          <span className="opacity-95">✨ Envío 2-5 días (productos en stock) · </span>
          <span className="underline decoration-white/80 underline-offset-2">Gratis</span>
          <span className="opacity-95"> a partir de 69€ (península)</span>
        </p>
        <form action="/search" className="hidden items-center justify-end md:flex">
          <label className="sr-only" htmlFor="top-search">
            Buscar
          </label>
          <div className="flex items-center rounded-full border border-white/40 bg-white/10 px-3 py-1">
            <Search className="h-3.5 w-3.5 text-white/90" />
            <input
              id="top-search"
              name="q"
              type="search"
              className="ml-2 w-40 bg-transparent text-xs text-white placeholder:text-white/70 outline-none"
              placeholder="Buscar"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export function PromoTicker() {
  return (
    <div className="border-b border-rose/20 bg-gold/95 py-2.5 text-center text-[12px] font-medium text-white shadow-sm">
      <Link href="/collections/fundas-movil" className="inline-block hover:underline">
        🌷 FUNDAS DE MÓVIL + CINTAS DE FLORES · Nueva edición limitada 👉🏻 Ver colección
      </Link>
    </div>
  );
}

export function SeasonalNotice() {
  return (
    <section className="border-y border-rose/15 bg-white px-4 py-6 text-center md:px-[5%]">
      <h2 className="font-serif text-xl font-light text-rose-soft md:text-2xl">
        YA NO LLEGA A REYES🐪🐪🐪 Prepara ya tu carrito para rebajas…⏰
      </h2>
      <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-sage">
        (Excepto productos que requieran fabricación y así esté indicado en ficha de producto: medallas, fundas de móvil,
        textiles de otras colecciones, papel pintado, textiles de boda y bordados)
      </p>
    </section>
  );
}
