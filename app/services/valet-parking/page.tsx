import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Valet Parking Toronto & GTA | Event Guru',
  description: 'Professional valet parking services across Toronto, Mississauga, Brampton, Oakville and the GTA. Uniformed valet attendants for weddings, corporate events, birthday parties and more.',
  alternates: { canonical: 'https://www.youreventguru.ca/services/valet-parking' },
}

export default function ValetParkingPage() {
  return (
    <>
      {/* HERO */}
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
          }}>Valet Parking</p>
          <h1 style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 300,
            color: '#FFFFFF',
            lineHeight: 1.05,
            maxWidth: '700px',
            marginBottom: '24px',
          }}>Valet Parking Services Across Toronto & the GTA</h1>
          <p style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '15px',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.9,
            maxWidth: '520px',
            marginBottom: '40px',
          }}>
            The first thing your guests experience is arriving. 
            Our uniformed valet attendants make that moment count — 
            efficient, professional, and stress-free.
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

      {/* SPLIT — IMAGE + CONTENT */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', minHeight: '560px' }}>
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <Image
            src="/images/events/valet-parking-service-toronto.jpg"
            alt="Valet parking attendant Toronto GTA events"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            quality={90}
          />
        </div>
        <div style={{
          backgroundColor: '#F2EFE9',
          padding: '80px 72px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <p style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '11px',
            color: '#C9A96E',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}>What We Provide</p>
          <h2 style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
            fontWeight: 300,
            color: '#0F0F0F',
            lineHeight: 1.2,
            marginBottom: '24px',
          }}>A smooth arrival sets the tone for the whole event.</h2>
          <p style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '13px',
            color: '#6B6B6B',
            lineHeight: 1.9,
            fontWeight: 300,
            marginBottom: '32px',
          }}>
            Our valet attendants are trained to manage guest arrivals 
            efficiently — reducing congestion, keeping vehicles safe, 
            and ensuring every guest feels welcomed from the moment 
            they pull up.
          </p>
          {[
            'Uniformed, professional valet attendants',
            'Safe and organized vehicle parking',
            'Efficient guest arrival and departure management',
            'Reduces venue congestion and wait times',
            'Available for indoor and outdoor venues',
            'Serving Toronto, Mississauga, Brampton, Oakville & GTA',
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              marginBottom: '14px',
            }}>
              <span style={{ color: '#C9A96E', fontSize: '6px', marginTop: '7px', flexShrink: 0 }}>●</span>
              <span style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '13px',
                color: '#2A2A2A',
                lineHeight: 1.8,
                fontWeight: 300,
              }}>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '100px 60px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '11px',
            color: '#C9A96E',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}>How It Works</p>
          <h2 style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 300,
            color: '#0F0F0F',
            marginBottom: '60px',
          }}>Simple from start to finish.</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '48px',
          }}>
            {[
              {
                num: '01',
                title: 'Tell Us About Your Event',
                desc: 'Share your venue, expected guest count, and event date. We\'ll confirm availability and send you a quote within 12 hours.',
              },
              {
                num: '02',
                title: 'We Set Up On Site',
                desc: 'Our attendants arrive early, scope the parking area, and set up a smooth system before your first guest arrives.',
              },
              {
                num: '03',
                title: 'Guests Arrive Stress-Free',
                desc: 'Every guest is greeted, their vehicle is safely parked, and retrieved promptly when they\'re ready to leave.',
              },
            ].map((step, i) => (
              <div key={i} style={{ position: 'relative' }}>
                <div style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '6rem',
                  color: '#F2EFE9',
                  lineHeight: 1,
                  position: 'absolute',
                  top: '-16px',
                  left: '-8px',
                  userSelect: 'none',
                  zIndex: 0,
                }}>{step.num}</div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <p style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '10px',
                    color: '#C9A96E',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    marginBottom: '12px',
                  }}>Step {step.num}</p>
                  <h3 style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '1.5rem',
                    color: '#0F0F0F',
                    fontWeight: 400,
                    marginBottom: '16px',
                  }}>{step.title}</h3>
                  <p style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '13px',
                    color: '#6B6B6B',
                    lineHeight: 1.9,
                    fontWeight: 300,
                  }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENT TYPES */}
      <section style={{ backgroundColor: '#F2EFE9', padding: '100px 60px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '11px',
            color: '#C9A96E',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}>Events We Serve</p>
          <h2 style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 300,
            color: '#0F0F0F',
            marginBottom: '48px',
          }}>Valet parking for any occasion.</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1px',
            backgroundColor: '#D4CFC8',
          }}>
            {[
              { title: 'Weddings', desc: 'Give your wedding guests a premium arrival experience from the moment they pull up.' },
              { title: 'Birthday Parties', desc: 'Take the parking stress off your guests so everyone arrives relaxed and on time.' },
              { title: 'Corporate Events', desc: 'Make the right impression with professional valet service for your clients and colleagues.' },
              { title: 'Baby & Bridal Showers', desc: 'Let your guests focus on celebrating — not finding parking.' },
              { title: 'Private Parties', desc: 'Perfect for home events or venues with limited parking.' },
              { title: 'School & Community Events', desc: 'Manage large volumes of vehicles efficiently and safely.' },
            ].map((item, i) => (
              <div key={i} style={{
                backgroundColor: '#F2EFE9',
                padding: '40px 32px',
              }}>
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

      {/* FAQ */}
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
          }}>Common questions about valet parking.</h2>
          {[
            {
              q: 'How many valet attendants do I need?',
              a: 'For most events we recommend 1 attendant per 50 guests. For larger events or venues with tight parking, we suggest 2-3. We\'ll help you figure out the right number.',
            },
            {
              q: 'Do you bring your own equipment?',
              a: 'Yes. Our team brings everything needed including key storage, signage, and any necessary equipment to manage your parking area.',
            },
            {
              q: 'How far in advance should I book?',
              a: 'At least one week before your event. For weddings and large corporate events, two weeks is recommended.',
            },
            {
              q: 'What areas do you serve?',
              a: 'We serve Toronto, Mississauga, Brampton, Oakville, Scarborough, North York, Vaughan, Milton, Etobicoke and surrounding GTA areas.',
            },
            {
              q: 'Are the vehicles insured while parked?',
              a: 'Our attendants handle all vehicles with care and professionalism. Please contact us directly to discuss insurance coverage details for your event.',
            },
          ].map((item, i) => (
            <div key={i} style={{
              borderTop: '1px solid rgba(255,255,255,0.1)',
              padding: '28px 0',
            }}>
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

      {/* CTA */}
      <section style={{
        backgroundColor: '#F2EFE9',
        padding: '100px 60px',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          fontWeight: 300,
          color: '#0F0F0F',
          marginBottom: '20px',
        }}>Ready to book valet parking?</h2>
        <p style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '14px',
          color: '#6B6B6B',
          lineHeight: 1.9,
          fontWeight: 300,
          maxWidth: '440px',
          margin: '0 auto 40px',
        }}>Contact us today and we'll get back to you within 12 hours.</p>
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Valet Parking Toronto",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Event Guru",
              "telephone": "+1-437-987-2153",
            },
            "areaServed": ["Toronto", "Mississauga", "Brampton", "Oakville", "GTA"],
            "description": "Professional valet parking services for events across Toronto and the GTA.",
          })
        }}
      />
    </>
  )
}