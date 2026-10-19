import { FiExternalLink, FiGithub } from 'react-icons/fi'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import { useLanguage } from '../hooks/useLanguage'

function ProjectCard({ project }) {
  const { t } = useLanguage()

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5">
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-text transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs text-accent"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center gap-4 border-t border-white/5 pt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
            >
              <FiGithub size={16} />
              {t.projects.viewCode}
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
            >
              <FiExternalLink size={16} />
              {t.projects.viewDemo}
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <Reveal>
        <SectionTitle index="02" title={t.projects.title} />
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {t.projects.items.map((project, i) => (
          <Reveal key={project.title} delay={i * 120}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
