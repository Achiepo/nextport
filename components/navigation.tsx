"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/projets", label: "Projets" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour gérer l'ouverture du menu mobile

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b me-5">
      <nav className="container flex h-16 items-center justify-between">
        {/* Menu Hamburger (visible en mode mobile) */}
        <button
          onClick={toggleMenu}
          className="block lg:hidden text-2xl"
          aria-label="Toggle menu"
        >
          &#9776; {/* Symbole hamburger */}
        </button>

        {/* Liens de navigation et Portfolio en mode mobile */}
        <div className="flex-1 flex justify-between items-center">
          {/* Le lien Portfolio visible seulement en mode mobile */}
          <div className="mr-8 lg:hidden">
            <Link href="/" className="text-xl font-bold">
              Portfolio
            </Link>
          </div>
        </div>

        {/* Liens de navigation visibles uniquement en mode bureau (grands écrans) */}

              <div className="mr-8 hidden lg:block">
               <Link href="/" className="text-xl font-bold">
                Portfolio
            </Link>
               </div>

        <div className="lg:flex items-center gap-6  hidden lg:block ">
          <ul className="flex lg:flex-row gap-6 text-center lg:text-left">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-blue-500",
                    pathname === link.href
                      ? "text-foreground"
                      : "text-foreground/60"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Affichage vertical sous l'icône hamburger (mode mobile) */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-center mt-2 bg-white border-t">
          <ul className="w-full flex flex-col gap-4 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === link.href
                      ? "text-foreground"
                      : "text-foreground/60"
                  )}
                  onClick={() => setIsMenuOpen(false)} // Fermer le menu après un clic
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
