import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Event Staffing Toronto & GTA | Event Guru',
  description: 'Professional event staffing across Toronto, Mississauga, Brampton, Oakville and the GTA. Trained servers, hostesses and setup crew for weddings, corporate events, birthday parties and more.',
  alternates: { canonical: 'https://www.youreventguru.ca/services/event-staffing' },
}

export default function EventStaffingPage() {
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
          }}>Our Services</p>
          <h1 style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 300,
            color: '#FFFFFF',
            lineHeight: 1.05,
            maxWidth: '700px',
            marginBottom: '24px',
          }}>Event Staffing Across Toronto & the GTA</h1>
          <p style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '15px',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.9,
            maxWidth: '520px',
            marginBottom: '40px',
          }}>
            Trained, professional event staff for birthdays, corporate events,
            weddings, baby showers and more. We handle the staff so you can
            focus on hosting.
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

      {/* WHAT'S INCLUDED */}
      <section style={{
        backgroundColor: '#F2EFE9',
        padding: '100px 60px',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '80px',
            alignItems: 'center',
          }}>
            <div>
              <p style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '11px',
                color: '#C9A96E',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}>What's Included</p>
              <h2 style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                fontWeight: 300,
                color: '#0F0F0F',
                lineHeight: 1.2,
                marginBottom: '24px',
              }}>Everything from setup to cleanup — handled.</h2>
              <p style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '13px',
                color: '#6B6B6B',
                lineHeight: 1.9,
                fontWeight: 300,
                marginBottom: '32px',
              }}>
                Our event staff are briefed on your event before they arrive.
                They show up on time, in uniform, and ready to work without
                needing constant direction.
              </p>
              {[
                'Guest greeting and event setup',
                'Food and beverage service',
                'Buffet station management',
                'Table clearing and maintenance',
                'End of event cleanup',
                'Flexible staffing from 1 to 20+ staff members',
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
            <div style={{ position: 'relative', height: '500px', overflow: 'hidden' }}>
              <Image
                src="/images/events/event-staffing-team-ai.png"
                alt="Professional event staffing team Toronto GTA"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                quality={90}
              />
            </div>
          </div>
        </div>
      </section>

      {/* EVENT TYPES */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '100px 60px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '11px',
            color: '#C9A96E',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}>Who We Serve</p>
          <h2 style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 300,
            color: '#0F0F0F',
            marginBottom: '60px',
          }}>Staff for every type of event.</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1px',
            backgroundColor: '#E5E0D8',
          }}>
            {[
              { title: 'Birthday Parties', desc: 'From intimate gatherings to large backyard parties — we staff it right.' },
              { title: 'Baby & Bridal Showers', desc: 'Friendly, well-presented staff who help your celebration run smoothly.' },
              { title: 'Weddings', desc: 'Experienced wedding servers who understand the flow of a reception.' },
              { title: 'Corporate Events', desc: 'Professional staff for networking events, office parties and seminars.' },
              { title: 'School Events', desc: 'Reliable staff for graduations, fundraisers and school celebrations.' },
              { title: 'Private Parties', desc: 'Whatever the occasion, we have the staff to make it memorable.' },
            ].map((item, i) => (
              <div key={i} style={{
                backgroundColor: '#FFFFFF',
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

      {/* SUB SERVICES */}
      <section style={{ backgroundColor: '#F2EFE9', padding: '100px 60px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '11px',
            color: '#C9A96E',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}>Explore Services</p>
          <h2 style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 300,
            color: '#0F0F0F',
            marginBottom: '48px',
          }}>Specific staffing needs?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              {
                title: 'Serving Staff',
                desc: 'Dedicated servers focused on food and beverage service throughout your event.',
                href: '/services/event-staffing/serving-staff',
              },
              {
                title: 'Hostess Services',
                desc: 'Professional hostesses who greet guests, manage seating, and keep things flowing.',
                href: '/services/event-staffing/hostess',
              },
            ].map((item, i) => (
              <div key={i} style={{
                backgroundColor: '#FFFFFF',
                padding: '40px',
                borderBottom: '2px solid transparent',
                transition: 'border-color 0.3s',
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '1.6rem',
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
                  marginBottom: '24px',
                }}>{item.desc}</p>
                <Link href={item.href} style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '11px',
                  color: '#0F0F0F',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  borderBottom: '1px solid #0F0F0F',
                  paddingBottom: '2px',
                }}>Learn More →</Link>
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
          }}>Common questions about our event staffing.</h2>
          {[
            {
              q: 'How far in advance should I book?',
              a: 'We recommend booking at least one week before your event. For larger events or peak dates, two weeks is better to ensure availability.',
            },
            {
              q: 'How many staff do I need for my event?',
              a: 'A general rule is 1 server per 20-25 guests for buffet style, and 1 per 10-15 for plated service. We can help you figure out the right number when you contact us.',
            },
            {
              q: 'What do your staff wear?',
              a: 'Our staff wear professional all-black uniforms. We ensure everyone is clean, well-presented and appropriate for your event.',
            },
            {
              q: 'Do you serve all areas of the GTA?',
              a: 'Yes. We serve Toronto, Mississauga, Brampton, Oakville, Scarborough, North York, Vaughan, Milton, Etobicoke and surrounding areas.',
            },
            {
              q: 'What happens if a staff member cancels last minute?',
              a: 'We always have backup staff on call. In the rare event of a cancellation, we will replace the staff member as quickly as possible.',
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
                letterSpacing: '0.02em',
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
        }}>Ready to book your event staff?</h2>
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
            "name": "Event Staffing Toronto",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Event Guru",
              "telephone": "+1-437-987-2153",
            },
            "areaServed": ["Toronto", "Mississauga", "Brampton", "Oakville", "GTA"],
            "description": "Professional event staffing for birthdays, corporate events, weddings and more across the GTA.",
          })
        }}
      />
    </>
  )
}