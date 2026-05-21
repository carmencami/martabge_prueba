import Link from "next/link";

const footerCols = [
  {
    title: "PAGOS",
    lines: ["Tarjeta / Bizum / Apple pay / Google pay"],
  },
  {
    title: "ENVÍOS",
    links: [
      { label: "Envíos: tiempos y costes", href: "/pages/envios" },
      { label: "GRATIS A PARTIR DE 69€", href: "/pages/envios" },
      { label: "ENVÍO PENÍNSULA 4,90€", href: "/pages/envios" },
      { label: "ENVÍO BALEARES 9,00€", href: "/pages/envios" },
      { label: "ENVÍO CÓRDOBA 3,80€", href: "/pages/envios" },
      { label: "RECOGIDA EN CÓRDOBA ONLY ONE CENTRO 1€ (frente a Primor)", href: "/pages/envios" },
    ],
  },
  {
    title: "CONÓCEME",
    links: [{ label: "Sobre mí", href: "/pages/sobre-mi" }],
    extra: "martabge®",
  },
  {
    title: "CONTACTO",
    links: [
      { label: "pedidos@martabge.com", href: "mailto:pedidos@martabge.com" },
      { label: "hola@martabge.com", href: "mailto:hola@martabge.com" },
    ],
  },
  {
    title: "INFORMACIÓN",
    links: [
      { label: "Aviso Legal", href: "/pages/aviso-legal" },
      { label: "Política de Privacidad", href: "/pages/privacidad" },
      { label: "Política de Cookies", href: "/pages/cookies" },
      { label: "Envíos y Devoluciones", href: "/pages/envios" },
      { label: "Preguntas frecuentes", href: "/pages/faq" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-16 bg-rose text-white">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-12 md:grid-cols-2 md:px-[5%] lg:grid-cols-5">
        {footerCols.map((col) => (
          <div key={col.title}>
            <h3 className="mb-4 font-sans text-sm font-bold uppercase tracking-wide">{col.title}</h3>
            {"lines" in col &&
              col.lines?.map((line) => (
                <p key={line} className="text-sm leading-relaxed text-white/90">
                  {line}
                </p>
              ))}
            {"links" in col &&
              col.links?.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="mb-2 block text-sm text-white/90 underline-offset-2 hover:underline"
                >
                  {item.label}
                </Link>
              ))}
            {"extra" in col && col.extra && <p className="mt-4 text-sm italic text-white/80">{col.extra}</p>}
          </div>
        ))}
      </div>
      <div className="border-t border-white/20 py-4 text-center text-xs text-white/70">
        © {new Date().getFullYear()} MARTABGE
      </div>
    </footer>
  );
}
