"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

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
      className={`sticky top-0 z-50 flex items-center justify-between gap-4 border-b border-black/[.08] bg-white/80 px-6 py-6 backdrop-blur-md transition-shadow duration-300 sm:px-16 dark:border-white/[.145] dark:bg-black/80 ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <Link
        href="/"
        className="text-lg font-semibold tracking-tight text-black dark:text-zinc-50"
      >
        GemCode
      </Link>
      <ul className="hidden items-center gap-8 text-base font-medium text-black md:flex dark:text-zinc-50">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/events">Events</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        <Link
          href="/contact"
          className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
        >
          Book Now
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
