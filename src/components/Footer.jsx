import { useLanguage } from '../hooks/useLanguage'

const YEAR = new Date().getFullYear()

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="font-mono text-xs text-muted">{t.footer.built}</p>
        <p className="mt-1 font-mono text-xs text-muted/60">© {YEAR}</p>
      </div>
    </footer>
  )
}
