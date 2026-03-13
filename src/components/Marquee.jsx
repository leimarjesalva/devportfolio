const items = ['Leimar Jesalva', 'Guitarist', 'Designer', 'Developer', 'Photographer', 'Video Editor', 'ICAI Band', 'UI/UX']
const doubled = [...items, ...items]

export default function Marquee() {
  return (
    <div
      className="overflow-hidden py-3 border-t-[3px] border-b-[3px]"
      style={{ background: 'var(--ink)', borderColor: 'var(--ink)' }}
    >
      <div className="marquee-inner">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-8 flex-shrink-0">
            <span className="font-fraktur text-[1.2rem] tracking-[2px]" style={{ color: 'var(--paper)' }}>
              {item}
            </span>
            <span className="font-bebas text-[1rem] opacity-35" style={{ color: 'var(--paper)' }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
