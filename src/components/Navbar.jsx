import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { useLanguage } from '../hooks/useLanguage'

const SECTIONS = ['about', 'projects', 'skills', 'education', 'contact']

export default function Navbar() {
  const { lang, setLang, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const langToggle = (
    <div
      className="flex items-center rounded-full border border-white/10 p-0.5 text-xs font-mono"
      role="group"
      aria-label="Language / Idioma"
    >
      {['es', 'en'].map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
            lang === l ? 'bg-accent/15 text-accent' : 'text-muted hover:text-text'
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  )

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open
          ? 'border-b border-white/5 bg-background/85 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-lg font-semibold text-gradient"
          aria-label="Inicio / Home"
        >
          FJ
        </a>

        <div className="hidden items-center gap-7 md:flex">
          <ul className="flex items-center gap-7">
            {SECTIONS.map((id, i) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  <span className="mr-1 font-mono text-xs text-accent">0{i + 1}.</span>
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
          {langToggle}
        </div>

        <div className="flex items-center gap-3 md:hidden">
          {langToggle}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            className="p-1 text-text"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-white/5 bg-background/95 px-6 py-4 backdrop-blur-md md:hidden">
          {SECTIONS.map((id, i) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm text-muted transition-colors hover:text-accent"
              >
                <span className="mr-2 font-mono text-xs text-accent">0{i + 1}.</span>
                {t.nav[id]}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
