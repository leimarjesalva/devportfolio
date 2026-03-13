import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const SERVICE_ID  = 'service_1a24k9n'
const TEMPLATE_ID = 'template_a9p8z0i'
const PUBLIC_KEY  = 'jIg--0kAvQnORZc86'

export default function Contact() {
  const formRef = useRef()
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      setStatus('success')
      formRef.current.reset()
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="grid grid-cols-1 md:grid-cols-2 border-b-[4px]" style={{ borderColor: 'var(--ink)' }}>
      {/* LEFT */}
      <div
        className="halftone-dark relative flex flex-col justify-center px-8 py-12 md:px-12 md:py-16 border-b-[4px] md:border-b-0 md:border-r-[4px] overflow-hidden"
        style={{ background: 'var(--ink)', borderColor: 'var(--ink)' }}
      >
        <h2
          className="font-fraktur leading-[1.05] mb-3 relative z-10"
          style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.2rem)', color: 'var(--paper)' }}
        >
          Let's Create<br />Together
        </h2>
        <p className="font-elite text-[.88rem] leading-[1.65] opacity-55 relative z-10 mb-6" style={{ color: 'var(--paper)' }}>
          Got a project? Need a guitarist,<br />designer, or developer?<br />Let's put ink to paper.
        </p>

        {/* Social links */}
        <div className="relative z-10 flex flex-col gap-3">
          <p className="font-bebas text-[.7rem] tracking-[5px] opacity-40" style={{ color: 'var(--paper)' }}>FIND ME ON</p>
          <a
            href="https://www.facebook.com/leiii2003/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 border-2 px-4 py-2 font-bebas text-[.8rem] tracking-[3px] no-underline transition-all w-fit"
            style={{
              borderColor: 'var(--paper)', color: 'var(--paper)',
              transition: 'background .15s, color .15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--paper)'; e.currentTarget.style.color = 'var(--ink)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--paper)' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.273h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
            </svg>
            Leimar Lascano Jesalva
          </a>
        </div>
      </div>

      {/* RIGHT — form */}
      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col justify-center gap-3 px-6 py-10 md:px-10 md:py-14">
        <input
          className="ink-input w-full border-2 bg-transparent px-4 py-3 font-elite text-[.88rem] transition-all"
          style={{ borderColor: 'var(--ink)', color: 'var(--ink)' }}
          type="text"
          name="from_name"
          placeholder="Your name"
          required
        />
        <input
          className="ink-input w-full border-2 bg-transparent px-4 py-3 font-elite text-[.88rem] transition-all"
          style={{ borderColor: 'var(--ink)', color: 'var(--ink)' }}
          type="email"
          name="reply_to"
          placeholder="Your email"
          required
        />
        <input
          className="ink-input w-full border-2 bg-transparent px-4 py-3 font-elite text-[.88rem] transition-all"
          style={{ borderColor: 'var(--ink)', color: 'var(--ink)' }}
          type="text"
          name="subject"
          placeholder="Subject"
        />
        <textarea
          className="ink-input w-full border-2 bg-transparent px-4 py-3 font-elite text-[.88rem] transition-all resize-none"
          style={{ borderColor: 'var(--ink)', color: 'var(--ink)' }}
          rows={4}
          name="message"
          placeholder="Tell the story..."
          required
        />

        <button
          type="submit"
          disabled={status === 'sending'}
          className="send-btn w-full font-bebas tracking-[5px] py-3 border-[3px] cursor-pointer transition-all disabled:opacity-50"
          style={{
            background: 'var(--ink)', color: 'var(--paper)',
            borderColor: 'var(--ink)', boxShadow: '4px 4px 0 var(--ink)',
            fontSize: '.9rem',
          }}
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'success' && (
          <p className="font-bebas tracking-[3px] text-[.8rem] text-green-700 text-center mt-1">
            ✓ Message sent! I'll get back to you soon.
          </p>
        )}
        {status === 'error' && (
          <p className="font-bebas tracking-[3px] text-[.8rem] text-red-600 text-center mt-1">
            ✗ Something went wrong. Try again.
          </p>
        )}
      </form>
    </section>
  )
}
