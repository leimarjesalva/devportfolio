export default function Footer() {
  return (
    <footer
      className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-6 py-5 md:px-10 flex-wrap"
      style={{ background: 'var(--ink)', color: 'var(--paper)' }}
    >
      <span className="font-fraktur text-[1.7rem]" style={{ color: 'var(--paper)' }}>Leimar Jesalva</span>

      <ul className="flex flex-wrap gap-5 list-none">
        <li>
          <a
            href="https://www.facebook.com/leiii2003"
            target="_blank"
            rel="noreferrer"
            className="font-bebas text-[.72rem] tracking-[3px] no-underline opacity-40 hover:opacity-100 transition-opacity"
            style={{ color: 'var(--paper)' }}
          >
            Facebook
          </a>
        </li>
      </ul>

      <p className="font-bebas text-[.65rem] tracking-[3px] opacity-30" style={{ color: 'var(--paper)' }}>
        © 2025 LEIMAR JESALVA — ALL RIGHTS RESERVED
      </p>
    </footer>
  )
}
