import { useParallax } from '../hooks/useParallax'

const panels = [
  { n: '1', icon: '◈', title: 'Brand Identity', text: 'From concept to icon. We craft identities that cut through noise and tattoo themselves into memory.' },
  { n: '2', icon: '◇', title: 'Typography',     text: 'Words carry weight. We select and shape letterforms that speak before a single word is read.' },
  { n: '3', icon: '◉', title: 'Art Direction',  text: 'Frames within frames. Every composition is deliberate, every visual choice a chapter in the story.' },
]

function PanelItem({ p, i }) {
  const content = useParallax(0.07 + i * 0.03)
  return (
    <div
      className={`panel relative overflow-hidden p-8 transition-colors duration-200 ${i < 2 ? 'border-b-[3px] md:border-b-0 md:border-r-[3px]' : ''}`}
      style={{ borderColor: 'var(--ink)' }}
    >
      <span className="panel-ghost absolute top-[-0.4rem] left-[0.6rem] font-bebas text-[6rem] opacity-[.05] leading-none pointer-events-none transition-colors duration-200" style={{ color: 'var(--ink)' }}>
        {p.n}
      </span>
      <div ref={content.ref} className="relative z-10" style={{ transform: `translateY(${content.offset}px)`, willChange: 'transform' }}>
        <p className="font-bebas text-[.65rem] tracking-[6px] opacity-40 mb-4">PANEL 0{p.n}</p>
        <span className="text-[1.8rem] mb-3 block">{p.icon}</span>
        <div className="pdiv w-8 h-[3px] my-3 transition-colors duration-200" style={{ background: 'var(--ink)' }} />
        <h3 className="font-fraktur text-[1.5rem] mb-2">{p.title}</h3>
        <p className="font-elite text-[.85rem] leading-[1.7] opacity-[.72]">{p.text}</p>
      </div>
    </div>
  )
}

export default function Panels() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 border-b-[4px]" style={{ borderColor: 'var(--ink)' }}>
      {panels.map((p, i) => <PanelItem key={i} p={p} i={i} />)}
    </section>
  )
}
