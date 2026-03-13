import { useParallax } from '../hooks/useParallax'

const tags = ['Editorial', 'Gothic', 'Black & White', 'Ink & Paper', 'Underground']

export default function Manifesto() {
  const heading = useParallax(0.1)
  const body    = useParallax(0.06)
  const vtext   = useParallax(0.2)

  return (
    <section className="grid grid-cols-1 md:grid-cols-[2fr_1fr] border-b-[4px] min-h-[360px]" style={{ borderColor: 'var(--ink)' }}>
      <div
        className="flex flex-col justify-center px-6 py-10 md:px-12 md:py-14 border-b-[4px] md:border-b-0 md:border-r-[4px] overflow-hidden"
        style={{ borderColor: 'var(--ink)' }}
      >
        <p className="font-bebas text-[.7rem] tracking-[7px] opacity-38 mb-5">The Manifesto</p>

        <div ref={heading.ref} style={{ transform: `translateY(${heading.offset}px)`, willChange: 'transform' }}>
          <h2 className="font-fraktur leading-none mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3.8rem)' }}>
            Design that bleeds ink
          </h2>
        </div>

        <div ref={body.ref} style={{ transform: `translateY(${body.offset}px)`, willChange: 'transform' }}>
          <p className="font-elite text-[.9rem] leading-[1.8] opacity-75 mb-7" style={{ maxWidth: '500px' }}>
            We don't make pretty pictures. We build visual languages. Our work lives at the intersection of gothic tradition
            and contemporary edge — where old-world craft meets new-world boldness. Each commission is a new issue:
            approached with intention, obsession, and a relentless pursuit of the defining mark.
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map(t => (
              <span key={t} className="tag font-bebas text-[.7rem] tracking-[3px] border-2 px-3 py-1 cursor-default transition-all duration-150" style={{ borderColor: 'var(--ink)' }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="stripe relative flex items-center justify-center min-h-[100px] overflow-hidden" style={{ background: 'var(--ink)' }}>
        <div ref={vtext.ref} style={{ transform: `translateY(${vtext.offset}px)`, willChange: 'transform' }}>
          <span
            className="font-fraktur tracking-[5px] relative z-10 opacity-90"
            style={{ fontSize: 'clamp(1.3rem, 2vw, 2rem)', color: 'var(--paper)', writingMode: 'vertical-rl', transform: 'rotate(180deg)', display: 'block' }}
          >
            Leimar Studio
          </span>
        </div>
      </div>
    </section>
  )
}
