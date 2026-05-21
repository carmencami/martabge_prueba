import Image from "next/image";
import Link from "next/link";
import { fetchHomeProducts } from "@/lib/shopify/products";

function formatMoney(amount: string, currency: string) {
  try {
    return new Intl.NumberFormat("es-ES", { style: "currency", currency }).format(Number.parseFloat(amount));
  } catch {
    return `${amount} ${currency}`;
  }
}

export async function ShopifyProductStrip() {
  const products = await fetchHomeProducts(8);
  if (products.length === 0) return null;

  return (
    <section className="mx-auto max-w-[1200px] px-4 py-12 md:px-[5%]">
      <div className="mb-8 text-center">
        <h2 className="font-serif text-2xl font-light text-rose-soft md:text-3xl">Destacados en tienda</h2>
        <p className="mt-2 text-sm text-sage">Conectado a Shopify (mejores ventas)</p>
      </div>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <li key={p.id}>
            <Link href={`/products/${p.handle}`} className="group block bg-white shadow-sm transition hover:shadow-md">
              <div className="relative aspect-square w-full overflow-hidden bg-cream">
                {p.featuredImage?.url ? (
                  <Image
                    src={p.featuredImage.url}
                    alt={p.featuredImage.altText ?? p.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                    sizes="(max-width:640px) 50vw, 25vw"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-sm text-muted">Sin imagen</div>
                )}
              </div>
              <div className="border-t border-line/60 p-4">
                <h3 className="font-serif text-base font-normal leading-snug text-muted group-hover:text-rose">{p.title}</h3>
                <p className="mt-2 font-serif text-lg text-sage">
                  {formatMoney(p.priceRange.minVariantPrice.amount, p.priceRange.minVariantPrice.currencyCode)}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
