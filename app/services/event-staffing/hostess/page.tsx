import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hostess Services Toronto & GTA | Event Guru',
  description: 'Professional hostess services for events across Toronto, Mississauga, Brampton, Oakville and the GTA. Trained hostesses for weddings, corporate events, birthday parties and more.',
  alternates: { canonical: 'https://www.youreventguru.ca/services/event-staffing/hostess' },
}

export default function HostessPage() {
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
          }}>Hostess Services Across Toronto & the GTA</h1>
          <p style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '15px',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.9,
            maxWidth: '520px',
            marginBottom: '40px',
          }}>
            A great hostess sets the tone for the entire event.
            Our hostesses are warm, professional, and trained to
            make every guest feel welcomed from the moment they arrive.
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
          }}>What a Hostess Does</p>
          <h2 style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 300,
            color: '#0F0F0F',
            marginBottom: '48px',
            maxWidth: '600px',
          }}>The welcoming face of your event.</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1px',
            backgroundColor: '#D4CFC8',
          }}>
            {[
              { title: 'Guest Greeting', desc: 'Warmly welcoming every guest as they arrive, making them feel expected and appreciated.' },
              { title: 'Seating Management', desc: 'Guiding guests to their seats efficiently and keeping the flow of arrivals smooth.' },
              { title: 'Event Flow', desc: 'Keeping track of the event schedule and helping direct guests between different areas.' },
              { title: 'Information Point', desc: 'Acting as the go-to person for guest questions about the venue, schedule, or amenities.' },
              { title: 'Gift & Registration Tables', desc: 'Managing gift tables, sign-in sheets, or registration areas at your event entrance.' },
              { title: 'General Assistance', desc: 'Whatever comes up — a great hostess handles it gracefully so you don\'t have to.' },
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
          }}>Common questions about hostess services.</h2>
          {[
            { q: 'What is the difference between a hostess and a server?', a: 'A hostess focuses on welcoming guests, managing arrivals, and keeping event flow smooth. A server focuses specifically on food and beverage service. Many events benefit from both.' },
            { q: 'How many hostesses do I need?', a: 'For most events, 1-2 hostesses is sufficient. For larger events with multiple entry points or areas, we recommend 2-3. We\'ll help you decide based on your event.' },
            { q: 'What do hostesses wear?', a: 'Our hostesses wear professional all-black attire. They are well-presented and appropriate for any event type from casual birthday parties to formal corporate events.' },
            { q: 'Can a hostess also help with other tasks?', a: 'Yes. Our hostesses are flexible and can assist with light tasks like managing gift tables, sign-in sheets, or directing guests as needed.' },
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
        }}>Need a hostess for your event?</h2>
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