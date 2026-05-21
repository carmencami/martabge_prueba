export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

/** Estructura alineada con el menú SHOP de martabge.com (rutas tipo Shopify: /collections/...) */
export const shopMenu: NavItem[] = [
  { label: "REGALOS PARA MAMÁ💞", href: "/collections/regalos-para-mama" },
  { label: "PAPELERÍA", href: "/collections/papeleria" },
  {
    label: "COLECCIONES",
    href: "/collections/papeleria",
    children: [
      { label: "TODAS", href: "/collections/todas" },
      {
        label: "2026❤️ nonni ❤️",
        href: "/collections/nonni-2026",
        children: [
          { label: "Nonni Todo", href: "/collections/nonni-todo" },
          { label: "Nonni Papelería", href: "/collections/nonni-papeleria" },
          { label: "Nonni Packs", href: "/collections/nonni-packs" },
          { label: "Nonni Textiles", href: "/collections/nonni-textiles" },
          { label: "Nonni Accesorios", href: "/collections/nonni-accesorios" },
          { label: "PACKS REGALO❤️", href: "/collections/nonni-packs-regalo" },
        ],
      },
      { label: "🗝dollhouse🗝", href: "/collections/dollhouse" },
      { label: "🥀mujercitas🥀", href: "/collections/mujercitas" },
    ],
  },
  { label: "PAPELES PINTADOS", href: "/collections/papeles-pintados" },
  { label: "DETALLES NIÑOS Y MAMÁS", href: "/collections/ninos-y-mamas" },
  { label: "BODAS", href: "/collections/bodas" },
  { label: "LAMINAS BONITAS PARA REGALAR", href: "/collections/laminas" },
  { label: "ILUSTRACIONES PERSONALIZADAS", href: "/collections/ilustraciones-personalizadas" },
  { label: "FUNDAS Y CINTAS PARA MÓVIL", href: "/collections/fundas-movil" },
  { label: "TAZAS ESPECIALES", href: "/collections/tazas" },
  { label: "PAPEL REGALO🎁", href: "/collections/papel-regalo" },
];

export const topLinks = [
  { label: "MI CUENTA", href: "/account" },
  { label: "SOBRE MÍ", href: "/pages/sobre-mi" },
];
