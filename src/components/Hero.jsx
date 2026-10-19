import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { socials } from '../data/content'
import { useLanguage } from '../hooks/useLanguage'

const SOCIAL_ICONS = { github: FiGithub, linkedin: FiLinkedin, mail: FiMail }

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="top"
      className="mx-auto flex min-h-svh max-w-6xl items-center px-6 pt-24 pb-16"
    >
      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="animate-fade-up font-mono text-sm text-accent">
            {t.hero.greeting}
          </p>
          <h1
            className="animate-fade-up mt-4 text-5xl font-extrabold tracking-tight text-text sm:text-6xl lg:text-7xl"
            style={{ animationDelay: '100ms' }}
          >
            {t.hero.name}
          </h1>
          <h2
            className="animate-fade-up mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            style={{ animationDelay: '200ms' }}
          >
            <span className="text-gradient">{t.hero.role}</span>
          </h2>
          <p
            className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-muted"
            style={{ animationDelay: '300ms' }}
          >
            {t.hero.tagline}
          </p>

          <div
            className="animate-fade-up mt-9 flex flex-wrap items-center gap-4"
            style={{ animationDelay: '400ms' }}
          >
            <a
              href="#projects"
              className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
            >
              {t.hero.ctaProjects}
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-accent/40 px-6 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent/10"
            >
              {t.hero.ctaContact}
            </a>
          </div>

          <div
            className="animate-fade-up mt-10 flex items-center gap-5"
            style={{ animationDelay: '500ms' }}
          >
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
                  {Icon && <Icon size={22} />}
                </a>
              )
            })}
          </div>
        </div>

        <div
          className="animate-fade-up mx-auto w-56 sm:w-72 lg:w-full lg:max-w-sm"
          style={{ animationDelay: '300ms' }}
        >
          <div className="rounded-3xl bg-gradient-to-br from-accent to-accent-2 p-[3px]">
            <img
              src="/assets/FrancoJuarez.jpg"
              alt={t.about.photoAlt}
              className="w-full rounded-3xl bg-card object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
