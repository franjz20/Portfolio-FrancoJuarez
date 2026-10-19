import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import Reveal from './Reveal'
import { socials } from '../data/content'
import { useLanguage } from '../hooks/useLanguage'

const SOCIAL_ICONS = { github: FiGithub, linkedin: FiLinkedin, mail: FiMail }

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="font-mono text-sm text-accent">05.</p>
          <h2 className="mt-2 text-3xl font-bold text-text sm:text-4xl">
            {t.contact.title}
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <p className="mt-6 text-lg leading-relaxed text-muted">{t.contact.text}</p>
        </Reveal>

        <Reveal delay={250}>
          <a
            href={`mailto:${t.contact.email}`}
            className="mt-9 inline-flex items-center gap-2 rounded-lg border border-accent/40 px-8 py-3.5 text-sm font-semibold text-accent transition-colors hover:bg-accent/10"
          >
            <FiMail size={18} />
            {t.contact.cta}
          </a>
        </Reveal>

        <Reveal delay={350}>
          <div className="mt-10 flex items-center justify-center gap-6">
            {socials.map(({ label, url, icon }) => {
              const Icon = SOCIAL_ICONS[icon]
              return (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-muted transition-all hover:-translate-y-1 hover:text-accent"
                >
                  {Icon && <Icon size={24} />}
                </a>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
