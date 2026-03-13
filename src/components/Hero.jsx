import { useParallax } from '../hooks/useParallax'

export default function Hero() {
  const title   = useParallax(0.12)
  const sub     = useParallax(0.08)
  const caption = useParallax(0.18)
  const bigLetter = useParallax(0.25)

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[88vh] border-b-[4px]" style={{ borderColor: 'var(--ink)' }}>
      {/* LEFT */}
      <div
        className="flex flex-col justify-center px-6 py-12 md:px-10 md:py-16 relative border-b-[4px] md:border-b-0 md:border-r-[4px]"
        style={{ borderColor: 'var(--ink)' }}
      >
        <span
          className="absolute top-5 right-5 font-bebas text-[.65rem] tracking-[4px] border-2 px-2 py-1 opacity-40 rotate-2"
          style={{ borderColor: 'var(--ink)' }}
        >
          NO.001
        </span>

        <p className="font-bebas text-[.7rem] tracking-[6px] opacity-40 mb-4">
          EST. 2025 — CREATIVE STUDIO
        </p>

        <div ref={title.ref} style={{ transform: `translateY(${title.offset}px)`, willChange: 'transform' }}>
          <h1
            className="hero-title font-fraktur leading-[.9] mb-6"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 7.5rem)', color: 'var(--ink)' }}
          >
            LEIMAR
          </h1>
        </div>

        <div ref={sub.ref} style={{ transform: `translateY(${sub.offset}px)`, willChange: 'transform' }}>
          <p
            className="font-elite text-[.92rem] leading-[1.75] border-l-4 pl-4 mb-8 opacity-80"
            style={{ borderColor: 'var(--ink)', maxWidth: '420px' }}
          >
            An underground creative studio where gothic ink meets modern design.
            Every project is a panel. Every brand, a story worth telling.
          </p>

          <a
            href="#"
            className="cta-btn font-bebas tracking-[5px] px-10 py-3 border-[3px] no-underline transition-all w-fit"
            style={{
              background: 'var(--ink)', color: 'var(--paper)',
              borderColor: 'var(--ink)', boxShadow: '5px 5px 0 var(--ink)',
              fontSize: '.95rem', display: 'inline-block',
            }}
          >
            Read the Story
          </a>
        </div>
      </div>

      {/* RIGHT */}
      <div
        className="halftone-dark relative flex items-center justify-center min-h-[260px] overflow-hidden"
        style={{ background: 'var(--ink)' }}
      >
        <div
          ref={bigLetter.ref}
          className="font-fraktur absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none leading-none"
          style={{
            fontSize: 'clamp(8rem, 20vw, 16rem)',
            color: 'var(--paper)',
            opacity: 0.09,
            transform: `translate(-50%, calc(-50% + ${bigLetter.offset}px))`,
            willChange: 'transform',
          }}
        >
          C
        </div>

        {/* Speech bubble */}
        <div
          className="absolute top-[10%] right-[8%] border-[3px] px-3 py-2 font-elite text-[.78rem] text-center rotate-3 z-10"
          style={{ background: 'var(--paper)', borderColor: 'var(--paper)', color: 'var(--ink)', maxWidth: '130px' }}
        >
          "Dark lines.<br />Bold moves."
          <span className="absolute -bottom-[14px] left-1/2 -translate-x-1/2 w-0 h-0"
            style={{ display: 'block', borderLeft: '7px solid transparent', borderRight: '7px solid transparent', borderTop: '7px solid var(--paper)' }}
          />
        </div>

        <div ref={caption.ref} className="relative z-10 text-center px-8"
          style={{ transform: `translateY(${caption.offset}px)`, willChange: 'transform' }}
        >
          <p
            className="font-fraktur leading-[1.15] tracking-[2px]"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', color: 'var(--paper)' }}
          >
            The Creative<br />Underground
          </p>
          <p className="font-bebas text-[.72rem] tracking-[8px] mt-2 opacity-35" style={{ color: 'var(--paper)' }}>
            EST · 2025 · LEIMAR
          </p>
        </div>
      </div>
    </section>
  )
}
