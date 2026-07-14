"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#speaking", label: "Speaking" },
  { href: "#workshops", label: "Workshops" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 flex items-center justify-between gap-4 bg-white px-6 py-4 transition-shadow duration-300 sm:px-10 ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <Link href="/authority-agency" aria-label="The Authority Agency">
        <Image
          src="/assets/aa-logo.png"
          alt="The Authority Agency"
          width={175}
          height={91}
          className="h-10 w-auto"
          priority
        />
      </Link>
      <ul className="hidden items-center gap-8 text-sm font-semibold text-neutral-700 md:flex">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a className="transition-colors hover:text-authority-navy" href={link.href}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="rounded-full bg-authority-green px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-authority-green-dark"
      >
        Book a Speaking Call
      </a>
    </nav>
  );
}
