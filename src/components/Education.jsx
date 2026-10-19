import { FiAward, FiBookOpen } from 'react-icons/fi'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import { useLanguage } from '../hooks/useLanguage'

export default function Education() {
  const { t } = useLanguage()

  return (
    <section id="education" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <Reveal>
        <SectionTitle index="04" title={t.education.title} />
      </Reveal>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Educación formal — timeline */}
        <div>
          <Reveal>
            <h3 className="mb-6 flex items-center gap-2 font-mono text-sm tracking-wide text-accent uppercase">
              <FiBookOpen size={16} />
              {t.education.formalTitle}
            </h3>
          </Reveal>
          <ol className="relative space-y-8 border-l border-white/10 pl-8">
            {t.education.formal.map((item, i) => (
              <Reveal key={item.title} as="li" delay={i * 120} className="relative">
                <span className="absolute top-1.5 -left-[37px] h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-accent/15" />
                <p className="font-mono text-xs text-accent">{item.period}</p>
                <h4 className="mt-1 text-lg font-bold text-text">{item.title}</h4>
                <p className="text-sm text-muted">{item.institution}</p>
                {item.description && (
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                )}
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Cursos y certificaciones */}
        <div>
          <Reveal>
            <h3 className="mb-6 flex items-center gap-2 font-mono text-sm tracking-wide text-accent uppercase">
              <FiAward size={16} />
              {t.education.coursesTitle}
            </h3>
          </Reveal>
          <ul className="space-y-3">
            {t.education.courses.map((course, i) => (
              <Reveal key={course.title} as="li" delay={i * 100}>
                <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-card px-5 py-4 transition-colors hover:border-accent/30">
                  <div className="min-w-0">
                    <h4 className="truncate font-semibold text-text">{course.title}</h4>
                    <p className="text-sm text-muted">{course.platform}</p>
                  </div>
                  <span className="shrink-0 font-mono text-xs text-accent">
                    {course.year}
                  </span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
