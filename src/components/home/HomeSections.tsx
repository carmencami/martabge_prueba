import Image from "next/image";
import Link from "next/link";

const colecciones = [
  {
    title: "Nonni — abuelos",
    href: "/collections/nonni-2026",
    img: "https://i0.wp.com/martabge.com/wp-content/uploads/2025/11/calendario-pared-2026-ilustrado-flores-punto-de-cruz-nonni-martabge-4.jpg?fit=600%2C800&ssl=1",
  },
  {
    title: "Dollhouse",
    href: "/collections/dollhouse",
    img: "https://i0.wp.com/martabge.com/wp-content/uploads/2024/11/taza-ceramica-artesanal-flores-vintage-te-martabge-dollhouse-4-e1756198230801.jpg?fit=600%2C800&ssl=1",
  },
  {
    title: "Mujercitas",
    href: "/collections/mujercitas",
    img: "https://i0.wp.com/martabge.com/wp-content/uploads/2025/11/Estuche-flores-punto-de-cruz-nonni-martabge-3.jpg?fit=600%2C800&ssl=1",
  },
  {
    title: "Cottage",
    href: "/collections/papeleria",
    img: "https://i0.wp.com/martabge.com/wp-content/uploads/2025/03/20250123_101916-scaled.jpg?fit=600%2C800&ssl=1",
  },
];

const categoriasIcono = [
  { label: "Papelería ilustrada", href: "/collections/papeleria" },
  { label: "Textiles", href: "/collections/textiles" },
  { label: "Papeles pintados", href: "/collections/papeles-pintados" },
  { label: "Detalles de boda", href: "/collections/bodas" },
  { label: "Detalles niños y mamás", href: "/collections/ninos-y-mamas" },
  { label: "Fundas de móvil de flores", href: "/collections/fundas-movil" },
  { label: "Tazas especiales", href: "/collections/tazas" },
  { label: "Láminas bonitas", href: "/collections/laminas" },
];

export function IntroLead() {
  return (
    <section className="mx-auto max-w-[720px] px-4 py-10 text-center md:py-14">
      <p className="font-serif text-lg font-light leading-relaxed text-sage md:text-xl">
        Papelería y pequeños objetos pensados para acompañar con calma.
      </p>
      <p className="mt-4 font-serif text-2xl font-light text-rose-soft md:text-3xl">Lo bonito del día a día</p>
    </section>
  );
}

