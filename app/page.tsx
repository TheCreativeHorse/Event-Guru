import Image from "next/image";
import Link from "next/link";
import HomeClient from "@/components/HomeClient";

export default function HomePage() {
  return (
    <>
      <HomeClient />

      {/* ── HERO ── */}
      <section
        id="hero"
        className="hero-bg"
        style={{
          minHeight: "100vh",
          backgroundImage:
            "url('/images/events/hero-event-venue-ai.png')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          position: "relative",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.65) 40%, rgba(0,0,0,0.35) 100%)",
          }}
        />
        <div className="relative z-10 max-w-[900px] p-6 md:p-[80px_60px]">
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "11px",
              fontWeight: 400,
              color: "#C9A96E",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            Toronto · Mississauga · Brampton · Oakville · GTA
          </p>

          <h1
            className="font-heading mb-7 text-[clamp(2.2rem,8vw,6.5rem)] font-light leading-[1.05] tracking-[-0.01em] text-white md:text-[clamp(3.2rem,7vw,6.5rem)]"
            style={{
              textShadow: "0 2px 20px rgba(0,0,0,0.5)",
            }}
          >
            Need Staff For
            <br />
            Your Event?
            <br />
            <em
              style={{
                fontStyle: "italic",
                color: "rgba(255,255,255,0.85)",
              }}
            >
              We&apos;ve got you covered.
            </em>
          </h1>

          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "16px",
              fontWeight: 300,
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.8,
              maxWidth: "480px",
              marginBottom: "48px",
            }}
          >
            Trained servers, hostesses and valet attendants for birthdays, baby
            showers, bridal parties, school events, corporate networking and
            more. Serving Toronto, Mississauga, Brampton, Oakville and the GTA.
          </p>

          <div className="mb-0 flex w-full flex-col gap-4 md:w-auto md:flex-row md:flex-wrap">
            <Link
              href="/contact"
              className="btn-magnetic hover:bg-[#B8955A] w-full text-center md:w-auto"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "11px",
                fontWeight: 400,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                backgroundColor: "#C9A96E",
                color: "#0F0F0F",
                padding: "18px 40px",
                textDecoration: "none",
                transition: "background 0.3s",
              }}
            >
              Get a Free Quote
            </Link>
            <Link
              href="/services"
              className="btn-magnetic hover:border-white w-full text-center md:w-auto"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "11px",
                fontWeight: 400,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                backgroundColor: "transparent",
                color: "#FFFFFF",
                border: "1px solid rgba(255,255,255,0.35)",
                padding: "18px 40px",
                textDecoration: "none",
                transition: "border-color 0.3s",
              }}
            >
              See What We Do
            </Link>
          </div>

          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "12px",
              color: "rgba(255,255,255,0.45)",
              letterSpacing: "0.15em",
              marginTop: "16px",
            }}
          >
            Serving Toronto, Mississauga, Brampton, Oakville &amp; the GTA ·
            Available 7 days a week
          </p>

          <div
            className="mt-8 grid w-full gap-x-6 gap-y-8 border-t border-white/20 pt-8 md:mt-8 md:w-fit md:gap-0"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
            }}
          >
            {[
              { value: "50+", label: "Events Completed" },
              { value: "12hr", label: "Quote Response" },
              { value: "4", label: "Cities Served" },
              { value: "25+", label: "Staff On Call" },
            ].map((stat, i) => (
              <div
                key={i}
                className={
                  i < 3
                    ? "md:border-r md:border-white/20 md:pr-10 md:mr-10"
                    : ""
                }
              >
                <div
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "2rem",
                    color: "#FFFFFF",
                    lineHeight: 1,
                  }}
                >
                  <span>{stat.value}</span>
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "10px",
                    color: "rgba(255,255,255,0.55)",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    marginTop: "8px",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <section
        style={{
          backgroundColor: "#1A1A1A",
          overflow: "hidden",
          borderTop: "1px solid rgba(201,169,110,0.12)",
          borderBottom: "1px solid rgba(201,169,110,0.12)",
          padding: "18px 0",
        }}
      >
        <div className="animate-marquee">
          {[1, 2].map((n) => (
            <span
              key={n}
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "11px",
                fontWeight: 400,
                color: "rgba(255,255,255,0.4)",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                paddingRight: "4rem",
              }}
            >
              Weddings &nbsp;·&nbsp; Corporate Events &nbsp;·&nbsp; Private
              Parties &nbsp;·&nbsp; Valet Parking &nbsp;·&nbsp; Serving Staff
              &nbsp;·&nbsp; Hostess Services &nbsp;·&nbsp; Toronto &nbsp;·&nbsp;
              Mississauga &nbsp;·&nbsp; Brampton &nbsp;·&nbsp; Oakville
              &nbsp;·&nbsp; GTA &nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </section>

      {/* ── BOLD STATEMENT ── */}
      <section className="overflow-hidden bg-[#F2EFE9] px-6 py-16 md:px-[60px] md:py-[100px]">
        <div className="mx-auto max-w-[1200px]">
          <p
            className="reveal"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "11px",
              fontWeight: 400,
              color: "#C9A96E",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "32px",
            }}
          >
            What We Do
          </p>
          <h2
            className="reveal max-w-[900px] border-l-0 pl-0 font-heading text-[clamp(2.8rem,6vw,5.5rem)] font-light leading-[1.05] text-[#0F0F0F] md:border-l-2 md:border-[#C9A96E] md:pl-8"
          >
            You&apos;re planning something special.
            <br />
            <span style={{ color: "#6B6B6B", fontStyle: "italic" }}>
              Let&apos;s make sure it goes smoothly.
            </span>
          </h2>
          <p
            className="reveal reveal-delay-1 mt-10 max-w-[520px] pl-0 font-sans text-[15px] font-light leading-[1.9] text-[#6B6B6B] md:pl-8"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Whether it&apos;s a birthday party for 30 or a corporate networking
            event for 150 — Event Guru provides friendly, professional staff who
            show up on time, look the part, and get the job done. No stress. No
            last-minute scrambles.
          </p>
        </div>
      </section>

      {/* ── SERVICE CARDS ── */}
      <section className="bg-[#F2EFE9] px-6 pb-16 md:px-[60px] md:pb-[120px]">
        <div
          className="mx-auto grid max-w-[1200px] gap-px bg-[#D4CFC8]"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          {[
            {
              num: "01",
              img: "/images/events/event-staffing-team-ai.png",
              title: "Event Staffing",
              desc: "Servers, setup crew and cleanup staff who show up on time, in uniform, and ready to work. No micromanaging required.",
              href: "/services/event-staffing",
              alt: "Professional event staffing team Toronto GTA",
            },
            {
              num: "02",
              img: "/images/events/banquet-event-staffing-toronto.jpg",
              title: "Serving Staff & Hostess",
              desc: "Friendly, well-presented servers and hostesses who greet guests, serve food and drinks, and keep everything running smoothly throughout your event.",
              href: "/services/event-staffing/serving-staff",
              alt: "Event serving staff and hostess team Toronto",
            },
            {
              num: "03",
              img: "/images/events/valet-parking-toronto.jpg",
              title: "Valet Parking",
              desc: "Uniformed valet attendants who park and retrieve vehicles efficiently — so your guests arrive stress-free and your venue stays organized.",
              href: "/services/valet-parking",
              alt: "Valet parking service Toronto Mississauga GTA",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                backgroundColor: "#F2EFE9",
                transition: "border-bottom 0.3s",
              }}
            >
              <div
                className="home-zoom-wrap"
                style={{ position: "relative", height: "300px" }}
              >
                <Image
                  src={card.img}
                  alt={card.alt}
                  fill
                  className="home-zoom-img"
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              </div>
              <div style={{ padding: "36px 32px" }}>
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "10px",
                    color: "#C9A96E",
                    letterSpacing: "0.25em",
                  }}
                >
                  {card.num}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.6rem",
                    color: "#0F0F0F",
                    fontWeight: 400,
                    marginTop: "8px",
                    marginBottom: "12px",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "13px",
                    color: "#6B6B6B",
                    lineHeight: 1.9,
                    fontWeight: 300,
                  }}
                >
                  {card.desc}
                </p>
                <Link
                  href={card.href}
                  className="hover:text-[#C9A96E] hover:border-[#C9A96E]"
                  style={{
                    display: "inline-block",
                    marginTop: "24px",
                    fontFamily: "var(--font-inter)",
                    fontSize: "11px",
                    color: "#0F0F0F",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    borderBottom: "1px solid #0F0F0F",
                    paddingBottom: "2px",
                    transition: "color 0.2s, border-color 0.2s",
                  }}
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── DIAMOND DIVIDER ── */}
      <div style={{ backgroundColor: "#F2EFE9", paddingBottom: "80px" }}>
        <div className="divider-diamond">
          <span />
        </div>
      </div>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-white px-6 py-16 md:px-[60px] md:py-[120px]">
        <div className="mx-auto max-w-[1200px]">
          <p
            className="reveal"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "11px",
              color: "#C9A96E",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            The Process
          </p>
          <h2
            className="reveal"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 300,
              color: "#0F0F0F",
              marginBottom: "80px",
            }}
          >
            Book in minutes.
            <br />
            Show up to a great event.
          </h2>

          <div
            className="grid gap-12 md:gap-16 lg:gap-20 xl:gap-[80px]"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            }}
          >
            {[
              {
                n: "01",
                title: "Tell Us About Your Event",
                desc: "Give us a call or fill out our form at least one week before your event. Tell us your date, location, guest count, and how many staff you need. That's it.",
              },
              {
                n: "02",
                title: "We Confirm Your Team",
                desc: "Within 12 hours we'll send you a quote and confirm your staff. We match the right people to your event type — whether it's a baby shower or a 200-person networking event.",
              },
              {
                n: "03",
                title: "Enjoy Your Event",
                desc: "Our Team shows up on time, in uniform, ready to work. You focus on your guests. We handle everything else.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1}`}
                style={{ position: "relative" }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "7rem",
                    color: "#F2EFE9",
                    lineHeight: 1,
                    position: "absolute",
                    top: "-20px",
                    left: "-10px",
                    userSelect: "none",
                    zIndex: 0,
                  }}
                >
                  {step.n}
                </div>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "10px",
                      color: "#C9A96E",
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      marginBottom: "12px",
                    }}
                  >
                    Step {step.n}
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "1.5rem",
                      color: "#0F0F0F",
                      fontWeight: 400,
                      marginBottom: "16px",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "13px",
                      color: "#6B6B6B",
                      lineHeight: 1.9,
                      fontWeight: 300,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPLIT — WHY EVENT GURU ── */}
      <section
        className="grid min-h-0 md:min-h-[600px]"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}
      >
        <div className="relative min-h-[300px] overflow-hidden md:min-h-[600px]">
          <Image
            src="/images/events/event-staff-team-toronto.jpg"
            alt="Event staff team Toronto GTA"
            fill
            quality={90}
            style={{ objectFit: "cover", objectPosition: "center top" }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-col justify-center bg-[#0F0F0F] px-6 py-10 md:p-20 md:px-[72px]">
          <p
            className="reveal"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "11px",
              color: "#C9A96E",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Why Event Guru
          </p>
          <h2
            className="reveal"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 300,
              color: "#FFFFFF",
              lineHeight: 1.2,
              marginBottom: "24px",
            }}
          >
            Staff that shows up ready to work — not just ready to be told what
            to do.
          </h2>
          <p
            className="reveal"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "13px",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.9,
              fontWeight: 300,
              maxWidth: "360px",
              marginBottom: "40px",
            }}
          >
            Every person we send is briefed on your event beforehand. They know
            the timeline, the setup, and what&apos;s expected. You won&apos;t be
            babysitting staff on your own event day.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              marginBottom: "48px",
            }}
          >
            {[
              "Professional, presentable staff for any event type",
              "Available for birthdays, baby showers, bridal parties, school events and corporate",
              "Flexible, book 1 staff member or 20",
              "Serving Toronto, Mississauga, Brampton, Oakville and all of GTA",
            ].map((point, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1}`}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                }}
              >
                <span
                  style={{
                    color: "#C9A96E",
                    fontSize: "8px",
                    marginTop: "6px",
                    flexShrink: 0,
                  }}
                >
                  ●
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.65)",
                    lineHeight: 1.7,
                    fontWeight: 300,
                  }}
                >
                  {point}
                </span>
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="hover:bg-[#C9A96E] hover:border-[#C9A96E] hover:text-[#0F0F0F]"
            style={{
              display: "inline-block",
              alignSelf: "flex-start",
              fontFamily: "var(--font-inter)",
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              border: "1px solid rgba(255,255,255,0.25)",
              padding: "16px 32px",
              textDecoration: "none",
              transition: "all 0.3s",
            }}
          >
            Get in Touch →
          </Link>
        </div>
      </section>

      {/* ── PHOTO STRIP ── */}
      <div
        className="grid h-[200px] md:h-[380px]"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        }}
      >
        {[
          {
            src: "/images/events/photo-strip-birthday-ai.png",
            alt: "Birthday celebration event",
            label: "BIRTHDAY & PRIVATE PARTIES",
          },
          {
            src: "/images/events/photo-strip-corporate-ai.png",
            alt: "Corporate event",
            label: "CORPORATE EVENTS",
          },
          {
            src: "/images/events/photo-strip-casual-ai.png",
            alt: "Casual gathering event",
            label: "FAMILY GATHERINGS",
          },
          {
            src: "/images/events/photo-strip-bridal-ai.png",
            alt: "Bridal celebration event",
            label: "BRIDAL & BABY SHOWERS",
          },
        ].map((photo, i) => (
          <div
            key={i}
            className="home-zoom-wrap-wide relative overflow-hidden"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="home-zoom-img"
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 2,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)",
                padding: "16px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "11px",
                  fontWeight: 400,
                  color: "#FFFFFF",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  display: "block",
                }}
              >
                {photo.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ── TESTIMONIALS ── */}
      <section
        style={{ backgroundColor: "#F2EFE9", padding: "120px 60px" }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="divider-diamond" style={{ marginBottom: "64px" }}>
            <span />
          </div>
          <p
            className="reveal"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "11px",
              color: "#C9A96E",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "16px",
              textAlign: "center",
            }}
          >
            Client Reviews
          </p>
          <h2
            className="reveal"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
              fontWeight: 300,
              color: "#0F0F0F",
              textAlign: "center",
              marginBottom: "72px",
            }}
          >
            What hosts across the GTA say.
          </h2>

          <div
            className="grid gap-8 md:gap-8"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            }}
          >
            {[
              {
                text: "We hired Event Guru for my daughter&apos;s birthday party — 2 servers for 4 hours. They were on time, friendly, and cleaned up at the end. My guests kept asking where I found them.",
                name: "Fatima R.",
                event: "Birthday Party · Mississauga",
              },
              {
                text: "Used them for a small networking event at our office. 20 people, 3 hours. The hostess was professional and made everyone feel welcome. Exactly what we needed.",
                name: "Daniel K.",
                event: "Corporate Event · Toronto",
              },
              {
                text: "Booked 2 servers for my bridal shower in Oakville. They handled everything — setup, serving, cleanup. Made the whole day so much easier. Would 100% use again.",
                name: "Aisha M.",
                event: "Bridal Shower · Oakville",
              },
            ].map((review, i) => (
              <div
                key={i}
                className={`home-review-card reveal reveal-delay-${i + 1} w-full bg-white p-8 md:p-12 md:px-10`}
              >
                <div
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "4rem",
                    color: "#C9A96E",
                    lineHeight: 0.6,
                    marginBottom: "32px",
                  }}
                >
                  &ldquo;
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "14px",
                    color: "#2A2A2A",
                    lineHeight: 1.9,
                    fontWeight: 300,
                  }}
                >
                  {review.text}
                </p>
                <div
                  style={{
                    marginTop: "32px",
                    paddingTop: "24px",
                    borderTop: "1px solid #E5E0D8",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "13px",
                      color: "#0F0F0F",
                      fontWeight: 500,
                    }}
                  >
                    {review.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "11px",
                      color: "#9B9B9B",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginTop: "4px",
                    }}
                  >
                    {review.event}
                  </p>
                  <p
                    style={{
                      color: "#C9A96E",
                      fontSize: "12px",
                      marginTop: "12px",
                    }}
                  >
                    ★★★★★
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CITIES ── */}
      <section className="bg-[#F2EFE9] px-6 py-16 md:px-[60px] md:py-20">
        <div
          className="mx-auto grid max-w-[1200px] gap-12 border-t border-[#E5E0D8] pt-12 md:gap-20 md:items-start md:pt-[72px]"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "11px",
                color: "#C9A96E",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Service Area
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 300,
                color: "#0F0F0F",
                lineHeight: 1.2,
              }}
            >
              Wherever your event is,
              <br />
              we&apos;re already on our way.
            </h2>
          </div>
          <div>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "13px",
                color: "#6B6B6B",
                lineHeight: 1.9,
                fontWeight: 300,
                marginBottom: "28px",
              }}
            >
              Event Guru serves clients across the Greater Toronto Area.
              Whether your event is downtown or in the suburbs, our team travels
              to you.
            </p>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "15px",
                color: "#0F0F0F",
                lineHeight: 2.2,
                fontWeight: 400,
              }}
            >
              Toronto · Mississauga · Brampton · Oakville · Scarborough · North
              York · Vaughan · Milton · Etobicoke
            </p>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative overflow-hidden bg-[#0F0F0F] px-6 py-24 text-center md:px-[60px] md:py-40">
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="divider-diamond" style={{ marginBottom: "48px" }}>
            <span />
          </div>
          <h2
            className="reveal mb-6 font-heading text-[clamp(2rem,5vw,5.5rem)] font-light leading-[1.1] text-white md:mb-6 md:text-[clamp(3rem,6vw,5.5rem)]"
          >
            Your guests deserve
            <br />
            a great experience.
            <br />
            <em
              style={{
                color: "rgba(255,255,255,0.5)",
                fontStyle: "italic",
              }}
            >
              Let&apos;s make sure they get one.
            </em>
          </h2>
          <p
            className="reveal mx-auto mb-10 max-w-[440px] px-2 font-sans text-sm font-light leading-[1.9] text-white/40 md:mb-14 md:text-base"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Contact us for a free quote. We serve weddings, corporate events,
            private parties and more across Toronto and the GTA.
          </p>
          <div className="mx-auto flex w-full max-w-md flex-col gap-4 md:max-w-none md:flex-row md:flex-wrap md:justify-center">
            <Link
              href="/contact"
              className="hover:bg-[#B8955A] w-full py-5 text-center md:w-auto md:px-12"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "11px",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                backgroundColor: "#C9A96E",
                color: "#0F0F0F",
                paddingLeft: "48px",
                paddingRight: "48px",
                textDecoration: "none",
                transition: "background 0.3s",
              }}
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+14379872153"
              className="hover:border-white w-full border border-white/20 py-5 text-center md:w-auto md:px-12"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "11px",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                backgroundColor: "transparent",
                color: "#FFFFFF",
                textDecoration: "none",
                transition: "border-color 0.3s",
              }}
            >
              Call +1 (437) 987-2153
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
