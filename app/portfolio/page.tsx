import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Portfolio | Event Guru',
  description: 'See past events served by Event Guru across Toronto, Mississauga, Brampton, Oakville and the GTA. Weddings, corporate events, birthday parties, baby showers and more.',
  alternates: { canonical: 'https://www.youreventguru.ca/portfolio' },
}

const events = [
  { img: '/images/events/event-venue-setup-toronto.jpg', title: 'Outdoor Wedding Reception', location: 'Toronto, ON', type: 'Wedding' },
  { img: '/images/events/photo-strip-corporate-ai.png', title: 'Corporate Networking Event', location: 'Mississauga, ON', type: 'Corporate Event' },
  { img: '/images/events/tent-event-setup-toronto.jpg', title: 'Tent Gala Event', location: 'Oakville, ON', type: 'Private Party' },
  { img: '/images/events/wedding-event-setup-gta.jpg', title: 'Garden Wedding', location: 'Brampton, ON', type: 'Wedding' },
  { img: '/images/events/tent-banquet-setup-gta.jpg', title: 'Banquet Dinner', location: 'Toronto, ON', type: 'Corporate Event' },
  { img: '/images/events/event-catering-staff-toronto.jpg', title: 'Catering Event', location: 'Scarborough, ON', type: 'Private Party' },
  { img: '/images/events/photo-strip-birthday-ai.png', title: 'Outdoor Birthday Party', location: 'Mississauga, ON', type: 'Birthday Party' },
  { img: '/images/events/photo-strip-bridal-ai.png', title: 'Bridal Shower', location: 'Oakville, ON', type: 'Bridal Shower' },
  { img: '/images/events/photo-strip-casual-ai.png', title: 'Family Gathering', location: 'Brampton, ON', type: 'Private Party' },
]

export default function PortfolioPage() {
  return (
    <>
      {/* HERO */}
      <section style={{
        backgroundColor: '#0F0F0F',
        paddingTop: '160px',
        paddingBottom: '80px',
        paddingLeft: '60px',
        paddingRight: '60px',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '11px',
          color: '#C9A96E',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          marginBottom: '20px',
        }}>Our Work</p>
        <h1 style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          fontWeight: 300,
          color: '#FFFFFF',
          lineHeight: 1.1,
          marginBottom: '20px',
        }}>Events We've Had the Honour of Serving</h1>
        <p style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '15px',
          fontWeight: 300,
          color: 'rgba(255,255,255,0.55)',
          lineHeight: 1.9,
          maxWidth: '480px',
          margin: '0 auto',
        }}>
          From backyard birthday parties to large corporate events —
          here's a look at some of the events our team has served
          across Toronto and the GTA.
        </p>
      </section>

      {/* GRID */}
      <section style={{ backgroundColor: '#F2EFE9', padding: '80px 60px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1px',
            backgroundColor: '#D4CFC8',
          }}>
            {events.map((event, i) => (
              <div key={i} style={{ backgroundColor: '#F2EFE9', overflow: 'hidden' }}>
                <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
                  <Image
                    src={event.img}
                    alt={`${event.title} - Event Guru ${event.location}`}
                    fill
                    style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
                    quality={85}
                  />
                </div>
                <div style={{ padding: '24px' }}>
                  <span style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '10px',
                    color: '#C9A96E',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                  }}>{event.type}</span>
                  <h3 style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '1.3rem',
                    color: '#0F0F0F',
                    fontWeight: 400,
                    marginTop: '8px',
                    marginBottom: '4px',
                  }}>{event.title}</h3>
                  <p style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '12px',
                    color: '#9B9B9B',
                    fontWeight: 300,
                  }}>{event.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        backgroundColor: '#0F0F0F',
        padding: '100px 60px',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          fontWeight: 300,
          color: '#FFFFFF',
          marginBottom: '20px',
        }}>Want us at your next event?</h2>
        <p style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '14px',
          color: 'rgba(255,255,255,0.5)',
          lineHeight: 1.9,
          fontWeight: 300,
          maxWidth: '400px',
          margin: '0 auto 40px',
        }}>Get in touch and we'll get back to you within 12 hours.</p>
        <Link href="/contact" style={{
          backgroundColor: '#C9A96E',
          color: '#0F0F0F',
          fontFamily: 'var(--font-inter)',
          fontSize: '11px',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          padding: '16px 36px',
          textDecoration: 'none',
          display: 'inline-block',
        }}>Get a Free Quote</Link>
      </section>
    </>
  )
}