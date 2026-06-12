import { projects } from '../data/projects'
import { Section } from './Section'

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Featured work">
      <div className="grid gap-4 lg:grid-cols-3">
        {projects
          .filter((project) => project.featured)
          .map((project) => (
            <article
              key={project.title}
              className="flex min-h-80 flex-col rounded-md border border-stone-200 bg-white p-6"
            >
              <p className="text-sm font-semibold uppercase text-teal-700">{project.type}</p>
              <h3 className="mt-3 text-xl font-semibold text-slate-950">{project.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{project.description}</p>
              <div className="mt-auto flex flex-wrap gap-2 pt-8">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-stone-200 px-3 py-1 text-xs font-semibold text-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-5 text-sm font-semibold text-slate-950">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-teal-700"
                >
                  Live
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-teal-700"
                >
                  Code
                </a>
              </div>
            </article>
          ))}
      </div>
    </Section>
  )
}
