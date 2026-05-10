import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us | Event Guru',
  description: 'Get in touch with Event Guru for a free quote on event staffing and valet parking across Toronto, Mississauga, Brampton, Oakville and the GTA.',
  alternates: { canonical: 'https://www.youreventguru.ca/contact' },
}

export default function ContactPage() {
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
        }}>Get In Touch</p>
        <h1 style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          fontWeight: 300,
          color: '#FFFFFF',
          lineHeight: 1.1,
          marginBottom: '20px',
        }}>Let's Talk About Your Event</h1>
        <p style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '15px',
          fontWeight: 300,
          color: 'rgba(255,255,255,0.55)',
          lineHeight: 1.9,
          maxWidth: '480px',
          margin: '0 auto',
        }}>
          Fill out the form below and we'll get back to you within 12 hours
          with a quote. No obligation. No hidden fees.
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section style={{
        backgroundColor: '#F2EFE9',
        padding: '80px 60px',
      }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '80px',
          alignItems: 'start',
        }}>

          {/* LEFT — FORM */}
          <div>
            <p style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '11px',
              color: '#C9A96E',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              marginBottom: '24px',
            }}>Book Your Staff</p>
            <ContactForm />
          </div>

          {/* RIGHT — CONTACT INFO */}
          <div style={{ paddingTop: '48px' }}>
            <div style={{ marginBottom: '48px' }}>
              <p style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '11px',
                color: '#C9A96E',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}>Contact Info</p>
              <h2 style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                fontWeight: 300,
                color: '#0F0F0F',
                lineHeight: 1.2,
                marginBottom: '24px',
              }}>Prefer to call us directly?<br />We're always available.</h2>
              <p style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '13px',
                color: '#6B6B6B',
                lineHeight: 1.9,
                fontWeight: 300,
                marginBottom: '32px',
              }}>
                Give us a call and we'll discuss your event on the spot.
                We serve clients across Toronto, Mississauga, Brampton,
                Oakville, Scarborough, North York, Vaughan, Milton and Etobicoke.
              </p>
            </div>

            {[
              { label: 'Phone', value: '+1 (437) 987-2153', href: 'tel:+14379872153' },
              { label: 'Email', value: 'mohammadlokhandwala37@gmail.com', href: 'mailto:mohammadlokhandwala37@gmail.com' },
              { label: 'Hours', value: 'Available 7 days a week', href: null },
              { label: 'Area', value: 'Toronto & Greater Toronto Area', href: null },
            ].map((item, i) => (
              <div key={i} style={{
                borderTop: '1px solid #E5E0D8',
                padding: '20px 0',
                display: 'flex',
                gap: '24px',
                alignItems: 'flex-start',
              }}>
                <span style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '10px',
                  color: '#C9A96E',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  minWidth: '60px',
                  paddingTop: '2px',
                }}>{item.label}</span>
                {item.href ? (
                  <a href={item.href} style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '14px',
                    color: '#0F0F0F',
                    fontWeight: 400,
                    textDecoration: 'none',
                  }}>{item.value}</a>
                ) : (
                  <span style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '14px',
                    color: '#0F0F0F',
                    fontWeight: 400,
                  }}>{item.value}</span>
                )}
              </div>
            ))}

            <div style={{
              marginTop: '40px',
              backgroundColor: '#0F0F0F',
              padding: '32px',
            }}>
              <p style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '1.4rem',
                color: '#FFFFFF',
                fontWeight: 300,
                lineHeight: 1.4,
                marginBottom: '12px',
              }}>We respond to every request within 12 hours.</p>
              <p style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '12px',
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.8,
                fontWeight: 300,
              }}>
                Please reach out at least one week before your event
                so we have time to build the right team for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Event Guru",
            "url": "https://www.youreventguru.ca/contact",
            "description": "Contact Event Guru for event staffing and valet parking across Toronto and the GTA",
          })
        }}
      />
    </>
  )
}