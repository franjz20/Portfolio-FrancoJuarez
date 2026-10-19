import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import { useLanguage } from '../hooks/useLanguage'

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <Reveal>
        <SectionTitle index="01" title={t.about.title} />
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
        <Reveal>
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            {t.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="rounded-2xl border border-white/10 bg-card p-6">
            <h3 className="mb-5 font-mono text-sm tracking-wide text-accent uppercase">
              {t.about.highlightsTitle}
            </h3>
            <dl className="space-y-4">
              {t.about.highlights.map(({ label, value }) => (
                <div key={label}>
                  <dt className="text-xs tracking-wide text-muted uppercase">{label}</dt>
                  <dd className="mt-1 font-medium text-text">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
