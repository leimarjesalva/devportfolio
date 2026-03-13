import { useState } from 'react'

const links = ['Work', 'About', 'Services', 'Contact']

export default function Nav() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav
      className="flex justify-between items-center px-6 py-4 border-b-[3px] sticky top-0 z-50"
      style={{ borderColor: 'var(--ink)', backgroundColor: 'var(--paper)' }}
    >
      <a href="#" className="font-fraktur text-[2rem] no-underline" style={{ color: 'var(--ink)' }}>
        L E I
      </a>

      <ul className="hidden md:flex gap-8 list-none">
        {links.map(l => (
          <li key={l}>
            <button
              onClick={() => scrollTo(l)}
              className="nav-link font-bebas text-[.85rem] tracking-[4px] bg-transparent border-none cursor-pointer"
              style={{ color: 'var(--ink)' }}
            >
              {l}
            </button>
          </li>
        ))}
      </ul>

      <button
        className="flex md:hidden flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <span className="block w-6 h-[2px]" style={{ background: 'var(--ink)' }} />
        <span className="block w-6 h-[2px]" style={{ background: 'var(--ink)' }} />
        <span className="block w-6 h-[2px]" style={{ background: 'var(--ink)' }} />
      </button>

      {open && (
        <ul
          className="absolute top-full left-0 right-0 flex flex-col gap-3 px-6 py-4 list-none border-b-[3px] z-50"
          style={{ backgroundColor: 'var(--paper)', borderColor: 'var(--ink)' }}
        >
          {links.map(l => (
            <li key={l}>
              <button
                onClick={() => scrollTo(l)}
                className="font-bebas text-[.85rem] tracking-[4px] bg-transparent border-none cursor-pointer"
                style={{ color: 'var(--ink)' }}
              >
                {l}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
