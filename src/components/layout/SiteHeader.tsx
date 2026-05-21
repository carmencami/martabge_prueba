"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, ShoppingBag, User, X } from "lucide-react";
import type { NavItem } from "@/data/navigation";
import { shopMenu, topLinks } from "@/data/navigation";

function NavDropdown({ items, depth = 0 }: { items: NavItem[]; depth?: number }) {
  return (
    <ul className={depth === 0 ? "min-w-[220px] py-2" : "left-full top-0 min-w-[200px] py-2"}>
      {items.map((item) => (
        <li key={item.label} className="group/sub relative">
          <Link
            href={item.href}
            className="flex items-center justify-between gap-3 whitespace-nowrap px-5 py-2 text-sm text-ink hover:bg-cream hover:text-rose"
          >
            <span>{item.label}</span>
            {item.children && item.children.length > 0 && (
              <ChevronDown className="h-3 w-3 shrink-0 -rotate-90 text-muted" />
            )}
          </Link>
          {item.children && item.children.length > 0 && (
            <div className="pointer-events-none invisible absolute left-full top-0 z-30 pl-1 opacity-0 transition group-hover/sub:pointer-events-auto group-hover/sub:visible group-hover/sub:opacity-100">
              <div className="rounded-md bg-white py-1 shadow-menu">
                <NavDropdown items={item.children} depth={depth + 1} />
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

function MobileNavTree({ items, onNavigate }: { items: NavItem[]; onNavigate: () => void }) {
  return (
    <ul className="space-y-1 border-t border-line/60 py-3">
      {items.map((item) => (
        <li key={item.label}>
          <Link
            href={item.href}
            onClick={onNavigate}
            className="block rounded-md px-3 py-2 text-sm text-ink hover:bg-cream"
          >
            {item.label}
          </Link>
          {item.children && item.children.length > 0 && (
            <div className="ml-3 border-l border-line/80 pl-3">
              <MobileNavTree items={item.children} onNavigate={onNavigate} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto grid max-w-[1200px] grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3 md:grid-cols-[1fr_auto_1fr] md:px-[5%]">
        <div className="flex items-center gap-2 justify-self-start md:gap-6">
          <button
            type="button"
            className="rounded-md p-2 text-rose md:hidden"
            aria-label="Abrir menú"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
          <nav className="hidden gap-5 text-[13px] font-medium uppercase tracking-wide text-muted md:flex">
            {topLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-rose">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <Link href="/" className="justify-self-center text-center">
          <span className="font-serif text-2xl font-light tracking-[0.12em] text-rose-soft md:text-3xl">MARTABGE</span>
        </Link>

        <div className="flex items-center justify-end gap-1 md:gap-3">
          <Link
            href="/account"
            className="hidden rounded-full p-2 text-rose hover:bg-cream md:inline-flex"
            aria-label="Mi cuenta"
          >
            <User className="h-5 w-5" />
          </Link>
          <Link
            href="/cart"
            className="inline-flex items-center gap-1 rounded-full p-2 text-rose hover:bg-cream"
            aria-label="Carrito"
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="hidden text-sm font-medium text-sage lg:inline">0</span>
          </Link>
        </div>
      </div>

      <div className="hidden border-t border-line/60 bg-white md:block">
        <div className="mx-auto flex max-w-[1200px] justify-center px-[5%] py-2">
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-1 text-[13px] font-semibold uppercase tracking-[0.06em] text-ink">
            <div className="group relative">
              <span className="inline-flex cursor-default items-center gap-1 py-2 text-rose">
                SHOP
                <ChevronDown className="h-3 w-3" />
              </span>
              <div className="pointer-events-none invisible absolute left-0 top-full z-30 pt-1 opacity-0 transition group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100">
                <div className="rounded-md bg-white py-1 shadow-menu">
                  <NavDropdown items={shopMenu} />
                </div>
              </div>
            </div>
            <Link href="/collections/papeles-pintados" className="py-2 hover:text-rose">
              PAPELES PINTADOS
            </Link>
            <Link href="/collections/ninos-y-mamas" className="py-2 hover:text-rose">
              DETALLES NIÑOS Y MAMÁS
            </Link>
            <Link href="/collections/bodas" className="py-2 hover:text-rose">
              BODAS
            </Link>
            <Link href="/collections/laminas" className="py-2 hover:text-rose">
              LÁMINAS
            </Link>
          </nav>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label="Cerrar menú"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative flex h-full w-[88%] max-w-sm flex-col bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-line px-4 py-3">
              <span className="font-serif text-lg text-rose-soft">Menú</span>
              <button type="button" className="rounded-md p-2 text-rose" onClick={() => setMobileOpen(false)} aria-label="Cerrar">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-4 pb-8">
              <button
                type="button"
                onClick={() => setShopOpen(!shopOpen)}
                className="flex w-full items-center justify-between border-b border-line py-3 text-left font-semibold text-rose"
              >
                SHOP
                <ChevronDown className={`h-4 w-4 transition ${shopOpen ? "rotate-180" : ""}`} />
              </button>
              {shopOpen && <MobileNavTree items={shopMenu} onNavigate={() => setMobileOpen(false)} />}
              <div className="space-y-1 border-b border-line py-3">
                <Link href="/collections/papeles-pintados" className="block py-2 text-sm" onClick={() => setMobileOpen(false)}>
                  PAPELES PINTADOS
                </Link>
                <Link href="/collections/ninos-y-mamas" className="block py-2 text-sm" onClick={() => setMobileOpen(false)}>
                  DETALLES NIÑOS Y MAMÁS
                </Link>
                <Link href="/collections/bodas" className="block py-2 text-sm" onClick={() => setMobileOpen(false)}>
                  BODAS
                </Link>
                <Link href="/collections/laminas" className="block py-2 text-sm" onClick={() => setMobileOpen(false)}>
                  LÁMINAS
                </Link>
              </div>
              <div className="space-y-2 py-4">
                {topLinks.map((l) => (
                  <Link key={l.href} href={l.href} className="block text-sm text-muted" onClick={() => setMobileOpen(false)}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
