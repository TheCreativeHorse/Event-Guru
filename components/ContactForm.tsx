'use client'

export default function ContactForm() {
  return (
    <form
      action="https://formsubmit.co/mohammadlokhandwala37@gmail.com"
      method="POST"
      style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
    >
      <input type="hidden" name="_subject" value="New Event Guru Booking Request" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://www.youreventguru.ca/contact" />

      <div>
        <label style={{fontFamily:'var(--font-inter)',fontSize:'11px',color:'#6B6B6B',letterSpacing:'0.15em',textTransform:'uppercase',display:'block',marginBottom:'8px'}}>Your Name *</label>
        <input type="text" name="name" required placeholder="Sarah Johnson"
          style={{width:'100%',padding:'14px 16px',border:'1px solid #D4CFC8',backgroundColor:'#FFFFFF',fontFamily:'var(--font-inter)',fontSize:'14px',color:'#0F0F0F',outline:'none',boxSizing:'border-box'}} />
      </div>

      <div>
        <label style={{fontFamily:'var(--font-inter)',fontSize:'11px',color:'#6B6B6B',letterSpacing:'0.15em',textTransform:'uppercase',display:'block',marginBottom:'8px'}}>Email Address *</label>
        <input type="email" name="email" required placeholder="sarah@email.com"
          style={{width:'100%',padding:'14px 16px',border:'1px solid #D4CFC8',backgroundColor:'#FFFFFF',fontFamily:'var(--font-inter)',fontSize:'14px',color:'#0F0F0F',outline:'none',boxSizing:'border-box'}} />
      </div>

      <div>
        <label style={{fontFamily:'var(--font-inter)',fontSize:'11px',color:'#6B6B6B',letterSpacing:'0.15em',textTransform:'uppercase',display:'block',marginBottom:'8px'}}>Phone Number</label>
        <input type="tel" name="phone" placeholder="+1 (416) 555-0000"
          style={{width:'100%',padding:'14px 16px',border:'1px solid #D4CFC8',backgroundColor:'#FFFFFF',fontFamily:'var(--font-inter)',fontSize:'14px',color:'#0F0F0F',outline:'none',boxSizing:'border-box'}} />
      </div>

      <div>
        <label style={{fontFamily:'var(--font-inter)',fontSize:'11px',color:'#6B6B6B',letterSpacing:'0.15em',textTransform:'uppercase',display:'block',marginBottom:'8px'}}>Type of Event *</label>
        <select name="event_type" required
          style={{width:'100%',padding:'14px 16px',border:'1px solid #D4CFC8',backgroundColor:'#FFFFFF',fontFamily:'var(--font-inter)',fontSize:'14px',color:'#0F0F0F',outline:'none',boxSizing:'border-box',appearance:'none'}}>
          <option value="">Select event type</option>
          <option value="Birthday Party">Birthday Party</option>
          <option value="Baby Shower">Baby Shower</option>
          <option value="Bridal Shower">Bridal Shower</option>
          <option value="Wedding">Wedding</option>
          <option value="Corporate Event">Corporate Event</option>
          <option value="School Event">School Event</option>
          <option value="Private Party">Private Party</option>
          <option value="Valet Parking">Valet Parking Only</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label style={{fontFamily:'var(--font-inter)',fontSize:'11px',color:'#6B6B6B',letterSpacing:'0.15em',textTransform:'uppercase',display:'block',marginBottom:'8px'}}>Event Date *</label>
        <input type="date" name="event_date" required
          style={{width:'100%',padding:'14px 16px',border:'1px solid #D4CFC8',backgroundColor:'#FFFFFF',fontFamily:'var(--font-inter)',fontSize:'14px',color:'#0F0F0F',outline:'none',boxSizing:'border-box'}} />
      </div>

      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'16px'}}>
        <div>
          <label style={{fontFamily:'var(--font-inter)',fontSize:'11px',color:'#6B6B6B',letterSpacing:'0.15em',textTransform:'uppercase',display:'block',marginBottom:'8px'}}>Guest Count</label>
          <input type="number" name="guest_count" placeholder="e.g. 50"
            style={{width:'100%',padding:'14px 16px',border:'1px solid #D4CFC8',backgroundColor:'#FFFFFF',fontFamily:'var(--font-inter)',fontSize:'14px',color:'#0F0F0F',outline:'none',boxSizing:'border-box'}} />
        </div>
        <div>
          <label style={{fontFamily:'var(--font-inter)',fontSize:'11px',color:'#6B6B6B',letterSpacing:'0.15em',textTransform:'uppercase',display:'block',marginBottom:'8px'}}>Staff Needed</label>
          <input type="number" name="staff_needed" placeholder="e.g. 3"
            style={{width:'100%',padding:'14px 16px',border:'1px solid #D4CFC8',backgroundColor:'#FFFFFF',fontFamily:'var(--font-inter)',fontSize:'14px',color:'#0F0F0F',outline:'none',boxSizing:'border-box'}} />
        </div>
      </div>

      <div>
        <label style={{fontFamily:'var(--font-inter)',fontSize:'11px',color:'#6B6B6B',letterSpacing:'0.15em',textTransform:'uppercase',display:'block',marginBottom:'8px'}}>Event Location / City</label>
        <input type="text" name="location" placeholder="e.g. Mississauga, ON"
          style={{width:'100%',padding:'14px 16px',border:'1px solid #D4CFC8',backgroundColor:'#FFFFFF',fontFamily:'var(--font-inter)',fontSize:'14px',color:'#0F0F0F',outline:'none',boxSizing:'border-box'}} />
      </div>

      <div>
        <label style={{fontFamily:'var(--font-inter)',fontSize:'11px',color:'#6B6B6B',letterSpacing:'0.15em',textTransform:'uppercase',display:'block',marginBottom:'8px'}}>Additional Details</label>
        <textarea name="message" rows={4} placeholder="Any specific requirements, questions, or details about your event..."
          style={{width:'100%',padding:'14px 16px',border:'1px solid #D4CFC8',backgroundColor:'#FFFFFF',fontFamily:'var(--font-inter)',fontSize:'14px',color:'#0F0F0F',outline:'none',resize:'vertical',boxSizing:'border-box'}} />
      </div>

      <button type="submit" style={{backgroundColor:'#C9A96E',color:'#0F0F0F',fontFamily:'var(--font-inter)',fontSize:'11px',fontWeight:400,letterSpacing:'0.25em',textTransform:'uppercase',padding:'18px 40px',border:'none',cursor:'pointer',width:'100%',marginTop:'8px'}}>
        Send My Request
      </button>

      <p style={{fontFamily:'var(--font-inter)',fontSize:'12px',color:'#9B9B9B',textAlign:'center',lineHeight:1.7}}>
        We respond within 12 hours · No obligation · No hidden fees
      </p>
    </form>
  )
}
