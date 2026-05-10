"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const serviceLinks = [
  { label: "Event Staffing", href: "/services/event-staffing" },
  { label: "Serving Staff", href: "/services/event-staffing/serving-staff" },
  { label: "Hostess Services", href: "/services/event-staffing/hostess" },
  { label: "Valet Parking", href: "/services/valet-parking" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav
      className="relative px-4 md:px-10"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: scrolled
          ? "rgba(10,10,10,0.98)"
          : "rgba(0,0,0,0.75)",
        borderBottom: scrolled
          ? "1px solid rgba(201,169,110,0.15)"
          : "none",
        backdropFilter: scrolled ? "blur(12px)" : "blur(8px)",
        transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      <div
        className="mx-auto flex h-[88px] max-w-[1200px] items-center justify-between"
      >
        <Link href="/" style={{ textDecoration: "none" }} onClick={closeMobile}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: 1,
              whiteSpace: "nowrap",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "26px",
                fontWeight: 600,
                color: "#C9A96E",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              Event Guru
            </span>
            <span
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "9px",
                fontWeight: 300,
                color: "rgba(255,255,255,0.4)",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                marginTop: "3px",
              }}
            >
              Toronto · GTA
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {["Home", "Portfolio"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "13px",
                fontWeight: 400,
                color: "rgba(255,255,255,0.7)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#C9A96E")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.7)")
              }
            >
              {item}
            </Link>
          ))}

          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "13px",
                fontWeight: 400,
                color: "rgba(255,255,255,0.7)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                background: "none",
                border: "none",
                cursor: "pointer",
                transition: "color 0.2s",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#C9A96E")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.7)")
              }
            >
              Services
              <span style={{ fontSize: "8px", opacity: 0.5 }}>▼</span>
            </button>

            {servicesOpen ? (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  paddingTop: "12px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "rgba(10,10,10,0.98)",
                    border: "1px solid rgba(201,169,110,0.15)",
                    backdropFilter: "blur(20px)",
                    padding: "8px 0",
                    minWidth: "220px",
                  }}
                >
                  {serviceLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      style={{
                        display: "block",
                        padding: "12px 24px",
                        fontFamily: "var(--font-inter)",
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.6)",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        textDecoration: "none",
                        transition: "all 0.2s",
                        borderLeft: "2px solid transparent",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#C9A96E";
                        e.currentTarget.style.borderLeftColor = "#C9A96E";
                        e.currentTarget.style.paddingLeft = "28px";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                        e.currentTarget.style.borderLeftColor = "transparent";
                        e.currentTarget.style.paddingLeft = "24px";
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <Link
            href="/contact"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "13px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.7)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "#C9A96E")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(255,255,255,0.7)")
            }
          >
            Contact
          </Link>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <a
            href="tel:+14379872153"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "12px",
              color: "#C9A96E",
              letterSpacing: "0.08em",
              textDecoration: "none",
            }}
          >
            +1 (437) 987-2153
          </a>

          <Link
            href="/contact"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "11px",
              fontWeight: 400,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#0F0F0F",
              backgroundColor: "#C9A96E",
              padding: "12px 24px",
              textDecoration: "none",
              transition: "background 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#B8955A")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#C9A96E")
            }
          >
            Get a Quote
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/contact"
            onClick={closeMobile}
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "10px",
              fontWeight: 400,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#0F0F0F",
              backgroundColor: "#C9A96E",
              padding: "10px 14px",
              textDecoration: "none",
            }}
          >
            GET A QUOTE
          </Link>
          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="relative flex h-10 w-10 shrink-0 items-center justify-center border border-white/25 bg-transparent"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? (
              <>
                <span className="absolute block h-0.5 w-5 rotate-45 bg-white" />
                <span className="absolute block h-0.5 w-5 -rotate-45 bg-white" />
              </>
            ) : (
              <span className="flex flex-col gap-1.5">
                <span className="block h-0.5 w-5 bg-white" />
                <span className="block h-0.5 w-5 bg-white" />
                <span className="block h-0.5 w-5 bg-white" />
              </span>
            )}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="absolute left-0 right-0 top-full border-t border-white/10 bg-[#0F0F0F] md:hidden">
          <Link
            href="/"
            className="block px-6 py-4 font-sans text-xs uppercase tracking-[0.15em] text-white/85"
            style={{ fontFamily: "var(--font-inter)" }}
            onClick={closeMobile}
          >
            Home
          </Link>
          <Link
            href="/portfolio"
            className="block px-6 py-4 font-sans text-xs uppercase tracking-[0.15em] text-white/85"
            style={{ fontFamily: "var(--font-inter)" }}
            onClick={closeMobile}
          >
            Portfolio
          </Link>
          <div
            className="border-t border-white/10 px-6 py-4 font-sans text-[10px] uppercase tracking-[0.2em] text-white/40"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Services
          </div>
          {serviceLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-6 py-4 pl-10 font-sans text-xs uppercase tracking-[0.12em] text-white/75"
              style={{ fontFamily: "var(--font-inter)" }}
              onClick={closeMobile}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block border-t border-white/10 px-6 py-4 font-sans text-xs uppercase tracking-[0.15em] text-white/85"
            style={{ fontFamily: "var(--font-inter)" }}
            onClick={closeMobile}
          >
            Contact
          </Link>
        </div>
      ) : null}
    </nav>
  );
}