export function ColeccionesGrid() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 pb-12 md:px-[5%]">
      <div className="mb-8 flex flex-col items-center gap-2 text-center">
        <h2 className="font-serif text-2xl font-light uppercase tracking-wide text-rose-soft md:text-3xl">Colecciones</h2>
        <Link href="/collections/todas" className="text-sm font-semibold uppercase tracking-wide text-rose underline-offset-4 hover:underline">
          Ver todo
        </Link>
      </div>
      <p className="mb-8 text-center font-serif text-lg text-muted">Nueva colección Nonni 2026❤️</p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {colecciones.map((c) => (
          <Link key={c.title} href={c.href} className="group block overflow-hidden bg-white shadow-sm transition hover:shadow-md">
            <div className="relative aspect-[3/4] w-full">
              <Image src={c.img} alt="" fill className="object-cover transition duration-500 group-hover:scale-[1.03]" sizes="(max-width:640px) 100vw, 25vw" unoptimized />
            </div>
            <div className="border-t border-line/80 px-3 py-4 text-center">
              <span className="font-serif text-lg text-rose-soft">{c.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function FeaturedMaternidad() {
  return (
    <section className="mx-auto grid max-w-[1200px] gap-10 px-4 py-14 md:grid-cols-2 md:items-center md:gap-14 md:px-[5%]">
      <div className="relative aspect-[4/5] max-h-[520px] w-full overflow-hidden bg-white shadow-sm">
        <Image
          src="https://i0.wp.com/martabge.com/wp-content/uploads/2024/04/lamina-decorativa-madre-hija-lactancia-scaled-e1756198641849.jpg?fit=800%2C1000&ssl=1"
          alt="Lámina maternidad"
          fill
          className="object-cover"
          sizes="(max-width:768px) 100vw, 50vw"
          unoptimized
        />
      </div>
      <div>
        <h2 className="font-serif text-3xl font-light text-rose-soft md:text-4xl">Mamá, eres suficiente</h2>
        <p className="mt-6 text-sm leading-relaxed text-sage md:text-base">
          Hay etapas de la vida que pasan rápido, pero que después recordamos para siempre.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-sage md:text-base">
          Esta lámina ilustrada de maternidad te permite crear un pequeño retrato de tu familia, eligiendo el número de hijos y
          algunos detalles para que se parezca a vosotros.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-sage md:text-base">
          Un recuerdo delicado de este momento de la vida que algún día mirarás hacia atrás con emoción❤
        </p>
        <Link
          href="/products/lamina-personalizada-maternidad"
          className="mt-8 inline-block border border-rose bg-rose px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-rose-soft"
        >
          Personaliza tu lámina de maternidad
        </Link>
      </div>
    </section>
  );
}

export function FeaturedComunion() {
  return (
    <section className="border-y border-line/80 bg-white/60 py-14">
      <div className="mx-auto flex max-w-[1200px] flex-col-reverse items-center gap-10 px-4 md:flex-row md:gap-14 md:px-[5%]">
        <div className="flex-1 text-center md:text-left">
          <h2 className="font-serif text-3xl font-light text-rose-soft md:text-4xl">Primera Comunión</h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-sage md:mx-0 md:text-base">
            Elegir qué regalar ese día no es solo elegir algo bonito, es elegir algo que acompañe.{" "}
            <span className="font-semibold text-rose/90">UN SÍMBOLO DE FE</span>, un recuerdo que se quedará en casa durante
            años.
          </p>
          <Link href="/collections/ninos-y-mamas" className="mt-8 inline-block text-sm font-bold uppercase tracking-wide text-rose underline-offset-4 hover:underline">
            Detalles de Comunión
          </Link>
        </div>
        <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden bg-white shadow-sm">
          <Image
            src="https://i0.wp.com/martabge.com/wp-content/uploads/2026/03/comuniones-martabge.jpeg?fit=800%2C1000&ssl=1"
            alt="Primera Comunión"
            fill
            className="object-cover"
            sizes="(max-width:768px) 100vw, 400px"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}

export function CategoriaPills() {
  return (
    <section className="mx-auto max-w-[1100px] px-4 py-12 md:px-[5%]">
      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        {categoriasIcono.map((c) => (
          <Link
            key={c.label}
            href={c.href}
            className="rounded-full border border-rose/35 bg-white px-5 py-2.5 text-center font-serif text-sm font-normal text-rose transition hover:border-rose hover:bg-cream md:text-base"
          >
            {c.label}
          </Link>
        ))}
      </div>
    </section>
  );
}

export function NewsletterBlock() {
  return (
    <section className="border-t border-line/80 bg-cream py-14">
      <div className="mx-auto max-w-[560px] px-4 text-center">
        <h2 className="font-serif text-2xl font-light text-rose-soft md:text-3xl">Regalo de bienvenida</h2>
        <p className="mt-2 font-serif text-xl text-muted">¿Te quedas?</p>
        <p className="mt-4 text-sm leading-relaxed text-sage">
          Newsletter bonitas, reflexiones, descuentos… y cosas de la vida❤
        </p>
        <form className="mt-8 space-y-4 text-left" action="#" method="post">
          <input
            type="email"
            name="email"
            required
            placeholder="Tu email"
            className="w-full rounded-md border border-rose/40 bg-white px-4 py-3 text-sm text-ink outline-none ring-rose/20 focus:ring-2"
          />
          <label className="flex items-start gap-2 text-xs leading-snug text-muted">
            <input type="checkbox" required className="mt-1 border-rose text-rose" />
            <span>
              He leído y acepto la Política de Privacidad y doy mi consentimiento a MARTABGE para el envío de su newsletter,
              novedades comerciales y/o nuevas promociones de sus servicios.
            </span>
          </label>
          <button
            type="submit"
            className="w-full border border-rose bg-rose py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-rose-soft"
          >
            Suscribirme
          </button>
        </form>
      </div>
    </section>
  );
}
