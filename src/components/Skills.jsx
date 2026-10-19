import {
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiSharp,
  SiSpringboot,
  SiSupabase,
  SiTypescript,
} from 'react-icons/si'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import { skills } from '../data/content'
import { useLanguage } from '../hooks/useLanguage'

// `name` en content.js debe coincidir con una clave de este mapa.
// Si una tecnología no tiene icono, se muestra solo el nombre.
const ICONS = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  'Next.js': SiNextdotjs,
  Java: SiOpenjdk,
  'Spring Boot': SiSpringboot,
  'Node.js': SiNodedotjs,
  NestJS: SiNestjs,
  'C#': SiSharp,
  PHP: SiPhp,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Supabase: SiSupabase,
  Git: SiGit,
  GitHub: SiGithub,
}

const CATEGORY_ORDER = ['frontend', 'backend', 'database', 'tools']

export default function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <Reveal>
        <SectionTitle index="03" title={t.skillsSection.title} />
      </Reveal>

      <Reveal>
        <p className="mb-10 text-muted">{t.skillsSection.subtitle}</p>
      </Reveal>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {CATEGORY_ORDER.map((category, ci) => (
          <Reveal key={category} delay={ci * 120}>
            <div className="h-full rounded-2xl border border-white/10 bg-card p-6">
              <h3 className="mb-5 font-mono text-sm tracking-wide text-accent uppercase">
                {t.skillsSection.categories[category]}
              </h3>
              <ul className="space-y-2.5">
                {skills
                  .filter((s) => s.category === category)
                  .map(({ name }) => {
                    const Icon = ICONS[name]
                    return (
                      <li
                        key={name}
                        className="flex items-center gap-2.5 rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2.5 text-sm text-text transition-colors hover:border-accent/30 hover:text-accent"
                      >
                        {Icon && <Icon size={18} className="shrink-0" />}
                        <span className="truncate">{name}</span>
                      </li>
                    )
                  })}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
