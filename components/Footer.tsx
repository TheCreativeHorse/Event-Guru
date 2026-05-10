import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services/event-staffing", label: "Event Staffing" },
  { href: "/services/event-staffing/serving-staff", label: "Serving Staff" },
  { href: "/services/event-staffing/hostess", label: "Hostess" },
  { href: "/services/valet-parking", label: "Valet Parking" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-footer text-offwhite">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          <div className="mb-8 space-y-4 md:mb-0">
            <p className="font-heading text-lg font-semibold tracking-[0.25em] text-gold">
              EVENT GURU
            </p>
            <p className="text-sm font-medium text-gold-light">
              Reliable Event Staff Across Toronto &amp; the GTA
            </p>
            <p className="text-sm leading-relaxed text-offwhite/80">
              Trained servers, hostesses and valet attendants for birthdays,
              baby showers, bridal parties, corporate events and more. Available
              across Toronto, Mississauga, Brampton, Oakville and the GTA.
            </p>
          </div>

          <div className="mb-8 md:mb-0">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gold">
              Quick Links
            </h2>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-offwhite/85 transition hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gold">
              Contact
            </h2>
            <address className="not-italic text-sm leading-relaxed text-offwhite/85">
              <p className="font-medium text-offwhite">Event Guru</p>
              <p>Toronto, Ontario, Canada</p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+14379872153"
                  className="text-gold transition hover:text-gold-light"
                >
                  +1 (437) 987-2153
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:mohammadlokhandwala37@gmail.com"
                  className="text-gold transition hover:text-gold-light"
                >
                  mohammadlokhandwala37@gmail.com
                </a>
              </p>
              <p className="mt-3 text-offwhite/75">
                Serving: Toronto, Mississauga, Brampton, Oakville, Scarborough,
                North York, Vaughan, Milton, Etobicoke
              </p>
            </address>
          </div>
        </div>
      </div>

      <div className="border-t border-gold/15 py-4">
        <p className="text-center text-xs text-midgrey">
          © 2025 Event Guru. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
