import type { Metadata } from "next";
import { Karla, Lora } from "next/font/google";
import "./globals.css";
import { TopShippingBar, PromoTicker, SeasonalNotice } from "@/components/layout/TopBars";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

const karla = Karla({
  subsets: ["latin", "latin-ext"],
  variable: "--font-karla",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin", "latin-ext"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MARTABGE — Papelería bonita. Regalos originales",
  description:
    "Papelería ilustrada, textiles, papeles pintados, detalles de boda, láminas decorativas y más. Tienda headless con Shopify.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${karla.variable} ${lora.variable}`}>
      <body className="min-h-screen font-sans">
        <TopShippingBar />
        <PromoTicker />
        <SiteHeader />
        <SeasonalNotice />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
