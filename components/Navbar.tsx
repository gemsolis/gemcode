import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-16 py-6 bg-white dark:bg-black">
      <ul className="flex items-center gap-8 text-base font-medium text-black dark:text-zinc-50">
        <li>
          <Link href="/">Home</Link>
        </li>
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
