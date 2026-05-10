import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Serving Staff Toronto & GTA | Event Guru',
  description: 'Professional serving staff for events across Toronto, Mississauga, Brampton, Oakville and the GTA. Trained servers for weddings, corporate events, birthday parties and more.',
  alternates: { canonical: 'https://www.youreventguru.ca/services/event-staffing/serving-staff' },
}

export default function ServingStaffPage() {
  return (
    <>
      <section style={{
        backgroundColor: '#0F0F0F',
        paddingTop: '160px',
        paddingBottom: '80px',
        paddingLeft: '60px',
        paddingRight: '60px',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '11px',
            color: '#C9A96E',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}>Event Staffing</p>
          <h1 style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 300,
            color: '#FFFFFF',
            lineHeight: 1.05,
            maxWidth: '700px',
            marginBottom: '24px',
          }}>Serving Staff for Events Across Toronto & the GTA</h1>
          <p style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '15px',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.9,
            maxWidth: '520px',
            marginBottom: '40px',
          }}>
            Friendly, well-presented servers who handle food and beverage
            service throughout your event — so every guest feels looked after.
          </p>
          <Link href="/contact" style={{
            display: 'inline-block',
            backgroundColor: '#C9A96E',
            color: '#0F0F0F',
            fontFamily: 'var(--font-inter)',
            fontSize: '11px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            padding: '16px 36px',
            textDecoration: 'none',
          }}>Get a Free Quote</Link>
        </div>
      </section>

      <section style={{ backgroundColor: '#F2EFE9', padding: '100px 60px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '11px',
            color: '#C9A96E',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}>What Our Servers Do</p>
          <h2 style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 300,
            color: '#0F0F0F',
            marginBottom: '48px',
            maxWidth: '600px',
          }}>Attentive service from start to finish.</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1px',
            backgroundColor: '#D4CFC8',
          }}>
            {[
              { title: 'Food Service', desc: 'Plated meals, buffet service, and appetizer passing — handled professionally and promptly.' },
              { title: 'Beverage Service', desc: 'Drink service throughout your event, keeping guests refreshed without them having to ask.' },
              { title: 'Table Maintenance', desc: 'Clearing plates, refreshing settings, and keeping tables clean throughout the event.' },
              { title: 'Guest Interaction', desc: 'Friendly, approachable servers who make every guest feel attended to.' },
              { title: 'Buffet Management', desc: 'Keeping buffet stations stocked, organized and presentable at all times.' },
              { title: 'End of Event Cleanup', desc: 'Clearing and cleaning up after your event so you don\'t have to.' },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: '#F2EFE9', padding: '40px 32px' }}>
                <h3 style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '1.4rem',
                  color: '#0F0F0F',
                  fontWeight: 400,
                  marginBottom: '12px',
                }}>{item.title}</h3>
                <p style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '13px',
                  color: '#6B6B6B',
                  lineHeight: 1.9,
                  fontWeight: 300,
                }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#0F0F0F', padding: '100px 60px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '11px',
            color: '#C9A96E',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}>FAQ</p>
          <h2 style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 300,
            color: '#FFFFFF',
            marginBottom: '60px',
          }}>Common questions about serving staff.</h2>
          {[
            { q: 'How many servers do I need?', a: 'For buffet style events, 1 server per 25 guests works well. For plated service, 1 per 10-15 guests is recommended. We can advise based on your specific setup.' },
            { q: 'What do servers wear?', a: 'All our serving staff wear professional all-black uniforms. They are clean, well-presented and appropriate for any event type.' },
            { q: 'Can servers help with setup?', a: 'Yes. Our staff can assist with basic event setup and are always available to help with whatever is needed on the day.' },
            { q: 'How far in advance do I need to book?', a: 'We ask for at least one week notice. For larger events, two weeks gives us more time to build the right team.' },
          ].map((item, i) => (
            <div key={i} style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '28px 0' }}>
              <h3 style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '14px',
                color: '#FFFFFF',
                fontWeight: 400,
                marginBottom: '12px',
              }}>{item.q}</h3>
              <p style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '13px',
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.9,
                fontWeight: 300,
              }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: '#F2EFE9', padding: '100px 60px', textAlign: 'center' }}>
        <h2 style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          fontWeight: 300,
          color: '#0F0F0F',
          marginBottom: '20px',
        }}>Need serving staff for your event?</h2>
        <p style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '14px',
          color: '#6B6B6B',
          lineHeight: 1.9,
          fontWeight: 300,
          maxWidth: '440px',
          margin: '0 auto 40px',
        }}>Get in touch and we'll confirm your team within 12 hours.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <Link href="/contact" style={{
            backgroundColor: '#0F0F0F',
            color: '#FFFFFF',
            fontFamily: 'var(--font-inter)',
            fontSize: '11px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            padding: '16px 36px',
            textDecoration: 'none',
          }}>Get a Free Quote</Link>
          <a href="tel:+14379872153" style={{
            backgroundColor: 'transparent',
            color: '#0F0F0F',
            fontFamily: 'var(--font-inter)',
            fontSize: '11px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            padding: '16px 36px',
            textDecoration: 'none',
            border: '1px solid #0F0F0F',
          }}>Call Us Now</a>
        </div>
      </section>
    </>
  )
}