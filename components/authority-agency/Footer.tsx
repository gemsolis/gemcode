import Logo from "@/components/authority-agency/Logo";

const LINK_COLUMNS = [
  {
    title: "Quick Links",
    links: [
      { href: "#speaking", label: "Speaking" },
      { href: "#workshops", label: "Workshops" },
      { href: "#about", label: "About" },
      { href: "#contact", label: "Contact" },
    ],
  },
  {
    title: "Authority Profiles",
    links: [
      { href: "#profiles", label: "The Authority Seeker" },
      { href: "#profiles", label: "The Authority Builder" },
      { href: "#profiles", label: "The Authority Leader" },
    ],
  },
  {
    title: "Contact",
    links: [
      { href: "mailto:hello@authorityagency.com", label: "hello@authorityagency.com" },
      { href: "#contact", label: "Book a Speaking Call" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-authority-navy">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-6 py-16 sm:px-10 md:grid-cols-4 lg:px-16">
        <div className="md:col-span-1">
          <Logo variant="white" />
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/50">
            Helping speakers, coaches, and experts turn visibility into a
            predictable Authority Platform.
          </p>
        </div>

        {LINK_COLUMNS.map((column) => (
          <div key={column.title}>
            <p className="text-sm font-semibold text-white">{column.title}</p>
            <ul className="mt-4 space-y-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 px-6 py-6 text-center text-sm text-white/40 sm:px-10 lg:px-16">
        &copy; {new Date().getFullYear()}
        {" "}
        The Authority Agency. All Rights Reserved. &middot;{" "}
        <a href="#" className="hover:text-white">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
